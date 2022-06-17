// ADD NEW ITEM TO END OF LIST
var list = document.getElementsByTagName('ul')[0];

var newItem = document.createElement('li');
var newItemText = document.createTextNode('cream')
newItem.appendChild(newItemText);
list.appendChild(newItem);

// ADD NEW ITEM START OF LIST
newItem = document.createElement('li');
newItemText = document.createTextNode('kale')
newItem.appendChild(newItemText);
list.appendChild(newItem, list.firstChild);

var listItems = document.getElementsByTagName('li');
var numListItems = listItems.length;

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var i;
for (i = 0; i < numListItems; ++i) {
    listItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var span_elem = document.createElement('span');
newItemText = document.createTextNode(numListItems);
span_elem.appendChild(newItemText);

var h2_elem = document.getElementsByTagName('h2')[0];
h2_elem.appendChild(span_elem);
