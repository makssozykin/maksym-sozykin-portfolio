import { IoChevronDown } from "react-icons/io5";
import { IoChevronUp } from "react-icons/io5";
import css from './Button.module.css';

type Props = {
    children: React.ReactNode;
    onClick: () => void;
    isOpen: boolean;
}

export const Button = ({ isOpen, children, onClick }: Props) => {
    return (
        <button type="button" onClick={onClick} className={css.btn}>
            {children}
            {!isOpen ? <IoChevronDown /> : <IoChevronUp />}
        </button>
    )
}

