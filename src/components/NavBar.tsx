import "./NavBar.css"
import { Flex } from "@radix-ui/themes"
import logo from "../../images/autumnLogo.jpeg"
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate()

  const handleGoToHome = () => {
    navigate('/')
  }

  return (
    <>
    <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            backgroundColor: 'white',
            width: '100%',
            zIndex: 2000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 0px'
        }}>
      <Flex style={{ width: '100%', height: '100%' }}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} onClick={handleGoToHome} className="logo" />
      </Flex>
      </div>
    </>
  )
}

export default NavBar;