import lasagna from './imgs/lasagna.png';
import pizza from './imgs/pizza.png';
import hamburguer from './imgs/hamburguer.png';
import ramen from './imgs/ramen.png';

function createMenu()
{
    
    const menu = document.createElement('div')
    const main = document.querySelector('#container');
    menu.classList.add('menu')
    main.removeChild(main.lastChild);
    main.appendChild(menu);

    displayProducts(menu);

  
    return menu;

}

function displayProducts(menu)
{
    const product = productStock();

    for(let keys in product.meals)
    {
        const prodContainer = document.createElement('div');
            prodContainer.classList.add('product-container')
                menu.appendChild(prodContainer);
        const prodItem = document.createElement('div');
            prodItem.classList.add('title');
            prodItem.textContent = product.meals[keys];
                prodContainer.appendChild(prodItem);
        const prodImg = document.createElement('img');
            prodImg.src = product.prodImg[keys];
            prodImg.classList.add('product-img');
                prodContainer.appendChild(prodImg);        
        const prodDesc = document.createElement('div');
            prodDesc.textContent = product.description[keys];
            prodDesc.classList.add('product-desc');
                prodContainer.appendChild(prodDesc);     
        const prodPrice = document.createElement('div');
            prodPrice.classList.add('product-price');
            prodPrice.textContent = product.prices[keys];
                prodContainer.appendChild(prodPrice);
    
            
            
    }

}


function productStock()
{
    const meals = [
        'Lasagna',
        'Pizza',
        'Hamburguer',
        'Ramen',
    ];
    const prodImg = [
        lasagna,
        pizza,
        hamburguer,
        ramen
        ];
    const description = [
        'A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella.',
        'The classic flavours of Italy – Our home made tomato sauce, Grana Padano, Mozzarella and fresh basil all dressed with your choice of the finest extra virgin olive oils.',
        'A huge single hamburguer with all the fixings, cheese, lettuce, tomato, onions and special sauce or mayonnaise!',
        'Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg',
    ];

    const prices = [
        '$10',
        '$20',
        '$5',
        '$2',
    ];
    return {meals,prices,description,prodImg}
}



export default createMenu;