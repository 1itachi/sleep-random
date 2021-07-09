import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const minString: string = core.getInput('minutes')

    //convert to integer
    const minInput: number = parseInt(minString, 10)
    let milliSeconds: number = minInput * 60000
    //check if the random is set
    const random: string = core.getInput('random')

    //if random is set, get a random integer between 1 and input
    if (random === 'true') {
      const min: number = Math.ceil(1)
      const max: number = Math.floor(milliSeconds)
      milliSeconds = Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
    }

    const minutes = Math.floor(milliSeconds / 60000)
    const seconds = Math.floor((milliSeconds % 60000) / 1000)
    const logMessage = `Waiting for ${minutes}:${
      seconds < 10 ? '0' : ''
    }${seconds} minutes`
    
    core.info(logMessage)
    
    await wait(milliSeconds)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
