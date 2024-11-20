import React from 'react'

interface NavigationProps {
  onPrevious: () => void
  onNext: () => void
  disablePrevious: boolean
  disableNext: boolean
}

const Navigation: React.FC<NavigationProps> = ({
  onPrevious,
  onNext,
  disablePrevious,
  disableNext
}) => {
  return (
    <div className='mt-6 flex justify-between'>
      <button
        onClick={onPrevious}
        disabled={disablePrevious}
        className={`rounded-lg px-4 py-2 font-semibold shadow-md transition-all duration-300 ${
          disablePrevious
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        className={`rounded-lg px-4 py-2 font-semibold shadow-md transition-all duration-300 ${
          disableNext
            ? 'cursor-not-allowed bg-gray-300 text-gray-500'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        Siguiente
      </button>
    </div>
  )
}

export default React.memo(Navigation)
