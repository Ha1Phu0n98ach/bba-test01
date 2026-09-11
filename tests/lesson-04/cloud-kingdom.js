let playName = "Mario";
let currentLives = 3;
const LEVEL_1 = 25;
const LEVEL_2 = 30;
const LEVEL_3 = 45;

let sum = (LEVEL_1 + LEVEL_2 + LEVEL_3);
let average = sum / 3;
let remainder = sum % 3;

console.log("Tổng coin của 3 level: " + sum);

console.log("Giá trị trung bình: " + average);

console.log("Số coin dư khi chia tổng số coin cho 3: " + remainder);