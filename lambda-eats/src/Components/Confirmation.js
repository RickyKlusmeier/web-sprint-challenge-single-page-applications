import React from 'react'

const Confirmation = (props) =>{
    const { order } = props

    return(
        <div>
            <h2>Order Confirmation</h2>
            <h3>Your order is on the way!!!</h3>
            <div>
                <p>Order belonging to:{order.name}</p>
                <p>Size:{order.size}</p>
                <p>Toppings:{''}</p>
                <p>Special Instructions:{order.special}</p>
            </div>
        </div>
    )
}

export default Confirmation;