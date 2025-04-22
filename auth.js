
// تسجيل الدخول
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "home.html";
        })
        .catch((error) => {
            alert("خطأ في تسجيل الدخول: " + error.message);
        });
});

// إنشاء حساب
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = "home.html";
        })
        .catch((error) => {
            alert("خطأ في إنشاء الحساب: " + error.message);
        });
});

// تسجيل الخروج
const logoutBtn = document.getElementById("logout-btn");
logoutBtn.addEventListener("click", () => {
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    });
});
    