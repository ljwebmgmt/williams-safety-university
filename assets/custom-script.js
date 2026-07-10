////Product Tabs
if(document.querySelector("#prod-tabs-wrapper")){

  const tabContainer = document.querySelector("#prod-tabs-wrapper");
  const navList = tabContainer.querySelectorAll(".prod-tabs_header .tab_btn");
  const tabList = tabContainer.querySelectorAll(".prod-tabs_content .tab");
  
  for(let i = 0; i < navList.length; i++){
    navList[i].addEventListener('click', (evt)=>{
      let currentLink = tabContainer.querySelector(".tab_btn.active");
      let currentTab = tabContainer.querySelector(".prod-tabs_content .tab.active");
  
      currentLink.classList.remove("active");
      navList[i].classList.add("active");
      
      currentTab.classList.remove("active");
      tabList[i].classList.add("active");
    })
  }
}
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.herosection-slider .slideshow__text').forEach((el) => {
    el.classList.add('visible');
  });
});
////Product Range Slider
// if(document.getElementById('seats-picker')){

//   const seatSlider = document.getElementById('seats-picker');
//   const variantSelects = document.querySelector('variant-selects');
  
//   const numVariants = variantSelects.querySelectorAll('.product-form__input input[type="radio"]').length;
//   seatSlider.setAttribute('max', numVariants);
  
//   seatSlider.addEventListener('input', function() {
//     const selectedValue = parseInt(this.value);
//     const variantInputs = variantSelects.querySelectorAll('.product-form__input input[type="radio"]');
    
//     variantInputs.forEach((input, index) => {
//       if (index + 1 === selectedValue) {
//         const label = variantSelects.querySelector(`label[for="${input.id}"]`);
//         if (label) {
//           label.click();
//         }
//       }
//     });
//   });
// }

if(document.getElementById('seats-picker')){

  const seatSlider = document.getElementById('seats-picker');
  const variantSelects = document.querySelector('variant-selects');
  
  const numVariants = variantSelects.querySelectorAll('.product-form__input input[type="radio"]').length;
  seatSlider.setAttribute('max', numVariants);

  const initiallySelectedVariant = variantSelects.querySelector('.product-form__input input[type="radio"]:checked');
  if (initiallySelectedVariant) {
    const initiallySelectedIndex = Array.from(variantSelects.querySelectorAll('.product-form__input input[type="radio"]')).indexOf(initiallySelectedVariant) + 1;
    seatSlider.value = initiallySelectedIndex;
  }
  
  seatSlider.addEventListener('input', function() {
    const selectedValue = parseInt(this.value);
    const variantInputs = variantSelects.querySelectorAll('.product-form__input input[type="radio"]');
    
    variantInputs.forEach((input, index) => {
      if (index + 1 === selectedValue) {
        const label = variantSelects.querySelector(`label[for="${input.id}"]`);
        if (label) {
          label.click();
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const moneyBackButton = document.querySelector('.money_back');
  const moneyBackPopup = document.querySelector('.money_back_popup');
  const closeButton = document.querySelector('.close');
  const overlay = document.querySelector('.overlay');
  // overlay.className = 'overlay';
  // document.body.appendChild(overlay);
if(moneyBackButton){

  moneyBackButton.addEventListener('click', () => {
      body.classList.add('open_popup');
      moneyBackPopup.classList.add('visible');
      overlay.classList.add('visible');
  });

  closeButton.addEventListener('click', () => {
      body.classList.remove('open_popup');
      moneyBackPopup.classList.remove('visible');
      overlay.classList.remove('visible');
  });

  overlay.addEventListener('click', () => {
      body.classList.remove('open_popup');
      moneyBackPopup.classList.remove('visible');
      overlay.classList.remove('visible');
  });
}
});