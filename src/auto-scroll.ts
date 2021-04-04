export default class AutoScroll {
    handle: number;
    window: Window;

    constructor(window: Window) {
        this.window = window;
    }

    start(interval: number, unit: number, maxY: number) {
        this.stop();
        this.handle = this.window.setInterval(() => {
            this.window.scrollBy(0, Math.min(Math.max(0, maxY - this.window.innerHeight - this.window.scrollY), unit));
        }, interval);
    }

    stop() {
        if (this.handle !== undefined) {
            this.window.clearInterval(this.handle);
            this.handle = undefined;
        }
    }
}
