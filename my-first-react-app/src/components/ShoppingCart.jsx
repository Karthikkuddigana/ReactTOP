import { useState } from "react";
import { useEffect } from "react";
function ProductContainer({product,cart,setCart}){
    const [cartCount,setCartCount]=useState(0); 
    console.log(product)
    const addToCart=()=>{
        setCartCount(cartCount+1)
        console.log(cart.count)
        setCart({count:cart.count+1})
    }
    return (
    <>
        <div>
            <div>{product.title}</div>
            <div>{product.price}</div>
            <div><button onClick={addToCart}>Add to Cart</button></div>
            <div>{cartCount}</div>
        </div>
    </>)
}
function ShoppingCart(){
    const [loading,setLoading]=useState(true); 
    const [products,setProducts]=useState(); 
    const [cart,setCart]=useState({count:0}); 
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json)=>{
        console.log(json); 
        setProducts(json); 
        setLoading(false); 
    })},[]);
    return (
        <>
        <div>Cart : {cart.count}</div>
        <div style={{display: 'grid', gridTemplateColumns: '25% 25% 25%'}}>
        {!loading && products.map((product)=>{
            return <ProductContainer product={product} key={product.id} setCart={setCart} cart={cart}></ProductContainer>

        })}
        <div>Hello world</div>
    </div>
        </>
    )
}
export default ShoppingCart; 