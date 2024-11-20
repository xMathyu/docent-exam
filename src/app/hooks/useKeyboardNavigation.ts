import { useEffect } from 'react'

interface UseKeyboardNavigationProps {
  onPrevious: () => void
  onNext: () => void
  isContextActive: boolean
}

const useKeyboardNavigation = ({
  onPrevious,
  onNext,
  isContextActive
}: UseKeyboardNavigationProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isContextActive) {
        // Mientras se muestra el contexto, no permitir navegación
        return
      }

      switch (event.key) {
        case 'ArrowLeft':
          onPrevious()
          break
        case 'ArrowRight':
          onNext()
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
  }, [onPrevious, onNext, isContextActive])
}

export default useKeyboardNavigation
