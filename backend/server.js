const express = require('express');
const extractAudio = require('ffmpeg-extract-audio');


const app = express();

app.get('/', (req, res) => {
    res.send('This is the index page');
})

app.post('/upload', function(req, res) {
    var today = new Date();
    var dateStr = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    extractAudio({
        input: req.files.video,
        output: 'extracted_audios/video_audio_' + dateStr + '.mp3'
    });

    // getInfo

});

app.listen(8080, () => console.log('Server started on port 8080'));