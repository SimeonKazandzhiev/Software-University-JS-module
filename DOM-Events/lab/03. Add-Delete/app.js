function addItem() {
    // select input field and read value
    const input = document.getElementById('newItemText');
   // create new <li> element and set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;
    //create delete button and configure it 
    const deleteButton = document.createElement('a');
    deleteButton.href = '#'
    deleteButton.textContent = '[Delete]';
    liElement.appendChild(deleteButton);
    deleteButton.addEventListener('click',removeElement);

   // select <ul> and append new <li> element
   document.getElementById('items').appendChild(liElement);
   // nice to have: clear the input field
   input.value = '';
    // get the parent of the button function, so can delete the whole row
   function removeElement(e){
       const elementToBeRemove = e.target.parentNode;
        elementToBeRemove.remove();
   }
}