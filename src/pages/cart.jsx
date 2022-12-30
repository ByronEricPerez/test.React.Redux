import { useDispatch, useSelector } from 'react-redux';
import { removeProductFromCart } from '../component/reducers/cart/cartSlice';

export const Cart = () => {
    const dispatch = useDispatch();
    
    const { productsList } = useSelector(state => state.cart);

    const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

    return (
        <> 
            <h2 className='text-3xl font-bold p-3 m-3'>Cart</h2>
            <div className='flex justify-around'>
            <table>
                <thead>
                    <tr>
                        <th className='px-4' scope='col'>name</th>
                        <th className='px-4' scope='col'>price</th>
                        <th className='px-4' scope='col'>category</th>
                        <th className='px-4' scope='col'>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map(product => {
                        return (
                            <tr>
                                <td className='px-4' scope='row'>{product.title}</td>
                                <td className='px-4' scope='row'>{product.price}</td>
                                <td className='px-4' scope='row'>{product.category}</td>
                                <td className='px-4' scope='row'><button className='"bg-white hover:bg-gray-900 text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow"' 
                                onClick={() => handleRemoveProduct(product.id)}>Delete</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            </div>
        </>
    )
}
