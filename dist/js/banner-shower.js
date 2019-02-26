"use strict";var timeout=function(){function h(t,i,n){this.start=Date.now(),this.context=n,this.delay=i,this.func=t,this._tick=this._tick.bind(this),this.kill=this.kill.bind(this),this.id=requestAnimationFrame(this._tick)}return h.prototype.kill=function(){cancelAnimationFrame(this.id),this.context=null,this.func=null,this.id=null},h.prototype.fire=function(){this.func.call(this.context),this.kill()},h.prototype._tick=function(){Date.now()-this.start>=this.delay?(this.func.call(this.context),this.kill()):this.id=requestAnimationFrame(this._tick)},function(t,i,n){return new h(t,i,n)}}();function random(t,i){return null==i&&(i=t,t=0),t+Math.floor(Math.random()*(i-t+1))}function Stars(t,i,n,h){this.ctx=t,this.width=i,this.height=n,this.stars=this.getStars(h)}function Meteor(t,i,n){this.ctx=t,this.x=i,this.y=0,this.h=n,this.vx=-(4+4*Math.random()),this.vy=-this.vx,this.len=random(100,500)}Stars.prototype={constructor:Stars,getStars:function(t){for(var i=[];t--;)i.push({x:Math.random()*this.width,y:Math.random()*this.height,r:Math.random()+.2});return i},draw:function(){var i=this.ctx;i.save(),i.fillStyle="white",this.stars.forEach(function(t){i.beginPath(),i.arc(t.x,t.y,t.r,0,2*Math.PI),i.fill()}),i.restore()},blink:function(){this.stars=this.stars.map(function(t){var i=.5<Math.random()?1:-1;return t.r+=.2*i,t.r<0?t.r=-t.r:1<t.r&&(t.r-=.2),t})}},Meteor.prototype={constructor:Meteor,flow:function(){return!(this.x<-this.len||this.y>this.h+this.len)&&(this.x+=this.vx,this.y+=this.vy,!0)},draw:function(){var t=this.ctx,i=t.createRadialGradient(this.x,this.y,0,this.x,this.y,this.len),n=Math.PI;i.addColorStop(0,"rgba(255,255,255,1)"),i.addColorStop(1,"rgba(0,0,0,0)"),t.save(),t.fillStyle=i,t.beginPath(),t.arc(this.x,this.y,400<this.len?1:.5,n/4,5*n/4),t.lineTo(this.x+this.len,this.y-this.len),t.closePath(),t.fill(),t.restore()}};var canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d"),width=window.innerWidth,height=window.innerHeight,stars=new Stars(ctx,width,height,200),meteors=[],count=0;canvas.width=width,canvas.height=height;var meteorGenerator=function t(){var i=Math.random()*width+500;meteors.push(new Meteor(ctx,i,height)),timeout(function(){t()},random(100,2e3))},frame=function t(){++count%10==0&&stars.blink(),ctx.clearRect(0,0,width,height),stars.draw(),meteors.forEach(function(t,i,n){t.flow()?t.draw():n.splice(i,1)}),requestAnimationFrame(t)};requestAnimationFrame&&(meteorGenerator(),frame());