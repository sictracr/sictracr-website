import { Box, Text, Image } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Box as="footer"
            maxW="1480"
            bgImage="url('/images/footerbg.png')"
            bgPosition="center"
            bgRepeat="no-repeat">
                <Box display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    w="90%"
                    ml="auto"
                    mr="auto">
                    <Image src='/images/sictraLogo.png' alt='el logo de sictra' />
                    <Text textAlign="center">San José, Costa Rica - Centroamérica.</Text>
                </Box>
                <Box></Box>
                <Box></Box>
        </Box>
    );
}
  
export default Footer