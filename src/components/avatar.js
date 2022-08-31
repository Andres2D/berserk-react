import { useState } from 'react';
import styles from './avatar.module.css';
import Form from './form';

const defaultAvatar = `https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&hairColor=Black&clotheType=Hoodie&eyeType=Default&mouthType=Default`;
const Avatar = () => {

  const [avatar, setAvatar] = useState(defaultAvatar);

  const updateAvatarHandler = (queries) => {
    const newQueryArr = Object.entries(queries).map((query) => {
      return `${query[0]}=${query[1]}`;
    });
    setAvatar(`https://avataaars.io/?avatarStyle=Transparent&clotheColor=Blue03&${newQueryArr.join('&')}`);
  }

  return (
    <div className={styles.card}>
      <img 
        className={styles.image}
        alt='avatar'
        src={avatar}
      />
      <Form 
        onUpdate={updateAvatarHandler}
      />
    </div>
  );
};

export default Avatar;
