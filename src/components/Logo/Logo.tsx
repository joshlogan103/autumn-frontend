import { NavLink } from 'react-router-dom';
import './Logo.css';

const Logo = () => {

  return (
    <>
      <NavLink to='/'>
        <img src='/images/autumnLogo.jpeg' alt='Logo' className='logo'/>
      </NavLink>
    </>
  )
}

export default Logo;