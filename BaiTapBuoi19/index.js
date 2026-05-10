const products = [
    {id: 1, name: 'iPhone', price: 2000},
    {id: 2, name: 'Samsung', price: 1500},
    {id: 3, name: 'Xiaomi', price: 1000},
    {id: 4, name: 'Oppo', price: 1200}
]
const orders = [
    {
        id: 1,
        items: [
            {productId: 1, quantity: 2},
            {productId: 2, quantity: 1}
        ]
    },
    {
        id: 2,
        items: [
            {productId: 1, quantity: 1},
            {productId: 3, quantity: 3}
        ]
    },
    {
        id: 3,
        items: [
            {productId: 2, quantity: 2},
            {productId: 4, quantity: 1}
        ]
    }
]

const getTopRevenueProduct = (products, orders) => {
//get product quantity
    let productQuantities = {}
    for (let i = 0; i < orders.length; i++) {
        for (let j = 0; j < orders[i].items.length; j++) {
            let item = orders[i].items[j];
            productQuantities[item.productId] = (productQuantities[item.productId] || 0) + item.quantity;
        }
    }

    let revenue = 0;
    let topRevenue = 0;
    let topProduct = {};
    // get total revenue
    for (let i = 0; i < products.length; i++) {
        let totalQuantity = productQuantities[products[i].id];
        revenue = products[i].price * totalQuantity;

        // find top revenue
        if (revenue > topRevenue) {
            topRevenue = revenue;
            topProduct = {
                name: products[i].name,
                revenue: revenue,
                quantity: totalQuantity
            };
        }
    }
    return topProduct
}

let topProduct = getTopRevenueProduct(products, orders)
console.log(`Sản phẩm có doanh thu cao nhất là ${topProduct.name} bán được tổng cộng ${topProduct.quantity} chiếc và có doanh thu là ${topProduct.revenue}`)

