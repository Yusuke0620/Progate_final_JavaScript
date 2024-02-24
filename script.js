const ages = [12, 100, 5, 25, 40, 17, 80, 20, 19];

ages.forEach((age) => {
    if(age >= 20) {
        console.log(`${age}歳は成人です。`);
    } else {
        console.log(`${age}歳は未成年です。`);
    }
})



const nums = [1, 2, 3, 4, 5, 6, 7];

nums.forEach((number) => {
    if(number % 2 === 0) {
        console.log(`${[number]}は偶数です。`);
    } else {
        console.log(`${number}は奇数です。`);
    }
})


const foods = ["meet", "banana", "lemon"];
foods.forEach((food) => {
    console.log(food.toUpperCase());
})


const animals = ["犬", "ゾウ", "猫", "鹿"];
animals.reverse();
animals.forEach((animal) => {
    console.log(animal);
})


const colors = ["赤1", "緑22", "青333", "黄色4444"];
//出力される各要素の後ろに、その要素の文字数を表示
colors.forEach((color) => {
    console.log(color, color.length);
})

const fruits = ["apple", "banana", "orange"];
// 出力される各要素の前にインデックスを表示
fruits.forEach((fruit, index) => {
    console.log(`${[index]}: ${fruit}`);
})

console.log("---------------------");


const characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人", "とりずきん"];

// forEachメソッドを使って、配列charactersの中身をすべて出力してください
characters.forEach((character) => {
    console.log(character);
});


console.log("---------------------");



