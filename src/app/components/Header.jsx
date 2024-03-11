import { Box, Text } from '@chakra-ui/react'


const Header = () => {
    return (
        <Box as='header' border="2px solid red"  display="flex">
            <Text>Header, adentro va nav</Text>
        </Box>
    );
}
  
export default Header