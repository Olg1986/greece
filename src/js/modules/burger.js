const burger = () => {
   const btnBurger = document.querySelector('.burger'),
        menuElem = document.querySelector('.menu');

     btnBurger.addEventListener('click', function() {
      menuElem.classList.toggle('menu_active');
      this.classList.toggle('burger_active');
     }); 

}

export default burger;