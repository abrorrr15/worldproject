import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CityContext";

function CityList() {
  const { cities, loading, error } = useCities();

  if (loading) return <Spinner />;
  if (error)
    return <Message message="There was an error fetching the cities." />;
  if (!cities.length)
    return <Message message="Add your first city on the map." />;

  return (
    <ul className={styles.CityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
