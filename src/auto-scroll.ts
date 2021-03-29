export default class AutoScroll {
    handle: number;
    window: Window;

    constructor(window: Window) {
        this.window = window;
    }

    start(interval: number, unit: number, maxY: number) {
        this.stop();
        this.handle = window.setInterval(() => {
            window.scrollBy(0, Math.min(Math.max(0, maxY - window.innerHeight - window.scrollY), unit));
        }, interval);
    }

    stop() {
        if (this.handle !== undefined) {
            window.clearInterval(this.handle);
            this.handle = undefined;
        }
    }
}
