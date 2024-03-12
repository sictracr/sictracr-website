import { Box, Text } from '@chakra-ui/react'


const Main = ({children}) => {
    return (
        <Box as='main' border="2px solid blue" maxW="1480">
            {children}
        </Box>
    );
}
  
export default Main