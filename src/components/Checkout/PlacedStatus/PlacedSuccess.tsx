import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';

export default function PlacedSuccess() {
  return (
    <Box textAlign="center" py={10} px={6}>
        <Icon as={BsCheckCircleFill} boxSize={'50px'} color={'green.500'} />
      {/* <CheckCircleIcon /> */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Successfully Placed
      </Heading>
      <Text color={'gray.500'}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua.
      </Text>
    </Box>
  );
}
