// loading an youtube video https://www.youtube.com/watch?v=6vZbu5Tl-6A
import axios from 'axios'
import { startLoading, stopLoading, loadingMessage } from './loading.js'
import { getVideoId, loadVideo } from './youtube-api.js'


const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        loadingMessage('Iniciando aplicação')
        startLoading()
        
        const formData = new FormData(form)
        const url = formData.get('url')
        await loadVideo(url)
        
        loadingMessage('Baixando e convertendo o video')
        await axios.get('http://localhost:3333/audio?v=' + getVideoId(url))
    } catch(error) {
        console.log('[SUBMIT_ERROR]', error)
    } finally {
        stopLoading()
    }
})