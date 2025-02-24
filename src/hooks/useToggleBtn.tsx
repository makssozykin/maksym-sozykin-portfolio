import { useState } from "react";

export const useToggleBtn = () => {
    const [showContacts, setShowContacts] = useState(false);
    const [showStack, setShowStack] = useState(false);

    const handleShowCont = () => {
        setShowContacts(true);
        setShowStack(false);
    }

    const handleHideCont = () => {
        setShowContacts(false);
        setShowStack(false);

    }

    const handleShowStack = () => {
        setShowStack(true);
        setShowContacts(false);
    }

    const handleHideStack = () => {
        setShowStack(false);
        setShowContacts(false);
    }

    return { handleShowCont, showContacts, handleHideCont, handleShowStack, showStack, handleHideStack }
}