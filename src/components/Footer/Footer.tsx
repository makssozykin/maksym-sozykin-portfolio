import { Logo } from "../Logo/Logo";
import css from './Footer.module.css';

export const Footer: React.FC = () => {
    return (
        <footer className={css.footer}>
            <div className={css['footer-container']}>
                <Logo />
                <p>
                    &copy; 2021 My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}