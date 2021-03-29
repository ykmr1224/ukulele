import * as _ from 'lodash'

export default class ChordsParser {
    parseBar(inputBar: string): string[] {
        return inputBar.split(',');
    }

    removeEmpty(arr: string[]): void {
        if (arr[0] !== undefined && arr[0].length === 0) {
            arr.splice(0, 1);
        }
        if (arr.length > 0 && arr[arr.length-1].length === 0) {
            arr.splice(arr.length-1, 1);
        }
    };

    parseChords(inputBars: string): string[][] {
        let bars = inputBars.trim().split('/');
        this.removeEmpty(bars);
        return _.map(bars, (inputBar) => this.parseBar(inputBar));
    };

    parseLyrics(inputLyrics: string): string[][] {
        let lyrics = inputLyrics.trim().split('/');
        this.removeEmpty(lyrics);
        return _.map(lyrics, (input) => input.split(','));
    };

    parseInput(input: string): {lyrics:string[][], bars:string[][]} {
        let lines = input.split('\n');
        let result = {
            lyrics: [],
            bars: []
        };
        for (let i=0; i<Math.floor(lines.length/2); i++) {
            result.lyrics.push(this.parseLyrics(lines[i*2]));
            result.bars.push(this.parseChords(lines[i*2+1]));
        }
        return result;
    };
}
