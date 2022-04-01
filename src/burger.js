const iconMenu = document.querySelector('.nav-icon');
if (iconMenu){
    const headerNav = document.querySelector('.header-nav');
    iconMenu.addEventListener('click', function(){
        iconMenu.classList.toggle('is-active');
        headerNav.classList.toggle('is-active'); 
    });
}