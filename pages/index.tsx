import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import FilterSortBar from '../src/components/Products/SortBox'
import FrontPageAd from '../src/components/Products/FrontPageAd'
import ProductList from '../src/components/Products/ProductList'
import ProductViewer from '../src/components/Products/ProductViewer'


const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%">
      <FrontPageAd/>
      <ProductViewer/>
    </Box>
  )
}

export default Home
