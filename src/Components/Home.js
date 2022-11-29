import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Image, Box, Text, Heading, Button } from '@chakra-ui/react'
import logo from '../myPortfolioPreview/banner.jpg';
import profilePic from '../myPortfolioPreview/myProfile.jpg';

const Home = () => {
  return (
    <Box>
      <Navbar />

      <Box style={{ position: "relative" }}>
        <Image src={logo} alt="logo" height={{ base: "668px", sm: '500px', md: '500px', lg: '669px', xl: "668px" }} width={{ base: "100%" }} />
        <Box style={{ position: "absolute", top: "40%", left: "10%", color: "white", zIndex: "3", textAlign: "left" }}>
          <Text fontSize={"32px"}>Hello, I'm a</Text>
          <Text fontSize={{ base: "70px", sm: "50px", lg: '70px', xl: '70px' }}>MERN Developer</Text>
          <Button border={"1px"} padding={{ base: "30px", sm: '13px', md: '14px' }} color={"black"} bg="skyblue" fontSize={{ base: "21px", sm: "18px", md: "20px" }}>Resume</Button>
        </Box>
      </Box>

      <Box bg={"red.100"} padding="6%">
        <Heading mt={{ sm: "5%", lg: "3%", xl: "3%" }}> <u>About me</u> </Heading>
        <Box display={"flex"} flexDirection={{ base: "row", sm: "column", md: "column", lg: "row", xl: "row" }} gap="15%">
          <Image mt={{ base: "5%", sm: "10%", md: "10%", lg: "5%", xl: "5%" }} src={profilePic} borderRadius="50%" h={"380px"} w={"380px"} alt='profile' />
          <Box mt={"9%"} textAlign="left">
            <Heading w={"300px"} fontSize={"24px"}>I'm Pushpendra Singh</Heading>
            <Text fontSize={"22px"} color={"blue.300"}>I'm a Coder, Problem Solver</Text>
            <Text>A passionate JAVASCRIPT Front-end Developer, Dedicated to developing 3D Image Slider Cube applications that interact with the Frontend part of slider applications. Extensive expertise in website architecture, design, and Context API designs. Problem-solving mindset with a goal to optimize my application for better stability and speed. Love to work in a team.</Text>
          </Box>
        </Box>
      </Box>




      <Box bg="black" height="600px">
        <Text fontSize={"39px"} color={"white"}> <u>My Services</u> </Text>
      </Box>

      <Footer />
    </Box>
  )
}

export default Home;