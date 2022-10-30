///When a user selects a dish option (don’t worry about “Entire Meal”) and then clicks the “Let’s Cook!” button, the user sees a random dish from the list of possible dishes for that category

var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'HushPuppies',
    ]

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita',
    'Pizza',
]

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',

]
var clearButton = document.querySelector('.clear-button')
var youShouldMake = document.querySelector('.you-should-make')
var showItem = document.querySelector('.show-item')
var PotImage = document.querySelector('.pot-image')
var letsCookButton = document.querySelector('.lets-cook')
var sideButtons = document.querySelector('#side')
var mainDishButtons = document.querySelector('#main-dish')
var dissertButtons = document.querySelector('#dissert')
var entireMealButtons = document.querySelector('#entire-meal')
var showselectedItem = document.querySelector('.show-item')

letsCookButton.addEventListener('click', displayFoodItem)

sideButtons.addEventListener('change',function(){
     getSelectedItem(sides)
})
mainDishButtons.addEventListener('change',function(){
    getSelectedItem(mains)
})
dissertButtons.addEventListener('change',function(){
    getSelectedItem(desserts)
})
entireMealButtons.addEventListener('change',function(){
    getSelectedItem()
})


var foodItem;


function getSelectedItem(foodArray) {
    foodItem = foodArray[getRandomIndex(foodArray)] + '!'
}

function displayFoodItem(){
    showselectedItem.innerText = foodItem
    PotImage.classList.add('hidden')
    youShouldMake.classList.remove('hidden')
    showItem.classList.remove('hidden')
    clearButton.classList.remove('hidden')
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
    }