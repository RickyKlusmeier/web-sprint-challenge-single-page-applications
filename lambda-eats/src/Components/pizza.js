import React from 'react'
import { Link } from 'react-router-dom'

const PizzaForm = (props) => {

    const { values, submit, change, errors, disabled } = props

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

      const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const value1 = type ==='checkbox' ? checked : value
        change(name, value)
     }


    return(
        <div>
            <form className='form container' onSubmit={onSubmit}>
            <h2>Customize your Pizza</h2>
                <div className='errors'>
                    <div>{errors.name}</div>
                </div>
                <div>
                    <h3>Name</h3>
                </div>

                <label> Name </label>
                    <input  
                        value={values.name}
                        onChange={onChange} 
                        name='name' 
                        type='text' />
               
                <div>
                    <h3>Select Size</h3>
                </div>
                <label> Size </label>
                    <select name='size' onChange={onChange} value={values.size}>
                            <option>Select Size</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                    </select>


                <div>
                    <h3>Select Toppings</h3>
                </div>
                <label>Pepperoni
                    <input 
                        type='checkbox'
                        name='pepperoni'
                        onChange={onChange}
                        checked={values.pepperoni}
                    />
                </label>

                <label>Bacon
                    <input 
                        type='checkbox'
                        name='bacon'
                        onChange={onChange}
                        checked={values.bacon}
                    />
                </label>

                <label>Spinach </label>
                    <input 
                        type='checkbox'
                        name='sausage'
                        onChange={onChange}
                        checked={values.sausage}
                    />
                

                <label>Black Olives</label>
                    <input 
                        type='checkbox'
                        name='blackOlives'
                        onChange={onChange}
                        checked={values.blackOlives}
                    />

                <div>

                <h3>Special Instructions</h3>
                </div>
                <label> Any other additions you come up with </label>
                    <input  
                        value={values.special}
                        onChange={onChange} 
                        name='special' 
                        type='text' />
                
                <button disabled={disabled}>Submit Order</button>
                <Link to= '/confirm'></Link>           
                
                
            </form>
        </div>
    )
}

export default PizzaForm