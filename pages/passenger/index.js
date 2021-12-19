import { Button, Flex, Heading, Input } from '@chakra-ui/react'
import axios from 'axios'
import { useState } from 'react'
import { useMutation } from 'react-query'

const Passenger = () => {
  const [passenger, setPassenger] = useState({
    firstName: '',
    lastName: '',
    nationalcode: '',
    phoneNumber: ''
  })

  const { mutate } = useMutation(
    async ({ firstName, lastName, nationalcode, phoneNumber }) => {
      const { data } = await axios.post('http://localhost:3000/api/users', {
        firstName,
        lastName,
        nationalcode,
        phoneNumber
      })
      return data
    },
    { onSuccess: (data) => console.log(data) }
  )

  const ticketReserveHandler = () => {
    mutate({
      firstName: passenger.firstName,
      lastName: passenger.lastName,
      nationalcode: passenger.nationalcode,
      phoneNumber: passenger.phoneNumber
    })
  }

  return (
    <Flex flexDir={'column'} alignItems={'center'}>
      <Heading>رزرو بلیط</Heading>
      <Input
        onChange={(e) =>
          setPassenger({ ...passenger, firstName: e.target.value })
        }
        w='300px'
        placeholder='نام'
      />
      <Input
        onChange={(e) =>
          setPassenger({ ...passenger, lastName: e.target.value })
        }
        w='300px'
        placeholder='نام خانوادگی'
      />
      <Input
        onChange={(e) =>
          setPassenger({ ...passenger, nationalcode: e.target.value })
        }
        w='300px'
        placeholder='کدملی'
      />
      <Input
        onChange={(e) =>
          setPassenger({ ...passenger, phoneNumber: e.target.value })
        }
        w='300px'
        placeholder='شماره تلفن'
      />
      <Button onClick={ticketReserveHandler}>رزرو</Button>
    </Flex>
  )
}

export default Passenger
