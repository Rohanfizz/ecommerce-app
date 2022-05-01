import { Box, Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { AiFillCloseCircle, AiOutlineClose, AiOutlineCloseCircle } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

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
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}
