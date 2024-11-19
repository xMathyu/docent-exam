'use client'
export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6 sm:p-10'>
      {/* Header */}
      <header className='mb-10 flex flex-col items-center'>
        <h1 className='mb-2 text-4xl font-bold text-blue-800'>
          Bienvenido a la Práctica de Exámenes
        </h1>
        <p className='max-w-lg text-center text-lg text-gray-700'>
          Prepárate para superar tus objetivos. Practica tus conocimientos con
          preguntas aleatorias y mejora cada día.
        </p>
      </header>

      {/* Main content */}
      <main className='flex flex-col items-center gap-6'>
        <button
          className='rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700'
          onClick={() => {
            // Redirigir a la página del simulacro
            window.location.href = '/practice/simulated-test'
          }}
        >
          ¡Comenzar Práctica!
        </button>

        <div className='mt-6 flex gap-4'>
          <a
            href='/instructions'
            className='font-medium text-blue-700 underline hover:text-blue-900'
          >
            Instrucciones
          </a>
          <a
            href='/about'
            className='font-medium text-blue-700 underline hover:text-blue-900'
          >
            Sobre Nosotros
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className='mt-16 text-center text-sm text-gray-600'>
        © {new Date().getFullYear()} Simulacro Educativo. Todos los derechos
        reservados.
      </footer>
    </div>
  )
}
