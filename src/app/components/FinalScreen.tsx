import React from 'react'

interface FinalScreenProps {
  score: number
  total: number
  onRestart: () => void
}

const FinalScreen: React.FC<FinalScreenProps> = ({
  score,
  total,
  onRestart
}) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center'>
      <h2 className='mb-4 text-3xl font-bold text-green-600'>
        Simulacro Completado
      </h2>
      <p className='mb-6 text-xl text-gray-700'>
        Tu puntuación es: {score} de {total}
      </p>
      <button
        onClick={onRestart}
        className='rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700'
      >
        Reiniciar Simulacro
      </button>
    </div>
  )
}

export default React.memo(FinalScreen)
