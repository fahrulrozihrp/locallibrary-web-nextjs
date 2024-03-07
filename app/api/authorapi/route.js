import connectMongoDB from "../../libs/mongodb";
import Author from "@/app/libs/models/author";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const allAuthors = await Author.find().sort({ family_name: 1 }).exec();
    return NextResponse.json({ allAuthors });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
