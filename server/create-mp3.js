import Ffmpegstatic from 'ffmpeg-static';
import Ffmpeg from 'fluent-ffmpeg';

export const createMP3 = () => new Promise((resolve, reject) => {
  console.log('[START_CONVERTING]')
  
  Ffmpeg.setFfmpegPath(Ffmpegstatic)

  Ffmpeg()

  .input('audio.mp4')

  .outputOptions('-ab','20k')

  .saveToFile('audio.mp3')

  .on('end', () => {
    console.log('[FINISHED_CONVERTING]')
    resolve()
  })

  .on('error', (error) => {
    console.log('[ERROR_CONVERTING]')
    reject(error)
  })

})


