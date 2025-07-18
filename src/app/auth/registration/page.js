'use client';

import {useCallback, useState} from 'react';

import { useRouter } from 'next/navigation';
import API from "@/app/utils/axios";


export default function Page() {

    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const registerData = {
        name : username,
        email : email,
        password: password,
    }

    const registerHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(confirmPassword === password){
            try {

                const response = await API.post('/user/registration', registerData)

                if(response.data.message !== "user already exists"){
                    router.push('/')
                    setUsername(" ")
                    setEmail("")
                    setPassword("")
                }
                else {
                    alert(response.data.message)
                }

            }

            catch (error) {
                alert("register failed");
                console.log(error);
            }
        }

        else {
            alert("passwords do not match");
        }

        setLoading(false);
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-lightLine">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create Your Account</h2>
                <form  onSubmit={registerHandler} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                             className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor=" Ewmail" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="mt-1 w-full px-4 py-2 border border-lightLine outline-0 rounded-md"
                            placeholder="Enter your password"
                        />
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-primary cursor-pointer py-2 rounded-md text-darkText-100 font-medium flex items-center justify-center gap-4"
                    >
                        Sign Up

                        {
                            loading && (
                                <div className={"loader"}></div>
                            )
                        }
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="/auth/login" className="text-primary font-medium">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
}