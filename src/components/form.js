import { useEffect, useState } from 'react';
import styles from './form.module.css';

const Form = (props) => {

  const [form, setForm] = useState({
    topType: 'ShortHairShortFlat',
    hairColor: 'Black',
    eyeType: 'Default',
    mouthType: 'Default',
    clotheType: 'Hoodie',
  });

  useEffect(() => {
    props.onUpdate(form);
  }, [form, props]);

  const changeHandler = (evt) => {
    setForm(current => {
      return {
        ...current,
        [evt.target.name]: evt.target.value
      }
    });
  };
 
  return (
    <form className={styles.form}>
      <div className={styles.group}>
        <label>Hair</label>
        <select 
          className={styles.selector}
          onChange={changeHandler} 
          name='topType'
          value={form.topType}
        >
          <option value='ShortHairTheCaesar'>Short</option>
          <option value='ShortHairDreads01'>Medium</option>
          <option value='LongHairBigHair'>Long</option>
        </select>
      </div>
      <div className={styles.group}>
        <label>Hair color</label>
        <select 
          className={styles.selector}
          onChange={changeHandler} 
          name='hairColor'
          value={form.hairColor}
          >
          <option value='Black'>Black</option>
          <option value='Blonde'>Blonde</option>
          <option value='Red'>Red</option>
        </select>
      </div>
      <div className={styles.group}>
        <label>Eyes</label>
        <select 
          className={styles.selector}
          onChange={changeHandler} 
          name='eyeType'
          value={form.eyeType}
        >
          <option value='Default'>Neutral</option>
          <option value='Close'>Close</option>
          <option value='Wink'>Wink</option>
        </select>
      </div>
      <div className={styles.group}>
        <label>Mouth</label>
        <select 
          className={styles.selector}
          onChange={changeHandler} 
          name='mouthType'
          value={form.mouthType}
        >
          <option value='Smile'>Smile</option>
          <option value='Serious'>Serious</option>
          <option value='Default'>Neutral</option>
        </select>
      </div>
      <div className={styles.group}>
        <label>Clothes</label>
        <select 
          className={styles.selector}
          onChange={changeHandler} 
          name='clotheType'
          value={form.clotheType}
        >
          <option value='Hoodie'>Hoodie</option>
          <option value='ShirtCrewNeck'>Shirt</option>
          <option value='BlazerSweater'>Blazer</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
