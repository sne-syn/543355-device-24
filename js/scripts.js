var link = document.querySelector(".contacts__btn");
var popup = document.querySelector(".modal__contact");
var close = popup.querySelector(".modal__close");
var form = popup.querySelector("form");
var user = popup.querySelector("[name=user]");
var email = popup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");

  if (storage) {
    user.value = storage;
    email.focus();
  } else {
    user.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  popup.classList.remove("modal__error");
});

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!user.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user", user.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    }
  }
});

var mapLink = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".modal__map");
var mapClose = mapPopup.querySelector(".modal__close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal__show");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal__show")) {
      mapPopup.classList.remove("modal__show");
    }
  }
});
