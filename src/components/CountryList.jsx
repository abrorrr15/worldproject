import CountryItem from './CountryItem';
import styles from './countryList.module.css';
import Spinner from './Spinner';
import Message from './Message';
import { useCities } from '../contexts/CityContext';

function countryList() {
  const {cities, loading} = useCities();
  if (loading) return <Spinner />
  if (!cities.length) return (<Message message="Add your first country on the map" />);
console.log(cities);
  const countries = cities.reduce((arr, city) => {
    if (!arr.map(el => el.country).includes(city.country)) return [...arr, { country: city.country, emoji: city.emoji }]
    else return arr;
  }
    , [])
  return (
    <ul className={styles.countryList} >
      {countries.map((country, index) => <CountryItem country={country} key={index}/>)}
    </ul>
  )
}

export default countryList
