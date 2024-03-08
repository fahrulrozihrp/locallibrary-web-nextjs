import connectMongoDB from "@/app/libs/mongodb";
import Genre from "@/app/libs/models/genre";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  try {
    const allGenre = await Genre.find().sort({ name: 1 }).exec();
    return NextResponse.json({ allGenre });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
