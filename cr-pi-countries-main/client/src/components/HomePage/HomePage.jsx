import React from "react";
import { CardsGrid } from "../CardsGrid/CardsGrid"
import SearchBar from "../SearchBar/SearchBar"


export const HomePage = () =>{

    return(
        <div>
            <h1>Esta es la Home</h1>
            <SearchBar/>
            <CardsGrid/>
        </div>
    )
}
