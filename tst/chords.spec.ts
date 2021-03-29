import { expect } from 'chai';

import Chords from '../src/chords';

describe('Chords', function() {
    it('get', function() {
        expect(Chords.get('C')).to.deep.equal([3,0,0,0]);
        expect(Chords.get('Cdim')).to.deep.equal([3,2,3,2]);
        expect(Chords.get('C(comment)')).to.deep.equal([3,0,0,0]);
        expect(Chords.get('X')).to.deep.equal([0,0,0,0]);
    });
});
