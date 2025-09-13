
function ProductCard(product){
    return(
        <div className="box1">
            <h3 className="title">Product name:{product.productName}</h3>
            <p className="price">Price :{product.price}</p>
            {product.isAvailable===true?<p className="instock">In Stock</p>:<p className="outstock">Out of Stock</p>}
        </div>
    )
}

export default ProductCard