const sliderContainer = document.getElementById('slider-container')
const inputElement = document.getElementById('slider')
const toggle = document.querySelector('.toggle')
const nubbin = document.querySelector('.nubbin')
const pageViews = document.getElementById('pageviews')
const price = document.getElementById('price')
const discount = document.querySelector('.discount')
const rates = [
    {pvs: "10K PAGEVIEWS", ppm: 8.00},
    {pvs: "50K PAGEVIEWS", ppm: 12.00},
    {pvs: "100K PAGEVIEWS", ppm: 16.00},
    {pvs: "500K PAGEVIEWS", ppm: 24.00},
    {pvs: "1M PAGEVIEWS", ppm: 36.00}
]
let isYearlyBilling = false


function handleToggle() {
    isYearlyBilling = !isYearlyBilling
    nubbin.classList.toggle('shift')
    toggle.classList.toggle('activated')
    let rate = rates[inputElement.value].ppm
    if (isYearlyBilling) rate*=.75
    price.innerHTML = '$' + rate.toFixed(2)
}

function handleMove(){

    let progress = inputElement.value/(inputElement.max-inputElement.min)*100
    inputElement.style.setProperty("--webkitProgressPercent", progress + '%')
    pageViews.innerHTML = rates[inputElement.value].pvs
    let rate = rates[inputElement.value].ppm
    if (isYearlyBilling) rate*=.75
    price.innerHTML = '$' + rate.toFixed(2)
}

function screenSizeChange() {
    if (window.innerWidth <= 375) {
        discount.innerHTML = "-25%"
    } else {
        discount.innerHTML = "25% discount"
    }
}
inputElement.addEventListener('click', ()=> handleMove())
inputElement.addEventListener('touchend', ()=> handleMove())
inputElement.addEventListener('mousemove', ()=> handleMove())
inputElement.addEventListener('touchmove', ()=> handleMove())
toggle.addEventListener('click', ()=>handleToggle())
window.addEventListener('resize', ()=>screenSizeChange())

