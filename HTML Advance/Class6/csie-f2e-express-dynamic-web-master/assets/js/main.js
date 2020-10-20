function finalizeFrontEndLogin(response) {
    // TODO: 處理登入成功後的流程
    // 取得idToken
    // https://firebase.google.com/docs/reference/js/firebase.User#getidtoken
    response.user.getIdToken()
    .then(idToken =>{
        console.log("[idToken]", idToken);
    })

}

// 登入表單送出時
$('#loginForm').submit(function (event) {
    event.preventDefault();
    const email = $('#loginEmail').val(),
        password = $('#loginPassword').val();
    console.log('[開始登入]', { email: email, password: password });
    // TODO: 處理登入流程
    // https://firebase.google.com/docs/auth/web/start#sign_in_existing_users
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(function (response) {
            console.log('[登入成功]', response);
            finalizeFrontEndLogin(response)
        })
        .catch(function (error) {
            console.log('[登入失敗]', error);
            const code = error.code;
            let msg = '登入失敗';
            if(code == "auth/wrong-password")
            {
                msg = "wrong password!";
            }
            else if(code = "auth/user-not-found"){
                msg = "the email doesn't exist";
            }
            alert(msg);
        });
});

// 註冊表單送出時
$('#signUpForm').submit(function (event) {
    event.preventDefault();
    const email = $('#signUpEmail').val(),
        password = $('#signUpPassword').val();
    console.log('[開始註冊]', { email: email, password: password });
    // TODO: 處理註冊流程
    // https://firebase.google.com/docs/auth/web/start#sign_up_new_users
    // firebase
    //     .auth()
    //     .createUserWithEmailAndPassword(email, password)
    //     .then(function (response) {
    //         console.log('[註冊成功]', response);
    //         finalizeFrontEndLogin(response)
    //     })
    //     .catch(function (error) {
    //         console.log('[註冊失敗]', error);
    //         alert('註冊失敗');
    //     });
});

// 登出按鈕點擊時
$('#logoutBtn').click(function () {
    console.log('[開始登出]');
    // TODO: 處理登出流程
    // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#signout
    // firebase
    //     .auth()
    //     .signOut()
    //     .then(function () {
    //         console.log('[登出成功]');
    //         axios.post('/api/logout', {})
    //             .then(function () {
    //                 window.location = '/'
    //             })
    //             .catch(function () {
    //                 window.location = '/'
    //             });
    //     })
    //     .catch(function (error) {
    //         console.log('[登出失敗]', error);
    //         window.location = '/'
    //     });
});