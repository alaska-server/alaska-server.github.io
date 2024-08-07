function checkPassword() {
    const passwordInput = document.getElementById("password");
    const correctPassword = "B20A10P";
    const linkContainer = document.getElementById("linkContainer");

    if (passwordInput.value === correctPassword) {
      linkContainer.innerHTML = '<a href="Log.html">Correct Password.<br>Click to access.</a>';
    } else {
      linkContainer.innerHTML = 'Incorrect Pasword.';
    }
  }
