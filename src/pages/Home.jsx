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
        Axios.get('https://dummyjson.com/products')
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
            <div className="m-6 p-10 border-gray-100 border-4 rounded-lg">
                <h2>Home</h2>
                <p>welcome {user.fullName}</p>
                <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" onClick={handleLogout}>Log out</button>
            </div>
            
            <hr />
            <ProductsList products={products} />
        </div>
    )
}