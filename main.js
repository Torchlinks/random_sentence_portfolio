const cookbook = {
    proteins: [],
    veggies: [],
    spices: [],
    sauces: [],
    garnishes: [],
    prep_methods: [],
};

const cookbookGetRandom = cookbookKey => {
    dishComponentArray = cookbook[cookbookKey];
    randomComponent = dishComponentArray[Math.floor(Math.random() * dishComponentArray.length)];
    return randomComponent;
};