import { Box, Text, Image } from '@chakra-ui/react'


const Footer = () => {
    return (
        <Box
            as="footer"
            maxW="1480"
            bgImage="url('/images/footerbg.png')"
            bgPosition="center"
            bgRepeat="no-repeat">
                <Box display="flex"
                    w="90%"
                    ml="auto"
                    mr="auto"
                    align-items="center">
                    <Image w="40%" src='/images/sictraLogo.png' alt='el logo de sictra' />
                    <Text w="40%" textAlign="center">San José, Costa Rica - Centroamérica.</Text>
                </Box>
        </Box>
    );
}
  
export default Footer