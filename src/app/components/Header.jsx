import { Box, Image } from '@chakra-ui/react'
import Nav from './Nav';


const Header = () => {
    return (
        <Box as='header' maxW="1480" bg="rgba(174, 246, 255, 0.2)" display="flex" p="6">
            <Image src='/images/sictraLogo.png' alt='el logo de sictra' w="250px" /> 
            <Nav/>
        </Box>
    );  
}
  
export default Header