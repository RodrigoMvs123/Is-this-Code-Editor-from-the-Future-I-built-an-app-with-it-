import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import { https://www.compart.com/en/unicode/U+3004 } from './components/header/header';
import { MainCard } from './components/main-card/main-card';
import { Card } from './components/card/card';
import { Footer } from './components/footer/footer'

interface Day {
    date: number,
    weather: string,
    temp2m: {
        max: number,
        min: number
    },
    wind10m_max: number
}

function App() {
       const [ location, setLocation ] = useState<any>(null)
       const [ data, setData ] = useState<Day[]>([])

       const getLocation = () => {
        if (!navigator.geolocation) {
            console.log('Location API is not supported by your browser')
        } else {
            navigator.geolocation.getCurrentPosition( position => {
                setLocation(position.coords)
            },
            () => console.log('Sorry, we can not find your location')
          )
            
        }
       }

       const fetchData = async () => {
              const latitude = location?.latitude
              const longitude = location?.longitude
              try {
                  const response = await fetch(`http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`)
                  const data = await response.json()
                  setData(data.dataseries)
              } catch (error) {
                  console.error(error)
              }

           }

        useEffect(() => {
            getLocation()
            fetchData()
        }, [])

        console.log(data)

        const getImage = (weather) => {
            let image
            switch(weather){
                case "sun":
                image = "https://i.imgur.com/5HvqdYK.png"
                break;
                case "cloudy":
                image = "https://i.imgur.com/oBc5en8.png"
                break;
                case "rain":
                image = "https://i.imgur.com/wdCSSCz.png"
                break;
                case "storm":
                image = "https://i.imgur.com/tITAHlD.png"
                break;
                default: 
                image = "https://i.imgur.com/5HvqdYK.png"
            }
            return image
        }

       return <div className={styles.App}>
                        <Header />
                        <MainCard 
                            temp={data?.slice(0,1)[0].temp2m.max}
                            img={getImage(data?.slice(0,1)[0].weather)}
                        />
                        <div className={style['card-container']}>
                            {data?.slice(1, 4).map((day, _index) => <Card key={_index} day={day} img={}/>)}
                        </div>
                        <Footer />
                 </div>
       };

}

export default App;
