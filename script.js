/* Mobile Menu */
const btnMenu = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav-mobile__item');

btnMenu.addEventListener('click', () => {
	btnMenu.classList.toggle('hamburger--is-open');
	navItems[0].style.transform = 'translate(-100px, 0)';
	navItems[1].style.transform = 'translate(-50px, -65px)';
	navItems[1].style.transitionDelay = '.3s';
	navItems[2].style.transform = 'translate(50px, -65px)';
	navItems[2].style.transitionDelay = '.6s';
	navItems[3].style.transform = 'translate(100px, 0) scale(1)';
	navItems[3].style.transitionDelay = '.9s';

	if (!btnMenu.classList.contains('hamburger--is-open')) {
		navItems.forEach(item => {
			item.style.transform = 'translate(0) scale(0.6)';
		})
	}
});

/* Slider */
const slider = document.querySelector('.slider');
const sliderImg = ['img/slider-bg1.jpg', 'img/slider-bg2.jpg', 'img/slider-bg3.jpg'];

const sliderH1 = document.querySelector('.slider__slogan');
const sliderSlogans = ['See the world through my lens.', 'Ready. Set. Wow!', 'The leader in wireless photography.'];

let counter = 0;
const sliderAnimation = () => {
	if (counter == sliderImg.length) {
		counter = 0;
	}
	sliderH1.textContent = sliderSlogans[counter];
	slider.style.background = `linear-gradient(rgba(112, 66, 20, 0.5),
	rgba(38, 20, 2, 0.5)), url('${sliderImg[counter]}')`;
	slider.style.backgroundSize = 'cover';
	slider.style.backgroundPosition = 'center';
	counter++;
}
setInterval(sliderAnimation, 5000);

/* Smooth scroll */
const desktopLinks = document.querySelectorAll('.desktop-nav__link');
const mobileLinks = document.querySelectorAll('.nav-mobile__item');
const desktopNav = document.querySelector('.desktop-nav');

const scrollMenu = (event) => {
	event.preventDefault();
	atrLink = event.target.getAttribute('data-link');
	sectionData = document.querySelector(`[data-section=${atrLink}]`);

	window.scrollTo({
		top: sectionData.offsetTop - desktopNav.offsetHeight,
		behavior: 'smooth'
	});
}

desktopLinks.forEach(link => {
	link.addEventListener('click', scrollMenu);
})

mobileLinks.forEach(link => {
	link.addEventListener('click', scrollMenu);
})

/* Arrow Up */
const arrowUp = document.querySelector('.footer__arrow-up');

arrowUp.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
})

/* Observery */

const options = {
	root: null,
	rootMargin: '0px',
	threshold: [0, 0.25, 0.5, 0.75, 1]
}

/* Headings */
const headings = document.querySelectorAll('.heading');

const showHeadings = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('heading--show')
		}
	})
}, options);

headings.forEach(heading => {
	showHeadings.observe(heading);
});

/* Icons */
const icons = document.querySelectorAll('.icons__item');

const bounce = new IntersectionObserver(entries => {

	let delay = 0;
	icons.forEach(icon => {
		icon.style.animationDelay = `${delay}s`;
		delay += .5;
	})

	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('icons__item--test');
		}

	})
}, options)

icons.forEach(icon => {
	bounce.observe(icon);
})

/* Buttons */
const btns = document.querySelectorAll('.btn');

const jello = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('btn--jello-anim');
		}
	})
}, options)

btns.forEach(btn => {
	jello.observe(btn);
})

/* Photos */
const photos = document.querySelectorAll('.works__item');

const wobble = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0.5) {
			entry.target.classList.add('works__item--wobble-anim');
		}
	})
}, options)

photos.forEach(photo => {
	wobble.observe(photo);
})

/* Form */
const forms = document.querySelectorAll('.contact__input');

const scaleUp = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.intersectionRatio > 0) {
			entry.target.classList.add('contact__input--scale-up');
		}
	})
}, options)

forms.forEach(form => {
	scaleUp.observe(form);
})