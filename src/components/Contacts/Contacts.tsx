import { myContacts } from "../../assets/constants";

export const Contacts: React.FC = () => {
    return (
        <div>
            <ul>
                {
                    myContacts.map((item, index) => {
                        return (
                            <li key={index}>
                                <a href={item.href}>
                                    <img src={item.src} alt={item.alt} width={48} height={48} />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

