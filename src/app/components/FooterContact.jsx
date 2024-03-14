"use client"
import { Box, Text, Center } from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";

const FooterContact = () => {
    return (
        <Box>
            <Box display="flex">
                <Box>
                    <Box display="flex">
                        <Box as="span"><FaPhone /></Box>
                        <Box as="span">2221-4558</Box>
                    </Box>
                    <Box display="flex">
                        <Box as="span"><IoLogoWhatsapp /></Box>
                        <Box as="span">7040-1647</Box>
                    </Box>
                </Box>
                <Box>
                    <Box display="flex">
                        <Box as="span"><FaFacebook /></Box>
                        <Box as="span">SICTRA CR</Box>
                    </Box>
                    <Box display="flex">
                        <Box as="span"><BsInstagram /></Box>
                        <Box as="span">sictra.cr1</Box>
                    </Box>
                </Box>
            </Box>
            <Center>
                <Box display="flex">
                    <Box as="span"><HiOutlineMailOpen /></Box>
                    <Box as="span">servicioalcliente@sictracr.com</Box>
                </Box>
            </Center>
        </Box>
    );
}
  
export default FooterContact