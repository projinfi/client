import React, { useEffect, useState } from 'react';
import '../pages/Cart.css';
import Navbar from '../components/Navbar';
import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import EmptyCart from '../components/EmptyCart';
import { useSelector,useDispatch} from 'react-redux';
import { fetchCartData } from '../slices/cartSlice';
import LoadingCat from '../components/LoadingCat';


const Cart = () => {

  const user_id = localStorage.getItem("userId")
  const dispatch = useDispatch()
  const cartCount = useSelector((state)=>state.cart.items.length)
  console.log(cartCount)

  const [Loading,setLoading] = useState(true)

  useEffect(()=>{
 
    const fetchData = async() => {
      await dispatch(fetchCartData(user_id))
      setLoading(false)
    }
    fetchData()
  },[dispatch,user_id])

  return (
   <div className='page'>
     <div className='navbar-section'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='cart-title'>Cart</div>

        { Loading ? (<LoadingCat/>)  : cartCount > 0 ? (<><div className='cart-navigation-space'>
          <div className='cart-navigation-btns'>
            <div className='navigation-content on-process'>
              <div className='navigation-count-btn on-process-bg'>1</div>
              <div className='navigation-btn-text'>Shopping Cart</div>
            </div>

            <div className='navigation-content off-process'>
              <div className='navigation-count-btn '>2</div>
              <div className='navigation-btn-text'>Checkout details</div>
            </div>

            <div className='navigation-content off-process'>
              <div className='navigation-count-btn'>3</div>
              <div className='navigation-btn-text'>Order complete</div>
            </div>
          </div>
        </div>

        <div className='cart-display-container'>
          <div className='cart-display-left'>
          <CartTable/>
          </div>
          <div className='cart-display-right'>
           <CartSummary/>
          </div>
        </div></>):(  <EmptyCart/>)}
      </div>
   </div>
  )
}

export default Cart