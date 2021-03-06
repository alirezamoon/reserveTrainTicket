import { Button, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'

export default function Home() {
  // console.log(users)
  const router = useRouter()
  return (
    <div className='container'>
      <Flex flexDir='column' h='100vh' justifyContent='space-around'>
        <Button
          h='20vh'
          onClick={() => router.push('/passenger')}
          colorScheme='red'
        >
          صفحه کاربران
        </Button>
        <Button
          h='20vh'
          onClick={() => router.push('/staff')}
          colorScheme='blue'
        >
          صفحه پرسنل قطار
        </Button>
      </Flex>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   try {
//     // client.db() will be the default database passed in the MONGODB_URI
//     // You can change the database by calling the client.db() function and specifying a database like:
//     // const db = client.db("school");
//     // const data = await db.find().toArray()
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
//     // db.find({})
//     const client = await clientPromise
//     const db = client.db('train')
//     let users = await db.collection('passengers').find({}).toArray()
//     users = JSON.parse(JSON.stringify(users))
//     return {
//       props: { isConnected: true, users }
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false }
//     }
//   }
// }
