import FCFS from './functions/FCFS'
import { GenerateRandomNumbersPriority } from './functions/GenerateRandomNumbers'
import Priority from './functions/Priority'
import SJF from './functions/SJF'
import SRT from './functions/SRT'

const Index = () => {
  const numbers = GenerateRandomNumbersPriority(20)
  const priorityNumbers = numbers.map((item) => ({ ...item }))
  const SJFNumbers = numbers.map((item) => ({ ...item }))
  const SRTNumbers = numbers.map((item) => ({ ...item }))
  const FCFSNumbers = numbers.map((item) => ({ ...item }))
  Priority(priorityNumbers)
  SJF(SJFNumbers)
  SRT(SRTNumbers)
  FCFS(FCFSNumbers)
}
Index()
