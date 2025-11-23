
    const burgerButton = document.querySelector('.burger_btn');
    const nav = document.querySelector('.nav');
    burgerButton.addEventListener('click', () => {
      nav.classList.toggle('active');
      burgerButton.classList.toggle('active');
    });
