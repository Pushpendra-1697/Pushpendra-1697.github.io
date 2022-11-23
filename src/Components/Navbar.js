import { Link, NavLink } from 'react-router-dom';
import { Text, Image, Button, Box } from '@chakra-ui/react';
const links = [
    {
        to: "#",
        title: "Home",
    },
    {
        to: "#",
        title: "About",
    },
    {
        to: "#",
        title: "Skills",
    },
    {
        to: "#",
        title: "Projects",
    },
    {
        to: "#",
        title: "Contact",
    }
];
const Navbar = () => {
    return (
        <Box style={{ display: "flex",justifyContent: "space-around", padding: "20px", position:"sticky", top: '0.5px', zIndex:"20", backgroundColor: "black"}}>
            <Link to={"#"} style={{ fontSize: "25px", color: "skyblue" }}> Pushpendra Singh </Link>
            <Box style={{display: "flex", gap:"5%", fontSize: "20px", color: "white"}}>
                {links.map((ele) =>
                    <NavLink
                        key={ele.to}
                        to={ele.to}
                        end
                    >
                        {ele.title}
                    </NavLink>
                )}
            </Box>
        </Box>
    );
}
export default Navbar;