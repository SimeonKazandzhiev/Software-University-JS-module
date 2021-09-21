function sumTable() {
    let table = document.querySelectorAll('table tr');

    let total = 0;

    for (let i = 0; i < table.length; i++) {
        let colums = table[i].children;
        let cost = colums[colums.length - 1].textContent;
        total += Number(cost);
    }

    document.getElementById('sum').textContent = total;
}



// let table = document.querySelectorAll("table tr");
//   let total = 0;
//   for (let i = 1; i < table.length; i++) {
//     let cols = table[i].children;
//     let cost = cols[cols.length - 1].textContent;
//     total += Number(cost);
//   }
//   document.getElementById("sum").textContent = total;
