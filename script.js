var input = document.querySelectorAll('input')

input.forEach(inpt => {

    inpt.addEventListener('invalid', (e) => {
        let patternf = /first/i
        let patterns = /second/i
        let pattern2 = /email/i
        let pattern3 = /phone/i
        let pattern4 = /password/i
        e.target.setCustomValidity("");
        if (!e.target.validity.valid) {
            if (patternf.test(e.target.id)) {
                e.target.setCustomValidity('Enter a valid name like "Zakaria"')
            } else if (patterns.test(e.target.id)) {
                e.target.setCustomValidity('Enter a valid name like "laster"')
            } else if (pattern2.test(e.target.id)) {
                e.target.setCustomValidity('Enter a valid email like "example@oop.com"')
            } else if (pattern3.test(e.target.id)) {
                e.target.setCustomValidity('Enter a valid phone number like "5555-4444"')
            } else if (pattern4.test(e.target.id)) {
                e.target.setCustomValidity('Make your password longer')
            }
        }
    })
})


var password = document.getElementById('password')
var Copassword = document.getElementById('confirmPassword')
Copassword.onchange = () => {
    let firstpw = password.value;
    let secondpw = Copassword.value
    let check = document.querySelectorAll('#spec')
    if (firstpw !== secondpw) {
        let span = document.createElement('span')
        span.setAttribute('id', 'spec')

        if (check.length === 0) {
            span.textContent = 'Password does not match the other one '
            span.style.color = 'red'
            password.parentNode.appendChild(span)
            Copassword.parentNode.appendChild(span.cloneNode(true))
        }
    } else {
        if (check.length > 0) {
            check.forEach((elm) => {
                elm.remove()
            })
        }
    }
}

