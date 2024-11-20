import React from 'react'
import Image from 'next/image'
import { Context } from '../types'

interface ContextScreenProps {
  context: Context
  onContinue: () => void
}

const ContextScreen: React.FC<ContextScreenProps> = ({
  context,
  onContinue
}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-gray-50 p-6'>
      <div className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg'>
        <h2 className='mb-4 text-2xl font-bold text-gray-800'>Contexto</h2>
        <p className='mb-6 whitespace-pre-line text-lg text-gray-700'>
          {context.contextText}
        </p>
        {context.image && (
          <div className='mb-6'>
            <Image
              src={context.image}
              alt='Contexto para preguntas 34-36'
              width={500}
              height={300}
              className='rounded-lg'
            />
          </div>
        )}
        <button
          onClick={onContinue}
          className='mt-4 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700'
        >
          Continuar
        </button>
      </div>
    </div>
  )
}

export default React.memo(ContextScreen)
