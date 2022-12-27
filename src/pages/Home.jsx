import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { unsetUser } from "../component/reducers/user/userSlice";
import { useState, useEffect } from "react";
import { ProductsList } from "../component/products/ProductsList";
import Axios from "axios";

export const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const user = useSelector(state => state.user);

    useEffect(() => {
        Axios.get('https://dummyjson.com/docs/products')
            .then(response => {
                setProducts(response.data.products);
            })
    }, [])

    const handleLogout = () => {
        dispatch(unsetUser());
        navigate("/")
    };

    return(
        <div>
            <h2>Home</h2>
            <p>welcome {user.fullName}</p>
            
            <button onClick={handleLogout}>Log out</button>
            <hr />
            {/* <ProductsList products={products} /> */}
        </div>
    )
}