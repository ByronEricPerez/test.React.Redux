// componente para mostrarlos items agregados al carrito de compras

import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice';

export const Cart = () => {
    const dispatch = useDispatch();
    
    const { productsList } = useSelector(state => state.cart);

    return (
        <>
            <h2 className='text-4xl p-2'>Carro</h2>
            <table>
                {
                    products.map(product => {
                        return (
                           // lrpm
                        );
                    })
                }
            </table>
        </>
    )
}
