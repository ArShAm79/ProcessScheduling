import { GenerateRandomNumbersPriority } from './functions/GenerateRandomNumbers'
import Priority from './functions/Priority'

const Index = () => {
  const numbers = GenerateRandomNumbersPriority(20)
  Priority(numbers)
}
Index()
