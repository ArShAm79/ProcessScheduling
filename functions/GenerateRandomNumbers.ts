import { Process } from '../types/Process'

const GenerateRandomNumbers = (length:number) => {
  const numbers:Process[] = []
  for (let index = 0; index < length; index += 1) {
    const delay = Math.floor(Math.random() * 10 + 1)
    numbers.push({
      delay, enter: Math.floor(Math.random() * 10), index, remainingTime: delay, waitingTime: 0,
    })
  }
  return numbers
}
export default GenerateRandomNumbers
