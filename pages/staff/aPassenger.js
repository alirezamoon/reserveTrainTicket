import { Flex, Text } from '@chakra-ui/react'

const APassenger = ({ firstName, lastName, nationalcode, phoneNumber }) => {
  return (
    <Flex flexDir='column' alignItems='center' justifyContent={'center'} bgColor={'#ddd'} borderRadius={'20px'} mx='90px' py='20px' mt='20px' boxShadow={'1px 1px 3px #aaa'}>
      <Flex>
        <Text textAlign={'center'} w='200px'>
          {firstName} {lastName}
        </Text>
        <Text w='200px' textAlign={'right'}> : نام و نام خانوادگی</Text>
      </Flex>
      <Flex>
        <Text w='200px' textAlign={'center'}>{nationalcode}</Text>
        <Text w='200px' textAlign={'right'}> : کدملی</Text>
      </Flex>
      <Flex>
        <Text w='200px' textAlign={'center'}>{phoneNumber}</Text>
        <Text w='200px' textAlign={'right'}> : شماره تلفن</Text>
      </Flex>
    </Flex>
  )
}

export default APassenger
