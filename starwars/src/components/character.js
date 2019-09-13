import React from "react";


function Character (props){

    const {name, height, mass, birth_year, hair_color, eye_color} = props

    return(

        <div>
            <h3>{name}</h3>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Birth Year: {birth_year}</p>
            <p>Hair Color: {hair_color}</p>
            <p>Eye Color: {eye_color}</p>
        </div>
    )
}

export default Character;