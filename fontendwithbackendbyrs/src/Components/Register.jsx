import { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast'
import { useNavigate } from "react-router-dom";

const Register = () => {

    const [userData, setUserData] = useState({ userKaName: "", userKaEmail: "", userKaPassword: "", userKaNumber: "" });

    console.log(userData)

    const route = useNavigate();

    function handleChangeData(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();
        if (userData.userKaName && userData.userKaEmail && userData.userKaPassword && userData.userKaNumber) {
            if (userData.userKaPassword.length >= 8) {
                // if (userData.userKaEmail === axios.response.data.message) {
                try {
                    const response = await axios.post("http://localhost:8000/app/v1/auth/register", { userData })

                    // console.log(response.data, 'response.data')

                    if (response.data.success) {
                        // alert('data submitted')
                        toast.success('Registration Successful');
                        setUserData({ userKaName: "", userKaEmail: "", userKaPassword: "", userKaNumber: "" })
                        route('/')
                    }
                    else {
                        toast.error(response.data.message || 'Registration Failed')
                    }
                } catch (error) {
                    toast.error('error during registration')
                    console.error(error)
                }
            }
            else {
                toast.error('password lemgth should be more than 7 letters')
            }
        }
        else {
            toast.error('all fields required..')
        }
    }

    return (
        <>
            <div>Register</div> <br />
            <form onSubmit={sendDataToBackend}>
                <label>Name: </label>
                <input type="text" name="userKaName" onChange={handleChangeData} value={userData.userKaName} /> <br />
                <label>Email: </label>
                <input type="email" name="userKaEmail" onChange={handleChangeData} value={userData.userKaEmail} /> <br />
                <label>Password: </label>
                <input type="password" name="userKaPassword" onChange={handleChangeData} value={userData.userKaPassword} /> <br />
                <label>Phone Number: </label>
                <input type="number" name="userKaNumber" onChange={handleChangeData} value={userData.userKaNumber} /> <br />
                <input type="submit" value={'Register Here'} />
            </form>
        </>
    )
}

export default Register;