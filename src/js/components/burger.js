const menu = document.querySelector("#navigation");
const navigationContent = document.querySelector(".navigation__content");
const body = document.querySelector("body");

const open = function () {
	if (this.checked) {
		menu.classList.add("is-open");
		navigationContent.classList.add("is-open");
		body.style.overflow = "hidden";
	} else if (menu.classList.contains("is-open") && this.checked === false) {
		menu.classList.add("is-closing");
		navigationContent.classList.add("is-closing");

		let timerId = setTimeout(close, 500);

		function close() {
			menu.classList.remove("is-open");
			menu.classList.remove("is-closing");

			navigationContent.classList.remove("is-open");
			navigationContent.classList.remove("is-closing");
			body.style.overflow = "auto";
		}
	}
};

export default open;
