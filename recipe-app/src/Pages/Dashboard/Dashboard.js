import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../Common/Card/Card';
import './Dashboard.scss';

const Dashboard = () => {

    const [recipes, setRecipes] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://recipe-app-341cf.firebaseio.com/recipes.json')
        .then(response => {
            setRecipes(response.data);
            
        })
        .then(() => {
            setLoading(false);
        });
    },[]);

    return (
        <div>
            <h1>Dashboard</h1>
            
            <div>
                <div>
                    <h3>Main Meal</h3>
                    <h5>See More</h5>
                </div>
                {!loading ? Object.keys(recipes).map((key, i) => {
                    return <Card key={key} imageUrl={recipes[key].imageUrl} recipeName={recipes[key].recipeName} />
                }) : null}
            </div>
            
        </div>
    );
};

export default Dashboard;