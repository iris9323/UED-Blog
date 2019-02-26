$(function() {
    // back to top
    backTop($(".glyphicon-menu-up"))

    // comment
    comment()

    // comment
    function comment() {
        $(".post-comment button").click(function(e) {
            let el = e || window.event,
                comment = $.trim($(".post-comment textarea").val()),
                name = $.trim($(".post-comment input").val())


            if (comment === "") {
                alert("请输入评论")
            } else if (name === "") {
                alert("请输入姓名")
            } else {
                let currentDate = new Date(),
                    year = currentDate.getFullYear(),
                    oldMonth = currentDate.getMonth() + 1,
                    newMonth = oldMonth < 10 ? "0" + oldMonth : oldMonth,
                    oldDate = currentDate.getDate(),
                    newDate = oldDate < 10 ? "0" + oldDate : oldDate,
                    oldHour = currentDate.getHours(),
                    newHour = oldHour < 10 ? "0" + oldHour : oldHour,
                    oldMinute = currentDate.getMinutes(),
                    newMinute = oldMinute < 10 ? "0" + oldMinute : oldMinute

                // splice string 
                str = `<div class="media">
                    <div class="media-left">
                        <a href="#">
                            <img class="media-object" src="./images/touxiang.png" alt="avatar" width="22">
                        </a>
                    </div>
                    <div class="media-body">
                        <h4 class="media-heading h5">${name} / ${year}-${newMonth}-${newDate} / ${newHour}:${newMinute}</h4>
                        <p class="h5">${comment}</p>
                    </div>
                </div>`

                $(".comment-title").after($(str))
                // clean text
                $(".post-comment textarea").val("")
                $(".post-comment input").val("")
            }


            el.preventDefault()
        })
    }
})