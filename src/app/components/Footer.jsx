import { Box, Text, Image, Link, Center } from '@chakra-ui/react'
import FooterContact from './FooterContact';


const Footer = () => {
    return (
        <Box as="footer" maxW="1480" bgImage="url('/images/footerbg.png')" bgPosition="center" bgRepeat="no-repeat">
            <Box display="flex" alignItems="center" justifyContent="space-between" w="90%" ml="auto" mr="auto">
                <Image src='/images/sictraLogo.png' alt='el logo de sictra' w="30%" />
                <Text textAlign="center" w="60%" fontWeight="bold" fontSize="32" color="#001E40">San José, Costa Rica - Centroamérica.</Text>
            </Box>
            <Box display="flex" w="90%" ml="auto" mr="auto" mt="10" color="#001E40">
                <Box w="50%">
                    <Text fontSize="18" fontWeight="bold" mb="2">Contacto</Text>
                    <FooterContact/>
                </Box>
                <Box w="50%">
                    <Text fontSize="18" fontWeight="bold" mb="2">Soporte</Text>
                    <Link href='/preguntasfrecuentes' fontSize="14" fontWeight="bold">¿Preguntas Frecuentes?</Link>
                </Box>
            </Box>
            <Center
            p="8"
            fontSize="12"
            fontWeight="700"
            >
                &copy; Copyright SICTRACR 2024
            </Center>
        </Box>
    );
}
  
export default Footer