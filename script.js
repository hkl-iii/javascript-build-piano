const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const blackKeys = ['s', 'd', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const WHITE_KEYS = document.querySelectorAll('.key.white');
const BLACK_KEYS = document.querySelectorAll('.key.black');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key))
});


document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key;
    const whiteKeyIndex = whiteKeys.indexOf(key);
    const blackKeyIndex = blackKeys.indexOf(key);

    if(whiteKeyIndex > -1) playNote(WHITE_KEYS[whiteKeyIndex]);
    if(blackKeyIndex > -1) playNote(BLACK_KEYS[blackKeyIndex]);
})


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    });
}