import { Box, Link, Image } from '@chakra-ui/react'


const Nav = () => {
    return (
        <Box as='nav' bg="#143C61" p="10" color="#FFFFFF">
            <Link href="/" mr="8">Inicio</Link>
            <Link href="/sobrenosotros" mr="8">Conocenos</Link>
            <Link href="/servicios" mr="8">Servicios</Link>
            <Link href="/contacto" mr="8">Contacto</Link>
        </Box>
    );
}
  
export default Nav