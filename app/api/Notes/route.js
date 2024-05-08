import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, description, tag } = await request.json();
    await connectMongoDB();
    await Note.create({ title, description, tag });
    return NextResponse.json({msg: 'Created A New Note Successfully!', status: 200});
}
export async function GET() {
    await connectMongoDB();
    const note = await Note.find({});
    return NextResponse.json({note});
}
export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Note.findByIdAndDelete(id);
    return NextResponse.json({msg: "Successfully Deleted", status: 200});
}