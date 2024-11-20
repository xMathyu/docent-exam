import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de fallback.
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Un error ha ocurrido:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className='flex min-h-screen items-center justify-center bg-gray-50 p-6 text-center'>
          <p className='text-lg text-red-700'>
            Ocurrió un error inesperado. Por favor, reinicia la aplicación.
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
