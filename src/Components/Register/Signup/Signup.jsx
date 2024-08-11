import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./signup.scss"

const Signup = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/auth/register', formData);
            console.log(response.data);
            // If registration is successful, navigate to verify page with email state
            navigate('/verify', { state: { email: formData.email } });
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className="signup__container">
            <div className="box">
                <div className="title">
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input 
                        className="inputData" 
                        type="text" 
                        name="first_name" 
                        placeholder="First Name" 
                        onChange={handleChange}
                        value={formData.first_name}
                    />
                    <input 
                        className="inputData" 
                        type="text" 
                        name="last_name" 
                        placeholder="Last Name" 
                        onChange={handleChange}
                        value={formData.last_name}
                    />
                    <input 
                        className="inputData" 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <input 
                        className="inputData" 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={handleChange}
                        value={formData.username}
                    />
                    <input 
                        className="inputData" 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange}
                        value={formData.password}
                    />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
