// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, Db } from "mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      email,
      password,
    }: { email: string; password: string } = req.body;

    if (!email || !password) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    let client;

    try {
      client = await MongoClient.connect(
        process.env.MONGODB_URI!
      );
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Could not connect to the database.",
        });
      return;
    }

    const db: Db = client.db();

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({
      email: email,
    });

    if (!user) {
      res.status(404).json({ message: "User not found." });
      return;
    }

    const isPasswordValid = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      res
        .status(401)
        .json({ message: "Invalid password." });
      return;
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    res
      .status(200)
      .json({ token: token, userId: user._id.toString() });
    client.close();
  }
}

export default handler;
