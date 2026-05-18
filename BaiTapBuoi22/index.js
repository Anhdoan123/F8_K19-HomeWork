const employees = [
    {id: 1, name: "Alice", age: 23, status: 'working'},
    {id: 3, name: "Bob", age: 25, status: 'working'},
    {id: 6, name: "John", age: 27, status: 'working'},
    {id: 8, name: "David", age: 23, status: 'quit_job'},
    {id: 10, name: "Eve", age: 20, status: 'working'},
];


const products = [
    {id: 1, name: "Phone", price: 1200},
    {id: 2, name: "Laptop", price: 3000},
    {id: 3, name: "Tab", price: 2000},
    {id: 4, name: "PC", price: 800},
    {id: 5, name: "Monitor", price: 1500},
]


const orders = [
    {id: 1, employeeId: 1, productId: 4, quantity: 1},
    {id: 2, employeeId: 3, productId: 2, quantity: 4},
    {id: 3, employeeId: 1, productId: 5, quantity: 3},
    {id: 4, employeeId: 6, productId: 1, quantity: 2},
    {id: 5, employeeId: 3, productId: 5, quantity: 3},
    {id: 6, employeeId: 8, productId: 1, quantity: 1},
    {id: 7, employeeId: 10, productId: 3, quantity: 2},
];


// Bai 1: Lay ra ds nhan vien dang lam viec
const workingEmployees = employees.filter(employee => employee.status === 'working')
console.log('\nDanh sách nhân viên đang làm việc');
console.log(workingEmployees);

// Bai 2: Lay ra nhan vien lon tuoi nhat
const oldestEmployee = (employees) => {
    let maxAge = employees[0]
    for (let employee of employees) {
        if (employee.age > maxAge.age) {
            maxAge = employee;
        }
    }
    return maxAge;
}
console.log('\nNhân viên lớn tuổi nhất');
console.log(oldestEmployee(employees));

// Bai 3: Lay ra san phan gia re nhat
const cheapestProduct = (products) => {
    let minPrice = products[0]
    for (let product of products) {
        if (product.price < minPrice.price) {
            minPrice = product;
        }
    }
    return minPrice;
}

console.log('\nSản phẩm rẻ nhất');
console.log(cheapestProduct(products));


const productOrderMapper = {}
for (let order of orders) {
    productOrderMapper[order.productId] = (productOrderMapper[order.productId] || 0) + order.quantity;
}
console.log(productOrderMapper);


// Bài 4: Tìm ra sản phẩm bán chạy nhất ( bán nhiều nhất về mặt số lượng )
const getBestSellingProduct = (products) => {
    let bestProduct = products[0]
    for (const product of products) {
        if (
            productOrderMapper[product.id] >
            productOrderMapper[bestProduct.id]
        ) {
            bestProduct = product
        }
    }
    return bestProduct
}
console.log('\nSản phẩm bán chạy nhất về mặt số lượng');
console.log(getBestSellingProduct(products));

// Bài 5: Tim ra san phan doanh thu cao nhat ( nhiều tiền nhất )
const getTopRevenueProduct = (products) => {

    let topRevenue = 0;
    let topProduct = {};
    // get total revenue
    for (let product of products) {
        let totalQuantity = productOrderMapper[product.id] || 0;
        const revenue = product.price * totalQuantity;

        // find top revenue
        if (revenue > topRevenue) {
            topRevenue = revenue;
            topProduct = {
                name: product.name,
                revenue: revenue,
                quantity: totalQuantity
            };
        }
    }
    return topProduct
}

console.log('\nSản phẩm có doanh thu cao nhất');
console.log(getTopRevenueProduct(products));


const employeeOrderMapper = {}
const employeeRevenueMapper = {}

for (const order of orders) {
    const product = products.find(
        product => product.id === order.productId
    )

    // total quantity
    employeeOrderMapper[order.employeeId] =
        (employeeOrderMapper[order.employeeId] || 0) +
        order.quantity

    // total revenue
    employeeRevenueMapper[order.employeeId] =
        (employeeRevenueMapper[order.employeeId] || 0) +
        product.price * order.quantity
}

console.log(employeeRevenueMapper);

// Bài 6: Tim ra nhan vien ban nhieu hang nhat
const topSellingEmployee = (employees) => {
    let bestEmployee = employees[0]
    for (const employee of employees) {
        if (
            employeeOrderMapper[employee.id] >
            employeeOrderMapper[bestEmployee.id]
        ) {
            bestEmployee = employee
        }
    }
    return bestEmployee
}
console.log('\nNhân viên bán nhiều hàng nhất');
console.log(topSellingEmployee(employees));

// Bai 7: Tim ra nhan vien co doanh thu cao nhat
const topRevenueEmployee = (employees) => {
    let bestEmployee = employees[0]
    for (const employee of employees) {
        if (
            employeeRevenueMapper[employee.id] >
            employeeRevenueMapper[bestEmployee.id]
        ) {
            bestEmployee = employee
        }
    }
    return {
        ...bestEmployee,
        revenue: employeeRevenueMapper[bestEmployee.id]
    }
}

console.log('\nNhân viên có doanh thu cao nhất');
console.log(topRevenueEmployee(employees));


//Bai 9: tim hoa hong cho moi nhan vien
const getEmployeeCommission = (employees) => {
    return employees.map(employee => {
        const revenue =
            employeeRevenueMapper[employee.id] || 0

        return {
            ...employee,
            revenue,
            commission: revenue * 0.03
        }
    })
}

console.log('Hoa hồng của mỗi nhân viên')
console.log(getEmployeeCommission(employees));

// Bai 10: Sap xep nhan vien theo thu tu giam dan theo doanh thu
const sortEmployeesByRevenue = (employees) => {
    return [...employees].map(employee => ({
        ...employee,
        revenue: employeeRevenueMapper[employee.id]
    })).sort((a, b) => b.revenue - a.revenue)
}

console.log('Sắp xếp nhân viên giảm dần theo doanh thu')
console.log(sortEmployeesByRevenue(employees))
