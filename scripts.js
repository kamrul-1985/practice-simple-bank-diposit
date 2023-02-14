// matching email and passor

document.getElementById('submit-button').addEventListener('click',function(){
    const inputeEmail = document.getElementById('inpute-email').value;
    // const inputeEmail = inputesEmail.value;
    const inputePassord = document.getElementById('inpute-passord').value;
    // const inputepassord = inputesPassord.value;
    if(inputeEmail === 'baperbank@bap.com' && inputePassord === 'baperbank'){
    window.location.href='diposit.html';
    }
    else {
        alert('Email and passord is not matched!!!!');
    }

})