function createCity(name, population, treasury){
    const city ={
        name : name,
        population : population, 
        treasury : treasury
    }

    return city;

}

console.log(createCity('Tortuga',
7000,
15000));