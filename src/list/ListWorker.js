import React, { Component } from "react";
import "./ListWorkers.css";

export default class ListWorker extends Component {
  render() {
    const workersData = [
      {
        name: "Alperen",
        surname: "MERT",
        age: "25",
        avatar: "../images/profile.jpg",
      },
      {
        name: "Ahmet",
        surname: "GE.",
        age: "32",
        avatar: "../images/profile3.png",
      },
      {
        name: "Gözde",
        surname: "AK.",
        age: "21",
        avatar: "../images/profile2.jpg",
      },
    ];
    const element_worker = (workers) => {
      return (
        <ul>
          {workers.map((worker) => {
            return (
              <li className="worker-box">
                <img
                  className="worker-avatar"
                  src={worker.avatar}
                  alt={worker.name}
                />
                <div className="worker-text">
                  <p>
                    Ad Soyad: {worker.name} {worker.surname}
                  </p>
                  <p>Yaş: {worker.age}</p>
                </div>
              </li>
            );
          })}
        </ul>
      );
    };
    return (
      <div>
        <p>Çalışanlar</p>
        {element_worker(workersData)}
      </div>
    );
  }
}
