import ChordsParser from "./chords-parser";
import ChordsStyle from "./chords-style";
import ChordDrawer from "./chord-drawer";
import AutoScroll from "./auto-scroll";
import Chords from "./chords";
import * as $ from 'jquery';
import * as _ from 'lodash';

let parser = new ChordsParser();
let style = new ChordsStyle();

let update = (title, chords) => {
    $(`#song-title`).html(title);
    document.title = 'Ukulele: ' + title;

    let $lines = $('#lines');
    $lines.html('');

    let data = parser.parseInput(chords);
    let $backCanvas = $('#backCanvas');
    let backDrawer = new ChordDrawer(<HTMLCanvasElement>$backCanvas[0], style);
    for (let i=0; i<data.bars.length; i++) {
        let size = backDrawer.drawLine(data.lyrics[i], data.bars[i]);
        let $canvas = $(`<canvas width="${size[0]}" height="${size[1]}"></canvas>`).appendTo($lines);
        $canvas.css('width', size[0]/2);
        $canvas.css('height', size[1]/2);
        let drawer = new ChordDrawer(<HTMLCanvasElement>$canvas[0], style);
        drawer.drawLine(data.lyrics[i], data.bars[i]);
    }
};

$(function () {
    let params = new URLSearchParams(window.location.search);
    let title = decodeURIComponent(params.get('title'));
    let chords = decodeURIComponent(params.get('chords').replace(/\+/g, ' '));
    $('#chords').val(chords);
    $('#title').val(title);
    let $bottom = $('hr#bottom');

    update(title, chords);

    let autoScroll = new AutoScroll(window);
    let $autoScrollButton = $('#autoScroll');
    $autoScrollButton.on('change', () => {
        if ($autoScrollButton.prop('checked')) {
            autoScroll.start(500, 5, $bottom.position().top + 25);
        } else {
            autoScroll.stop();
        }
    });

    _.each(Chords.getAllChords(), (chords) => {
        console.log(chords.join(','));
    });
});