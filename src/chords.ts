const DEFAULT_CHORD = [0,0,0,0];
const CHORDS = {
    C: '3000',
    Cm: '3330',
    C7: '1000',
    CM7: '2000',
    Cm7: '3333',
    C6: '0000',
    Cm6: '3332',
    C9: '1020',
    'Cm7-5': '3233',
    Caug: '3001',
    Cdim: '3232',
    Csus4: '3100',
    C7sus4: '1100',
    'C#': '4111',
    'C#m': '4441',
    'C#7': '2111',
    'C#M7': '3111',
    'C#m7': '2011',
    'C#6': '1111',
    'C#m6': '1011',
    'C#9': '2131',
    'C#m7-5': '2010',
    'C#aug': '0112',
    'C#dim': '1010',
    'C#sus4': '4211',
    'C#7sus4': '2211',
    Df: '4111',
    Dfm: '4441',
    Df7: '2111',
    DfM7: '3111',
    Dfm7: '2011',
    Df6: '1111',
    Dfm6: '1011',
    Df9: '2131',
    'Dfm7-5': '2010',
    Dfaug: '0112',
    Dfdim: '1010',
    Dfsus4: '4211',
    Df7sus4: '2211',
    D: '0222',
    Dm: '0122',
    D7: '0202', // Gazlele code
    DM7: '42222',
    Dm7: '3122',
    D6: '2222',
    Dm6: '2122',
    D9: '3242',
    'Dm7-5': '3121',
    'Daug': '1223',
    Ddim: '2121',
    Dsus4: '0322',
    D7sus4: '3322',
    'D#': '1330',
    'D#m': '1233',
    'D#7': '4333',
    'D#M7': '5333',
    'D#m7': '4233',
    'D#6': '3333',
    'D#m6': '3233',
    'D#9': '1110',
    'D#m7-5': '4232',
    'D#aug': '2330',
    'D#dim': '3232',
    'D#sus4': '1433',
    'D#7sus4': '4433',
    Ef: '1330',
    Efm: '1233',
    Ef7: '4333',
    'EfM7': '5333',
    Efm7: '4233',
    Ef6: '3333',
    Efm6: '3233',
    Ef9: '1110',
    'Efm7-5': '4232',
    Efaug: '2330',
    Efdim: '3232',
    Efsus4: '1433',
    Ef7sus4: '4433',
    E: '2444',
    Em: '2340',
    E7: '2021',
    EM7: '2031',
    Em7: '2020',
    E6: '2011',
    Em6: '2010',
    E9: '2221',
    'Em7-5': '1020',
    Eaug: '3001',
    Edim: '1010',
    Esus4: '2544',
    E7sus4: '2022',
    F: '0102',
    Fm: '3101',
    F7: '3132',
    FM7: '0055',
    Fm7: '3131',
    F6: '3211',
    Fm6: '3121',
    F9: '3332',
    'Fm7-5': '2131',
    Faug: '0112',
    Fdim: '2121',
    Fsus4: '1103',
    F7sus4: '3133',
    'F#': '1213',
    'F#m': '0212',
    'F#7': '4243',
    'F#M7': '4253',
    'F#m7': '4242',
    'F#6': '4233',
    'F#m6': '4232',
    'F#9': '1011',
    'F#m7-5': '3242',
    'F#aug': '1223',
    'F#dim': '3232',
    'F#sus4': '2214',
    'F#7sus4': '4244',
    Gf: '1213',
    Gfm: '0212',
    Gf7: '4243',
    GfM7: '4253',
    Gfm7: '4242',
    Gf6: '4233',
    Gfm6: '4232',
    Gf9: '1011',
    'Gfm7-5': '3242',
    Gfaug: '1223',
    Gfdim: '3232',
    Gfsus4: '2214',
    Gf7sus4: '4244',
    G: '2320',
    Gm: '1320',
    G7: '2120',
    GM7: '2220',
    Gm7: '1120',
    G6: '2020',
    Gm6: '1020',
    G9: '2122',
    'Gm7-5': '4353',
    Gaug: '2330',
    Gdim: '1010',
    Gsus4: '3320',
    G7sus4: '3120',
    'G#': '3435',
    'G#m': '2431',
    'G#7': '3231',
    'G#M7': '3331',
    'G#m7': '2231',
    'G#6': '3131',
    'G#m6': '2131',
    'G#9': '3233',
    'G#m7-5': '2221',
    'G#aug': '3001',
    'G#dim': '2121',
    'G#sus4': '4431',
    'G#7sus4': '4231',
    Af: '3435',
    Afm: '2431',
    Af7: '3231',
    AfM7: '3331',
    Afm7: '2231',
    Af6: '3131',
    Afm6: '2131',
    Af9: '3233',
    'Afm7-5': '2221',
    Afaug: '3001',
    Afdim: '2121',
    Afsus4: '4431',
    Af7sus4: '4231',
    A: '0012',
    Am: '0002',
    A7: '0010',
    AM7: '0011',
    Am7: '0000',
    A6: '4242',
    Am6: '3242',
    A9: '2010',
    'Am7-5': '3332',
    Aaug: '0112',
    Adim: '3232',
    Asus4: '0022',
    A7sus4: '0020',
    'A#': '1123',
    'A#m': '1113',
    'A#7': '1121',
    'A#M7': '0123',
    'A#m7': '1111',
    'A#6': '1120',
    'A#m6': '4353',
    'A#9': '3121',
    'A#m7-5': '1011',
    'A#aug': '1223',
    'A#dim': '1010',
    'A#sus4': '1133',
    'A#7sus4': '1131',
    Bf: '1123',
    Bfm: '1113',
    Bf7: '1121',
    BfM7: '0123',
    Bfm7: '1111',
    Bfm6: '4353',
    Bf9: '3121',
    'Bfm7-5': '1011',
    Bfaug: '1223',
    Bfdim: '1010',
    Bfsus4: '1133',
    Bf7sus4: '1131',
    B: '2234',
    Bm: '2224',
    B7: '2232',
    BM7: '1234',
    Bm7: '2222',
    B6: '2231',
    Bm6: '2221',
    B9: '4232',
    'Bm7-5': '2122',
    Baug: '2330',
    Bdim: '2121',
    Bsus4: '2244',
    B7sus4: '2242',
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
        return chordStr.match(/^[A-Z][a-z0-9#-]*/);
    }

    static get(chordStr): number[] {
        let chord = Chords.extractChord(chordStr);
        return Chords.deserializeFingers(CHORDS[chord] || '0000');
    }

    static getAllChords(): string[][] {
        let mains = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
        let suffix = ['', 'm', '7', 'M7', 'm7', '6', 'm6', '9', 'm7-5', 'aug', 'dim', 'sus4', '7sus4'];

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
