// components/QuestionCard.tsx

import React from 'react'
import Image from 'next/image'
import { Question } from '@/app/types' // Asegúrate de que esta ruta es correcta

interface QuestionCardProps {
  question: Question
  selectedOption: string | null
  onSelectOption: (optionIndex: number) => void
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedOption,
  onSelectOption
}) => {
  if (!question) {
    return (
      <div className='flex items-center justify-center p-6'>
        <p className='text-lg text-red-700'>
          Ocurrió un error al cargar la pregunta.
        </p>
      </div>
    )
  }

  const getOptionLabel = (index: number): string => {
    return String.fromCharCode(97 + index) // 'a', 'b', 'c', etc.
  }

  return (
    <div>
      <h2 className='mb-4 text-2xl font-bold text-gray-800'>
        Pregunta {question.id}
      </h2>
      <p className='mb-6 whitespace-pre-line text-lg text-gray-900 shadow-sm'>
        {question.question}
      </p>

      {question.image && (
        <div className='mb-6'>
          <Image
            src={question.image}
            alt={`Imagen para pregunta ${question.id}`}
            width={500}
            height={300}
            className='rounded-lg'
          />
        </div>
      )}

      <ul className='space-y-4'>
        {question.options.map((option, index) => {
          const optionLetter = getOptionLabel(index)
          let borderColor = 'border-gray-300'
          let bgColor = 'bg-white'
          let textColor = 'text-black'

          if (selectedOption !== null) {
            if (optionLetter === question.correctAnswer) {
              borderColor = 'border-green-500'
              bgColor = 'bg-green-100'
              textColor = 'text-green-700'
            }
            if (
              optionLetter === selectedOption &&
              selectedOption !== question.correctAnswer
            ) {
              borderColor = 'border-red-500'
              bgColor = 'bg-red-100'
              textColor = 'text-red-700'
            }
          }

          return (
            <li key={index}>
              <button
                onClick={() => onSelectOption(index)}
                disabled={selectedOption !== null}
                className={`flex w-full items-center gap-4 rounded-lg border-4 ${borderColor} ${bgColor} px-4 py-2 text-left shadow-sm transition-all duration-300 ${
                  selectedOption === null ? 'hover:bg-gray-100' : ''
                }`}
              >
                <span className='font-bold text-blue-600'>{optionLetter}.</span>
                <span className={`flex-1 ${textColor}`}>{option}</span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default React.memo(QuestionCard)
