import { PriorityProcess } from '../types/PriorityProcess'
import CalculateAverageWaitingTime from './CalculateAverageWaitingTime'

const Priority = (arrays: PriorityProcess[]) => {
  const array:PriorityProcess[] = []
  arrays.forEach((process) => {
    setTimeout(() => {
      array.push(process)
    }, process.enter)
  })
  let countTime:number = 0
  const copyArray = [...arrays]
  array.sort((first, second) => first.delay - second.delay)
  const interval = setInterval(() => {
    countTime += 1
    array.sort((first, second) => first.priority - second.priority)
    if (array.length > 0 && array[0].remainingTime === 1) {
      array[0].remainingTime -= 1
      array[0].waitingTime = countTime
      array.shift()
    } else if (array.length === 0) {
      console.log(`Priority => ${CalculateAverageWaitingTime(copyArray)}`)
      clearInterval(interval)
    } else {
      array[0].remainingTime -= 1
    }
  }, 1)
}

export default Priority
