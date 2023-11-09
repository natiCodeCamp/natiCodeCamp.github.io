function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

document.getElementById('clickable').addEventListener('click',function(event){
    var value =document.getElementById('input')
    var errorText =document.getElementById('error')
    var page1 = document.getElementById('first')
    var page2 = document.getElementById('second')
    var message =document.getElementById('message')

    if(value.value == "" || !validateEmail(value.value)){
        value.classList.add('red')
        errorText.classList.remove('d-none')
        console.log('red')
    }else{
        value.classList.remove('red')
        errorText.classList.add('d-none')
        page1.classList.add('d-none')
        page2.classList.remove('d-none')
        message.innerHTML = `<p> A confirmation email has been sent to <strong>${value.value}</strong>. please open it and click the button inside to confirm your subscription </p>`
    }
})
