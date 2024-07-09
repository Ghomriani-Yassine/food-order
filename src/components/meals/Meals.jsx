import React from 'react';
import Meal from './Meal'
import classes from './Meals.module.css'
import Card from '../ui/Card'
import Summary from '../meals/Summary';


function Meals(props) {
    const mealsList=[
        {id: 'm1',
            name:"sushi",
        description:"fish and veggies",
        price:22.6
        },
        {id: 'm2',
            name:"kosksi",
        description:"fish and veggies",
        price:22.60
        },
        {id: 'm3',
            name:"slata",
        description:"fish and veggies",
        price:22.60
        }

        
    ]
    
    
    return (
        <section className={classes.meals}>
            <Summary/>
            <Card>
            <ul>
            {
                mealsList.map((meal,index)=><>
                <Meal key={index} name={meal.name} description={meal.description} price={meal.price}/>
                </>
                )
            }
        </ul>
            </Card>
        
        </section>
        
    );
}

export default Meals;