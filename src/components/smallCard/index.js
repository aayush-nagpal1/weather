import React from 'react';
import './index.css';
import { getIcon} from '../../utils/utils'

function SmallCards(props) {
        return (
            props.data.map((day,index)=> {
            return(<div className="col-md-3" key={index}>
            <div className="card small-card" >
                <div className="card-body">
                    <center>
                        <h6>
                        {day.dt_txt.split(' ')[0]}
                        </h6>
                        <h2 className="py-4 temperature">
                            {day.main.temp}° C
                        </h2>
                        <img src={getIcon(day.weather[0].description)} width="70" alt={day.weather[0].description} />
                    </center>
                </div>
            </div>
            </div>)})
        ); 
}


export default SmallCards
