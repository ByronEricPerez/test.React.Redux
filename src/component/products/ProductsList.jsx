export const ProductsList = ({products}) => {
    return (
        <div>
            <h2>Listadooo</h2>
            <div>
            {
                products.map(product => {
                    return (
                        <div key={product.id}>
                            <h4>{product.name}</h4>
                            <p>Price {product.price}</p>
                            <p>Category {product.category}</p>
                            {/*<button
                                onClick={}>
                                // btn para agregar/eliminar items
                            </button>*/}
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}