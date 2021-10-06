function deleteByEmail() {
    // select input field and read value 
    const input = document.querySelector('input[name="email"]');

    // get tbody children
    const rows = Array.from(document.querySelector('tbody').children);
    // repeat for every row
    // -- select second cell
    // -- if textContent matches input value -> remove row

    let removed = false;

    for (let row of rows) {
      if(row.children[1].textContent == input.value){
          row.remove();
          removed = true;
      }
    }
    // set result element 
    if(removed){
        document.getElementById('result').textContent = 'Deleted.'
    }else{
        document.getElementById('result').textContent = 'Not found.'
    }

}