///When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

var letsCookButtons = document.querySelector('.lets-cook')
var sideButtons = document.querySelector('#side')
var mainDishButtons = document.querySelector('#main-dish')
var dissertButtons = document.querySelector('#dissert')
var entireMealButtons = document.querySelector('#entire-meal')

letsCookButtons.addEventListener('click',function(event){
    checkRadioID(event)
})
sideButtons.addEventListener('change',function(event){
     checkRadioID(event)
})
mainDishButtons.addEventListener('change',function(event){
    checkRadioID(event)
})
dissertButtons.addEventListener('change',function(event){
    checkRadioID(event)
})
entireMealButtons.addEventListener('change',function(event){
    checkRadioID(event)
})
function checkRadioID(event) {
    event.preventDefault()
    console.log('clicked')
    var itemSelection;
    //identify the value of the selected radio button and assian to var
    itemSelection = radioButtons.value()
console.log(itemSelection)
    //pass the itemSelection value into another function that randomizes the array. 
}