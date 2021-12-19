import { Button, Flex } from '@chakra-ui/react'
// import clientPromise from "../../lib/mongodb"
import APassenger from './aPassenger'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider
} from 'react-query'
import axios from 'axios'

const Staff = () => {
  const query = useQuery('passengers', async () => {
    const { data } = await axios.get('http://localhost:3000/api/users')
    return data
  })

  const getPassengersInformationsHandler = () => {}
  return (
    <Flex flexDir='column'>
      <Button onClick={getPassengersInformationsHandler}>
        نمایش اطلاعات مسافران
      </Button>
      <Flex flexDir='column'>
        {query?.data?.map((passenger) => (
          <APassenger {...passenger} key={passenger._id} />
        ))}
      </Flex>
    </Flex>
  )
}

export default Staff
