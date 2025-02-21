import { NavLink } from "react-router-dom"
import clsx from "clsx"
import css from './Navigation.module.css'

   const buildLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return clsx(css.link, isActive && css.active)
}

export const Navigation = () => { 
    return (
        <div>
            <nav className={css.nav}>
                <NavLink to='/' className={buildLinkClass}>
                    Home
                </NavLink>
                <NavLink to='/about' className={buildLinkClass}>
                    About Me
                </NavLink>
                <NavLink to='/projects' className={buildLinkClass}>
                    My Projects
                </NavLink>
            </nav>
        </div>
    )
}