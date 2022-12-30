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
            <h2 className='text-4xl p-2'>Listadooo</h2>
            <div className="Articles">
                {
                    products.map(product => {
                        return (
                            <div className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-1 grid grid-cols-3" key={product.id}>
                                <h4>{product.title}</h4>
                                <p>Price {'$' + product.price}</p>
                                <p>Category {product.category}</p>
                                <button className='bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'
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