import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { AiOutlineCheck } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import { fetchOrderById } from '../../../api/order';

export default function PlacedSuccess() {
  return (
    <Box textAlign="center" py={10} px={6}>
        <Icon as={BsCheckCircleFill} boxSize={'50px'} color={'green.500'} />
      {/* <CheckCircleIcon /> */}
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Order Successfully Placed
      </Heading>
      <Text color={'gray.500'}>
        Thanks for shopping with us! Please Track your order or download invoice from the links given below.
      </Text>
    </Box>
  );
}

// export async function getServerSideProps(context) {
//   let flag = false;
//   const { pid } = context.params;
//   try {
//       const response = await fetchOrderById(oid);
//       return {
//           props: {
//               productInfo: response.data,
//           },
//       };
//   } catch (err) {
//       return {
//           props: {
//               productInfo: undefined,
//           },
//       };
//   }
// }