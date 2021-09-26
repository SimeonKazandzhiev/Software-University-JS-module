function solve(input) {
    function getEngine(power) {

        let engines = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]

        return engines.find((engine) => engine.power >= power)

    }
    function getCarriage(carriage, color) {
        return {
            type: carriage,
            color
        }
    }
    function getWheels(wheels) {
        let wheel = Math.floor(wheels) % 2 === 0
            ? Math.floor(wheels) - 1
            : Math.floor(wheels)

        return [wheel, wheel, wheel, wheel]
    }

    return {
        model: input.model,
        engine: getEngine(input.power),
        carriage: getCarriage(input.carriage, input.color),
        wheels: getWheels(input.wheelsize)

    }

}


console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));