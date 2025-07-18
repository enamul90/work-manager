import { connectDB } from '@/app/lib/db';
import User from '@/app/models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const JWT_SECRET = 'my_super_secret_token_key';

export async function POST(req) {
    const { email, password } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json(
            { message: 'Invalid credentials' },
            );
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return NextResponse.json({ message: 'Invalid credentials' }, );
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });

    const res = NextResponse.json({ message: 'Login successful' });
    res.cookies.set('token', token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
    });

    return res;
}
