var hearder = document.getElementById('main-header')
var submitBtn = document.getElementById('submit-btn')
var inputEl = document.getElementById('input-el')
var items = document.getElementsByClassName('items-el');
var itemsDel = document.getElementsByTagName('li');
var openBtns = document.querySelectorAll('#openBtn');

var openEl 

// =================================================================== THE OPEN BUTTON FUNCTION START
openBtns.forEach(openBtn => openBtn.addEventListener('click', (e) => {
   e.target.id =   alert(id)
    
}))
// =================================================================== THE OPEN BUTTON FUNCTION ENDS

// ====================================================================d ADD ITEM FUNCTION START
let counterx = 6, lastindex = 4;
inputEl.value = ''
submitBtn.addEventListener('click', function(){
    if (inputEl.value == '') {
        alert('Enter an Item')
    } else {
        sectionEl.innerHTML += "<li class='items-el5'>item <span>"+ counterx +"</span> <button>Open</button><button id='delFive'>Delete</button></li>";
        counterx++;
        lastindex++;
        // for (var i = 1; i < itemsDel.length; i++){
        //     // inputEl.value = newItem.innerHTML
        //    itemsDel[lastindex].innerHTML = "<li class='items-el5'>item <span>"+ counterx +"</span> <button>Open</button><button id='del'"+counterx+">Delete</button></li>";
        //  }
        
    }
})
// ========================================================================ADD ITEM FUNCTION ENDS




let itemsEl1 = document.querySelector('.items-el1');
let itemsEl2 = document.querySelector('.items-el2')
let itemsEl3 = document.querySelector('.items-el3')
let itemsEl4 = document.querySelector('.items-el4')
let itemsEl5 = document.querySelector('.items-el5')
var sectionEl = document.querySelector('section');
const delOne = document.querySelector('#delOne');
const delTwo = document.querySelector('#delTwo');
const delThree = document.querySelector('#delThree');
const delFour = document.querySelector('#delFour');
const delFive = document.querySelector('#delFive');

sectionEl.style.boxShadow = ' 0px 5px 8px 1px #1f242d';

delOne.addEventListener('click', () => {
   itemsEl1.style.display = 'none'
})
delTwo.addEventListener('click', () => {
    itemsEl2.style.display = 'none'
})
delThree.addEventListener('click', () => {
    itemsEl3.style.display = 'none'
})
delFour.addEventListener('click', () => {
    itemsEl4.style.display = 'none'
})
delFive.addEventListener('click', () => {
    itemsEl5.style.display = 'none'
})


if (sectionEl.innerHTML == '') {
    sectionEl.style.boxShadow = '0 0 0'
} else {
    sectionEl.style.boxShadow = ' 0px 5px 8px 1px #1f242d';
}