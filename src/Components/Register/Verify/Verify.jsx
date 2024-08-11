import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./verify.scss";

const Verify = () => {
    const location = useLocation();
    const email = location.state?.email || '';  // Ensure email is provided
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: email,
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleVerify = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:9000/auth/verify", formData);
            console.log(response.data);
            navigate("/signin");  // Redirect to sign-in page after verification
        } catch (err) {
            console.error("Error during verification: ", err);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div className="verify__container">
            <div className="box">
                <div className="title">
                    <h1>Verify</h1>
                </div>
                <form onSubmit={handleVerify}>
                    <p>We send Verify password to gmail</p>
                    <input
                        className="inputData"
                        type="number"
                        name="password"
                        placeholder="Enter verification code"
                        onChange={handleChange}
                        value={formData.verifyCode}
                    />
                    <button type="submit">Verify</button>
                </form>
            </div>
        </div>
    );
};

export default Verify;
