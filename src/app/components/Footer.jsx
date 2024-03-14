import { Box, Text, Image, Link, Center } from '@chakra-ui/react'
import FooterContact from './FooterContact';


const Footer = () => {
    return (
        <Box as="footer" maxW="1480" bgImage="url('/images/footerbg.png')" bgPosition="center" bgRepeat="no-repeat">
            <Box display="flex" alignItems="center" justifyContent="space-between" w="90%" ml="auto" mr="auto">
                <Image src='/images/sictraLogo.png' alt='el logo de sictra' w="280px" />
                <Text textAlign="center" mr="60">San José, Costa Rica - Centroamérica.</Text>
            </Box>
            <Box display="flex" alignItems="center" w="90%" ml="auto" mr="auto" mt="10">
                <Box>
                    <Text>Contacto</Text>
                    <FooterContact/>
                </Box>
                <Box>
                    <Text>Soporte</Text>
                    <Link href='/preguntasfrecuentes'>¿Preguntas Frecuentes?</Link>
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