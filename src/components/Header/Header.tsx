import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import css from './Header.module.css';
export const Header: React.FC = () => {
    return (
        <header className={css.header}>
            <Logo />
            <div>
                <p>MaksymSozykin<span>Developer</span></p>
                <p>from idea to click...</p>
            </div>
            <Navigation />
        </header>
    )
};