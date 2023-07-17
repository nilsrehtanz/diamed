import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      res.status(422).json({ message: 'Invalid email address.' });
      return;
    }

    let client;

    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to the database.' });
      return;
    }

    const db = client.db();

    try {
      await db.collection('newsletter').insertOne({ email });
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing data failed.' });
      return;
    }

    client.close();

    res.status(201).json({ message: 'Signed up for the newsletter!' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
