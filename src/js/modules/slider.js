const slider = (slide, wrapper) => {
    const slides = document.querySelectorAll(slide),
            slider = document.querySelector(wrapper);

    let slideIndex = 1,
        paused = true;  
    
    function showSlide(n) {
        if (n > slides.length) {
            slideIndex = 1;
        } 
        if (n == 1) {
            slideIndex = slides.length;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        });

        slides[slideIndex - 1].style.display = 'block';

    }

    showSlide(slideIndex);

    function plusSlide(n) {
        showSlide(slideIndex += n);
    }

    function animationSlide() {
        paused = setInterval(function() {
            plusSlide(1);
            slides[slideIndex - 1].classList.add('slideInRight');
        }, 6000);
    }

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        animationSlide();
    });

    slider.style.position = 'relative';

    const ind = document.createElement('ol');
    ind.classList.add('car-indicators');
    slider.append(ind);

    const dots = [];

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        ind.append(dot);
        if (i == 0) {
            dot.style.opacity = 1;
        }

        dots.push(dot);
    }

    function dotSlider(n) {
        dots.forEach(dot => dot.style.opacity = '.5');
        dots[slideIndex - 1].style.opacity = 1;
    }

    dots.forEach(item => {
        item.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            showSlide(slideIndex);
            dotSlider(slideIndex);
        });
    });
}

export default slider;