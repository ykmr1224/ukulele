import Drawer from './drawer'
import Chords from './chords'
import ChordsStyle from './chords-style'

export default class ChordDrawer extends Drawer {
    style: ChordsStyle;

    constructor(canvas: HTMLCanvasElement, style: ChordsStyle) {
        super(canvas.getContext('2d'));
        this.style = style;
    }

    clear(width: number, height: number) {
        this.fillStyle(this.style.bgColor);
        this.fillRect(0,0,width,height);
    }

    drawChord(chord: string, x: number, y: number, unit: number) {
        this.strokeStyle(this.style.chordColor, 2);

        let hspan = unit;
        let wspan = unit;
        let fingers = Chords.get(chord);
        let max = Math.max(3, Math.max(...fingers));
        let lines = 4;

        y += Math.floor(hspan/2);
        for (let i = 0; i < lines; i++) {
            this.line(x, y + hspan * i, x + max * unit, y + hspan * i);
        }

        for (let i = 0; i <= max; i++) {
            this.line(x + wspan * i, y, x + wspan * i, y + hspan * 3);
        }
        this.line(x + wspan * 0.1, y, x + wspan * 0.1, y + hspan * 3);

        let r = (wspan * 0.7) / 2;
        this.fillStyle(this.style.chordColor);
        for (let i = 0; i < lines; i++) {
            if (fingers[i] > 0) {
                let fingerX = x - wspan / 2 + fingers[i] * wspan;
                let fingerY = y + i * hspan;
                this.fillOval(fingerX, fingerY, r, r);
            }
        }
        return [max * unit, unit * 4];
    }

    drawBar(lyrics: string, chords: string[], x: number, y: number, unit: number) {
        let x1 = x;
        let y1 = y;
        this.fillStyle(this.style.chordTextColor);
        this.text('/', x1, y1 + this.style.lyricsHeight + this.style.chordTextSize, this.style.chordTextSize);
        x1 += unit;
        for (let i=0; i<chords.length; i++) {
            this.fillStyle(this.style.chordTextColor);
            let lyricsWidth = this.text(lyrics[i]||'', x1, y1 + this.style.lyricsSize, this.style.lyricsSize);
            this.fillStyle(this.style.lyricsColor)
            let chordTextWidth = this.text(chords[i], x1, y1 + this.style.lyricsHeight + this.style.chordTextSize, this.style.chordTextSize);
            let chordWidth = this.drawChord(chords[i], x1, y1 + this.style.lyricsHeight + this.style.chordTextHeight, unit)[0];
            x1 += Math.max(lyricsWidth, chordTextWidth, chordWidth) + unit;
        }
        return [x1 - x - unit/2, y1 + this.style.lyricsHeight + this.style.chordTextHeight + unit*4 - y];
    }

    drawLine(lyrics, bar) {
        let y = this.style.padding;
        let x = this.style.padding;
        let height = 0;
        let lyricsWidth = 0;
        let lyricsToDrawWithBar = lyrics;
        if (lyrics.length === 1) {
            lyricsWidth = this.text(lyrics[0]||'', x, y + this.style.lyricsSize, this.style.lyricsSize);
            lyricsToDrawWithBar = [];
        }
        for (let j=0; j<bar.length; j++) {
            let size = this.drawBar(lyricsToDrawWithBar[j]||[], bar[j]||[], x, y, this.style.chordUnit);
            x += size[0];
            height = size[1];
        }
        y += height;
        return [Math.max(x, lyricsWidth) + this.style.padding, y + this.style.padding];
    }
}
