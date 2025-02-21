import { Link } from "react-router-dom";
import css from './Logo.module.css'

export const Logo: React.FC = () => { 
    return (
        <>
            <Link to='/' className={css.logoLink }>
                <img src="../src/images/MSFDlogo.png" alt="logo" className={ css.logo} />
            </Link>
        </>
    )
};