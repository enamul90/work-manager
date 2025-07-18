import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export function getAuthUser() {
    const cookieStore = cookies();
    const token = cookieStore.get('token')?.value;

    if (!token) return null;

    try {
        const decoded = jwt.verify(token, '12-ejrfewjf-333-hvgjdfkhgk');
        return decoded;
    } catch (err) {
        console.log(err)
        return null;

    }
}
