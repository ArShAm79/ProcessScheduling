import GenerateRandomNumbers from './functions/GenerateRandomNumbers'
import SJF from './functions/SJF'

const Index = () => {
  const numbers = GenerateRandomNumbers(20)
  SJF(numbers)
}
Index()
