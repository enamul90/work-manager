import { connectDB } from '@/app/lib/db';
import User from '@/app/models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = 'my_super_secret_token_key';

export async function POST(req) {
    const { email, password, name } = await req.json();


    const hashed = await bcrypt.hash(password, 10);

    const requestBody = {
        email,
        password: hashed,
        name,
    }

    await connectDB();

    const user = await User.findOne({ email });

    if (user) {
        return NextResponse.json({ message: 'user already exists' }, );
    }

    const  registration = await User.create(requestBody);


    const token = jwt.sign({ userId: registration._id }, JWT_SECRET, { expiresIn: '7d' });

    const res = NextResponse.json({ message: 'registration successfully' });
    res.cookies.set('token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    });



    return res;
}
