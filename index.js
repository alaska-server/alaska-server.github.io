function checkPassword() {
    const passwordInput = document.getElementById("password");
    const correctPassword = "B20A10P";
    const linkContainer = document.getElementById("linkContainer");

    if (passwordInput.value === correctPassword) {
      linkContainer.innerHTML = '<a href="security.html">Correct Password.<br>Click To Security Two.</a>';
    } else {
      linkContainer.innerHTML = 'Incorrect Pasword.';
    }
  }