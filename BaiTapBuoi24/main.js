const getProducts = async () => {
    try {
        const response = await fetch(
            'https://fakestoreapi.com/products'
        )
        const productData = await response.json()
        return productData
    } catch (error) {
        alert('get data fail')
    }
}


document

const renderCategory = (product) => {
    return `<div class="category-item relative hover:bg-[#EDF2FF] hover:text-[#7670D9] hover:rounded-xl mb-1">
                    <p class="bg-[#EDF2FF]text-[#7670D9] rounded-xl px-4 py-2 text-sm ">${product[0]}</p>
                    <div
                        class="bg-gray-200 w-4 h-4 rounded-full text-[12px] flex items-center justify-center text-gray-500 absolute top-[10px] right-4">
${product[1]}</div>
                </div>`
}
const renderProductCard = (product) => {
    return ` <div class="flex flex-col p-4 bg-white rounded-lg">
                    <!-- image  -->
                    <div class="relative">
                        <span class="absolute bg-white shadow-sm rounded-xl py-1 px-2 text-[12px]">${product.category}</span>
                        <img src="${product.image}" alt="" class="w-full h-full object-cover">
                    </div>

                    <!-- content  -->
                    <div class="flex-1 mt-2 border-b border-gray-300">
                        <p>${product.title}</p>
                        <div class="flex items-center gap-1 text-sm my-2">
                            <i class="fa-solid fa-star text-yellow-300"></i>
                            <span>${product.rating.rate}</span>
                            <span class="text-gray-400">(${product.rating.count})</span>
                        </div>
                    </div>

                    <!-- footer -->
                    <div class="flex items-center mt-auto pt-4 justify-between">
                        <span class="text-lg text-blue-700 font-bold">$${product.price}</span>
                        <div class="bg-black hover:bg-slate-800 p-2 rounded-lg btn-add">
                            <i class="fa-solid fa-cart-shopping text-white"></i>
                        </div>
                    </div>
                </div>`
}

const getCategoryCounts = (products) => {
    let categoryCounts = {}
    products.forEach(product => {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + 1
    });
    return categoryCounts
}

let currentCategory = ''
let currentKeyword = ''

const renderCategoryList = (products) => {
    const categoryCounts = getCategoryCounts(products)
    document.querySelector(".categories").innerHTML += Object.entries(categoryCounts).map(product => renderCategory(product)).join("")

}



const categoryEvent = (products) => {
    const selectedCategory = document.querySelectorAll('.category-item')
    selectedCategory.forEach(p => {
        p.addEventListener('click', () => {
            selectedCategory.forEach(p => {
                p.classList.remove('active')
            })
            p.classList.add('active')
            const categoryName = p.querySelector('p') ? p.querySelector('p').textContent : ''
            currentCategory = categoryName
            renderProductList(products)
        })
    })
}



const handleAddToCart = () => {
    let count = 0

    document.querySelector('.card-item')
        .addEventListener('click', (e) => {

            const btn = e.target.closest('.btn-add')

            if (!btn) return

            document.querySelector('.quality-product').innerText = ++count
        })

}


const filterProducts = (products) => {
    return products.filter(product => {
        const matchCategory =
            !currentCategory ||
            product.category === currentCategory

        const matchKeyword =
            !currentKeyword ||
            product.title?.toLowerCase().includes(currentKeyword.toLowerCase())

        return matchCategory && matchKeyword
    })
}

const searchEvent = (products) => {
    const searchEl = document.querySelector('.search')
    searchEl.addEventListener('input', (e) => {
        currentKeyword = e.target.value
        renderProductList(products)
    })
}

const renderProductList = (products) => {
    const selectedCategory = filterProducts(products)
    document.querySelector(".card-item").innerHTML = selectedCategory.map(product => renderProductCard(product)).join("")

}


const init = async () => {
    const products = await getProducts()

    renderCategoryList(products)
    searchEvent(products)
    categoryEvent(products)
    renderProductList(products)
    handleAddToCart()
}


init()