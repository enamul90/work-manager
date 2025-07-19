import {connectDB} from "@/app/lib/db";
import {getAuthUser} from "@/app/lib/auth";
import {NextResponse} from "next/server";
import WorkingDay from "@/app/models/WorkingDay";


export async function POST(req) {
    await connectDB();
    const user = getAuthUser();


    if (!user) return NextResponse.json({ error: 'Unauthorized' }, );

    const { tittle} = await req.json();

    const workingDay = await WorkingDay.create({ userId: user.userId, tittle});
    return NextResponse.json(workingDay);

}

export async function GET( ) {
    await connectDB();
    const user = getAuthUser();




    if (!user) return NextResponse.json({ error: 'Unauthorized' }, );


    const workingDay = await WorkingDay.find({ userId: user.userId}) .sort({ _id: -1 });
    console.log(workingDay);
    return NextResponse.json(workingDay);

}