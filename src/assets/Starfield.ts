import { refs } from "./constants";

export const Starsfield = (): void => { 
    const canvas = document.createElement("canvas") as HTMLCanvasElement | null;
    if (!canvas) {
        throw new Error("Canvas element not found");
    }
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!ctx) {
        throw new Error("Failed to get 2D context");
    }
    canvas.height = document.documentElement.clientHeight;
    canvas.width = document.documentElement.clientWidth;
    document.body.appendChild(canvas);

    // create stars
    interface Star {
        r: number,
        x: number,
        y: number,
        xv: number,
        yv: number
    }
    const stars: Star[] = [];
    const starSpeed: number = refs.STAR_SPEED * canvas.width;
    const xv: number = starSpeed * randomSize() * Math.random();
    // Using Pythagoras' theorem, yv = sqrt(starSpeed^2 - xv^2)
    const yv: number = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSize();
    for (let i = 0; i < refs.STAR_NUM; i++) {
        const speedMult = Math.random() * 1.5 + 0.5;
        stars[i] = {
            r: Math.random() * refs.STAR_SIZE * canvas.width / 2,
            x: Math.floor(Math.random() * canvas.width),
            y: Math.floor(Math.random() * canvas.height),
            xv: xv * speedMult,
            yv: yv * speedMult
        }
    }

    // setup the animation loop
    let timeDelta: number = 0;
    let timeLast: number = 0;

    const loop = (timeNow: number): void => {
        // calculate the time difference
        timeDelta = timeNow - timeLast;
        timeLast = timeNow;

        // space background
        ctx.fillStyle = refs.COLOR_SPACE;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // draw stars
        ctx.fillStyle = refs.COLOR_STARS;
        for (let i = 0; i < refs.STAR_NUM; i++) {
            ctx.beginPath();
            ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
            ctx.fill();

            // update the star's x position
            stars[i].x += stars[i].xv * timeDelta * 0.001;

            // reposition the star to the other side if it goes off screen
            if (stars[i].x < 0 - stars[i].r) {
                stars[i].x = canvas.width + stars[i].r;
            } else if (stars[i].x > canvas.width + stars[i].r) {
                stars[i].x = 0 - stars[i].r;
            }

            // update the star's y position
            stars[i].y += stars[i].yv * timeDelta * 0.001;

            // reposition the star to the other side if it goes off screen
            if (stars[i].y < 0 - stars[i].r) {
                stars[i].y = canvas.height + stars[i].r;
            } else if (stars[i].y > canvas.height + stars[i].r) {
                stars[i].y = 0 - stars[i].r;
            }

        }

        // call next frame
        requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);

    function randomSize(): number {
        return Math.random() >= 0.5 ? 1 : -1;
    }

};