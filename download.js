const fs = require('fs');
const ytdl = require('ytdl-core');

const url = 'CsZs64-V9p0';
const name = 'Shlomit_Aharon_song';

ytdl(url).pipe(fs.createWriteStream(`${name}.mp4`));
