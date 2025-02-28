type Props = {
    href: string;
    src: string;
    alt: string;
}

export const Contact = ({ href, src, alt }: Props) => {
    return (
        <li>
            <a href={href}>
                <img src={src} alt={alt} width={48} height={48} />
            </a>
        </li>
    )
}

