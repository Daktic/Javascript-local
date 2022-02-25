const messages = {
    0: 'One cup of black coffee only has one calorie.',
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

const giveMessage = (string1, string2) => {
    let string1 = messages[randomNumGen()];
    let string2 = messages[randomNumGen()];
    return `Did you know that ${string1} and ${string2}?`;
}


console.log(giveMessage())