import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { AiOutlineClose } from 'react-icons/ai';

export default function PlacedFail() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
              <Icon as={AiOutlineClose} boxSize={'40px'} color={'white'} />
          
        </Flex>
      </Box>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Placement Failed
      </Heading>
      <Text color={'gray.500'}>
        Some items are not available in the required stock, remove them from your cart or decrease the quantity to match the available stock.
      </Text>
    </Box>
  );
}
