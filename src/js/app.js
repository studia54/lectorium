import Swiper, { Navigation, Pagination } from "swiper";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Fancybox } from "@fancyapps/ui";
import IMask from "imask";
gsap.registerPlugin(ScrollTrigger);

const phoneMaskInput = document.querySelector(".js-phone-input");

const masksOptions = {
	phone: {
		mask: "+{7} (000) 000-00-00",
	},
};

new IMask(phoneMaskInput, masksOptions.phone);

const backdrop = document.querySelector(".backdrop");
const header = document.querySelector(".header");
const headerScroll = document.querySelector(".header-scroll");
const popupSuccess = document.querySelector(".popup.success");
const popupContent = popupSuccess.querySelector(".popup-content");
const popupClose = popupSuccess.querySelector(".close");
const form = document.querySelector("#wpcf7-f8-o1");
const ring = document.querySelector(".ring");
const ringInner = ring.querySelector(".ring__inner");
const speakerRing = document.querySelector(".speaker-ring");
const qaRing = document.querySelector(".qa-ring");

new Swiper(".gallery__list", {
	modules: [Navigation, Pagination],
	slidesPerView: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".gallery__pagination",
		clickable: true,
		renderBullet: function (index, className) {
			return `<span class="${className}"></span>`;
		},
	},
	breakpoints: {
		768: {
			spaceBetween: 21,
			slidesPerView: 3,
		},
	},
});

const breakpoint = window.matchMedia("(min-width: 1024px)");
let mySwiper;

const breakpointChecker = function () {
	// if larger viewport and multi-row layout needed
	if (breakpoint.matches === true) {
		// clean up old instances and inline styles when available
		if (mySwiper !== undefined) mySwiper.destroy(true, true);
		// or/and do nothing
		return;
		// else if a small viewport and single column layout needed
	} else if (breakpoint.matches === false) {
		// fire small viewport version of swiper
		return enableSwiper();
	}
};

const enableSwiper = function () {
	mySwiper = new Swiper(".expectations__list", {
		modules: [Pagination],
		slidesPerView: 1,
		pagination: {
			el: ".expectations__pagination",
			clickable: true,
			renderBullet: function (index, className) {
				return `<span class="${className}"></span>`;
			},
		},
	});
};

breakpoint.addEventListener("change", breakpointChecker);
breakpointChecker();

const borderedObserver = new IntersectionObserver(
	(entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("shown");
				observer.unobserve(entry.target);
			}
		});
	},
	{
		rootMargin: "0px 0px -200px",
	}
);

document.querySelectorAll(".bordered").forEach((item) => borderedObserver.observe(item));

const questions = Array.from(document.querySelectorAll(".accordion__trigger"));
questions.forEach((item) => {
	item.addEventListener("click", () => {
		item.closest(".accordion__parent").classList.toggle("show");
	});
});

document.querySelector(".show__content-button").addEventListener("click", () => {
	document.querySelector(".show__content").classList.add("clicked");
	document.querySelector(".interview__list").classList.add("show");
});

const setBackdrop = () => {
	if (!backdrop.classList.contains("show")) {
		backdrop.classList.add("show");
	} else {
		backdrop.classList.add("hide");
		setTimeout(() => {
			backdrop.classList.remove("hide", "show");
		}, 300);
	}
};

document.querySelectorAll(".more-button").forEach((item) => {
	item.addEventListener("click", function () {
		item.closest(".mobile-menu").classList.toggle("show");
		setBackdrop();
	});
});

backdrop.addEventListener("click", function () {
	document.querySelectorAll(".mobile-menu").forEach((item) => {
		item.classList.remove("show");
	});
	setBackdrop();
});

document.querySelectorAll(".more-button-list-item").forEach((item) => {
	item.addEventListener("click", (e) => {
		document.querySelectorAll(".mobile-menu").forEach((item) => {
			item.classList.remove("show");
		});
		setBackdrop();
	});
});

document.querySelector(".button").addEventListener("click", function () {
	document.querySelectorAll(".mobile-menu").forEach((item) => {
		item.classList.remove("show");
	});
	backdrop.classList.add("hide");
	setTimeout(() => {
		backdrop.classList.remove("hide", "show");
	}, 300);
});

// form.addEventListener("wpcf7mailsent", () => {
// 	popupContent.classList.add("show");
// 	popupSuccess.classList.add("show");
// 	setBackdrop();
// });

popupClose.addEventListener("click", () => {
	popupContent.classList.add("hide");
	popupSuccess.classList.add("hide");
	setBackdrop();

	setTimeout(() => {
		popupContent.classList.remove("hide", "show");
		popupSuccess.classList.remove("hide", "show");
	}, 300);
});

window.addEventListener("scroll", () => {
	setTimeout(() => {
		const y = window.scrollY;
		if (window.matchMedia("(min-width:320px)").matches && window.matchMedia("(max-width:767px)").matches) {
			if (y >= 0 && y <= 100) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 54}px`;
				document.querySelector(".ring").style.top = `500px`;
				document.querySelector(".ring").style.width = `200px`;
				document.querySelector(".ring").style.height = `200px`;
			}
			if (y > 100 && y <= 700) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 254}px`;
				document.querySelector(".ring").style.top = `800px`;
				document.querySelector(".ring").style.width = `200px`;
				document.querySelector(".ring").style.height = `200px`;
				document.querySelector(".ring").style.opacity = `1`;
				document.querySelector(".ring").style.transform = `scale(1)`;
			}
			if (y > 700 && y <= 1000) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left}px`;
				document.querySelector(".ring").style.top = `1200px`;
				document.querySelector(".ring").style.width = `150px`;
				document.querySelector(".ring").style.height = `150px`;
			}
			if (y > 1000 && y <= 1600) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 100}px`;
				document.querySelector(".ring").style.top = `1700px`;
				document.querySelector(".ring").style.width = `250px`;
				document.querySelector(".ring").style.height = `250px`;
			}
			if (y > 1600 && y <= 2100) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 200}px`;
				document.querySelector(".ring").style.top = `2300px`;
				document.querySelector(".ring").style.width = `100px`;
				document.querySelector(".ring").style.height = `100px`;
			}
			if (y > 2100 && y <= 2400) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 100}px`;
				document.querySelector(".ring").style.top = `2800px`;
				document.querySelector(".ring").style.width = `300px`;
				document.querySelector(".ring").style.height = `300px`;
			}
			if (y > 2400 && y <= 2600) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 300}px`;
				document.querySelector(".ring").style.top = `3000px`;
				document.querySelector(".ring").style.width = `200px`;
				document.querySelector(".ring").style.height = `200px`;
			}
			if (y > 2600 && y <= 3100) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 100}px`;
				document.querySelector(".ring").style.top = `3500px`;
				document.querySelector(".ring").style.width = `250px`;
				document.querySelector(".ring").style.height = `250px`;
			}
			if (y > 3100 && y <= 3500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 320}px`;
				document.querySelector(".ring").style.top = `4100px`;
				document.querySelector(".ring").style.width = `150px`;
				document.querySelector(".ring").style.height = `150px`;
			}
			if (y > 3500 && y <= 4200) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 100}px`;
				document.querySelector(".ring").style.top = `4600px`;
				document.querySelector(".ring").style.width = `150px`;
				document.querySelector(".ring").style.height = `150px`;
			}
			if (y > 4200 && y <= 4500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 60}px`;
				document.querySelector(".ring").style.top = `5000px`;
				document.querySelector(".ring").style.width = `250px`;
				document.querySelector(".ring").style.height = `250px`;
			}
			if (y > 4500 && y <= 4800) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 60}px`;
				document.querySelector(".ring").style.top = `5400px`;
				document.querySelector(".ring").style.width = `150px`;
				document.querySelector(".ring").style.height = `150px`;
			}
			if (y > 4800 && y <= 5300) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 60}px`;
				document.querySelector(".ring").style.top = `5800px`;
				document.querySelector(".ring").style.width = `300px`;
				document.querySelector(".ring").style.height = `300px`;
			}
			if (y > 5300 && y <= 5800) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 170}px`;
				document.querySelector(".ring").style.top = `6300px`;
				document.querySelector(".ring").style.width = `100px`;
				document.querySelector(".ring").style.height = `100px`;
			}
			if (y > 5900 && y <= 6400) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 170}px`;
				document.querySelector(".ring").style.top = `6700px`;
				document.querySelector(".ring").style.width = `300px`;
				document.querySelector(".ring").style.height = `300px`;
			}
			if (y > 6400 && y <= 6900) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 270}px`;
				document.querySelector(".ring").style.top = `7100px`;
				document.querySelector(".ring").style.width = `250px`;
				document.querySelector(".ring").style.height = `250px`;
			}
			if (y > 6900 && y <= 7500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 70}px`;
				document.querySelector(".ring").style.top = `7500px`;
				document.querySelector(".ring").style.width = `150px`;
				document.querySelector(".ring").style.height = `150px`;
			}
			if (y > 7500 && y <= 8000) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 270}px`;
				document.querySelector(".ring").style.top = `8100px`;
				document.querySelector(".ring").style.width = `250px`;
				document.querySelector(".ring").style.height = `250px`;
			}
		}

		if (window.matchMedia("(min-width:1024px)").matches && window.matchMedia("(max-width:1439px)").matches) {
			if (y > 100 && y <= 500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 454}px`;
				document.querySelector(".ring").style.top = `195px`;
				document.querySelector(".ring").style.width = `810px`;
				document.querySelector(".ring").style.height = `810px`;
				document.querySelector(".ring").style.opacity = `1`;
				document.querySelector(".ring").style.transform = `scale(1)`;
			}
			if (y > 4700 && y <= 5700) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 150}px`;
				document.querySelector(".ring").style.top = `6000px`;
			}
			if (y > 5700 && y <= 6400) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 300}px`;
				document.querySelector(".ring").style.top = `6800px`;
			}
			if (y > 6400 && y <= 7200) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 700}px`;
				document.querySelector(".ring").style.top = `7500px`;
			}
			if (y > 7200 && y <= 7800) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 400}px`;
				document.querySelector(".ring").style.top = `8000px`;
			}
			if (y > 7800 && y <= 8600) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 500}px`;
				document.querySelector(".ring").style.top = `8400px`;
			}
			if (y > 8600 && y <= 9200) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 700}px`;
				document.querySelector(".ring").style.top = `9000px`;
			}
		}

		if (window.matchMedia("(min-width:1440px)").matches) {
			if (y >= 0 && y <= 100) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 554}px`;
				document.querySelector(".ring").style.top = `-95px`;
				document.querySelector(".ring").style.width = `810px`;
				document.querySelector(".ring").style.height = `810px`;
			}
			if (y > 100 && y <= 500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 954}px`;
				document.querySelector(".ring").style.top = `195px`;
				document.querySelector(".ring").style.width = `810px`;
				document.querySelector(".ring").style.height = `810px`;
			}
			if (y > 500 && y <= 900) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left}px`;
				document.querySelector(".ring").style.top = `695px`;
				document.querySelector(".ring").style.width = `521px`;
				document.querySelector(".ring").style.height = `521px`;
			}
			if (y > 900 && y <= 1500) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left - 100}px`;
				document.querySelector(".ring").style.top = `1195px`;
				document.querySelector(".ring").style.width = `325px`;
				document.querySelector(".ring").style.height = `325px`;
			}
			if (y > 1500 && y <= 1800) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 300}px`;
				document.querySelector(".ring").style.top = `1495px`;
				document.querySelector(".ring").style.width = `573px`;
				document.querySelector(".ring").style.height = `573px`;
			}
			if (y > 1800 && y <= 2200) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 900}px`;
				document.querySelector(".ring").style.top = `1895px`;
				document.querySelector(".ring").style.width = `533px`;
				document.querySelector(".ring").style.height = `533px`;
			}
			if (y > 2200 && y <= 2600) {
				document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 100}px`;
				document.querySelector(".ring").style.top = `3000px`;
				document.querySelector(".ring").style.width = `391px`;
				document.querySelector(".ring").style.height = `391px`;
				document.querySelector(".speaker-ring").classList.remove("show");
				document.querySelector(".speaker-ring").style.width = `780px`;
				document.querySelector(".speaker-ring").style.height = `780px`;
				document.querySelector(".speaker-ring").style.top = `-900px`;
			}
			// if (y > 2600 && y <= 4800) {
			// 	document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 250}px`;
			// 	document.querySelector(".ring").style.top = `3895px`;
			// 	document.querySelector(".ring").style.width = `569px`;
			// 	document.querySelector(".ring").style.height = `569px`;
			// 	document.querySelector(".ring").style.opacity = `1`;
			// }
			if (y > 4600 && y <= 5300) {
				document.querySelector(".speaker-ring").classList.add("show");
				document.querySelector(".speaker-ring").style.width = `780px`;
				document.querySelector(".speaker-ring").style.height = `780px`;
				document.querySelector(".speaker-ring").style.top = `-28px`;
				document.querySelector(".speaker-ring").style.left = `-76px`;
			}
			if (y > 5300 && y <= 5800) {
				document.querySelector(".speaker-ring").style.top = `1600px`;
				document.querySelector(".speaker-ring").style.left = `-76px`;
				document.querySelector(".speaker-ring").style.width = `780px`;
				document.querySelector(".speaker-ring").style.height = `780px`;
			}
			if (y > 7300 && y <= 7700) {
				document.querySelector(".speaker-ring").style.top = `2600px`;
				document.querySelector(".speaker-ring").style.left = `800px`;
				document.querySelector(".speaker-ring").style.width = `480px`;
				document.querySelector(".speaker-ring").style.height = `480px`;
			}
			if (y > 8200 && y <= 8600) {
				document.querySelector(".speaker-ring").style.top = `3300px`;
				document.querySelector(".speaker-ring").style.left = `1000px`;
				document.querySelector(".speaker-ring").style.width = `480px`;
				document.querySelector(".speaker-ring").style.height = `480px`;
			}
		}
	}, 300);
});

document.addEventListener("DOMContentLoaded", () => {
	if (window.matchMedia("(min-width:320px)").matches) {
		document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 54}px`;
		document.querySelector(".ring").style.opacity = `1`;
		document.querySelector(".ring").style.transform = `scale(1)`;
	}
	if (window.matchMedia("(min-width:1360px)").matches) {
		document.querySelector(".ring").style.left = `${document.querySelector(".first-screen .content").getBoundingClientRect().left + 554}px`;
		document.querySelector(".ring").style.opacity = `1`;
		document.querySelector(".ring").style.transform = `scale(1)`;
	}
});
