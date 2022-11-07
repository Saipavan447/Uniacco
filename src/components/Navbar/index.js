import {FaAirbnb} from 'react-icons/fa'
import {RiGlobalLine} from 'react-icons/ri'
import {VscThreeBars} from 'react-icons/vsc'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import './index.css'

const Navbar = () => (
  <nav className="nav-container">
    <div className="logo-container" href="https://www.airbnb.co.in/">
      <FaAirbnb size={33} />
      <p className="logo-name">airbnb</p>
    </div>
    <div className="nav-container1">
      <a className="become" href="https://www.airbnb.co.in/host/homes">
        Become a host
      </a>
      <RiGlobalLine size={18} cursor="pointer" />
      <div className="drop-down">
        <button type="button" className="drop-button">
          <VscThreeBars size={20} color="#000000" />
          <AccountCircleRoundedIcon fontSize="large" sx={{color: 'grey'}} />
        </button>
        <div className="drop-down-options">
          <a href="https://www.airbnb.co.in/signup_login">Sign up</a>
          <a href="https://www.airbnb.co.in/login">Login</a>
          <hr />
          <a href="https://www.airbnb.co.in/host/homes">Host your home</a>
          <a href="https://www.airbnb.co.in/host/experiences?from_nav=1">
            Host an experience
          </a>
          <a href="https://www.airbnb.co.in/help?audience=guest">Help</a>
        </div>
      </div>
    </div>
  </nav>
)
export default Navbar
