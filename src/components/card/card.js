import React , { useState, useEffect } from 'react';
import SmallCard from '../smallCard/index'
import moment from 'moment';
import {mainCardData, smallCardData, getIcon} from '../../utils/utils'
import './card.css';
import config from "../../../config"
import fetch from 'node-fetch'

const Card = (props) => {
	let [mainCard,setMainCard] = useState([]);
	let [smallCard,setSmallCard] = useState([]);
    useEffect(() =>{
        let queryData = {"city":"Bangalore"}
        fetch(config.url,{
            method:"GET",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
                'file-access-id': JSON.stringify(queryData)
            },
        })
        .then(response => {
			  response.json().then(json => {
				setMainCard(mainCardData(json.list))
				setSmallCard(smallCardData(json.list))
			  });
		  });
	},[])

	if(mainCard.length>0){
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
												<img src={getIcon(mainCard[0].weather[0].description)} width="150" alt={mainCard[0].weather.description}/>
											</div>
											<div className="col-md-4"></div>
											<div className="col-md-4">
												<center className="py-5">
													<h4>{mainCard[0].dt_txt.split(' ')[0]}
													</h4>
													<h2>{moment(new Date).format('HH:mm')}
													</h2>
												</center>
											</div>
										</div>
										<div className="row">
											<div className="col-md-3"></div>
											<div className="col-md-6">
												<center>
													<p id= "main-card-temperature">{mainCard[0].main.temp}° C</p>
													<p>Bangalore, Whitefield</p>
												</center>
											</div>
											<div className="col-md-3"></div>
										</div>
										<div className="row my-5">
											<SmallCard data={smallCard}/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}else{
		return null
	}
}


export default Card
