function toggle() {

    //1 Get the elements
   let button = document.getElementsByClassName('button')[0];
   let divText = document.getElementById('extra');

   // 2 Show or hide the text (change button text as well)

   button.textContent = button.textContent === 'More' ? 'Less' : 'More';
   divText.style.display = divText.style.display === 'block' ? 'none' : 'block';


}