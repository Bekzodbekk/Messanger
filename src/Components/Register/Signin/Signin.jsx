import "./signin.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/auth/login', formData);
            console.log(response.data);
    
            // response.data.status true bo'lsa navigatsiya qiling
            if (response.data.status) { 
                navigate('/main', { state: response.data });
            } else {
                // false bo'lsa, navigatsiya qilinmaydi va xabar chiqishi mumkin
                console.error('Sign in failed:', response.data.message);
                alert('Sign in failed: ' + response.data.message); // Foydalanuvchiga xabar ko'rsatish uchun
            }
        } catch (error) {
            console.error('Error during sign in:', error);
            alert('Error during sign in: ' + error.message); // Xatolik yuz berganda xabar ko'rsatish uchun
        }
    };

    return (
        <div className="signin__container">
            <div className="box">
                <div className="title">
                    <h1>Sign In</h1>
                </div>
                <form onSubmit={handleSignin}>
                    <input
                        className="inputData"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        placeholder="Username" />
                    <input
                        className="inputData"
                        type="password" // `password` type ni to'g'rilash
                        name="password"
                        onChange={handleChange}
                        placeholder="Password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    )
}

export default Signin;
