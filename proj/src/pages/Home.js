import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div id='Home'className='homepage' >
    <TypeAnimation
      sequence={[
        'Hello, Im Yulia',
        1000, 
        'Get to know me and my coding journey',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={0}
    />
    </div>
  );
};
  
export default Home;
