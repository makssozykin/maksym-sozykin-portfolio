interface Constants {
    COLOR_SPACE: string;
    COLOR_STARS: string;
    STAR_NUM: number;
    STAR_SIZE: number;
    STAR_SPEED: number;
}

export const refs: Constants = {
    COLOR_SPACE: "white",
    COLOR_STARS: "black",
    STAR_NUM: 200,
    STAR_SIZE: 0.005,
    STAR_SPEED: 0.05,
}

interface Code {
    [key: string]: string;
}

export const Code = {
    HTML: '../../public/images/HTML5.png',
    CSS: '../../public/images/CSS3.png',
    JavaScript: '../../public/images/JavaScript.png',
    React: '../../public/images/React.png',
    TypeScript: '../../public/images/TypeScript.png',
    Nodejs: '../../public/images/Nodejs.png',
};

const HTML = new Image();
HTML.src = '../../public/images/HTML5.png';

const CSS = new Image();
CSS.src = '../../public/images/CSS3.png';

const JavaScript = new Image();
JavaScript.src = '../../public/images/JavaScript.png';

const React = new Image();
React.src = '../../public/images/React.png';

const TypeScript = new Image();
TypeScript.src = '../../public/images/TypeScript.png'

const Nodejs = new Image();
Nodejs.src = '../../public/images/Nodejs.png';

export const codeArr = [HTML, CSS, JavaScript, React, TypeScript, Nodejs];

