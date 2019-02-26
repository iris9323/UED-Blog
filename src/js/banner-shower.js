var timeout = (function() {
    // Ticker class
    function Ticker(fn, del, ctx) {
        this.start = Date.now();
        this.context = ctx
        this.delay = del
        this.func = fn

        this._tick = this._tick.bind(this)
        this.kill = this.kill.bind(this)

        this.id = requestAnimationFrame(this._tick)
    }
    Ticker.prototype.kill = function() {
        cancelAnimationFrame(this.id)

        this.context = null;
        this.func = null;
        this.id = null;
    }

    Ticker.prototype.fire = function() {
        this.func.call(this.context);
        this.kill();
    }

    Ticker.prototype._tick = function() {
        if ((Date.now() - this.start) >= this.delay) {
            this.func.call(this.context)
            this.kill()
        } else {
            this.id = requestAnimationFrame(this._tick)
        }
    }

    return function(fn, del, ctx) {
        return new Ticker(fn, del, ctx)
    }
})()


function random(min, max) {
    if (max == null) {
        max = min
        min = 0
    }
    return min + Math.floor(Math.random() * (max - min + 1))
}


// Stars class
function Stars(ctx, width, height, amount) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.stars = this.getStars(amount)
}

Stars.prototype = {
    constructor: Stars,
    getStars: function(amount) {
        let stars = []
        while (amount--) {
            stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                r: Math.random() + 0.2
            })
        }
        return stars
    },
    // init star
    draw: function() {
        let ctx = this.ctx
        ctx.save()
        ctx.fillStyle = 'white'
        this.stars.forEach(star => {
            ctx.beginPath()
            ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
            ctx.fill()
        })
        ctx.restore()
    },

    // star blink
    blink: function() {
        this.stars = this.stars.map(star => {
            let sign = Math.random() > 0.5 ? 1 : -1
            star.r += sign * 0.2
            if (star.r < 0) {
                star.r = -star.r
            } else if (star.r > 1) {
                star.r -= 0.2
            }
            return star
        })

    }
}

// Meteor class
function Meteor(ctx, x, h) {
    this.ctx = ctx
    this.x = x
    this.y = 0
    this.h = h
    this.vx = -(4 + Math.random() * 4)
    this.vy = -this.vx
    this.len = random(100, 500)
}

Meteor.prototype = {
    constructor: Meteor,
    flow: function() {

        if (this.x < -this.len || this.y > this.h + this.len) {
            return false
        }
        this.x += this.vx
        this.y += this.vy
        return true
    },

    draw: function() {
        let ctx = this.ctx,
            gra = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.len)

        const PI = Math.PI
        gra.addColorStop(0, 'rgba(255,255,255,1)')
        gra.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.save()
        ctx.fillStyle = gra
        ctx.beginPath()

        ctx.arc(this.x, this.y, this.len > 400 ? 1 : .5, PI / 4, 5 * PI / 4)

        ctx.lineTo(this.x + this.len, this.y - this.len)
        ctx.closePath()
        ctx.fill()
        ctx.restore()
    }

}

// init canvas
let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = window.innerWidth,
    height = window.innerHeight,
    stars = new Stars(ctx, width, height, 200),
    meteors = [],
    count = 0

canvas.width = width
canvas.height = height

const meteorGenerator = () => {
    let x = Math.random() * width + 500
    meteors.push(new Meteor(ctx, x, height))

    timeout(() => {
        meteorGenerator()
    }, random(100, 2000))
}


const frame = () => {
    count++
    count % 10 == 0 && stars.blink()
    ctx.clearRect(0, 0, width, height)

    stars.draw()

    meteors.forEach((meteor, index, arr) => {
        if (meteor.flow()) {
            meteor.draw()
        } else {
            arr.splice(index, 1)
        }
    })
    requestAnimationFrame(frame)
}

if (requestAnimationFrame) {
    meteorGenerator()
    frame()
}