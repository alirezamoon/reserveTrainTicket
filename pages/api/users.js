import clientPromise from '../../lib/mongodb'
export default async (req, res) => {
  const client = await clientPromise
  const db = client.db('school')
  let users = await db.collection('users').find({}).toArray()
  users = JSON.parse(JSON.stringify(users))
  //   const { fieldvalue } = req.query
  //   const database = client.db('schoole')
  //   const userdb = await database.collection('users').find({})
  res.json(users)
}
