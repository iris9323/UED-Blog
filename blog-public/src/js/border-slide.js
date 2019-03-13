// border slide
function borderSlide() {
    $(".thumbnail").on("mouseenter", function() {
        $(this).find(".thumbnail-bottom,.thumbnail-top,.thumbnail-left,.thumbnail-right").stop(true)


        $(this).find(".thumbnail-bottom,.thumbnail-top").animate({
            width: $(this).width()
        }, 400, "swing")

        $(this).find(".thumbnail-left,.thumbnail-right").animate({
            height: $(this).height()
        }, 400, "swing")

        $(this).on("mouseleave", function() {
            $(this).find(".thumbnail-bottom,.thumbnail-top,.thumbnail-left,.thumbnail-right").stop(true)
            $(this).find(".thumbnail-bottom,.thumbnail-top").animate({
                width: 0
            }, 400, "swing")

            $(this).find(".thumbnail-left,.thumbnail-right").animate({
                height: 0
            }, 400, "swing")
        })

    })
}