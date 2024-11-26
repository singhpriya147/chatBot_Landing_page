import image from '../../assets/cherrydeck-rMILC1PIwM0-unsplash.jpg';
import './About.css'
const About = () => {
  return (
    <div className='about'>
      <div>
        <h2>About us </h2>
      </div>
      <div className='about-main'>
        <div className='about-detail'>
          <p>
            Bargenix AI is dedicated to empowering e-commerce businesses with
            cutting-edge AI technology. Our AI-based chatbot revolutionizes
            customer interactions, enabling real-time bargaining experiences
            that maximize customer satisfaction and boost seller profitability.
            Seamlessly integrating with various e-commerce platforms, Bargenix
            AI makes deal-making smarter, faster, and more engaging.
          </p>

          <p>
            At Bargenix AI, we are committed to reshaping the landscape of
            e-commerce through our dynamic chatbot technology. Our purpose is to
            provide an efficient bargaining platform that enhances the
            experience for both buyers and sellers. We are dedicated to driving
            customer satisfaction and empowering businesses to achieve greater
            profitability through intelligent negotiation strategies.
          </p>
        </div>
        <div className='about-img'>
          <img src={image} height={350} width={350} alt='' />
        </div>
      </div>
    </div>
  );
}

export default About