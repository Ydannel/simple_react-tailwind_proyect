import React, { useState, useEffect } from 'react';
function App() {
  const [isAnimated, setIsanimated] = useState(false)
    useEffect(() => {
      setIsanimated(true)
    }, [])

  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col-reverse lg:flex-row lg:justify-around' style={{background: 'linear-gradient(to bottom, #F0F4FD, #A1A3BA)'}}>
     
      <div className={`${isAnimated ? 'scale-y-100' : 'scale-y-0' }mt-10 text-center lg:text-left transform transition duration-1000 ease-in-out`}>
        <h1 className='font-black text-5xl lg:text-6xl'>Healthy Delicious <br/>
             <span className="font-quicksand font-light"> Food For You.</span>
            </h1>
        <p className='text-base text-gray-700'>We made this for your health</p>
        <span className='inline-block bg-indigo-500 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'>Explore more</span>
      </div>  
        
      <img src={process.env.PUBLIC_URL + "/assets/food.svg"} alt='food' className={`${isAnimated ? "scale-150" : 'translate-x-full translate-y-full'}w-screen lg:max-w-xl transform transition duration-1000 ease-in-out`}/>
       
    </div>
  );
}

export default App;
