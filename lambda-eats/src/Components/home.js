import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";
import PizzaForm from './pizza'
import Confirmation from './Confirmation'
import formSchema from '../FormSchema' 
// import Header from './Components/header'
import * as yup from "yup";

const initialFormValues = {
    name: "",
    size: "",
    sauce: "",
    pepperoni: false,
    bacon: false,
    spinach: false,
    blackOlives: false,
}

const initialFormErrors = {
    name: "",
    size: "",
    sauce: "",
}

const emptyPizza = [];
const initialDisabled = true;

export default function Home () {
    const [pizza, setPizza] = useState(emptyPizza)
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)

    const inputChange = (name, value) => {
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(() => {
            setFormErrors({
              ...formErrors,
              [name]: "",
            });
          })
          .catch((err) => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            });
          });
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const createdPizza = (newPizza) => {
     axios
      .post(`https://reqres.in/api/orders`, newPizza)
      .then((res) => setPizza([res.data, ...pizza]))
      .catch((err) => console.log(err))
      .finally(() => setFormValues(initialFormValues));
  };

    const submitPizza = () => {
        const newPizza = {
            name: formValues.name,
            size: formValues.size,
            sauce: formValues.sauce,
            pepperoni: formValues.pepperoni,
            bacon: formValues.bacon,
            spinach: formValues.spinach,
            blackOlives: formValues.blackOlives,
        }
    createdPizza(newPizza);
    }

    useEffect(() => {
        formSchema.isValid(formValues).then((valid) => setDisabled(!valid));
      }, [formValues]);

      return (
          <>
            {/* <Header /> */}
            <Link to="/PizzaForm">
                <button>Create Your Pizza Now</button>
            </Link>
            <Switch>
                <Route path="/PizzaForm">
                    <PizzaForm
                        values={formValues}
                        submit={submitPizza}
                        change={inputChange}
                        disabled={disabled}
                        error={formErrors}
                    />
                </Route>
                <Route path="/confirmation">
                    <Confirmation order={pizza}/>
                </Route>
            </Switch>
         </>
      )
}
