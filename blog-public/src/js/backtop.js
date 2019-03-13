// back to top
function backTop(ele) {
    ele.on("click", () => {
        $("html,body").animate({ scrollTop: 0 }, "slow", "swing")
        return false
    })
}