/*=============== RATES ===============*/

document.addEventListener("DOMContentLoaded", function() {
    // Fetch Bitcoin price data from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        // Get the USD price of Bitcoin
        const bitcoinPriceUSD = data.bitcoin.usd;

        // Display the price on the webpage
        document.getElementById('bitcoinPrice').innerText = `$${bitcoinPriceUSD}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Fetch Ethereum price data from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        // Get the USD price of Ethereum
        const ethereumPriceUSD = data.ethereum.usd;

        // Display the price on the webpage
        document.getElementById('ethereumPrice').innerText = `$${ethereumPriceUSD}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Fetch Binance Coin price data from CoinGecko API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
        // Get the USD price of Binance Coin
        const bnbPriceUSD = data.binancecoin.usd;

        // Display the price on the webpage
        document.getElementById('bnbPrice').innerText = `$${bnbPriceUSD}`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Fetch exchange rate data from a suitable API
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ngn')
    .then(response => response.json())
    .then(data => {
        // Get the exchange rate of USDT against NGN
        const exchangeRateUSDTtoNGN = data.tether.ngn; // Extract the actual exchange rate value

        // Increment the exchange rate by 100 NGN
        const updatedExchangeRateUSDTtoNGN = exchangeRateUSDTtoNGN + 100;

        // Display the updated exchange rate on the webpage
        document.getElementById('exchangeRate').innerText = `1 USDT = ${updatedExchangeRateUSDTtoNGN} NGN`;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
});









/*=============== SLIDER ===============*/

let slideIndex = 0;
const intervalTime = 3000; // Interval time in milliseconds (3 seconds)
function showSlide(index) {
  const slides = document.querySelector('.slides');
  const slideWidth = slides.children[0].offsetWidth;
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
}
function nextSlide() {
  const slides = document.querySelector('.slides');
  const numSlides = slides.children.length;
  slideIndex = (slideIndex + 1) % numSlides;
  showSlide(slideIndex);
}
function prevSlide() {
  const slides = document.querySelector('.slides');
  const numSlides = slides.children.length;
  slideIndex = (slideIndex - 1 + numSlides) % numSlides;
  showSlide(slideIndex);
}
function autoSlide() {
  nextSlide();
}
setInterval(autoSlide, intervalTime);
showSlide(slideIndex);




/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)





/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
/* validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu hidden */
/* validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
/* remove mobile menu */
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
const sendEmail = (e) =>{
    e.preventDefault()
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_0e5fk5f', 'template_tt6tjao', '#contact-form', 'kaiCHyjwG39gHZhzN')
    .then(() =>{
    //show send message
    contactMessage.textContent = 'Message send successfully'   
    // Remove message after five seconds
    setTimeout(() => {
    contactMessage.textContent = ''
    }, 5000)
    // Clear input fields
    contactForm.reset()
    }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}
 contactForm.addEventListener('submit', sendEmail)




 let currentSlide = 0;
 const slides = document.querySelectorAll('.swipe');
 const totalSlides = slides.length;
 
 document.addEventListener('DOMContentLoaded', () => {
     console.log('Document loaded');
     showSlide(currentSlide);
     setInterval(() => {
         console.log('Auto-changing slide');
         changeSlide(1);
     }, 3000); // Change image every 3 seconds
 });
 
 document.getElementById('prevButton').addEventListener('click', () => {
     console.log('Prev button clicked');
     changeSlide(-1);
 });
 document.getElementById('nextButton').addEventListener('click', () => {
     console.log('Next button clicked');
     changeSlide(1);
 });
 
 function showSlide(index) {
     if (index >= totalSlides) {
         currentSlide = 0;
     } else if (index < 0) {
         currentSlide = totalSlides - 1;
     } else {
         currentSlide = index;
     }
     
     console.log(`Showing slide ${currentSlide}`);
     const newTransformValue = -currentSlide * 100 + '%';
     document.querySelector('.slidess').style.transform = `translateX(${newTransformValue})`;
 }
 
 function changeSlide(step) {
     showSlide(currentSlide + step);
 }
 
 