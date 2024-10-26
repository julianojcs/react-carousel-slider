import Image from "next/image";
import styles from './styles.module.css';
import Item from '@/components/Item';
import { getPlaceholderImage } from '@/utils/images'
import { items } from '@/utils/constants';

const Carousel = async () => {
  const itemWithPlaceholder = await Promise.all(
    items.map(async (item) => {
      const itemWithPlaceholder = await getPlaceholderImage(item.src)
      return {
        ...item,
        src: itemWithPlaceholder.src,
        placeholder: itemWithPlaceholder.placeholder,
      }
    }),
  )
  return (
    <div className={styles.carousel}>
        {/* list item */}
        <div className={styles.list}>
          {itemWithPlaceholder.map((item, index) => (
            <Item
              key={index}
              src={item.src}
              author={item.author}
              title={item.title}
              topic={item.topic}
              desc={item.desc}
              placeholder='blur'
              blurDataURL={item.placeholder}
            />
          ))}
        </div>
        {/* list thumbnail */}
        <div className={styles.thumbnail}>
            <div className={styles.item}>
                <Image src="/images/img1.jpg" alt='' width={150} height={220} priority />
                <div className={styles.content}>
                    <div className={styles.title}>
                        Name Slider
                    </div>
                    <div className={styles.description}>
                        Description
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <Image src="/images/img2.jpg" alt='' width={150} height={220} priority />
                <div className={styles.content}>
                    <div className={styles.title}>
                        Name Slider
                    </div>
                    <div className={styles.description}>
                        Description
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <Image src="/images/img3.jpg" alt='' width={150} height={220} priority />
                <div className={styles.content}>
                    <div className={styles.title}>
                        Name Slider
                    </div>
                    <div className={styles.description}>
                        Description
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <Image src="/images/img4.jpg" alt='' width={150} height={220} priority />
                <div className={styles.content}>
                    <div className={styles.title}>
                        Name Slider
                    </div>
                    <div className={styles.description}>
                        Description
                    </div>
                </div>
            </div>
        </div>
        {/* next prev */}

        <div className={styles.arrows}>
            <button id="prev">{'<'}</button>
            <button id="next">{'>'}</button>
        </div>
        {/* time running */}
        <div className={styles.time}></div>
    </div>
  );
};

export default Carousel;