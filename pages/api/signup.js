import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

async function handler(req, res) {
  if (req.method === "POST") {
    const { name, firstName, email, password } = req.body;

    if (!email || !password || password.trim().length < 7) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    let client;

    try {
      client = await MongoClient.connect(
        process.env.MONGODB_URI
      );
    } catch (error) {
      res.status(500).json({
        message: "Could not connect to the database.",
      });
      return;
    }

    const db = client.db();

    const existingUser = await db
      .collection("users")
      .findOne({ email: email });

    if (existingUser) {
      res
        .status(422)
        .json({ message: "User exists already!" });
      client.close();
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await db.collection("users").insertOne({
      name: name,
      firstName: firstName,
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created!" });
    client.close();
  }
}

export default handler;
