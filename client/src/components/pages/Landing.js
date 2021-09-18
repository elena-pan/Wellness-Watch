import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import M from "materialize-css";
import LinearLoadingSymbol from "../layout/LinearLoadingSymbol";
import './Landing.css'

const serverUrl = process.env.REACT_APP_SERVER_URL;

function Landing(props) {

    const [images, setImages] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // getImages().catch(err => console.log(err))
    }, [])

    async function getImages() {
        window.scrollTo(0, 0);
        axios.get(`${serverUrl}/api/images`)
            .then(response => {
                setLoading(false);
                window.scrollTo(0, 0);
                setImages(response.data);
            })
            .catch(err => {
                setLoading(false);
                window.scrollTo(0, 0);
                M.toast({html: 'An error has occurred. Please try again', classes: "red lighten-1"});
            })
    }

    let content;

    // If loading, render loading symbol
    if (loading || images === null) { 
        content = (<React.Fragment>
                        <i className="material-icons logo">public</i>
                        <LinearLoadingSymbol />
                        <h5 className="grey-text text-darken-2">
                            Loading...
                        </h5>
                    </React.Fragment>);
    }
    else if (images.length === 0) {
        content = (<h5 className="no-images grey-text text-darken-2">
                        No images found
                    </h5>);
    }
    else {
        const cards = images.map((image, index) => {
            return (
                <div className="col s12 m6 l4" key={index}>
                    <div className="card left-align">
                        <div className="card-image waves-effect waves-light">
                            <img className="activator" src={`data:image/jpeg;base64,${image.blob}`} alt=""/>
                        </div>
                        <div className="card-content">
                            <span className="card-title activator">{ image.name }</span>
                        </div>
                        <div className="card-reveal">
                            <span className="card-title">{image.name}<i className="material-icons right">close</i></span>
                            <p className="card-description-field grey-text">{ image.description }</p>
                            <button className="btn btn-small waves-effect waves-light hoverable blue accent-3"
                                // onClick={() => deleteImage(image.id)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>)}
        )

        content = (<div className="row">
                        { cards }
                    </div>);
    }

    return (<div className="container">
                <div className="col s12 center-align header-inputs">
                    <Link
                        to="/add-image"
                        className="add-image btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Add Image
                        </Link>
                </div>
                <div className="main-content valign-wrapper">
                    <div className="row">
                        <div className="col s12 center-align">
                            { content }
                        </div>
                    </div>
                </div>
            </div>);
}

export default Landing;