function ProductCard(){
    const productName="devastra"
    const price=30
    const isAvailable=true
    return(
        <div>
            <p>Product name:{productName}</p>
            <p>Price :{price}</p>
            <p>{isAvailable==true?"Stock is available":"Stock is not available"}</p>
        </div>
    )
}

export default ProductCard