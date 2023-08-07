import styles from ‘./footer.module.scss’;
import classNames from ‘classnames’;

export interface FooterProps {
       className?: string;
}

/**
* This component was created using Condu´x Default new component template.
*To create custom component template, see https://help.condux.com/kb/en/article/kb16522 
*/
export const Footer = {{ className } : FooterProps } => {
       return <div className={classNames(styles.root, className)}>Footer</div>;
};
