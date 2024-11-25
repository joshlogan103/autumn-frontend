import "./NavBar.css"
import { DropdownMenu, Button } from "@radix-ui/themes"
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router-dom"
import Logo from "../Logo/Logo.tsx"

const NavBar = () => {


  return (
    <>
      <div className="navbar">
        <Logo />
        <div className="menu-root">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Button m="3" variant="surface">
                <TextAlignJustifyIcon />
              </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Item asChild>
                <NavLink to="/">Home</NavLink>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <NavLink to="/about">About Us</NavLink>
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>
    </>
  )
}

export default NavBar;