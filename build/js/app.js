const button = document.querySelector(".share");
const infoContainer = document.querySelector(
  ".lower-section"
);
const avatarField = document.querySelector(
  ".avatar-field"
);
const socialIcons = document.querySelector(
  ".social-icons"
);
let isClick = false;

button.addEventListener("click", function (e) {
  e.preventDefault;
  if (!isClick) {
    infoContainer.classList.add("active");
    avatarField.classList.add("hidden");
    socialIcons.classList.remove("hidden");
    button.classList.add("active");
    isClick = true;
  } else {
    infoContainer.classList.remove("active");
    avatarField.classList.remove("hidden");
    socialIcons.classList.add("hidden");
    button.classList.remove("active");
    isClick = false;
  }
  console.log(button);
});
