const products = [
    {

    id: 1,
    product_name: 'Adidas Velosamba',
    price: 2000000,
    kuantitas: 20,
    deskripsi: 'Sepatu kalcer pesepeda',
    img_url: 'product/velosamba.webp'
    },
    {

    id: 2,
    product_name: 'Adidas Campus',
    price: 1000000,
    kuantitas: 5,
    deskripsi: 'Sepatu Gendut',
    img_url: 'product/campus.jpg'
    },
    {

    id: 3,
    product_name: 'Adidas Spezial ',
    price: 2300000,
    kuantitas: 3,
    deskripsi: 'Sepatu kalcer ',
    img_url: 'product/spezial.jpeg'
    },

]
const listProduct = document.getElementById('list-product')

const productView = products.map(product => 
    `<div class="row">
            <div class="col-lg-4 col-12"></div>
        </div>
        <div class="card" style="width: 18rem;">
        <img src="${product.img_url}" class="card-img-top" alt="Velosamba">
        <div class="card-body">
          <h5 class="card-title">${product.product_name}</h5>
          <p class="card-text">Harga: <span>${product.price}</span></p>
          <p class="card-text">Kuantitas: <span>${product.kuantitas}</span></p>
          <p class="card-text">Deskripsi: <span>${product.deskripsi}</span></p>
          <a href="#" class="btn btn-primary">
            <i class="fa-solid fa-cart-shopping text-light"></i>
            Add To Cart
          </a>
        </div>
      </div>`
).join(",").replaceAll(",")

listProduct.innerHTML = productView

