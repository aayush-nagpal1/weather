import React , { useState, useEffect } from 'react';
import SmallCard from '../smallCard/index'
import Services from '../../services'
import './card.css'
const MAX_SMALL_CARDS = 4;

function Card(props) {
    useEffect(() =>{
        Services.getWeatherDetails("Bangalore",function(response){
            console.log(response);
        })
    })
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="card main-card-width" >
                            <div className="card-body">
                                <div className="contaner">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img src="https://image.flaticon.com/icons/svg/979/979585.svg" width="150" alt=""/>
                                        </div>
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4">
                                            <center className="py-5">
                                                {/* <h4><%-new Date(data.date).getDate()%>-<%-Month[new Date(data.date).getMonth()]%>-<%-new Date(data.date).getFullYear()%>
                                                </h4>
                                                <h2><%-data.time%></h2> */}
                                            </center>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3"></div>
                                        <div className="col-md-6">
                                            <center>
                                                {/* <p style="font-size: 90px;margin-bottom: 0;"><%-data.temperature%>° C</p> */}
                                                <p>Bangalore, Whitefield</p>
                                            </center>
                                        </div>
                                        <div className="col-md-3"></div>
                                    </div>
                                    <div className="row my-5">
                                        <SmallCard />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Card