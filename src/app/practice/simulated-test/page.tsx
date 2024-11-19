'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { questions, Question } from '@/app/utils/questions'
import { contexts, Context } from '@/app/utils/contexts'

const SimulatedTest = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [showingContext, setShowingContext] = useState(false)
  const [currentContext, setCurrentContext] = useState<Context | null>(null)

  useEffect(() => {
    setIsMounted(true)
    console.log('Componente montado en el cliente')
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const shuffleArray = (array: Question[]): Question[] => {
      return array
        .map(q => ({
          ...q,
          options: q.options ? shuffleOptions(q.options) : []
        }))
        .sort(() => Math.random() - 0.5)
    }

    // Identificar las preguntas especiales y normales
    const specialQuestionIds = [34, 35, 36]
    const specialQuestions = questions.filter(q =>
      specialQuestionIds.includes(q.id)
    )
    const normalQuestions = questions.filter(
      q => !specialQuestionIds.includes(q.id)
    )

    // Barajar solo las preguntas normales
    const shuffledNormalQuestions = shuffleArray(normalQuestions)

    // Combinar las preguntas normales barajadas con las especiales al final
    const combinedQuestions: Question[] = [
      ...shuffledNormalQuestions,
      ...specialQuestions
    ]

    console.log('Combined Questions:', combinedQuestions)

    setShuffledQuestions(combinedQuestions)
    setAnswers(new Array(combinedQuestions.length).fill(null))
  }, [isMounted])

  const shuffleOptions = (options: string[]): string[] => {
    return options
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
  }

  const handleAnswer = (selectedOptionIndex: number) => {
    const updatedAnswers = [...answers]
    const currentQuestion = shuffledQuestions[currentQuestionIndex]
    const previousAnswer = updatedAnswers[currentQuestionIndex]

    console.log(
      `Respondida pregunta ${currentQuestion.id} con opción ${selectedOptionIndex}`
    )

    // Actualizar el puntaje
    if (previousAnswer !== null) {
      if (previousAnswer === currentQuestion.correctAnswer) {
        setScore(prev => prev - 1)
        console.log('Puntaje decrementado por respuesta anterior correcta')
      }
    }

    if (selectedOptionIndex === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1)
      console.log('Puntaje incrementado por respuesta correcta')
    }

    updatedAnswers[currentQuestionIndex] = selectedOptionIndex
    setAnswers(updatedAnswers)

    // Avanzar a la siguiente pregunta después de 2 segundos
    setTimeout(() => {
      const nextQuestion = shuffledQuestions[currentQuestionIndex + 1]

      console.log('Next Question:', nextQuestion)

      if (
        nextQuestion &&
        [34, 35, 36].includes(nextQuestion.id) &&
        !showingContext
      ) {
        // Mostrar el contexto antes de las preguntas 34,35,36
        const context = contexts.find(c =>
          c.questionIds.includes(nextQuestion.id)
        )
        if (context) {
          console.log('Mostrando contexto para preguntas:', context.questionIds)
          setCurrentContext(context)
          setShowingContext(true)
          return
        }
      }

      if (currentQuestionIndex < shuffledQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        console.log('Avanzando a la siguiente pregunta')
      } else {
        setIsFinished(true)
        console.log('Simulacro finalizado')
      }
    }, 2000)
  }

  const getOptionLabel = (index: number): string => {
    return String.fromCharCode(97 + index) // Genera las letras a, b, c, etc.
  }

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      const previousQuestion = shuffledQuestions[currentQuestionIndex - 1]
      if ([34, 35, 36].includes(previousQuestion.id)) {
        // Si se está regresando desde una pregunta especial, ocultar el contexto
        setShowingContext(false)
        setCurrentQuestionIndex(prev => prev - 1)
        console.log('Regresando desde una pregunta especial')
      } else {
        setCurrentQuestionIndex(prev => prev - 1)
        console.log('Regresando a la pregunta anterior')
      }
    }
  }, [currentQuestionIndex, shuffledQuestions])

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      console.log('Avanzando manualmente a la siguiente pregunta')
    }
  }, [currentQuestionIndex, shuffledQuestions.length])

  // Manejar las teclas del teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (showingContext) {
        // Mientras se muestra el contexto, no permitir navegación
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious()
          break
        case 'ArrowRight':
          handleNext()
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    // Limpiar el listener al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlePrevious, handleNext, showingContext])

  if (isFinished) {
    return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center'>
        <h2 className='mb-4 text-3xl font-bold text-green-600'>
          Simulacro Completado
        </h2>
        <p className='mb-6 text-xl text-gray-700'>
          Tu puntuación es: {score} de {shuffledQuestions.length}
        </p>
        <button
          onClick={() => window.location.reload()}
          className='rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700'
        >
          Reiniciar Simulacro
        </button>
      </div>
    )
  }

  if (shuffledQuestions.length === 0) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50'>
        <p className='text-lg text-gray-700'>Cargando preguntas...</p>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const selectedOption = answers[currentQuestionIndex]

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6'>
      <div className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg'>
        {/* Mostrar contexto si está activo */}
        {showingContext && currentContext ? (
          <>
            <h2 className='mb-4 text-2xl font-bold text-gray-800'>Contexto</h2>
            <p className='mb-6 whitespace-pre-line text-lg text-gray-700'>
              {currentContext.contextText}
            </p>
            <div className='mb-6'>
              <Image
                src={currentContext.image}
                alt='Contexto para preguntas 34-36'
                width={500}
                height={300}
                className='rounded-lg'
              />
            </div>
            <button
              onClick={() => {
                console.log('Botón "Continuar" clickeado')
                setShowingContext(false)
                setCurrentQuestionIndex(prev => prev + 1) // Avanza al siguiente índice
              }}
              className='mt-4 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700'
            >
              Continuar
            </button>
          </>
        ) : (
          <>
            <h2 className='mb-4 text-2xl font-bold text-gray-800'>
              Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
            </h2>
            <p className='mb-6 text-lg text-gray-900 shadow-sm'>
              {currentQuestion.question}
            </p>

            {/* Mostrar imagen si existe */}
            {currentQuestion.image && (
              <div className='mb-6'>
                <Image
                  src={currentQuestion.image}
                  alt={`Imagen para pregunta ${currentQuestion.id}`}
                  width={500}
                  height={300}
                  className='rounded-lg'
                />
              </div>
            )}

            <ul className='space-y-4'>
              {currentQuestion.options.map((option, index) => {
                let borderColor = 'border-gray-300'
                let bgColor = 'bg-white'
                let textColor = 'text-black' // Color predeterminado para mejorar la visibilidad.

                if (selectedOption !== null) {
                  if (index === currentQuestion.correctAnswer) {
                    borderColor = 'border-green-500'
                    bgColor = 'bg-green-100'
                    textColor = 'text-green-700' // Color para opciones correctas.
                  }
                  if (
                    index === selectedOption &&
                    selectedOption !== currentQuestion.correctAnswer
                  ) {
                    borderColor = 'border-red-500'
                    bgColor = 'bg-red-100'
                    textColor = 'text-red-700' // Color para opciones incorrectas.
                  }
                }

                return (
                  <li key={index}>
                    <button
                      onClick={() => handleAnswer(index)}
                      disabled={selectedOption !== null}
                      className={`flex w-full items-center gap-4 rounded-lg border-4 ${borderColor} ${bgColor} px-4 py-2 text-left shadow-sm transition-all duration-300 ${
                        selectedOption === null ? 'hover:bg-gray-100' : ''
                      }`}
                    >
                      <span className='font-bold text-blue-600'>
                        {getOptionLabel(index)}.
                      </span>
                      <span className={`flex-1 ${textColor}`}>{option}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* Navegación */}
            <div className='mt-6 flex justify-between'>
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0 && !showingContext}
                className={`rounded-lg px-4 py-2 font-semibold shadow-md transition-all duration-300 ${
                  currentQuestionIndex === 0 && !showingContext
                    ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Anterior
              </button>
              <button
                onClick={handleNext}
                disabled={currentQuestionIndex >= shuffledQuestions.length - 1}
                className={`rounded-lg px-4 py-2 font-semibold shadow-md transition-all duration-300 ${
                  currentQuestionIndex >= shuffledQuestions.length - 1
                    ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Siguiente
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SimulatedTest
