import React from 'react';
import SmallCards from './index'
import renderer from 'react-test-renderer';
const dummyData=[
    {
        "dt": 1557846000,
        "main": {
          "temp": 18.3,
          "temp_min": 15.49,
          "temp_max": 18.3,
          "pressure": 1018.74,
          "sea_level": 1018.74,
          "grnd_level": 983.16,
          "humidity": 54,
          "temp_kf": 2.81
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 2.78,
          "deg": 353.289
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-05-14 15:00:00"
      },
      {
        "dt": 1557856800,
        "main": {
          "temp": 20.61,
          "temp_min": 18.51,
          "temp_max": 20.61,
          "pressure": 1017.9,
          "sea_level": 1017.9,
          "grnd_level": 982.65,
          "humidity": 46,
          "temp_kf": 2.11
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 3.04,
          "deg": 348.841
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-05-14 18:00:00"
      },
      {
        "dt": 1557867600,
        "main": {
          "temp": 19.77,
          "temp_min": 18.37,
          "temp_max": 19.77,
          "pressure": 1017.04,
          "sea_level": 1017.04,
          "grnd_level": 982.17,
          "humidity": 52,
          "temp_kf": 1.4
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 35
        },
        "wind": {
          "speed": 3.31,
          "deg": 331.918
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2019-05-14 21:00:00"
      },
      {
        "dt": 1557878400,
        "main": {
            "temp": 14.8,
            "temp_min": 14.09,
            "temp_max": 14.8,
            "pressure": 1016.85,
            "sea_level": 1016.85,
            "grnd_level": 981.87,
            "humidity": 78,
            "temp_kf": 0.7
        },
        "weather": [
            {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
            }
        ],
        "clouds": {
            "all": 68
        },
        "wind": {
            "speed": 1.43,
            "deg": 349.459
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-15 00:00:00"
    }
]

describe("Small Card component test",()=>{
    it('renders Cards and Small Cards component correctly', () => {
        const tree = renderer
          .create(<SmallCards data={dummyData} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
    });
})