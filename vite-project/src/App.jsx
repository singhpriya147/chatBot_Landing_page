
import './App.css'
import Navbar from './component/navbar/Navbar'
import Hero from './component/Hero/Hero'
import Pricing from './component/Pricing/Pricing'
import About from './component/About/About'
import Feature from './component/features/Feature'
// import ChatBotComp from './component/chatBot/ChatBotComp'
function App() {
 

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Feature />
        {/* <ChatBotComp /> */}
        <Pricing />
        <About />
      </div>
    </>
  );
}

export default App
