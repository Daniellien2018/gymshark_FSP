import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchProduct, getProduct } from "../../store/products";
import "./index.css"
import { fetchCartItems} from "../../store/cart";
import { deleteCartItem } from "../../store/cart";
import { updateCartItem } from "../../store/cart";



const CartListing = ({cartItem}) => {
    // console.log(cartItem)
    // const {quantity, productId, id, userId} = cartItem;
    // const dispatch = useDispatch();
    // const product = useSelector(getProduct(cartItem.productId));
    const user = useSelector(state => state.session.user)
    // const [count, setCount] = useState(quantity);
    const [deleted, setDeleted] = useState(false);
    const history = useHistory();
    // console.log(user)

    return (
        <>
        <h1>hi i am item biggest title</h1>
        {/* <h2>part 2 to title</h2> */}
        {/* <p>{user.id}</p> */}
        {/* <p>{user.name}</p> */}
        
        </>
        
        
    )

    // const {quantity, productId, id} = cartItem;
    // const dispatch = useDispatch();
    // const product = useSelector(getProduct(cartItem.productId))
    // const user = useSelector(state => state.session.user)
    // const [count, setCount] = useState(quantity)
    // const [deleted, setDeleted] = useState(false)
    // const history = useHistory();


    // useEffect( () => {
    //     dispatch(fetchProduct(productId))
    //     dispatch(fetchCartItems())
    // }, [deleted])

    // if (!user) return history.push("/signup")
    // if (!product) return null

    // const {name, photoUrl, price} = product

    // const handleDelete= (e) => {
    //     e.preventDefault();
    //     dispatch(deleteCartItem(id))
    //     setDeleted(true)
    // }

    // const handleInput = () => {
    //     let input = parseInt(document.getElementById("cart-input").value)
    //     if (input > 0){
    //         setCount(input)
    //     }else{
    //         setCount("")
    //     }
    // }

    // const handleUpdate = () => {
    //     const userId = user.id
    //     const updatedCartItem = {
    //         cartItem: {
    //             id: id,
    //             quantity: count, 
    //             productId: productId,
    //             userId: userId
    //         }
    //     }
    //     return dispatch(updateCartItem(updatedCartItem))
    // }


}

export default CartListing