import React from 'react';
import FoodItem from './FoodItem.jsx';
import {CardDeck} from "react-bootstrap";

let foodList = [
    {
        src: "https://api.papajohns.by//images/catalog/thumbs/full/825cf2f6c645dfe07b7a380d96cbe784.webp",
        title: "Italiano",
        cost: 5
    },
    {
        src: "https://api.papajohns.by//images/catalog/thumbs/full/b6262fa2be502b77af5e31d6950390bc.webp",
        title: "Cheessee",
        cost: 6
    },
    {
        src: "https://api.papajohns.by//images/catalog/thumbs/full/6e9a9ede2ae9b64046daded82d85175c.webp",
        title: "Pepperoni",
        cost: 7
    },
    {
        src: "https://api.papajohns.by//images/catalog/thumbs/full/85886b20eb94b2bc6d87f223d5718fd6.webp",
        title: "Vegan",
        cost: 10
    }
];


const renderFoodList = () => {
    return foodList.map(
        (item, idx) =>
            <FoodItem
                key={`${item.src}${idx}`}
                variant='Dark'
                src={item.src}
                title={item.title}
                cost={item.cost}
            />
    )
};

const FoodList = () => {
    return (
        <>
            <div>
                <CardDeck>
                    {renderFoodList()}
                </CardDeck>
            </div>
        </>
    );
}

export default FoodList;
