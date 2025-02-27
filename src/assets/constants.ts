interface Constants {
    COLOR_SPACE: string;
    COLOR_STARS: string;
    STAR_NUM: number;
    STAR_SIZE: number;
    STAR_SPEED: number;
}



interface Links {
    href: string;
    src: string;
    alt: string;
}

export const refs: Constants = {
    COLOR_SPACE: "white",
    COLOR_STARS: "black",
    STAR_NUM: 200,
    STAR_SIZE: 0.005,
    STAR_SPEED: 0.05,
}


const HTML = new Image();
HTML.src = 'src/images/lang/HTML5.png';
HTML.alt = "HTML5"

const CSS = new Image();
CSS.src = 'src/images/lang/CSS3.png';
CSS.alt = "CSS3"

const JS = new Image();
JS.src = 'src/images/lang/JavaScript.png';
JS.alt = "JS"

const React = new Image();
React.src = 'src/images/lang/React.png';
React.alt = "React"

const Redux = new Image();
Redux.src = 'src/images/lang/Redux.png';
Redux.alt = "Redux"

const TS = new Image();
TS.src = 'src/images/lang/TypeScript.png';
TS.alt = "TS"

const Nodejs = new Image();
Nodejs.src = 'src/images/lang/Nodejs.png';
Nodejs.alt = "Nodejs"

const Vite = new Image();
Vite.src = 'src/images/lang/Vite.png';
Vite.alt = "Vite"

const Vercel = new Image();
Vercel.src = 'src/images/lang/Vercel.png';
Vercel.alt = "Vercel"


export const stack: HTMLImageElement[] = [HTML, CSS, JS, React, Redux, TS, Nodejs, Vite, Vercel];


export const myContacts: Links[] = [
    {
        href: "tel:+380934608452",
        src: "src/images/icons/icon-call.png",
        alt: "phone"
    },
    {
        href: "mailto:maksym.sozykin@gmail.com",
        src: "src/images/icons/icon-email.png",
        alt: "email"
    },
    {
        href: "https://t.me/mskrid",
        src: "src/images/icons/icon-telegram.png",
        alt: "telegram"
    },
    {
        href: "https://www.linkedin.com/in/maksymsozykin/",
        src: "src/images/icons/icon-linkedin.png",
        alt: "linkedin"
    },
    {
        href: "https://github.com/makssozykin",
        src: "src/images/icons/icon-github.png",
        alt: "github"
    },
]

