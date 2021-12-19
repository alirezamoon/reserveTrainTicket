import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
  console.log('req', req)
  if (req.method === 'GET') {
    const client = await clientPromise
    const db = client.db('train')
    let users = await db.collection('passengers').find({}).toArray()
    users = JSON.parse(JSON.stringify(users))
    res.status(200).json(users)
  } else if (req.method === 'POST') {
    db.collection('passengers').insertOne(req.body, function (err, res) {
      if (err) console.log(err)
    })
    res.status(201).json()
  }
}
