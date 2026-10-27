const signupModal = document.getElementById("signup-modal");
const signinModal = document.getElementById("signin-modal");
const signupBtn = document.getElementById("signup");
const signupBtn1 = document.querySelector("#signup_button");
const signinBtn = document.getElementById("signin");
const alreadyHaveAccountLink = document.getElementById("already-have-account");
const closeButtons = document.querySelectorAll(".close");
const passwordInput = document.getElementById("password-input");
const showPasswordIcon = document.getElementById("see");
const hidePasswordIcon = document.getElementById("unsee");

function openModal(modal) {
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(modal) {
  if (modal) {
    modal.style.display = "none";
  }
}

if (signupBtn) {
  signupBtn.addEventListener("click", () => openModal(signupModal));
}

if (signupBtn1) {
  signupBtn1.addEventListener("click", () => openModal(signupModal));
}

if (signinBtn) {
  signinBtn.addEventListener("click", () => openModal(signinModal));
}

if (alreadyHaveAccountLink) {
  alreadyHaveAccountLink.addEventListener("click", (event) => {
    event.preventDefault();
    closeModal(signupModal);
    openModal(signinModal);
  });
}

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

window.addEventListener("click", (event) => {
  if (event.target === signupModal) {
    closeModal(signupModal);
  }

  if (event.target === signinModal) {
    closeModal(signinModal);
  }
});

if (showPasswordIcon && hidePasswordIcon && passwordInput) {
  showPasswordIcon.addEventListener("click", () => {
    passwordInput.type = "text";
    showPasswordIcon.classList.add("hidden");
    hidePasswordIcon.classList.remove("hidden");
  });

  hidePasswordIcon.addEventListener("click", () => {
    passwordInput.type = "password";
    hidePasswordIcon.classList.add("hidden");
    showPasswordIcon.classList.remove("hidden");
  });
}

