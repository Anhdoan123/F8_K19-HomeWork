//Bài 1
function isEvenNumber(number) {
    return number % 2 === 0
}

console.log(isEvenNumber(10)); // Kết quả mong đợi: true
console.log(isEvenNumber(7));  // Kết quả mong đợi: false

//Bài 2
function getElectricityBill(kwh) {
    const lv1 = 1678;
    const lv2 = 1734;
    const lv3 = 2014;
    const lv4 = 2536;
    const lv5 = 2834;
    const lv6 = 2927;

    let total = 0;

    if (kwh <= 50) {
        total = kwh * lv1;
    } else if (kwh <= 100) {
        total = 50 * lv1 + (kwh - 50) * lv2;
    } else if (kwh <= 200) {
        total = 50 * lv1 + 50 * lv2 + (kwh - 100) * lv3;
    } else if (kwh <= 300) {
        total = 50 * lv1 + 50 * lv2 + 100 * lv3 + (kwh - 200) * lv4;
    } else if (kwh <= 400) {
        total = 50 * lv1 + 50 * lv2 + 100 * lv3 + 100 * lv4 + (kwh - 300) * lv5;
    } else {
        total = 50 * lv1 + 50 * lv2 + 100 * lv3 + 100 * lv4 + 100 * lv5 + (kwh - 400) * lv6;
    }
    return total;
}

console.log(getElectricityBill(70));
// Mong đợi: (50 * 1678) + (20 * 1734) = 118580
console.log(getElectricityBill(120));
// Mong đợi: (50 * 1678) + (50 * 1734) + (20 * 2014) = 210880

//Bài 3
function cleanName(name, keyword) {
    name = name.trim().toLowerCase();
    return name.includes(keyword.toLowerCase())

}

console.log(cleanName('   NGUYEN Van An   ', 'an')); // Mong đợi: true (vì 'nguyen van an' có chứa 'an')
console.log(cleanName('   Tran Thi B ', 'hoang'));   // Mong đợi: false