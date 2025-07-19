import {connectDB} from "@/app/lib/db";
import {getAuthUser} from "@/app/lib/auth";
import {NextResponse} from "next/server";
import Task from "@/app/models/Task";


export async function POST(req) {
    await connectDB();
    const user = getAuthUser();


    if (!user) return NextResponse.json({ error: 'Unauthorized' }, );

    const { tittle} = await req.json();

    const task = await Task.create({ userId: user.userId, tittle});
    return NextResponse.json(task);

}

export async function GET( ) {
    await connectDB();
    const user = getAuthUser();


    if (!user) return NextResponse.json({ error: 'Unauthorized' }, );


    const task = await Task.find({ userId: user.userId}) .sort({ _id: -1 });
    return NextResponse.json(task);

}