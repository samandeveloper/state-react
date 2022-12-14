import React from "react";
import starLogoEmpty from "../images/star-empty.png"
import starLogoFilled from "../images/star-filled.png"

export default function Star(props){
    console.log(props.isFilled)
    let starIcon = props.isFilled.isFavorite ? starLogoFilled : starLogoEmpty
    console.log(starIcon)
    // function toggleFavorite() {
    //     console.log("Toggle Favorite")
    //     setContact(prevState => {
    //         return {...prevState, isFavorite : !prevState.isFavorite}
    //     })
    // }
    return(
        <img 
        src={`${starIcon}`}
        className="card--favorite"
        onClick={props.handleClick}
        />
    )
}