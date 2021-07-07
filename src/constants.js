'use strict'

const isUnix = require('is-unix')
const path = require('path')

const PLATFORM_WIN = 'win32'
const PLATFORM_UNIX = 'unix'

module.exports = {
  get YOUTUBE_DL_DIR () {
    return process.env.YOUTUBE_DL_DIR || path.join(__dirname, '..', 'bin')
  },
  get YOUTUBE_DL_FILENAME () {
    return (
      process.env.YOUTUBE_DL_FILENAME ||
      `youtube-dl${this.YOUTUBE_DL_PLATFORM === PLATFORM_WIN ? '.exe' : ''}`
    )
  },
  get YOUTUBE_DL_HOST () {
    return (
      process.env.YOUTUBE_DL_HOST ||
      'https://api.github.com/repos/ytdl-org/youtube-dl/releases?per_page=1'
    )
  },
  get YOUTUBE_DL_PATH () {
    return path.join(this.YOUTUBE_DL_DIR, this.YOUTUBE_DL_FILENAME)
  },
  get YOUTUBE_DL_PLATFORM () {
    return process.env.YOUTUBE_DL_PLATFORM || isUnix(process.platform)
      ? PLATFORM_UNIX
      : PLATFORM_WIN
  }
}
