import './App.css'

const App = () => {
  return (
    <>
      <div className='cart-navbar'>
        <img src="https://static.lenskart.com/media/desktop/img/site-images/main_logo.svg" alt="lenskart-logo" />

        <div className='shield-content'>
          <img src="https://static.lenskart.com/media/desktop/img/DesignStudioIcons/Shield.svg" alt="shield" />
          <p>100% safe and secure</p>
        </div>
      </div>

      <div className='continue-shopping'>
        <p>Your shopping cart is empty!</p>
        <button>Continue Shopping</button>
      </div>

      <div className='icon-buttons'>
        <button className='icon-button'>💬</button>
      </div>
    </>
  );
}

export default App;