import Icons from '../components/icon';
import moment from 'moment';
//get data for main Card
export const mainCardData = (weatherData) => {
    if(weatherData){
        let res = []
    const filterByDate = weatherData.filter(data => moment(new Date).format('YYYY-MM-DD') === (data.dt_txt.split(' ')[0]))
    res.push(filterByDate[0])
    return (res);
    } 
    else {
        return "Unable to fetch data";
    }
    
}

//to get weather data for next 4 days
export const smallCardData = (weatherData) => {
    if(weatherData){
        let res = [];
        for (let i = 1; i < 5; i++) {
            const filterByDate = weatherData.filter((data) => moment(new Date).add(i, 'days').format('YYYY-MM-DD') === (data.dt_txt.split(' ')[0]))
            const filterByTime = filterByDate.filter((data) => data.dt_txt.split(' ')[1] === "12:00:00")
            res.push(filterByTime[0])
        }
        return res;
    }else{
        return "Unable to fetch data";
    }
    
}

//get url for icon to be used in card
export const getIcon = (description) => {
    if(description){
        return Icons[description];
    }else{
        return null;
    }
}