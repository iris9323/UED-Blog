$(function() {
    // check form
    checkForm()

    // check form
    function checkForm() {
        // get button
        let $btn = $(".content-login .btn")

        // run plugin
        $btn.click(function() {
            // get dom and text
            let $tel = $(".tel"),
                $password = $(".password"),
                telText = $.trim($tel.val()),
                passwordText = $.trim($password.val())

            // check
            if (telText === "") {
                alert("电话不能为空")
                return
            } else if (passwordText === "") {
                alert("密码不能为空")
                return
            } else {
                telText = ""
                passwordText = ""
            }
        })



    }
})