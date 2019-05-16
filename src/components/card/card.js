import React , { useState, useEffect } from 'react';
import SmallCard from '../smallCard/index'
import moment from 'moment';
import './card.css'
const MAX_SMALL_CARDS = 4;
const Month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]

const mainCardData = (weatherData)=> {
	let res =[]
	//console.log(moment(new Date).format('YYYY-MM-DD HH:mm:ss'),weatherData[0].dt_txt)
	const filterByDate = weatherData.filter(data => moment(new Date).format('YYYY-MM-DD')=== (data.dt_txt.split(' ')[0]))
	console.log(filterByDate[0]);
	res.push(filterByDate[0])
	return(res);
}

const Card = props=> {
	// let [city, setCity] = useState("Bangalore");
	// useEffect(()=>{
	// 	setCity("Bangalore");
	// })
	let [mainCard,setMainCard]= useState([]);
    useEffect(() =>{
        let queryData = {"city":"Bangalore"}
        fetch("http://localhost:4000/getWeatherUpdate",{
            method:"GET",
            mode: 'cors', 
            headers: {
                'Content-Type': 'application/json',
                'file-access-id': JSON.stringify(queryData)
            },
        })
        .then(response => {
			if (response.ok) {
			  response.json().then(json => {
				console.log(json);
				setMainCard(mainCardData(json.list))
			  });
			}
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
												<img src="https://image.flaticon.com/icons/svg/979/979585.svg" width="150" alt=""/>
											</div>
											<div className="col-md-4"></div>
											<div className="col-md-4">
												<center className="py-5">
													<h4>{mainCard[0].dt_txt.split(' ')[0]}
													</h4>
													<h2>{moment(new Date).format('HH:mm')}</h2>
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
	}else{
		return null
	}
}


export default Card