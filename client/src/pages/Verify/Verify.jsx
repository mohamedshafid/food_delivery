import React, { useContext } from 'react';
import './Verify.css';
import { ShowContext } from '../../Context/ShowContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ordered from "../../assets/ordered.jpg"

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useContext(ShowContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const orderId = searchParams.get("orderId");
  const success = searchParams.get("success");
  return (
    <div className="verify">
      <h1>Verified Successfully</h1>
      <h2>Order Id: {orderId}</h2>
      <div className="card">
        <div className='card-color'>
            <button onClick={()=>navigate('/')}>Go to Home</button>
        </div>
      </div>
    </div>
  )
}

export default Verify
