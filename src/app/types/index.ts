export interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: string // 'a', 'b', 'c', etc.
  image?: string // Ruta opcional de la imagen
}

export interface Context {
  id: number
  contextText: string
  image?: string
  questionIds: number[]
}
