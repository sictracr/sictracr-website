"use client"
import { Box, Link } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import NextLink from 'next/link'

const FooterContact = () => {
    return (
        <Box>
            <Box display="flex">
                <Box w="30%">
                    <Box display="flex" alignItems="center" mb="4">
                        <Box as="span" mr="2" fontSize="25"><FaPhone /></Box>
                        <Box as="span" fontSize="14" fontWeight="bold" >2221-4558</Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box as="span" mr="2" fontSize="25"><IoLogoWhatsapp /></Box>
                        <Box as="span" fontSize="14" fontWeight="bold">7040-1647</Box>
                    </Box>
                </Box>
                <Box w="50%">
                    <Box display="flex" alignItems="center" mb="4">
                        <Box as="span" mr="2" fontSize="25"><FaFacebook/></Box>
                        <Link as={NextLink} href='https://www.facebook.com/profile.php?id=100094634959181&locale=es_LA' fontSize="14" fontWeight="bold">SICTRA CR</Link>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <Box as="span" mr="2" fontSize="25"><BsInstagram /></Box>
                        <Link as={NextLink} href='https://www.instagram.com/sictra.cr1/' fontSize="14" fontWeight="bold">sictra.cr1</Link>
                    </Box>
                </Box>
            </Box>
            <Box mt="4">
                <Box display="flex" alignItems="center">
                    <Box as="span" mr="2" fontSize="25"><HiOutlineMailOpen /></Box>
                    <Box as="span" fontSize="14" fontWeight="bold">servicioalcliente@sictracr.com</Box>
                </Box>
            </Box>
        </Box>
    );
}
  
export default FooterContact