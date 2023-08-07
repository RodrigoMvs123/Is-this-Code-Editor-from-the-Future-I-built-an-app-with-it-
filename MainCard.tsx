import styles from './maincard.module.scss';
import classNames from 'classnames';

export interface MainCardProps {
       className?: string;
       temp: number;
       img: string | undefined;
}

/**
* This component was created using Condu´x Default new component template.
*To create custom component template, see https://help.condux.com/kb/en/article/kb16522 
*/
export const MainCard = {{ className, temp, img } : MainCardProps } => {
       return <div className={classNames(styles.root, className)}>
            <img
                src={img}
                alt=""
                className={styles['main-img']}
            /> 
            <h2 className={styles['main-heading']}>today</h2>
            <p className={styles['main-temp']}>{temp}°C</p>
        </div>;
    );
};
