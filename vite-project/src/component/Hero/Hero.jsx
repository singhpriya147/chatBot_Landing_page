// import './Hero.css';
// import HeroImg from '../../assets/ai-generated-8741448_1280_1_-removebg-preview.png';
// import { useState } from 'react';
// import ChatBotComp from '../chatBot/ChatBotComp'
// const Hero = () => {
//   const [isOpen,setIsOpen]=useState(false);
// const handleClick=()=>{
//   setIsOpen((prev)=>!prev);
// }
//   return (
//     <div className='hero-wrapper'>
//       <div className='hero-left'>
//         <div className='hero-txt'>
//           <h1>
//             Revolutionize <br />
//             Customer Service <br />
//             with chatbot
//           </h1>
//         </div>
//         <div className='hero-subtxt'>
//           <p>
//             Meet your AI-powered companion that’s designed to assist, simplify,
//             and enhance your everyday tasks.Our chatbot is here to make your
//             life easier—anytime, anywhere.
//           </p>
//         </div>
//         <div className='cta-btn'>
//           <button onClick={handleClick}>Get Started</button>
        
//         </div>
//       </div>
//       <div className='hero-img'>
//             <img src={HeroImg} alt="" />
//       </div>
//       {isOpen? <ChatBotComp/>:""}
//     </div>
//   );
// }

// export default Hero



import './Hero.css';
import HeroImg from '../../assets/ai-generated-8741448_1280_1_-removebg-preview.png';
import { useState } from 'react';
import ChatBotComp from '../chatBot/ChatBotComp';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div className='hero-wrapper'>
      <div className='hero-left'>
        <div className='hero-txt'>
          <h1>
            Revolutionize <br />
            Customer Service <br />
            with chatbot
          </h1>
        </div>
        <div className='hero-subtxt'>
          <p>
            Meet your AI-powered companion that’s designed to assist, simplify,
            and enhance your everyday tasks. Our chatbot is here to make your
            life easier—anytime, anywhere.
          </p>
        </div>
        <div className='cta-btn'>
          <button onClick={handleClick}>Get Started</button>
        </div>
      </div>
      <div className='hero-img'>
        <img src={HeroImg} alt='' />
      </div>

      {/* Modal Dialog */}
      {isOpen && (
        <div className='modal-backdrop' onClick={closeDialog}>
          <div
            className='modal-container'
            onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing modal
          >
            <button className='close-btn' onClick={closeDialog}>
              ✖
            </button>
            <ChatBotComp />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
