document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-input');
    const email = emailField.value;

    const passwordField = document.getElementById('paasword-input');
    const password = passwordField.value;
    if (email === 'marji@gmail.com' && password === 'marji12345'){
        window.location.href = 'bank.html';
    }
    else {
        
     alert('you are wrong persone')
    }
})