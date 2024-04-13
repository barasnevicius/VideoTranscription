import { Pipeline } from "@xenova/transformers";
import { loadingMessage } from "./loading";

async function transcribeAudio() {
  const options = {}

  try{
    console.time()
    loadingMessage('Transcrevendo o audio')
  }
  catch(error){
    console.log(error)
  }
  finally{
    console.timeEnd()
  }

}
