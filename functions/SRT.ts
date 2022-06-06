import { Process } from '../types/Process'
import CalculateAverageWaitingTime from './CalculateAverageWaitingTime'

const SRT = (arrays: Process[]) => {
  const array:Process[] = []
  arrays.forEach((process) => {
    setTimeout(() => {
      array.push(process)
    }, process.enter)
  })
  let countTime:number = 0
  const copyArray = [...arrays]
  array.sort((first, second) => first.delay - second.delay)

  const interval = setInterval(() => {
    array.sort((first, second) => first.remainingTime - second.remainingTime)
    countTime += 1
    if (array.length > 0 && array[0].remainingTime === 1) {
      array[0].remainingTime -= 1
      array[0].waitingTime = countTime
      array.shift()
    } else if (array.length === 0) {
      console.log(`SRT => ${CalculateAverageWaitingTime(copyArray)}`)
      clearInterval(interval)
    } else {
      array[0].remainingTime -= 1
    }
  }, 1)
}

export default SRT
