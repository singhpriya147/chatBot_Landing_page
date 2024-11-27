import './Feature.css'

import featImg from '../../assets/chatbot-feature_converted-removebg-preview(1).png';
const Feature = () => {
  return (
    <section className='feature-section'>
      <div className='feature-header'>
        <h2>Advanced AI Technology</h2>
        <p>
          Our chatbot robots use the latest artificial intelligence technology
          to understand and respond to cutomer inquiries, provinding accurate
          and efficient asststance.
        </p>
      </div>
    

      <div className='feat-main'>
        <div className='feat-left'>
          <div className='feature'>
            <span>Intelligent conversations</span>
          </div>
          <div className='feature'>
            <span>Analytics and reporting</span>
          </div>
          <div className='feature'>
            <span>Always-on accessibility</span>
          </div>
        </div>
        <div className='feat-img'>
          <img src={featImg}   alt="" />
        </div>
        <div className='feat-right'>
          <div className='feature'>
            <span>Personalized interactions</span>
          </div>
          <div className='feature'>
            <span>Multi-language support</span>
          </div>
          <div className='feature'>
            <span>Secure data encryption</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature