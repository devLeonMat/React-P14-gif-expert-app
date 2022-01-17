import React from "react";
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";
import 'animate.css';

export const GifGrid = ({category}) => {

    const {data: images, loading} = useFetchGifs(category);
    console.log(loading);

    return (<>
        <h3 className="animate__fadeIn">{category}</h3>
        {loading && <p className="animate__flash">Loading...</p>}
        <div className="card-grid">
            {images.map(img => (<GifGridItem key={img.id} {...img}/>))}
        </div>
    </>)

};
