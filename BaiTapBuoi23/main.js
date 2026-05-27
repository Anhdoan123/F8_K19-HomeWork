const meta = {
    invoiceNo: "WM-20260521-0001",
    saleDate: "2026/05/21",
    currency: "VND",
    paymentMethod: "Cash" // Tiền mặt / Chuyển khoản...
}


const seller = {
    name: "WinMark 2 ba trung",
    address: "2 Ba trung - HN",
    phone: "012345678",
    representative: "Đại diện WinMark"
}


const customer = {
    name: "Nguyen Van A",
    age: 20,
    address: "Ha Dong Ha noi"
}

const items = [
    {
        no: 1,
        name: "Ao Thun",
        size: "XL",
        quantity: 1,
        price: 200000
    },
    {
        no: 2,
        name: "Ao Thun",
        size: "XL",
        quantity: 1,
        price: 200000
    }
]

// 5. Chương trình ưu đãi / Giảm giá (Promotion & Discount)
const promotion = {
    description: "Khuyen mai 50% chi KH than thiet",
    discountPercent: 50
}


//Fill invoice no
document.getElementById('invoice-number').innerText = meta.invoiceNo

//Fill sale date
document.getElementById('sale-date').innerText = meta.saleDate

let sellerEl = document.getElementById('left')
sellerEl.innerHTML += `<p class="font-medium text-lg">${seller.name}</p>`
sellerEl.innerHTML += `<p class="text-[var(--text-color)]"><i class="fa-solid fa-location-dot"></i> ${seller.address}</p>`
sellerEl.innerHTML += `<p class="text-[var(--text-color)]"><i class="fa-solid fa-phone"></i> ${seller.phone}</p>`


let buyerEl = document.getElementById('right')
buyerEl.innerHTML += `<p class="font-medium text-lg">${customer.name}</p>`
buyerEl.innerHTML += `<p class="text-[var(--text-color)]">Tuổi: ${customer.age}</p>`
buyerEl.innerHTML += `<p class="text-[var(--text-color)]"><i class="fa-solid fa-map-location"></i> ${customer.address}</p>`

let tableData = document.querySelector('tbody')
let html = '';

function formatVND(price) {
    return price.toLocaleString('vi-VN') + ' đ'
}

let totalPrice = 0;
items.forEach(item => {
    totalPrice += item.price * item.quantity
    html += `<tr class="border-b">
                <td class="py-6 text-gray-400">${item.no}</td>
                <td class="font-medium">${item.name}</td>
                <td>${item.size}</td>
                <td>${item.quantity}</td>
                <td>${formatVND(item.price)}</td>
                <td class="font-bold">${formatVND(item.price * item.quantity)}</td>
            </tr>`
});

tableData.innerHTML += html


document.getElementById('total-price').innerText = formatVND(totalPrice)
const discount = totalPrice * (promotion.discountPercent / 100)
document.getElementById('discount-price').innerText = `-${formatVND(discount)}`
let finalPrice = totalPrice - discount
document.getElementById('final-price').innerText = formatVND(finalPrice)




