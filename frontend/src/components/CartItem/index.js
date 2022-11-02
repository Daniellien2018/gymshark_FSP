import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProduct, fetchProducts, getProduct } from "../../store/products";
import "./index.css"
import { fetchCartItems} from "../../store/cart";
import { deleteCartItem } from "../../store/cart";
import { updateCartItem } from "../../store/cart";



const CartItem = ({cartItem, setSubamount}) => {
    const {quantity, productId, id, userId} = cartItem;
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cartItem.productId));
    const user = useSelector(state => state.session.user)
    const [count, setCount] = useState(quantity);
    const history = useHistory();

    useEffect( () => {
        dispatch(fetchProduct(productId))
    }, [])

    if (!user) return history.push("/signup");
    if (!product) return null;

    const {name, photoUrl, price} = product

    const handleDelete= (e) => {
        // console.log("hello from delete")
        e.preventDefault();
        dispatch(deleteCartItem(id))//product
        // setDeleted(true)
    }

    const handleInput = () => {
        let input = parseInt(document.getElementById("cart-input").value)
        if (input > 0){
            setCount(input)
        }else{
            setCount("")
        }
    }

    const handleUpdate = () => {
        const userId = user.id;
        const upCartItem = {
            cartItem: {
                id: id,
                quantity: count,
                productId: productId,
                userId: userId
            }
        }
        return dispatch(updateCartItem(upCartItem))
    }

    setSubamount((count * price))
    

    return (
        <>
        <div id="cart-listing-wrapper">
            <img id="cart-listing-img" src={photoUrl} alt="product"/>
            <div id="listing-text">
                <div className="listing-text-second">
                    <div id="listing-name" className="listing-details">{name}</div>
                    <button id="cart-remove" className="fa-solid fa-x" value={quantity} onClick={handleDelete}></button>
                </div>
                <div id="listing-price" className='listing-details'>${(Math.round((price) * 100) / 100).toFixed(2)}</div> 
                <div className="listing-amount">
                    <div className='listing-details'>Amount: {quantity}</div>
                    <div className='listing-details' id="listing-subtotal"> ${(Math.round((quantity * price) * 100) / 100).toFixed(2)}</div>
                </div>
                <div id="cart-quantity" className="listing-details">
                    <div className="cart-update">
                        <input type="text" id="cart-input" placeholder={quantity} onChange={handleInput} />
                        <button className="cart-update" id="cart-button" onClick={handleUpdate}>Update Amount</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CartItem;