const messages = {
    1: 'The drink dates back to 800 A.D.',
    2: 'Coffee beans are technically seeds.',
    3: 'And you can eat coffee cherries as a food.',
    4: 'There are two main types: Arabica and Robusta.',
    5: 'Brazil grows the most coffee in the world.',
    6: 'Only two U.S. states produce coffee.',
    7: 'Espresso means "pressed out" in Italian.'
}

const randomNumGen = () => {
    return Math.floor(Math.random()*8)
}

const giveMessage (string1, string2) => {
    return `Did you know that ${string1} and ${string2}?`
}


console.log(randomNumGen())