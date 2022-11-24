import { Link, NavLink } from 'react-router-dom';
import { Button, Box, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
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
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box position={{ base: "sticky", sm: "sticky", lg: "sticky", xl: "sticky" }} style={{ display: "flex", justifyContent: "space-around", padding: "20px", top: '0.5px', zIndex: "20", backgroundColor: "black" }}>
            <Link to={"#"} style={{ fontSize: "25px", color: "skyblue" }}> Pushpendra Singh </Link>
            <Box display={{ base: "block", sm: "none", md: "none", lg: "flex", xl: "flex" }} fontSize={"21px"} gap="20px" color={"white"}>
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

            <Box display={{ base: "none", sm: "block", md: "block", lg: "none", xl: "none" }}>
                <Button onClick={onOpen}><GiHamburgerMenu /></Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Pages</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box color={"blue.400"} fontSize={"21px"} display="flex" flexDirection={"column"} textAlign="center">
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
                        </ModalBody>
                        <ModalFooter>
                            <Button bg='black' color={"blue.400"} mr={3} onClick={onClose}>
                                Close
                            </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>

        </Box>
    );
}
export default Navbar;