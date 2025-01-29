import React, { useState } from 'react'
import styles from './Login.module.css';
import register from '../../assets/register.png';
import { Input, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import AuthServices from '../../services/authServices';
import { getErrorMessage } from '../../util/GetError';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            setLoading(true);
            let data = {
                firstName,
                lastName,
                username,
                password
            }
            const response = await AuthServices.registerUser(data);
            console.log(response.data);
            setLoading(false);
            message.success("You're Registered Successfully!")
            navigate('/login');
        } catch (err) {
            console.log(err);
            message.error(getErrorMessage(err));
        }
    };


    return (
        <div>
            <div className={styles.login__card}>
                <img src={register} alt='..' />
                <h2>Register</h2>
                <div className={styles.input__inline_wrapper}>
                    <Input
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />
                    <Input
                        placeholder="Last Name"
                        style={{ marginLeft: '10px' }}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className={styles.input__wrapper}>
                    <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className={styles.input__wrapper}>
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className={styles.input__info}>
                    Existing User? <Link to="/login">Login</Link>
                </div>
                <Button loading={loading} type="primary" size="large" disabled={!username || !password} onClick={handleSubmit}>Register</Button>
            </div>
        </div>
    )
}

export default Register