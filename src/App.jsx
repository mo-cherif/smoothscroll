import { useState } from 'react'
import './App.css';
import phone from "./assets/phone.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <div className='carousels'>
          <div className='carousel'>
              <h2>IPHONE 13 PRO</h2>
              <h3>Oh. So. Pro.</h3>
              <p>Now in  blue . From $999.00 or 
                $41.62/mo. for 24/mo.*</p>
              <img 
                width={300}
                src={phone}
                alt="" 
              />


          </div>

          <div className='carousel'>
              <h2>IPHONE 13 PRO</h2>
              <h3>Oh. So. Pro.</h3>
              <p>Now in  blue . From $999.00 or 
                $41.62/mo. for 24/mo.*</p>
              <img 
                width={300}
                src={phone}
                alt="" 
              />


          </div>

          <div className='carousel'>
              <h2>IPHONE 13 PRO</h2>
              <h3>Oh. So. Pro.</h3>
              <p>Now in  blue . From $999.00 or 
                $41.62/mo. for 24/mo.*</p>
              <img 
                loading='lazy'
                decoding='async'
                width={300}
                src={phone}
                alt="" 
              />


          </div>

        

          
       </div>

       <h1>Mohamed CHERIF</h1>
       <p>Engineer 🍵</p>
    </div>
  )
}

export default App
