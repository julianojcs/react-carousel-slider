import Image from "next/image";
import styles from './styles.module.css';

const Item = ({src, author, title, topic, desc}) => {
  return (
    <div className={styles.item}>
      <Image
        className={styles.image}
        src={src}
        alt=''
        fill
        quality={100}
        sizes="100vw"
        priority
        style={{
          objectFit: 'cover',
        }}
      />
      <div className={styles.content}>
          <div className={styles.author}>{author}</div>
          <div className={styles.title}>{title}</div>
          <div className={styles.topic}>{topic}</div>
          <div className={styles.des}>{desc}</div>
          <div className={styles.buttons}>
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
          </div>
      </div>
  </div>
  );
};

export default Item;