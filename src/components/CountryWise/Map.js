import React from 'react';

const H = window.H;

class Map extends React.Component{
    platform = null;
    map = null;

    state = {
        app_id: "3v7CmTuCaXHh3detsl96",
        app_code: "HmJmSH81pLLCIv3FwKWvp6Sq6UsDg5FfqDTYLkAWomw",
        center: { lng: 1, lat: 30 },
        zoom: "3",
        // theme: props.theme,
        // style: props.style,
    }

    componentDidMount = () => {
        //initialize HERE maps platform object to effect authentication and authorization, and use secure http(https)
        // this.platform = new H.service.Platform(this.state);
        this.platform = new H.service.Platform({'apikey':"HmJmSH81pLLCIv3FwKWvp6Sq6UsDg5FfqDTYLkAWomw"});
        // Obtain the default map types from the platform object:
        let layer = this.platform.createDefaultLayers();
        // Instantiate (and display) a map object:
        this.map = new H.Map(
                document.getElementById('mapContainer'), layer.vector.normal.map, {
                zoom: this.state.zoom,
                center: this.state.center,
        });
        
        // Create the default UI:
        let ui = H.ui.UI.createDefault(this.map, layer);
    }

    render(){
        return(
            <div 
                style={{"width": "100%", "height": "600px" }}
                id="mapContainer"></div>
        )
    }
}
export default Map;