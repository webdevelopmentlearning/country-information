

const Cart = (props) => {
    const cart=props.cart;

    
    const totalPopulation = cart.reduce((total,population)=>total+population.population,0)
    return (
        <div>
            <h4>Cauntry Added:{cart.length}</h4>
            <h5>TotalPopulation: {totalPopulation}</h5>
          
        </div>
    );
};

export default Cart;