// tab toggle
function tabToggle(el, cn) {
    el.click(function() {
        $(this).addClass(cn)
            .siblings()
            .removeClass(cn)
            .parent()
            .next()
            .children()
            .eq($(this).index())
            .fadeIn("normal", "linear")
            .siblings()
            .fadeOut("normal", "linear")
    })
}