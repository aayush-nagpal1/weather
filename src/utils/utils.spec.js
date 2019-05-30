import Icons from '../components/icon';
import {
    mainCardData,
    smallCardData,
    getIcon
} from './utils';
const dummyData = [{
        "dt": 1559055600,
        "main": {
            "temp": 29.04,
            "temp_min": 28.33,
            "temp_max": 29.04,
            "pressure": 1005.95,
            "sea_level": 1005.95,
            "grnd_level": 912.25,
            "humidity": 60,
            "temp_kf": 0.72
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.05,
            "deg": 188.678
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-28 15:00:00"
    },
    {
        "dt": 1559066400,
        "main": {
            "temp": 26.77,
            "temp_min": 26.23,
            "temp_max": 26.77,
            "pressure": 1007.47,
            "sea_level": 1007.47,
            "grnd_level": 913.9,
            "humidity": 68,
            "temp_kf": 0.54
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 5.99,
            "deg": 222.221
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-28 18:00:00"
    },
    {
        "dt": 1559077200,
        "main": {
            "temp": 26.16,
            "temp_min": 25.8,
            "temp_max": 26.16,
            "pressure": 1006.38,
            "sea_level": 1006.38,
            "grnd_level": 911.8,
            "humidity": 67,
            "temp_kf": 0.36
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 3.73,
            "deg": 248.656
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-28 21:00:00"
    },
    {
        "dt": 1559088000,
        "main": {
            "temp": 24.71,
            "temp_min": 24.53,
            "temp_max": 24.71,
            "pressure": 1006.84,
            "sea_level": 1006.84,
            "grnd_level": 912.54,
            "humidity": 70,
            "temp_kf": 0.18
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 5.17,
            "deg": 259.164
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-29 00:00:00"
    },
    {
        "dt": 1559098800,
        "main": {
            "temp": 28.15,
            "temp_min": 28.15,
            "temp_max": 28.15,
            "pressure": 1008.57,
            "sea_level": 1008.57,
            "grnd_level": 914.2,
            "humidity": 56,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 4.39,
            "deg": 261.744
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-29 03:00:00"
    },
    {
        "dt": 1559109600,
        "main": {
            "temp": 33.75,
            "temp_min": 33.75,
            "temp_max": 33.75,
            "pressure": 1007,
            "sea_level": 1007,
            "grnd_level": 913.32,
            "humidity": 37,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 4.19,
            "deg": 269.699
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-29 06:00:00"
    },
    {
        "dt": 1559120400,
        "main": {
            "temp": 36.24,
            "temp_min": 36.24,
            "temp_max": 36.24,
            "pressure": 1003.82,
            "sea_level": 1003.82,
            "grnd_level": 910.71,
            "humidity": 28,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 84
        },
        "wind": {
            "speed": 3.27,
            "deg": 274.335
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-29 09:00:00"
    },
    {
        "dt": 1559131200,
        "main": {
            "temp": 34.76,
            "temp_min": 34.76,
            "temp_max": 34.76,
            "pressure": 1002.95,
            "sea_level": 1002.95,
            "grnd_level": 910.02,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 3.44,
            "deg": 239.411
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-29 12:00:00"
    },
    {
        "dt": 1559142000,
        "main": {
            "temp": 31.04,
            "temp_min": 31.04,
            "temp_max": 31.04,
            "pressure": 1004.99,
            "sea_level": 1004.99,
            "grnd_level": 911.28,
            "humidity": 47,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 3.51,
            "deg": 187.163
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-29 15:00:00"
    },
    {
        "dt": 1559152800,
        "main": {
            "temp": 26.63,
            "temp_min": 26.63,
            "temp_max": 26.63,
            "pressure": 1007.45,
            "sea_level": 1007.45,
            "grnd_level": 914.04,
            "humidity": 68,
            "temp_kf": 0
        },
        "weather": [{
            "id": 502,
            "main": "Rain",
            "description": "heavy intensity rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 97
        },
        "wind": {
            "speed": 6.8,
            "deg": 181.989
        },
        "rain": {
            "3h": 14
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-29 18:00:00"
    },
    {
        "dt": 1559163600,
        "main": {
            "temp": 26.46,
            "temp_min": 26.46,
            "temp_max": 26.46,
            "pressure": 1006.75,
            "sea_level": 1006.75,
            "grnd_level": 912.15,
            "humidity": 67,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.8,
            "deg": 215.118
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-29 21:00:00"
    },
    {
        "dt": 1559174400,
        "main": {
            "temp": 25.41,
            "temp_min": 25.41,
            "temp_max": 25.41,
            "pressure": 1006.39,
            "sea_level": 1006.39,
            "grnd_level": 912.49,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.78,
            "deg": 257.648
        },
        "rain": {
            "3h": 2.062
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-30 00:00:00"
    },
    {
        "dt": 1559185200,
        "main": {
            "temp": 27.57,
            "temp_min": 27.57,
            "temp_max": 27.57,
            "pressure": 1007.91,
            "sea_level": 1007.91,
            "grnd_level": 913.13,
            "humidity": 54,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
        }],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 4.99,
            "deg": 259.325
        },
        "rain": {
            "3h": 0.062
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-30 03:00:00"
    },
    {
        "dt": 1559196000,
        "main": {
            "temp": 33.58,
            "temp_min": 33.58,
            "temp_max": 33.58,
            "pressure": 1006.64,
            "sea_level": 1006.64,
            "grnd_level": 913.02,
            "humidity": 35,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 86
        },
        "wind": {
            "speed": 3.31,
            "deg": 265.577
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-30 06:00:00"
    },
    {
        "dt": 1559206800,
        "main": {
            "temp": 36.28,
            "temp_min": 36.28,
            "temp_max": 36.28,
            "pressure": 1003.17,
            "sea_level": 1003.17,
            "grnd_level": 910.04,
            "humidity": 26,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 97
        },
        "wind": {
            "speed": 3.73,
            "deg": 278.056
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-30 09:00:00"
    },
    {
        "dt": 1559217600,
        "main": {
            "temp": 35.66,
            "temp_min": 35.66,
            "temp_max": 35.66,
            "pressure": 1001.94,
            "sea_level": 1001.94,
            "grnd_level": 908.82,
            "humidity": 25,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 3.84,
            "deg": 279.877
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-30 12:00:00"
    },
    {
        "dt": 1559228400,
        "main": {
            "temp": 30.35,
            "temp_min": 30.35,
            "temp_max": 30.35,
            "pressure": 1005.14,
            "sea_level": 1005.14,
            "grnd_level": 911.73,
            "humidity": 49,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 7.46,
            "deg": 180.822
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-30 15:00:00"
    },
    {
        "dt": 1559239200,
        "main": {
            "temp": 26.36,
            "temp_min": 26.36,
            "temp_max": 26.36,
            "pressure": 1007.22,
            "sea_level": 1007.22,
            "grnd_level": 913.26,
            "humidity": 72,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 93
        },
        "wind": {
            "speed": 5.97,
            "deg": 223.506
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-30 18:00:00"
    },
    {
        "dt": 1559250000,
        "main": {
            "temp": 24.58,
            "temp_min": 24.58,
            "temp_max": 24.58,
            "pressure": 1006,
            "sea_level": 1006,
            "grnd_level": 911.74,
            "humidity": 81,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 98
        },
        "wind": {
            "speed": 5.78,
            "deg": 238.774
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-30 21:00:00"
    },
    {
        "dt": 1559260800,
        "main": {
            "temp": 24.19,
            "temp_min": 24.19,
            "temp_max": 24.19,
            "pressure": 1006.96,
            "sea_level": 1006.96,
            "grnd_level": 912.3,
            "humidity": 77,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 5.86,
            "deg": 256.376
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-31 00:00:00"
    },
    {
        "dt": 1559271600,
        "main": {
            "temp": 24.75,
            "temp_min": 24.75,
            "temp_max": 24.75,
            "pressure": 1008.93,
            "sea_level": 1008.93,
            "grnd_level": 913.95,
            "humidity": 73,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 94
        },
        "wind": {
            "speed": 4.81,
            "deg": 254.092
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-31 03:00:00"
    },
    {
        "dt": 1559282400,
        "main": {
            "temp": 31.17,
            "temp_min": 31.17,
            "temp_max": 31.17,
            "pressure": 1007.5,
            "sea_level": 1007.5,
            "grnd_level": 913.82,
            "humidity": 44,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 90
        },
        "wind": {
            "speed": 4.66,
            "deg": 264.992
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-31 06:00:00"
    },
    {
        "dt": 1559293200,
        "main": {
            "temp": 34.53,
            "temp_min": 34.53,
            "temp_max": 34.53,
            "pressure": 1003.84,
            "sea_level": 1003.84,
            "grnd_level": 910.74,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 80
        },
        "wind": {
            "speed": 3.97,
            "deg": 254.733
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-31 09:00:00"
    },
    {
        "dt": 1559304000,
        "main": {
            "temp": 34.23,
            "temp_min": 34.23,
            "temp_max": 34.23,
            "pressure": 1003.06,
            "sea_level": 1003.06,
            "grnd_level": 909.27,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 70
        },
        "wind": {
            "speed": 4.75,
            "deg": 241.327
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-05-31 12:00:00"
    },
    {
        "dt": 1559314800,
        "main": {
            "temp": 26.75,
            "temp_min": 26.75,
            "temp_max": 26.75,
            "pressure": 1006.16,
            "sea_level": 1006.16,
            "grnd_level": 912.56,
            "humidity": 68,
            "temp_kf": 0
        },
        "weather": [{
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 9,
            "deg": 217.224
        },
        "rain": {
            "3h": 10.125
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-31 15:00:00"
    },
    {
        "dt": 1559325600,
        "main": {
            "temp": 25.27,
            "temp_min": 25.27,
            "temp_max": 25.27,
            "pressure": 1008.21,
            "sea_level": 1008.21,
            "grnd_level": 914.64,
            "humidity": 74,
            "temp_kf": 0
        },
        "weather": [{
            "id": 501,
            "main": "Rain",
            "description": "moderate rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 99
        },
        "wind": {
            "speed": 4.43,
            "deg": 192.362
        },
        "rain": {
            "3h": 9.75
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-31 18:00:00"
    },
    {
        "dt": 1559336400,
        "main": {
            "temp": 23.79,
            "temp_min": 23.79,
            "temp_max": 23.79,
            "pressure": 1007.57,
            "sea_level": 1007.57,
            "grnd_level": 912.91,
            "humidity": 79,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 7.05,
            "deg": 233.146
        },
        "rain": {
            "3h": 1.562
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-05-31 21:00:00"
    },
    {
        "dt": 1559347200,
        "main": {
            "temp": 22.89,
            "temp_min": 22.89,
            "temp_max": 22.89,
            "pressure": 1008.03,
            "sea_level": 1008.03,
            "grnd_level": 913.21,
            "humidity": 78,
            "temp_kf": 0
        },
        "weather": [{
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 6.21,
            "deg": 261.119
        },
        "rain": {
            "3h": 0.376
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-06-01 00:00:00"
    },
    {
        "dt": 1559358000,
        "main": {
            "temp": 25.89,
            "temp_min": 25.89,
            "temp_max": 25.89,
            "pressure": 1010.35,
            "sea_level": 1010.35,
            "grnd_level": 915.42,
            "humidity": 67,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 5.37,
            "deg": 281.941
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-01 03:00:00"
    },
    {
        "dt": 1559368800,
        "main": {
            "temp": 31.63,
            "temp_min": 31.63,
            "temp_max": 31.63,
            "pressure": 1008.64,
            "sea_level": 1008.64,
            "grnd_level": 914.3,
            "humidity": 44,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 89
        },
        "wind": {
            "speed": 5.01,
            "deg": 266.024
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-01 06:00:00"
    },
    {
        "dt": 1559379600,
        "main": {
            "temp": 34.55,
            "temp_min": 34.55,
            "temp_max": 34.55,
            "pressure": 1004.92,
            "sea_level": 1004.92,
            "grnd_level": 911.12,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 39
        },
        "wind": {
            "speed": 3.35,
            "deg": 281.876
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-01 09:00:00"
    },
    {
        "dt": 1559390400,
        "main": {
            "temp": 34.05,
            "temp_min": 34.05,
            "temp_max": 34.05,
            "pressure": 1004.85,
            "sea_level": 1004.85,
            "grnd_level": 910.99,
            "humidity": 31,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 46
        },
        "wind": {
            "speed": 3.3,
            "deg": 305.429
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-01 12:00:00"
    },
    {
        "dt": 1559401200,
        "main": {
            "temp": 30.37,
            "temp_min": 30.37,
            "temp_max": 30.37,
            "pressure": 1007.69,
            "sea_level": 1007.69,
            "grnd_level": 913.83,
            "humidity": 46,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 95
        },
        "wind": {
            "speed": 3.49,
            "deg": 204.934
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-06-01 15:00:00"
    },
    {
        "dt": 1559412000,
        "main": {
            "temp": 26.81,
            "temp_min": 26.81,
            "temp_max": 26.81,
            "pressure": 1008.6,
            "sea_level": 1008.6,
            "grnd_level": 914.37,
            "humidity": 65,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 90
        },
        "wind": {
            "speed": 5.97,
            "deg": 250.093
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-06-01 18:00:00"
    },
    {
        "dt": 1559422800,
        "main": {
            "temp": 24.71,
            "temp_min": 24.71,
            "temp_max": 24.71,
            "pressure": 1006.43,
            "sea_level": 1006.43,
            "grnd_level": 912.03,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 84
        },
        "wind": {
            "speed": 4.56,
            "deg": 235.029
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-06-01 21:00:00"
    },
    {
        "dt": 1559433600,
        "main": {
            "temp": 24.07,
            "temp_min": 24.07,
            "temp_max": 24.07,
            "pressure": 1007.45,
            "sea_level": 1007.45,
            "grnd_level": 912.76,
            "humidity": 75,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
        }],
        "clouds": {
            "all": 92
        },
        "wind": {
            "speed": 4.51,
            "deg": 264.856
        },
        "sys": {
            "pod": "n"
        },
        "dt_txt": "2019-06-02 00:00:00"
    },
    {
        "dt": 1559444400,
        "main": {
            "temp": 26.84,
            "temp_min": 26.84,
            "temp_max": 26.84,
            "pressure": 1010.01,
            "sea_level": 1010.01,
            "grnd_level": 915.33,
            "humidity": 62,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 100
        },
        "wind": {
            "speed": 4.15,
            "deg": 278.79
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-02 03:00:00"
    },
    {
        "dt": 1559455200,
        "main": {
            "temp": 32.26,
            "temp_min": 32.26,
            "temp_max": 32.26,
            "pressure": 1008.47,
            "sea_level": 1008.47,
            "grnd_level": 914.64,
            "humidity": 40,
            "temp_kf": 0
        },
        "weather": [{
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 88
        },
        "wind": {
            "speed": 4.21,
            "deg": 263.546
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-02 06:00:00"
    },
    {
        "dt": 1559466000,
        "main": {
            "temp": 35.08,
            "temp_min": 35.08,
            "temp_max": 35.08,
            "pressure": 1004.82,
            "sea_level": 1004.82,
            "grnd_level": 911.82,
            "humidity": 30,
            "temp_kf": 0
        },
        "weather": [{
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
        }],
        "clouds": {
            "all": 33
        },
        "wind": {
            "speed": 2.61,
            "deg": 264.2
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-02 09:00:00"
    },
    {
        "dt": 1559476800,
        "main": {
            "temp": 34.05,
            "temp_min": 34.05,
            "temp_max": 34.05,
            "pressure": 1004.25,
            "sea_level": 1004.25,
            "grnd_level": 911.11,
            "humidity": 32,
            "temp_kf": 0
        },
        "weather": [{
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
        }],
        "clouds": {
            "all": 58
        },
        "wind": {
            "speed": 2.11,
            "deg": 228.75
        },
        "sys": {
            "pod": "d"
        },
        "dt_txt": "2019-06-02 12:00:00"
    }
]

describe("test util functions", () => {
    it("getIcon function gives a correct response", () => {
        expect(getIcon("overcast clouds")).toEqual("https://image.flaticon.com/icons/svg/148/148828.svg")
    });

    it("getIcon function null when no description is passed", () => {
        expect(getIcon(null)).toEqual(null)
    });

    it("smallCardData return an array of objects length 4", () => {
        expect(smallCardData(dummyData).length).toEqual(4)
    });

    it("smallCardData returns error message on recieving null parameter", () => {
        expect(smallCardData(null)).toEqual("Unable to fetch data")
    });

    it("mainCardData is array of length 1 ", () => {
        expect(mainCardData(dummyData).length).toEqual(1);
    });

    it("mainCardData returns error message on recieving null parameter", () => {
        expect(mainCardData(null)).toEqual("Unable to fetch data")
    });
})