function buyFruits(fruit, weight, price){


    let moneyNeeded = (Number(weight)/1000 * Number(price)).toFixed(2);
    let finalWeight = (weight /1000).toFixed(2);
    
    console.log(`I need $${moneyNeeded} to buy ${finalWeight} kilograms ${fruit}.`);

}
buyFruits('orange', 2500, 1.80);