import { Box, Text } from '@chakra-ui/react'


const Main = ({children}) => {
    return (
        <Box as='main'>
            {children}
        </Box>
    );
}
  
export default Main