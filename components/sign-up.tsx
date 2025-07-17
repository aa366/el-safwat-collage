"use client"
import { LockIcon, EyeOffIcon, EyeIcon } from 'lucide-react'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/config'

const Signup = ({intial}:{intial?:boolean}) => {
    const [show, setShow] = useState(true)

    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);

    const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        if (password !== repeatPassword) {
            setError("Passwords do not match");
            return;
        }
        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setSuccess("Account created successfully!");
            setEmail("");
            setPassword("");
            setRepeatPassword("");
        } catch (err: unknown) {
            if (typeof err === "object" && err !== null && "message" in err) {
                setError(String((err as { message?: string }).message));
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    if (!show) return <></>
    return (
        <section className='fixed h-full w-full z-600 bg-[rgba(0,0,0,.8)] top-0' onClick={() => setShow(false)}>
            <div></div>
            <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-sm mx-auto mt-20 flex flex-col gap-4">
                <h2 className="text-xl font-bold mb-2">Sign Up</h2>
                {error && <div className="text-red-500">{error}</div>}
                {success && <div className="text-green-500">{success}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2">
                   
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="border-0 w-full h-full focus-visible::border-none focus-visible:ring-0 border-none shadow-none flex-1  p-2"
                        required
                    />
                    <button onClick={togglePasswordVisibility} tabIndex={-1}>
                        {showPassword ? (
                            <EyeOffIcon className="h-5 w-5 text-muted-foreground" />
                        ) : (
                            <EyeIcon className="h-5 w-5 text-muted-foreground" />
                        )}
                    </button>
                </div>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Repeat Password"
                    value={repeatPassword}
                    onChange={e => setRepeatPassword(e.target.value)}
                    className="border p-2 rounded"
                    required
                />
                <button type="submit" className="bg-blue-600 text-white py-2 rounded" disabled={loading}>
                    {loading ? "Signing up..." : "Sign Up"}
                </button>
            </form>
            <div></div>
        </section>
    )
}

export default Signup