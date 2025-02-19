export const Background = (): void => {
    const c = document.querySelector("#canvas") as HTMLCanvasElement | null;
  if (!c) {
    throw new Error("Canvas element not found");
  }
  const ctx: CanvasRenderingContext2D | null = c.getContext("2d");
  if (!ctx) {
    throw new Error("Failed to get 2D context");
  }

  const symbols: string[] = "1234567890ABCDEF".split("");
  const fontSize: number = 12;
  let columns: number;
  let drops: number[];

  const resizeCanvas = (): void => {
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    columns = Math.floor(c.width / fontSize);
    drops = Array(columns).fill(1);
  };

  window.addEventListener("resize", resizeCanvas);
  resizeCanvas();

  const draw = (): void => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#045";
    ctx.font = fontSize + "px impact";

    for (let i = 0; i < drops.length; i++) {
      const text = symbols[Math.floor(Math.random() * symbols.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      if (drops[i] * fontSize > c.height || Math.random() > 0.98) drops[i] = 0;
      drops[i]++;
    }
  };

  setInterval(draw, 60);
}