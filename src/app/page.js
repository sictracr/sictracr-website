import { Box, Center, Text, Image} from "@chakra-ui/react";

const Home = () => {
  return (
    <>
      <Box as="section" textAlign={"center"} >
        <Text>China-Europa</Text>
        <Text>Suramérica-USA</Text>
        <Text>¡A tu alcance!</Text>
        <Center display="flex" textAlign="center">
          <Text>button:Solicitar Cotizacion</Text>
          <Text>button:Sobre Nosotros</Text>
        </Center>
      </Box>
      <Box as="section"
        textAlign={"center"}
        bg="rgba(174, 246, 255, 0.3)">
        <Text>Aliados Estratégicos</Text>
        <Text>Imagen</Text>
        <Text>Imagen</Text>
      </Box>
      <Box as="section">
        <Box display="flex">
          <Text>
            SICTRA Costa Rica S.A. Es una empresa que nos unimos para brindar
            servicios profesionales en comercio internacional y logística integrada para
            generar un servicio
            diferenciado. 
          </Text>
          <Image src='/images/sictraLogo.png' alt='el logo de sictra' />
        </Box>
        <Center>
          <Text>button: Conocenos</Text>
        </Center>
      </Box>
    </>
  );
}

export default Home
