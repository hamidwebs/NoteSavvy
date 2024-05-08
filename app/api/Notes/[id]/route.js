import connectMongoDB from "@/libs/mongodb";
import Note from "@/models/Note";
import { NextResponse } from "next/server";

export async function PUT(request, {params}) {
    const { id } = params;
    const { newTitle: title, newDescription: description, newTag: tag } = await request.json();
    await connectMongoDB();
    let note = await Note.findByIdAndUpdate(id, { title, description, tag });
    return NextResponse.json({ note });
}
export async function GET(request, { params }) {
    const { id } = params;
    connectMongoDB();
    const note = await Note.findOne({ _id: id });
    return NextResponse.json({ note, status: 200 });
}