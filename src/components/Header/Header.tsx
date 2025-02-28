import { Contacts } from "../Contacts/Contacts";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import css from './Header.module.css';
export const Header: React.FC = () => {
    return (
        <header className={css.header}>
            <Logo />
            <Navigation />
            <Contacts />
        </header>
    )
};