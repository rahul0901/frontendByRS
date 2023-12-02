import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [login, setLogin] = useState({userKaEmail:"", userKaPassword:""});

    console.log(login);

    const route = useNavigate();

    const onChangeHandle = (event) =>{
        setLogin({[event.target.name]: event.target.value})
    }

    const sendDataLogin = async(event) =>{
        event.preventDefault();
        if(login.userKaEmail && login.userKaPassword){
            const response = await axios.post("http://localhost:8000/app/v1/auth/login", {login})

            if(response.data.success){
                toast.success("Login Successful");
                setLogin({userKaEmail:"", userKaPassword:""});
                route('/');
            }
            else{
                toast.error(error.response.message)
            }
        }
    }

    return (
        <>
            <div>Login Page</div>
            <form onSubmit={sendDataLogin}>
                <label>Email: </label>
                <input type="email" name="userKaEmail" onChange={onChangeHandle} value={login.userKaEmail} /> <br />
                <label>Password: </label>
                <input type="password" name="userKaPassword" onChange={onChangeHandle} value={login.userKaPassword} /> <br />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default Login;