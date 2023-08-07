import styles from './card.module.scss';
import classNames from 'classnames';

interface Day {
    date: number,
    weather: string,
    temp2m: {
        max: number,
        min: number
    },
    wind10m_max: number
}

interface CardProps {
       className?: string;
       day: Day;
       image: string
}

/**
* This component was created using Condu´x Default new component template.
*To create custom component template, see https://help.condux.com/kb/en/article/kb16522 
*/
export const MainCard = {{ className, day, img } : CardProps } => {
       const date = day.date.toString()
       const year = Number(date.slice(0,4))
       const month = Number(date.slice(4,6))
       const dayOfTheMonth = Number(date.slice(6,8))
       const formattedDate = new Date(year, month -1, dayOfTheMonth).toDateString().slice(0,3)

       return <div className={classNames(styles.root, className)}>
            <p className={styles['card=paragraph']}>{formattedDate}</p>
            <img
                src={img}
                alt=""
                className={styles['card-img']}
            /> 
            <h2 className={styles['card-heading']}>{day.temp2m.max°C</h2>
            <p className={styles['card-temp']}>{day.weather}</p>
        </div>;
    );
};
