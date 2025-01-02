import React from 'react'
import './Home.css'
// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


const Home = () => {
  return (
    <div className='main-div'>
      <div className='image1'>
        <span>
        <img src=" https://tse4.mm.bing.net/th?id=OIP.RG29rXcEW2skGM0uEZjmRwAAAA&pid=Api&P=0&h=180" alt="Food" className="responsive-img"/>
        </span>
        </div>
        <div className='text'>
          <span className='name'>
        Welcome to Pinch of Yum<br/>
        </span>
<span className='name1'>Let’s talk food</span><br/>

<span className='name2'>Shall we?</span><br/>

<span className='name3'>
  Well, we hope that’s why you’re here. Our recipes are designed for real, actual, every day life, and we try to focus on real foods and healthy recipes (which honestly means a lot of different things to us, including the perfect chocolate chip cookie and cheese on cheese on cheese, because health is all about balance, right?).

This is the place to find those recipes — everything from our most popular, to meal prep, to Instant Pot recipes, or if you just, like, have some sad greens in your fridge to use up and you need some inspiration.

You’re here! Have fun. We hope you find something (many things) you love.
</span>
        </div>
        
     
    </div>
    
  )
}

export default Home
