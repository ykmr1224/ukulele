export default class Drawer {
    ctx: CanvasRenderingContext2D;
    font: string;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
        this.font = 'Helvetica';
    }

    fillStyle(style: string) {
        this.ctx.fillStyle = style;
    }

    strokeStyle(style: string, width: number) {
        this.ctx.strokeStyle = style;
        this.ctx.lineWidth = width || 1;
        this.ctx.lineCap = 'round';
    }

    fillRect(x: number, y: number, w: number, h: number) {
        this.ctx.fillRect(x, y, w, h);
    }

    strokeRect(x: number, y: number, w: number, h: number) {
        this.ctx.strokeRect(x, y, w, h);
    }

    fillOval(cx: number, cy: number, rx: number, rh: number) {
        this.ctx.beginPath();
        this.ctx.ellipse(cx, cy, rx, rh, 0, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    line(x0: number, y0: number, x1: number, y1: number) {
        this.ctx.beginPath();
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
    }

    text(str: string, x: number, y: number, fontSize: number) {
        this.ctx.font = `${fontSize}pt ${this.font}`;
        this.ctx.fillText(str, x, y);
        return this.ctx.measureText(str).width;
    }
}
