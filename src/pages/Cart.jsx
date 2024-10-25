import React, { useEffect, useState } from 'react';
import '../pages/Cart.css';
import Navbar from '../components/Navbar';
import CartTable from '../components/CartTable';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import EmptyCart from '../components/EmptyCart';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartData } from '../slices/cartSlice';
import LoadingCat from '../components/LoadingCat';
import CheckOutPage from './CheckOutPage';
import PaymentInfo from '../components/PaymentInfo';


const Cart = () => {

  const user_id = localStorage.getItem("userId")
  const dispatch = useDispatch()
  const cartCount = useSelector((state) => state.cart.items.length)
  console.log(cartCount)

  const [Loading, setLoading] = useState(true)
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {

    const fetchData = async () => {
      await dispatch(fetchCartData(user_id))
      setLoading(false)
    }
    fetchData()
  }, [dispatch, user_id])

  const stepperStatus = (stepperId) => {
    setCurrentStep(stepperId)
  }

  return (
    <div className='page'>
      <div className='navbar-section'>
        <Navbar />
      </div>
      <div className='content'>
        <div className='cart-title'>Cart</div>

        {Loading ? (<LoadingCat />) : cartCount > 0 ? (<><div className='cart-navigation-space'>
          <div className='cart-navigation-btns'>
            <div onClick={() => stepperStatus(1)} className={`navigation-content ${currentStep === 1 ? ('on-process') : ('off-process')}`}>
              <div className={`navigation-count-btn ${currentStep === 1 && ('on-process-bg')}`}>1</div>
              <div className='navigation-btn-text'>Shopping Cart</div>
            </div>

            <div onClick={() => stepperStatus(2)} className={`navigation-content ${currentStep === 2 ? ('on-process') : ('off-process')}`}>
              <div className={`navigation-count-btn ${currentStep === 2 && ('on-process-bg')}`}>2</div>
              <div className='navigation-btn-text'>Checkout details</div>
            </div>
            <div onClick={() => stepperStatus(3)} className={`navigation-content ${currentStep === 3 ? ('on-process') : ('off-process')}`}>
              <div className={`navigation-count-btn ${currentStep === 3 && ('on-process-bg')}`}>3</div>
              <div className='navigation-btn-text'>Payment</div>
            </div>
          </div>
        </div>
          {
            currentStep === 1 && (<div className='cart-display-container'>
              <div className='cart-display-left'>
                <CartTable />
              </div>
              <div className='cart-display-right'>
                <CartSummary onStepChange={setCurrentStep} />
              </div>
            </div>)
          }
          {currentStep === 2 && (<div><CheckOutPage onStepChange={setCurrentStep} /></div>)}
          {currentStep === 3 && (<div><PaymentInfo onStepChange={setCurrentStep} /></div>)}
        </>
        ) :
          (<EmptyCart />)}
      </div>
    </div>
  )
}

export default Cart