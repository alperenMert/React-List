import React, { Component } from "react";
import List from "./list/List";
import ListWorker from "./list/ListWorker";
import { uuid } from "./uilts/uilts";
import Languages from "./list/Languages";

export default class App extends Component {
  fruits = ["Elma", "Armut", "Portakal"];
  render() {
    return (
      <div>
        <p>Meyveler</p>
        <ul>
          {this.fruits.filter(name=>name.includes('o')).map( fruit => {
            return <li key={uuid()}>{fruit}</li>;
          })
        }
        </ul>

        <List />
        <ListWorker />
        <Languages />
      </div>
    );
  }
}
