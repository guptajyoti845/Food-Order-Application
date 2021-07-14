import React, {Fragment} from 'react';
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals = _ => {
    return <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
    </Fragment>
}

export default Meals;
