console.log('im main.js');
console.log(document);

var selectedListItems = document. querySelectorAll('.selected');
console.log('selectedListItems:', selectedListItems);

for (var i = 0; i < selectedListItems.length; i++) {
  selectedListItems[i].style.color = 'red';
}

var newListItem = document.createElement('li');

newListItem.innerHTML = 'in New York';



console.log('--- Create and append a new element');



newListItem.setAttribute('class', 'muted');
//we are going to call .appendChild on the parent <ul> element.
// That <ul> element has an id attribute.


// So we retrieve the DOM element that contains the list items,
// because we want to call .appendChild() on it.
// NOTE: we do NOT pass a CSS selector ('#item-list') to the
// .getElementById() method.

var listContainer = document.getElementById('item-list');

listContainer.appendChild(newListItem);
// Add Comment Collapse

console.log('------DOM events');
var clickMeButton = document.getElementById('ClickMeBtn');


clickMeButton.addEventListener('click', function () {
  alert('Picked!');
  clickMeButton.innerHTML = 'clicked!';
});
