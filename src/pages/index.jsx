import Axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../component/reducers/user/userSlice";
import { useNavigate } from "react-router-dom";

export const Index = () => {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        Axios.get('https://dummyjson.com/users')
            .then(response => {
                const users = response.data.users;
                const userToLog = users.find(user => user.email === emailField.current.value);

                console.log(userToLog);
                
                if (userToLog){
                    if( userToLog.password === passwordField.current.value){
                        dispatch(setUser({
                            email: userToLog.email,
                            fullName: `${userToLog.firstName} ${userToLog.lastName}`,
                            token: Date.now(),
                        })) 
                        navigate('/home');
                    }
                }
            })
    }
    return (
        <div>
            <div>
                <h2 className="text-7x1 mt-5">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email address </label>
                        <input className="mb-2" type="email" ref={emailField} />
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" ref={passwordField} />
                    </div>
                    <button className="mb-5 mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}