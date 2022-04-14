import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import FilterSortBar from '../src/components/Products/FilterSortBar'
import FrontPageAd from '../src/components/Products/FrontPageAd'
import ProductList from '../src/components/Products/ProductList'


const Home: NextPage = () => {
  return (
    <Box>
      <FrontPageAd/>
      <FilterSortBar/>
      <ProductList/>
    </Box>
  )
}

export default Home
