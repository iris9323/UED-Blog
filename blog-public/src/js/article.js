$(function() {
    // get bottom
    setBottom()

    // tab toggle
    tabToggle($(".content-tab li"), "content-tab-active")

    // border slide
    borderSlide()

    // back to top
    backTop($(".glyphicon-menu-up"))

    // get bottom
    function setBottom() {
        let detail = $(".article-detail")
        console.log(detail)
        let h = detail.outerHeight() + 20
        console.log(-h + "px")
        detail.css("bottom", -h + "px")
    }
})