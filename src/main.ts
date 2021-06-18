import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const minString: string = core.getInput('minutes')
    
    //convert to integer
    let minInput: number = parseInt(minString, 10);
    
    //check if the random is set
    const random: string = core.getInput('random')
    
    //if random is set, get a random integer between 1 and input
    if(random === 'true'){
        const min: number = Math.ceil(1);
        const max: number = Math.floor(minInput);
        minInput = Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    
    console.log(minInput)
    console.log(minInput * 60000)
    await wait(minInput * 60000)

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
