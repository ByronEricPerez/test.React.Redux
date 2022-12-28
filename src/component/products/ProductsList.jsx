import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice';


export const ProductsList = ({ products }) => {
    const dispatch = useDispatch();
    
    const { productsList } = useSelector(state => state.cart);

    const handleAddOrRemoveProduct = (productId) => {
        const product = products.find(product => product.id === productId);
        if (productsList.find(pdt => pdt.id === productId)) {
            dispatch(removeProductFromCart(productId));
        } else {
            dispatch(addProductToCart(product));
        }
    }
    
    return (
        <>
            <h2>Listadooo</h2>
            <div className="Articles">
                {
                    products.map(product => {
                        return (
                            <div key={product.id}>
                                <h4>{product.title}</h4>
                                <p>Price {product.price}</p>
                                <p>Category {product.category}</p>
                                <button
                                onClick={() => handleAddOrRemoveProduct(product.id)}
                                >
                                {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}