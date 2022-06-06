import { Process } from '../types/Process'
import CalculateAverageWaitingTime from './CalculateAverageWaitingTime'

const FCFS = (arrays: Process[]) => {
  const array = [...arrays]
  let countTime:number = 0
  const copyArray = [...arrays]
  arrays.sort((first, second) => first.enter - second.enter)

  const interval = setInterval(() => {
    if (array[0].remainingTime > 0) {
      array[0].remainingTime -= 1
      countTime += 1
    } else {
      array[0].waitingTime = countTime
      array.shift()
      countTime += 1
      if (array.length > 0) {
        array[0].remainingTime -= 1
        countTime += 1
      } else {
        console.log(`FCFS => ${CalculateAverageWaitingTime(copyArray)}`)
        clearInterval(interval)
      }
    }
  }, 1)
}

export default FCFS
