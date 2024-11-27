import './Pricing.css'
import { pricingPlans } from '../../assets/PricingPlans';
import  tick  from '../../assets/icons/check.png';
const Pricing = () => {
  return (
    <section className='pricing-section'>
      <h2>Choose your right plan!</h2>
      <p>
        Select from best plans, ensuring a perfect match. Need more or less?
        <br></br>Customize your subscription for a seamless fit!
      </p>
      <div className='pricing-cards'>
        {pricingPlans.map((plan, index) => (
          // <div className={`card ${plan.popular ? 'popular' : ''}`} key={index}>
          <div className='card' key={index}>
            <h3>{plan.title}</h3>
            <span className='subtitle'>{plan.subtitle}</span>
            <p className='price'>{plan.price}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx} className='list'>
                  <img src={tick} height={10} width={10} alt='' />
                  {feature}
                </li>
              ))}
            </ul>
            <button className='cta-btn'>{plan.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Pricing