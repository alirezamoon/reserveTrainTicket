import { Flex } from "@chakra-ui/react"
import clientPromise from "../../lib/mongodb"

const Passenger = ({isConnected ,passengers}) => {
  console.log(passengers , isConnected)
    return <Flex>
      {passengers}
    </Flex>
}

export default Passenger

export async function getServerSideProps(context) {
    try {
      const client = await clientPromise
      const db = client.db("train")
      let passengers = await db.collection('passengers').find({}).toArray()
      passengers = JSON.parse(JSON.stringify(users));
      return {
        props: { isConnected: true, passengers }
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false }
      }
    }
  }
  