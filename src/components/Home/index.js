import React from 'react';
import WorldStats from 'components/WorldStats/index';

const Home = () => {
    return(
        <>
            <div className="banner">
                <h1>Don't be a covidiot </h1>
                <span>- Steven Magee</span>
                <span className="photo-courtesy"> 
                    Photo by Fusion Medical Animation on <a href="https://unsplash.com/s/photos/coronavirus"> Unsplash </a>
                </span >
            </div>
            <WorldStats />
        </>
    )
}
export default Home;