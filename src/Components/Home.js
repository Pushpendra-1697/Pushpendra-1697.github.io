import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import { Image, Box, Text, Heading, Button } from '@chakra-ui/react'
import logo from '../myPortfolioPreview/https___www.lifeofpix.com_wp-content_uploads_2018_10_dsc-8355.jpg';

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Box style={{ position: "relative" }}>
        <Image src={logo} alt="logo" height={"-moz-max-content"} />
        <Box style={{ position: "absolute", top: "40%", left: "10%", color: "white", zIndex: "3", textAlign: "left" }}>
          <Text fontSize={"23px"}>Hello, I'm a</Text>
          <Text fontSize={"70px"}>Java Developer</Text>
          <Button border={"1px"} padding={"30px"} color={"black"} bg="skyblue" fontSize={"21px"}>Resume</Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  )
}

export default Home;