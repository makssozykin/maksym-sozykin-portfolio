import { NavLink } from "react-router-dom"
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcVideoProjector } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import clsx from "clsx"
import css from './Navigation.module.css'

const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(css.link, isActive && css.active)
}

export const Navigation = () => {
    return (
        <>
            <nav className={css.nav}>
                <ul className={css.navList}>
                    <li className={css.navItem}>
                        <NavLink to='/' className={buildLinkClass}>
                            <FcHome />
                        </NavLink>
                    </li>
                    <li className={css.navItem}>
                        <NavLink to='/about' className={buildLinkClass}>
                            <FcAbout />
                        </NavLink>
                    </li>
                    <li className={css.navItem}>
                        <NavLink to='/projects' className={buildLinkClass}>
                            <FcVideoProjector />
                        </NavLink>
                    </li>
                    <li className={css.navItem}>
                        <button type="button" className={css.assistantBtn}>
                            <FcAssistant />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}