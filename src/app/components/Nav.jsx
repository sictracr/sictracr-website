import { Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'


const Nav = () => {
    return (
        <Box as='nav'
        bg="#143C61"
        p="8"
        color="#FFFFFF"
        w="600px"
        textAlign="center"
        borderRadius="10"
        fontSize="22"
        fontWeight="700"
        >
            <Link as={NextLink} href="/" mr="8">Inicio</Link>
            <Link as={NextLink} href="/sobrenosotros" mr="8">Conocenos</Link>
            <Link as={NextLink} href="/servicios" mr="8">Servicios</Link>
            <Link as={NextLink} href="/contacto" mr="8">Contacto</Link>
        </Box>
    );
}
  
export default Nav