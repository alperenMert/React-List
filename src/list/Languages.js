import React, { Component } from 'react'
import "./Languages.css";

export default class Languages extends Component {
    render() {
            const languageList=[
                {
                    name:"React Native",
                    creator:"Facebook",
                    image:"./images/react.png" 
                },
                {
                    name:"Java",
                    creator:"Oracle",
                    image:"./images/java.png"
                }
            ];
            const element_language = (languages) => {
                return(
                    <ul>
                        {languages.map((language)=>{
                            return(
                                <li className="language-box">
                                    <img className="language-image"
                                    src={language.image}
                                    alt={language.name} 
                                    />
                                    <div className="language-text">
                                        <p>
                                            Language Name: {language.name}
                                        </p>
                                        <p>Creator: {language.creator}</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                );
            };
        return (
            <div>
                <p>Bazı Programlama Tekolojileri</p>
                {element_language(languageList)}
            </div>
        )
    }
}
