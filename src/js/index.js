$(function() {
    // show public-header
    showPh()

    // tab toggle
    tabToggle($(".content-tab li"), "content-current")

    // border slide
    borderSlide();

    // back to top
    backTop($(".btn-back-top"))

    // show public-header
    function showPh() {
        let $nav = $(".public-header .navbar")
        $(window).on("scroll", () => {
            if ($(document).scrollTop() > ($(".banner").height() - $nav.height())) {
                $nav.css({
                    "background-image": "linear-gradient(330deg, #6f18d7, #4962dc)",
                    "opacity": .9
                })
            } else {
                $nav.css("background", "transparent")
            }
        })
    }
})