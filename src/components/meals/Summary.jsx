import React from 'react';
import classes from './Summary.module.css';
function Summary(props) {
    return (
        <section className={classes.summary}>
            <h2>Delecious foood</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ex qui. Quia, possimus? Sunt, tempore.
            </p>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur modi quis nisi?</p>
        </section>
    );
}

export default Summary;