import GenerateRandomNumbers from './functions/GenerateRandomNumbers'
import SRT from './functions/SRT'

const Index = () => {
  const numbers = GenerateRandomNumbers(20)
  SRT(numbers)
}
Index()
