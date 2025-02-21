export const Codespace = (): void => {
    // Оголошуємо інтерфейс для даних іконки
    interface IconData {
        icon: HTMLImageElement;
        x: number;
        y: number;
        size: number;
        speedX: number;
        speedY: number;
    }

    // Отримуємо елемент canvas і його контекст
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    if (!canvas) {
        throw new Error("Canvas element not found");
    }
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    if (!ctx) {
        throw new Error("Failed to get 2D context");
    }
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    // Створюємо об'єкти Image для іконок
    const HTML = new Image();
    HTML.src = 'src/images/lang/HTML5.png';

    const CSS = new Image();
    CSS.src = 'src/images/lang/CSS3.png';

    const JS = new Image();
    JS.src = 'src/images/lang/JavaScript.png';

    const React = new Image();
    React.src = 'src/images/lang/React.png';

    const TS = new Image();
    TS.src = 'src/images/lang/TypeScript.png';

    // Масив іконок
    const icons: HTMLImageElement[] = [HTML, CSS, JS, React, TS];

    // Масив даних іконок
    const iconData: IconData[] = [];

    // Функція для ініціалізації даних іконок
    function initializeIcons(): void {
        for (let i = 0; i < 50; i++) {
            const icon = icons[Math.floor(Math.random() * icons.length)];
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = Math.random() * 30 + 10;
            const speedX = (Math.random() - 0.5) * 2;
            const speedY = (Math.random() - 0.5) * 2;

            iconData.push({ icon, x, y, size, speedX, speedY });
        }
    }

    // Функція для малювання космосу
    function drawSpace(): void {
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        iconData.forEach(data => {
            if (data.icon.complete) {
                ctx.drawImage(data.icon, data.x, data.y, data.size, data.size);
            } else {
                data.icon.onload = () => {
                    ctx.drawImage(data.icon, data.x, data.y, data.size, data.size);
                };
            }
        });
    }

    // Функція для оновлення позицій іконок
    function updateIcons(): void {
        iconData.forEach(data => {
            data.x += data.speedX;
            data.y += data.speedY;

            if (data.x < 0 || data.x > canvas.width - data.size) {
                data.speedX = -data.speedX;
            }
            if (data.y < 0 || data.y > canvas.height - data.size) {
                data.speedY = -data.speedY;
            }
        });
    }

    // Функція для анімації
    function animate(): void {
        updateIcons();
        drawSpace();
        requestAnimationFrame(animate);
    }

    // Завантаження іконок і запуск анімації
    let imagesLoaded = 0;
    icons.forEach((icon) => {
        icon.onload = () => {
            imagesLoaded++;
            if (imagesLoaded >= icons.length) {
                initializeIcons();
                animate();
            }
        };
        if (icon.complete) {
            imagesLoaded++;
        }
    });

    if (imagesLoaded >= icons.length) {
        initializeIcons();
        animate();
    }
};