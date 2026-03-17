const swiper = new Swiper('.hero-slider', {
    loop: true,
    speed: 1000, // чуть плавнее
  
    slidesPerView: 1,
    spaceBetween: 20,
  
    // 👉 Drag мышкой и пальцем
    grabCursor: true,
    simulateTouch: true,
    touchRatio: 1.2,
    touchAngle: 45,
  
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  
    // 👉 Красивый эффект
    effect: 'creative',
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
        scale: 0.9,
        opacity: 0.5,
      },
      next: {
        translate: ['100%', 0, 0],
      },
    },
  
    // 👉 Плавность
    easing: 'ease-out',
  
    navigation: false,
    pagination: false,
  });

  document.querySelectorAll('.drop-menu').forEach(btn => {
    btn.addEventListener('click', function () {
      this.classList.toggle('is-active');
  
      document.querySelector('.menu-wrap')?.classList.toggle('open');
  
      document.documentElement.classList.toggle('overflow'); // html
      document.body.classList.toggle('overflow'); // body
    });
  });