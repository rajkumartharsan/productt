import React, { useState } from 'react';
import { Link } from 'react-router-dom';        // Import Link component
import Navbar from '../component/Navbar';
import { FaStar } from 'react-icons/fa';
import greenTea from '../assets/greenTea.jpg';
import { MdClose } from 'react-icons/md';    // Import the close icon

export default function Seeproduct() {
  const [size, setSize] = useState(0);

  const increaseSize = () => {
    setSize(prevSize => prevSize + 1);
  };

  const decreaseSize = () => {
    if (size > 1) {
      setSize(prevSize => prevSize - 1);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: '#ADF294', padding: '20px', marginLeft: '120px', marginRight: '120px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '1' }}>
            {/* image */}
            <img src={greenTea} alt="Product" style={{ width: '300px', height: '300px', borderRadius: '20px' }} />
          </div>
          <div style={{ flex: '2', paddingLeft: '20px' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>Gajentha Tea leaves</h1>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Render star icons */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} color="#ffc107" />
              ))}
            </div>
            <p style={{ marginTop: '10px' }}>Experience the art of tea-making with our handpicked tea leaves,<br /> each offering a unique blend of flavors that will elevate your<br /> tea-drinking experience.</p>
            <select style={{ marginBottom: '10px' }}>
              <option value="250g">250g</option>
              <option value="500g">500g</option>
              <option value="1000g">1000g</option>
              <option value="2000g">2000g</option>
            </select>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="number"
                pattern="[0-9]*"
                placeholder="size"
                style={{ width: '60px' }}
                min="0"
                max="999"
                value={size}
                onChange={e => setSize(e.target.value)}
              />
            </div>
            <div>
              <button className='bg-green-800 text-white rounded-2xl w-[100px] text-center py-1   ml-10 mt-5 mr-10 cursor-pointer hover:opacity-80 '>Add to cart</button>
              <Link to="/order" className='bg-green-800 text-white rounded-2xl w-[100px] text-center py-1 px-10  ml-10 mt-1 mr-10 cursor-pointer hover:opacity-80 '>Pay</Link>
            </div>
          </div>
        </div>
      </div>
      <h3 className='bg-green-700 text-white rounded-2xl w-30 text-center py-1  ml-[1000px] mr-[140px] mt-5   '>Add your feedbacks..</h3>

    </div>
  );
}
