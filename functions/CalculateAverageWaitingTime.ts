import { Process } from '../types/Process'

const CalculateAverageWaitingTime = (processes:Process[]) => {
  let sum:number = 0
  processes.forEach((process) => {
    sum += process.waitingTime
  })
  return sum / processes.length
}
export default CalculateAverageWaitingTime
