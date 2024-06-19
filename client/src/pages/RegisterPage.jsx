import { Link } from "react-router-dom";
import useRegisterForm from "../hooks/useRegisterForm";
import Input from "../components/Input";

export default function RegisterPage() {
    const { name, setName, email, setEmail, password, setPassword, registerUser } = useRegisterForm();
 
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4">Register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <Input 
                type="text" 
                placeholder="John Doe" 
                value={name} 
                onChange={setName} />
                <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email} 
                onChange={setEmail} />
                <Input 
                type="password" 
                placeholder="password" 
                value={password} 
                onChange={setPassword} />
                <button className="primary">Register</button>
                <div className="text-center py-2 text-gray-500">
                    Already a member? <Link className="underline text-black" to={'/login'}>Login</Link>
                </div>
            </form>
            </div>
        </div>
    )
}