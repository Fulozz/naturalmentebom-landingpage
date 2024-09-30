/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/naturalmentebom-logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { House, Info,  Phone, AlignJustify,ArrowRight } from "lucide-react";
import { Link } from "@mui/material";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <House />,
      href: "#principal",
    },
    {
      text: "Sobre",
      icon: <Info />,
      href: "#about",
    },
    {
      text: "Funcionamento",
      icon: <ArrowRight />,
      href: "#work",
    },
    {
      text: "Contato",
      icon: <Phone />,
      href: "#contato",
    }
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="#home">Home</a>
        <a href="#about">Sobre</a>
        <a href="#contato">Contato</a>
        <a href="https://wa.me/5511972694511?text=Olá! vocês fazem entrega em residencia?" target="_blank" rel="noreferrer" className="primary-button">Agende agora</a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((data) => (
              <ListItem key={data.text} disablePadding>
                <Link href={data.href} underline="none"> 
                <ListItemButton>
                  <ListItemIcon>{data.icon}</ListItemIcon>
                  <ListItemText primary={data.text} />
                  
                </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
