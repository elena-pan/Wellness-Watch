import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios"

function Report(props) {
    return (
        <div className="container">
            <div style={{ marginTop: "4rem", marginBottom:"5rem" }} className="row">
                <div className="col s8 offset-s2">
                    <h4>
                        <b>Wellness Report</b>
                    </h4>
                    <p className="grey-text">September 12-19</p>
                </div>
                <div className="col s8 offset-s2">
                    <p style={{marginTop: "1rem"}}><i>Needs</i></p>
                    <p>Your physiological and safety needs were well met this week, rated <b>8/10</b> on average - these are basic needs like food, water, and security.
                        Belongingness needs, which are the emotional need for interpersonal relationships, were not fully met this week.
                        Your self-actualization needs the most work. This is the highest level of Maslow's hierarchy and describes your self-fulfillment,
                        and sense of accomplishment. Overall, you rated your self-actualization and belongingness needs as <b>27%</b> less fulfilled than your physiological and security needs.
                    </p>

                    <p style={{marginTop: "2rem"}}><i>Sleep</i></p>
                    <p>You slept <b>30%</b> more hours compared to last week and saw a <b>7%</b> increase in sleep quality! 
                    You get about 20% more sleep on weekends compared to weekdays. Saturdays are when you get the most sleep, 
                    and Wednesdays are when you get the least sleep.</p>

                    <p style={{marginTop: "2rem"}}><i>Recommendations</i></p>
                    <p>To fulfill your belongingness needs, some simple ways to connect can be to meet up with a friend for coffee,
                        or chat for just 30 minutes on the phone.</p>
                    <p>
                        Self-actualization looks different for everyone, depending on what your goals are, but writing down your goals
                        and setting concrete steps to achieve them is a proven method of increasing your likelihood of reaching them.</p>
                    <p>
                        Your sleep has improved greatly this week, but to improve your consistency, a great strategy is to set a sleep alarm.
                        Just as you set an alarm for waking up, your sleep alarm tells you it's time to sleep, which is great for 
                        setting a consistent routine and tuning your body's alarm clock.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Report;