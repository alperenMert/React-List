import React from 'react'
import ListItem from "./ListItem"
import { uuid } from '../uilts/uilts';

export default class list extends React.Component {
    render() {

        const cars=["BMW","Audi","Mercedes"];
        return (
            <div>
                <p>Arabalar(list Component)</p>
                <ul>
                    {
                        cars.map(car=>{
                            return(<ListItem key={uuid()} car={car}/>);
                        })
                    }
                </ul>
            </div>
        );
    }
}
