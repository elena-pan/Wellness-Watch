import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import M from "materialize-css";
import LinearLoadingSymbol from "../layout/LinearLoadingSymbol";
import './Landing.css'

const mockData = [
    
]
const serverUrl = process.env.REACT_APP_SERVER_URL;

function Landing(props) {

    const [data, setData] = useState(null);
    const [startDate, setStartDate] = useState(new Date().setHours(0,0,0,0));
    const [endDate, setEndDate] = useState(new Date().setHours(0,0,0,0));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const elem1 = document.querySelectorAll('.startdatepicker');
        const options1 = {
            defaultDate: new Date(new Date().getTime() - 7 * (24 * 60 * 60 * 1000)),
            setDefaultDate: true,
            autoClose: true,
            maxDate: new Date(),
            onSelect: function(date) {
                setStartDate({ start: new Date(new Date(date).setHours(0,0,0,0))});
            }
        }
        M.Datepicker.init(elem1, options1);
        const elem2 = document.querySelectorAll('.enddatepicker');
        const options2 = {
            defaultDate: new Date(),
            setDefaultDate: true,
            autoClose: true,
            maxDate: new Date(),
            onSelect: function(date) {
                setEndDate({ start: new Date(new Date(date).setHours(0,0,0,0))});
            }
        }
        M.Datepicker.init(elem2, options2);
        setData("asdfasdf")
        // getData().catch(err => console.log(err))
    }, [])

    async function getData() {
        window.scrollTo(0, 0);
        axios.get(`${serverUrl}/api/datapoints`)
            .then(response => {
                setLoading(false);
                window.scrollTo(0, 0);
                setData(response.data);
            })
            .catch(err => {
                setLoading(false);
                window.scrollTo(0, 0);
                M.toast({html: 'An error has occurred. Please try again', classes: "red lighten-1"});
            })
    }

    let content;

    // If loading, render loading symbol
    if (loading || data === null) { 
        content = (<React.Fragment>
                        <i className="material-icons logo">public</i>
                        <LinearLoadingSymbol />
                        <h5 className="grey-text text-darken-2">
                            Loading...
                        </h5>
                    </React.Fragment>);
    }
    else {
        content = (<div className="row">
                        
                    </div>);
    }

    return (<div className="container">
                <div className="col s12 center-align header-inputs">
                    <label className="left-align datepicker">
                        Start date
                        <input type="text" class="startdatepicker"></input>
                    </label>
                    <label className="left-align datepicker">
                        End date
                        <input type="text" class="enddatepicker"></input>
                    </label>
                    <Link
                        to="/add"
                        className="add-btn btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Add
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