import { useToggleBtn } from '../../hooks/useToggleBtn';
import { stack } from '../../assets/constants';
import css from './Hero.module.css';
export const Hero: React.FC = () => {
    const { handleShowCont, showContacts, handleHideCont, handleShowStack, showStack, handleHideStack } = useToggleBtn();
    return (
        <section className={css.hero}>
            <div className={css['hero-container']}>
                <h1 className={css.title}><span>Hi! I'm Maksym!</span><span>Web Developer.</span></h1>
                <button type="button" onClick={!showContacts ? handleShowCont : handleHideCont}>Contacts</button>
                <button type="button" onClick={!showStack ? handleShowStack : handleHideStack}>My Stack</button>
            </div>
            {showContacts && <div className={css.contacts}>
                <a href="mailto:maksym.sozykin@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/maksym-sozykin/">LinkedIn</a>
                <a href="https://github.com/MaksymSozykin">GitHub</a>
            </div>}
            {showStack && <div className={css.stack}>
                <ul>
                    {stack.map((item, index) => {
                        return (

                            <li key={index}><img src={item.currentSrc} alt={item.alt} width={30} height={30} /></li>
                        )
                    })}
                </ul>
            </div>}
        </section>
    )
}