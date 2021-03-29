const DEFAULT_CHORD = [0,0,0,0];
const CHORDS = {
    C: '3000',
    Cm: '3330',
    C7: '1000',
    Cm7: '3333',
    Cdim: '3232',
    'C#': '4111',
    'C#m': '4441',
    'C#7': '2111',
    'C#m7': '2011',
    'C#dim': '1010',
    Df: '4111',
    Dfm: '4441',
    Df7: '2111',
    Dfm7: '2011',
    Dfdim: '1010',
    D: '0222',
    Dm: '0122',
    D7: '0202', // Gazlele code
    Dm7: '3122',
    Ddim: '2121',
    'D#': '1330',
    'D#m': '1233',
    'D#7': '4333',
    'D#m7': '4233',
    'D#dim': '3232',
    Ef: '1330',
    Efm: '1233',
    Ef7: '4333',
    Efm7: '4233',
    Efdim: '3232',
    E: '2444',
    Em: '2340',
    E7: '2021',
    Em7: '2020',
    Edim: '1010',
    F: '0102',
    Fm: '3101',
    F7: '3132',
    Fm7: '3131',
    Fdim: '2121',
    'F#': '1213',
    'F#m': '0212',
    'F#7': '4243',
    'F#m7': '4242',
    'F#dim': '3232',
    Gf: '1213',
    Gfm: '0212',
    Gf7: '4243',
    Gfm7: '4242',
    Gfdim: '3232',
    G: '2320',
    Gm: '1320',
    G7: '2120',
    Gm7: '1120',
    Gdim: '1010',
    'G#': '3435',
    'G#m': '2431',
    'G#7': '3231',
    'G#m7': '2231',
    'G#dim': '2121',
    Af: '3435',
    Afm: '2431',
    Af7: '3231',
    Afm7: '2231',
    Afdim: '2121',
    A: '0012',
    Am: '0002',
    A7: '0010',
    Am7: '0000',
    Adim: '3232',
    'A#': '1123',
    'A#m': '1113',
    'A#7': '1121',
    'A#m7': '1111',
    'A#dim': '1010',
    Bf: '1123',
    Bfm: '1113',
    Bf7: '1121',
    Bfm7: '1111',
    Bfdim: '1010',
    B: '2234',
    Bm: '2224',
    B7: '2232',
    Bm7: '2222',
    Bdim: '2121',
};

const ZERO_CODE = '0'.charCodeAt(0);

export default class Chords {
    private static deserializeFingers(str: string): number[] {
        let result = [...DEFAULT_CHORD];
        for (let i=0; i<4 && i<str.length; i++) {
            result[i] = <number>(str.charCodeAt(i) - ZERO_CODE);
        }
        return result;
    }

    private static extractChord(chordStr): string {
        return chordStr.match(/^[A-Z][a-z0-9#]*/);
    }

    static get(chordStr): number[] {
        let chord = Chords.extractChord(chordStr);
        return Chords.deserializeFingers(CHORDS[chord] || '0000');
    }

    static getAllChords(): string[][] {
        let mains = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        let suffix = ['', 'm', '7', 'm7', 'dim'];

        let result = [];
        for (let i=0; i<mains.length; i++) {
            let chords = []
            for (let j=0; j<suffix.length; j++) {
                chords.push(mains[i] + suffix[j]);
            }
            result.push(chords);
        }
        return result;
    }
}
