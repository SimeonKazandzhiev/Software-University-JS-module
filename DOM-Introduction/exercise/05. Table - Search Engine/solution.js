function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      
      const input = document.getElementById('searchField');
      const inputText = input.value.toLowerCase();
      const tableElements = Array.from(document.querySelectorAll('tbody tr'));

      tableElements.forEach((el) => {

         let text = el.textContent.toLowerCase();
         if(text.includes(inputText)){
            el.classList.add('select');
         }else{
            el.classList.remove('select');
         }
      })
      input.value = '';

   }
}