import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import connectMongo from "@/lib/dbConnect";
import User from "@/models/User";
debugger
const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ message: "No token provided" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    await connectMongo();

    const currentUser = await User.findById(decoded.userId);

    if (!currentUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const allUsers = await User.find({}, "name email _id");

    return NextResponse.json(
      {
        users: allUsers,
        message: "Users fetched successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return NextResponse.json({ message: "Token expired" }, { status: 401 });
    }

    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
