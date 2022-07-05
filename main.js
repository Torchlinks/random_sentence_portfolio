const cookbook = {
    proteins: ['pork', 'beef', 'salmon', 'chicken', 'shrimp', 'saitan', 'tofu'],
    veggies: ['bell pepper', 'carrot', 'egg plant', 'tomato'],
    spices: ['white pepper', 'five-spice powder', 'black pepper', 'chili powder', 'chili flakes'],
    sauces: ['hoisin sauce', 'soy sauce', 'oyster sauce', 'ketcap manis', 'worcestershire sauce', 'sambal Oelek'],
    garnishes: ['green onion', 'sesame seeds', 'sesame oil', 'chili oil'],
    prep_methods: ['dice', 'cube', 'quarter', 'julienne'],
};

const cookbookGetRandom = cookbookKey => {
    dishComponentArray = cookbook[cookbookKey];
    randomComponent = dishComponentArray[Math.floor(Math.random() * dishComponentArray.length)];
    return randomComponent;
};

const generateRecipe = () => {
    console.log(`Start by preparing your indgredients:`);
    console.log(`Cut the ${cookbookGetRandom('proteins')} into slivers, and marinate the slivers in ${cookbookGetRandom('sauces')} for 15 minutes.`);
    console.log(`Meanwhile, ${cookbookGetRandom('prep_methods')} your ${cookbookGetRandom('veggies')}, and mince the garlic and ginger.`);
    console.log(`To start cooking:`);
    console.log(`Preheat your wok until smoking. Then, add two tablespoons of oil, and swirl it around in your wok to coat the cooking surface.`);
    console.log(`With the flame on high, add the marinated slivers and stir to prevent clumping. Stir-fry for one minute, then remove the slivers from the wok and set aside.`);
    console.log(`Afterwards, wait until the wok is hot again, and add another two tablespoons of oil. Then, immediately add the garlic and ginger.`);
    console.log(`Fry for 15 seconds, and pour in one tablespoon of cooking wine. Mix.`);
    console.log(`Add in your vegetables, and fry for 30 seconds.`);
    console.log(`Now, add in the slivers you set aside previously, and stir fry for another 15 seconds.`);
    console.log(`Season with a teaspoon of ${cookbookGetRandom('sauces')} and a pinch of salt`);
    console.log(`Finally, garnish with ${cookbookGetRandom('garnishes')}.`);
    console.log(`Your stir fry is done. Enjoy!`);
}
