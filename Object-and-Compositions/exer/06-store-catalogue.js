function solve(input) {
    let store = {};

    while (input.length) {
        let [name, price] = input.shift().split(' : ');
        const firstLetter = name[0];

        if (!store[firstLetter]) {
            store[firstLetter] = [];
        }
        store[firstLetter].push({ name, price: Number(price) });
        store[firstLetter].sort((a, b) => a.firstLetter - b.firstLetter);
    }

    let result = [];

    Object.entries(store)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(entry => {
            let products = entry[1]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map(product => `  ${product.name}: ${product.price}`)
                .join('\n');

            let output = `${entry[0]}\n${products}`
            result.push(output);
        })



    return result.join('\n');
}

console.log(solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
));