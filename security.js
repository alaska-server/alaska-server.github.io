function checkPassword() {
    const passwordInput = document.getElementById("password");
    const correctPassword = "GRAFFITI";
    const linkContainer = document.getElementById("linkContainer");

    if (passwordInput.value === correctPassword) {
      linkContainer.innerHTML = '<a href="Log.html">Correct Password.<br>Click To Access.</a>';
    } else {
      linkContainer.innerHTML = 'Incorrect Pasword.';
    }
  }