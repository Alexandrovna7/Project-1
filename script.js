function Is18 () {
    let age = prompt('Сколько вам лет?');
    if (age >= 18) {
        window.location.href = 'file:///C:/Users/user11/Desktop/%D0%A2%D0%95%D0%A1%D0%A2%D0%9E%D0%92%D0%9E%D0%95/GAME/index.html#watch-menu';
    } else {
        alert('goodbye');
        window.location.href = 'https://chromewebstore.google.com/';
    }
}

Is18();



    function setCookie(name, value, days) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    function checkCookies() {
        let cookieNote = document.getElementById('cookie_note');
        let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

        if (!getCookie('cookies_policy')) {
            cookieNote.classList.add('show');
        }

        cookieBtnAccept.addEventListener('click', function () {
            setCookie('cookies_policy', 'true', 365);
            cookieNote.classList.remove('show');
        });
    }

    checkCookies();
    