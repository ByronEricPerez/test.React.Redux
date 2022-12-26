import Axios from "axios";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../component/reducers/user/userSlice";

export const Index = () => {
    const emailField = useRef(null);
    const passwordField = useRef(null);
    const dispatch = useDispatch();

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

                    }
                }
            })
    }
    return (
        <div>
            <div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email address</label>
                        <input type="email" ref={emailField} />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" ref={passwordField} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}