
const switchFunction = () => {
    const Switch = document.getElementById('switch');
    const signIn = document.getElementById('signIn');
    const login = document.getElementById('login');

    Switch.addEventListener("click", function () {
        console.log('prout');

        if (signIn.classList.contains('hide')) {
            signIn.classList.remove('hide');
        } else {
            signIn.classList.add('hide');
        }

        if (login.classList.contains('hide')) {
            login.classList.remove('hide');
        } else {
            login.classList.add('hide');
        }
    });
}

switchFunction()