import { useToggleBtn } from "../../hooks/useToggleBtn";
import { myContacts } from "../../assets/constants";
import { Contact } from '../Contact/Contact';
import css from './Contacts.module.css'
import { Button } from "../Button/Button";


export const Contacts: React.FC = () => {
    const { handleShowCont, showContacts, handleHideCont } = useToggleBtn();

    return (
        <div className={css['contacts-cont']}>
            <Button isOpen={showContacts} onClick={!showContacts ? handleShowCont : handleHideCont}>Contacts</Button>
            {showContacts && <ul className={css['contacts-list']}>
                {
                    myContacts.map(({ href, src, alt }) => {
                        return (
                            <Contact key={alt} href={href} src={src} alt={alt} />
                        )
                    })
                }
            </ul>}
        </div>
    )
}

