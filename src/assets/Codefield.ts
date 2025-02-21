export const Codefield = (): void => {
    interface Data {
        icon: HTMLImageElement,
        x: number,
        y: number,
        size: number,
        speedX: number,
        speedY: number
    }

    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    if (!canvas) {
        throw new Error("Canvas element not found");
    }
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
        throw new Error("Failed to get 2D context");
    }
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const HTML = new Image();
    HTML.src = 'src/images/lang/HTML5.png';

    const CSS = new Image();
    CSS.src = 'src/images/lang/CSS3.png';

    const JS = new Image();
    JS.src = 'src/images/lang/JavaScript.png';

    const React = new Image();
    React.src = 'src/images/lang/React.png';

    const Redux = new Image();
    Redux.src = 'src/images/lang/Redux.png';

    const TS = new Image();
    TS.src = 'src/images/lang/TypeScript.png';

    const Nodejs = new Image();
    Nodejs.src = 'src/images/lang/Nodejs.png';

    const Vite = new Image();
    Vite.src = 'src/images/lang/Vite.png';

    const Vercel = new Image();
    Vercel.src = 'src/images/lang/Vercel.png';

    const codeArr: HTMLImageElement[] = [HTML, CSS, JS, React, Redux, TS, Nodejs, Vite, Vercel];

    const iconData: Data[] = []; // Масив для зберігання даних про кожну іконку

    const initializeIcons = (): void => {
        for (let i = 0; i < 100; i++) {
            const icon = codeArr[Math.floor(Math.random() * codeArr.length)];
            const codeSpeed: number = 0.05 * canvas.width;
            const size = randomSize() * 30 + 30;
            const xv: number = codeSpeed * randomSize() * Math.random();
            const yv: number = Math.sqrt(Math.pow(codeSpeed, 2) - Math.pow(xv, 2)) * randomSize();
            const speedMult = Math.random() / size;
            const x = Math.floor(Math.random() * canvas.width);
            const y = Math.floor(Math.random() * canvas.height);
            const speedX = xv * speedMult;
            const speedY = yv * speedMult;
            iconData.push({ icon, x, y, size, speedX, speedY });
        }
    }

    const drawSpace = (): void => {
        ctx.fillStyle = '#c6e6f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        iconData.forEach(data => {
            if (data.icon.complete) {
                ctx.drawImage(data.icon, data.x, data.y, data.size, data.size);
            } else {
                data.icon.onload = function () {
                    ctx.drawImage(data.icon, data.x, data.y, data.size, data.size);
                };
            }
        });
    }

    const updateIcons = (): void => {
        iconData.forEach(data => {
            data.x += data.speedX;
            data.y += data.speedY;

            // Перевірка меж canvas
            if (data.x < 0 || data.x > canvas.width - data.size) {
                data.speedX = -data.speedX;
            }
            if (data.y < 0 || data.y > canvas.height - data.size) {
                data.speedY = -data.speedY;
            }
        });
    }

    const animate = (): void => {
        updateIcons();
        drawSpace();
        requestAnimationFrame(animate);
    }

    // Зачекаємо, поки всі іконки завантажаться, і потім намалюємо космос.
    let imagesLoaded = 0;
    codeArr.forEach((icon) => {
        icon.onload = () => {
            imagesLoaded++;
            if (imagesLoaded >= codeArr.length) {
                initializeIcons();
                animate();
            }
        };
        if (icon.complete) {
            imagesLoaded++;
        }
    });

    if (imagesLoaded >= codeArr.length) {
        initializeIcons();
        animate();
    }

    function randomSize(): number {
        return Math.random() >= 0.5 ? 1 : -1;
    }
};