const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
];
//Функция для формирования верстки каждого товара
const renderProduct = (title = 'Mousepad', price = '100р') => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => list.map(item => document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(item.title, item.price)));

renderPage(products);

for (let i = 0; i<3; i++){
    document.querySelector('.products').insertAdjacentHTML('beforeend',renderProduct());
}