#!/usr/bin/env node

const fs = require('fs');
const ytdl = require('ytdl-core');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const argv = yargs(hideBin(process.argv)).argv;

const YOUTUBE_ID_REGEX = /^[a-zA-Z0-9_-]{11}$/g;

if (!YOUTUBE_ID_REGEX.test(argv.url)) {
  throw new Error('Not youtube id');
}

if (!YOUTUBE_ID_REGEX.test(argv.name)) {
  throw new Error('Not defined video name');
}

ytdl(argv.url).pipe(fs.createWriteStream(`${argv.name}.mp4`));
