import React from "react";
import Character from "./character";


function Characters (props) {
    const {characters} = props

    return (
        <>
        {
            characters.map(person => (
                <Character
                key={person.name} 
                name = {person.name}
                height={person.height}
                mass={person.mass}
                birth_year={person.birth_year}
                hair_color={person.hair_color}
                eye_color = {person.eye_color}
                />
            ))
        }
        </>
    )
}

export default Characters;