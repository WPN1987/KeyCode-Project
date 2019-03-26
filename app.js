document.addEventListener('keypress',()=> {
    document.getElementById('identifyKey').textContent = event.key;
    document.getElementById('identifyCode').textContent = event.code;
    document.getElementById('identifyWhich').textContent = event.which;
})
