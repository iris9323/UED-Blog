$(function() {

    // tab toggle
    tabToggle()

    // tab toggle
    function tabToggle() {
        $(".jobs li").click(function() {
            $(this).addClass("current")
                .siblings()
                .removeClass("current")
                .parent()
                .next()
                .children()
                .eq($(this)
                .index()).show()
                .siblings().hide()
        })
    }

})