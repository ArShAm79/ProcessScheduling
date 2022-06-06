import FCFS from './functions/FCFS'
import GenerateRandomNumbers from './functions/GenerateRandomNumbers'

const Index = () => {
  const numbers = GenerateRandomNumbers(20)
  FCFS(numbers)
}
Index()
