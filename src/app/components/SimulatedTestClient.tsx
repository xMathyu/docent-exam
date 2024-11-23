// components/SimulatedTestClient.tsx

'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import { questionsVersion1 } from '@/app/utils/questionsVersion1'
import { questionsVersion2 } from '@/app/utils/questionsVersion2'
import { contextsVersion1 } from '@/app/utils/contextsVersion1'
import { contextsVersion2 } from '@/app/utils/contextsVersion2'
import { Question, Context } from '@/app/types'
import QuestionCard from '@/app/components/QuestionCard'
import Navigation from '@/app/components/Navigation'
import FinalScreen from '@/app/components/FinalScreen'
import ContextScreen from '@/app/components/ContextScreen'
import useKeyboardNavigation from '@/app/hooks/useKeyboardNavigation'

const SimulatedTestClient: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [questionsList, setQuestionsList] = useState<Question[]>([])
  const [selectedContexts, setSelectedContexts] = useState<Context[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState<(string | null)[]>([])
  const [isFinished, setIsFinished] = useState(false)
  const [showingContext, setShowingContext] = useState(false)
  const [currentContext, setCurrentContext] = useState<Context | null>(null)

  const searchParams = useSearchParams()
  const version = searchParams.get('version') || '1'

  const handlePrevious = useCallback(() => {
    if (currentQuestionIndex > 0) {
      const previousQuestion = questionsList[currentQuestionIndex - 1]
      if ([34, 35, 36].includes(previousQuestion.id)) {
        setShowingContext(false)
        setCurrentQuestionIndex(prev => prev - 1)
        console.log('Regresando desde una pregunta especial')
      } else {
        setCurrentQuestionIndex(prev => prev - 1)
        console.log('Regresando a la pregunta anterior')
      }
    }
  }, [currentQuestionIndex, questionsList])

  const handleNext = useCallback(() => {
    if (currentQuestionIndex < questionsList.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      console.log('Avanzando manualmente a la siguiente pregunta')
    } else {
      setIsFinished(true)
      console.log('Simulacro finalizado')
    }
  }, [currentQuestionIndex, questionsList.length])

  useKeyboardNavigation({
    onPrevious: handlePrevious,
    onNext: handleNext,
    isContextActive: showingContext
  })

  useEffect(() => {
    setIsMounted(true)
    console.log('Componente montado en el cliente')
  }, [])

  useEffect(() => {
    if (isMounted) {
      let selectedQuestions: Question[] = []
      let contexts: Context[] = []

      if (version === '1') {
        selectedQuestions = questionsVersion1
        contexts = contextsVersion1
      } else if (version === '2') {
        selectedQuestions = questionsVersion2
        contexts = contextsVersion2
      } else {
        // Manejar versiones no válidas
        selectedQuestions = questionsVersion1
        contexts = contextsVersion1
      }

      setQuestionsList(selectedQuestions)
      setSelectedContexts(contexts)
      setAnswers(new Array(selectedQuestions.length).fill(null))
      console.log(
        'Preguntas cargadas para versión',
        version,
        ':',
        selectedQuestions
      )
    }
  }, [isMounted, version])

  const handleAnswer = (selectedOptionIndex: number) => {
    const updatedAnswers = [...answers]
    const currentQuestion = questionsList[currentQuestionIndex]
    const previousAnswer = updatedAnswers[currentQuestionIndex]

    const selectedOptionLetter = getOptionLabel(selectedOptionIndex)

    console.log(
      `Respondida pregunta ${currentQuestion.id} con opción ${selectedOptionLetter}`
    )

    // Actualizar el puntaje
    if (previousAnswer !== null) {
      if (previousAnswer === currentQuestion.correctAnswer) {
        setScore(prev => prev - 1)
        console.log('Puntaje decrementado por respuesta anterior correcta')
      }
    }

    if (selectedOptionLetter === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1)
      console.log('Puntaje incrementado por respuesta correcta')
    }

    updatedAnswers[currentQuestionIndex] = selectedOptionLetter
    setAnswers(updatedAnswers)

    // Avanzar a la siguiente pregunta después de 2 segundos
    setTimeout(() => {
      const nextQuestion = questionsList[currentQuestionIndex + 1]

      console.log('Next Question:', nextQuestion)

      if (
        nextQuestion &&
        [34, 35, 36].includes(nextQuestion.id) &&
        !showingContext
      ) {
        const context = selectedContexts.find(c =>
          c.questionIds.includes(nextQuestion.id)
        )
        if (context) {
          console.log('Mostrando contexto para preguntas:', context.questionIds)
          setCurrentContext(context)
          setShowingContext(true)
          return
        }
      }

      if (currentQuestionIndex < questionsList.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1)
        console.log('Avanzando a la siguiente pregunta')
      } else {
        setIsFinished(true)
        console.log('Simulacro finalizado')
      }
    }, 1000)
  }

  const getOptionLabel = (index: number): string => {
    return String.fromCharCode(97 + index) // 'a', 'b', 'c', etc.
  }

  const handleRestart = () => {
    setScore(0)
    setAnswers(new Array(questionsList.length).fill(null))
    setCurrentQuestionIndex(0)
    setIsFinished(false)
    setShowingContext(false)
    setCurrentContext(null)
    console.log('Simulacro reiniciado')
  }

  if (!isMounted || questionsList.length === 0) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-50'>
        <p className='text-lg text-gray-700'>Cargando preguntas...</p>
      </div>
    )
  }

  if (isFinished) {
    return (
      <FinalScreen
        score={score}
        total={questionsList.length}
        onRestart={handleRestart}
      />
    )
  }

  const currentQuestion = questionsList[currentQuestionIndex]
  console.log(
    `Pregunta actual (Índice: ${currentQuestionIndex}):`,
    currentQuestion
  )

  if (!currentQuestion) {
    console.error(
      `La pregunta en el índice ${currentQuestionIndex} es undefined.`
    )
    return (
      <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 text-center'>
        <p className='text-lg text-red-700'>
          Ocurrió un error al cargar la pregunta. Por favor, reinicia el
          simulacro.
        </p>
        <button
          onClick={handleRestart}
          className='mt-4 rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700'
        >
          Reiniciar Simulacro
        </button>
      </div>
    )
  }

  const selectedOption = answers[currentQuestionIndex]

  if (showingContext && currentContext) {
    return (
      <ContextScreen
        context={currentContext}
        onContinue={() => {
          console.log('Botón "Continuar" clickeado')
          setShowingContext(false)
          if (currentQuestionIndex + 1 < questionsList.length) {
            setCurrentQuestionIndex(prev => prev + 1)
          } else {
            setIsFinished(true)
            console.log('Simulacro finalizado desde ContextScreen')
          }
        }}
      />
    )
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6'>
      <div className='w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg'>
        <QuestionCard
          question={currentQuestion}
          selectedOption={selectedOption}
          onSelectOption={handleAnswer}
        />
        <Navigation
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentQuestionIndex === 0 && !showingContext}
          disableNext={currentQuestionIndex >= questionsList.length - 1}
        />
      </div>
    </div>
  )
}

export default SimulatedTestClient
