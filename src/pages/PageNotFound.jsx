import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import styles from './PageNotFound.module.css';

function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className={styles.app}>
      <h1 className={styles.text}>Page not found 😢</h1>

      <Button type='back' onClick={()=> navigate(-1)}>&larr; back</Button>
    </div>
  )
}

export default PageNotFound
