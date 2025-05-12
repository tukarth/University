document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert("Login realizado com sucesso!");
        })
        .catch((error) => {
            alert("Erro ao fazer login: " + error.message);
        });
});
