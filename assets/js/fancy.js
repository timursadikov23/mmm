

const titleProduct = document.querySelector('#title-product');
const titleProd = document.querySelector('#title-product1');
const cardProduct = document.querySelector('#card-product');
const cardProduct1 = document.querySelector('#card-product1');



// ABOUT US

cardProduct.addEventListener('mouseover', () => {
    titleProduct.classList.add('active')
    titleProd.classList.add('active')
    titleProd.classList.remove('active')
})
cardProduct.addEventListener('mouseout', () => {
  titleProduct.classList.remove('active')
  titleProd.classList.remove('active')
})
cardProduct1.addEventListener('mouseover', () => {
  // titleProduct.classList.add('active')
  titleProd.classList.add('active')
})
cardProduct1.addEventListener('mouseout', () => {
  titleProduct.classList.remove('active')
  titleProd.classList.remove('active')
})