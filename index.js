var colors = document.querySelector('body');
var colorLover = document.querySelector('button')
var colorsToBeChanged = ['red', 'purple', 'pink', 'white', 'grey', 'peech', 'yellowgreen', 'orange', 'black', 'yellow', 'blueviolet', 'brown', 'lightblue', 'seagreen', 'wheat', 'whitesmoke', 'silver', 'aqua']
colors.style.backgroundColor = 'azure'
colorLover.addEventListener('click', beautifulColors)
function beautifulColors() {
    var colorBloom = parseInt(Math.random() * colorsToBeChanged.length);
    colors.style.backgroundColor = colorsToBeChanged[colorBloom]
}