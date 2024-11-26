import './Navbar.css';
const Navbar = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h2>
          NEXA
        </h2>
        </div>
      <div>
        <ul className='nav-links'>
          <li>About</li>
          <li>Services</li>
          <li>Blogs</li>
          <li>FAQs</li>
        </ul>
      </div>
      <div className='nav-btn'>
        <button>Sing In</button>
        <button>Sing Up</button>
      </div>
    </div>
  );
};
export default Navbar;
