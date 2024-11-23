'use client'

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 p-6 sm:p-10'>
      <div className='space-y-8 text-center'>
        {/* Header */}
        <header>
          <h1 className='text-5xl font-extrabold text-blue-800'>
            Bienvenido a la Práctica de Examen Docente
          </h1>
          <p className='mx-auto mt-4 max-w-xl text-lg text-gray-700'>
            Prepárate para superar tus objetivos. Practica tus conocimientos con
            preguntas aleatorias y mejora cada día.
          </p>
        </header>

        {/* Main Content */}
        <main>
          <div className='space-y-4'>
            <button
              className='w-full max-w-md transform rounded-full bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
              onClick={() => {
                // Redirigir a la página del simulacro, versión 1
                window.location.href = '/practice/simulated-test?version=1'
              }}
            >
              ¡Comenzar Práctica! Versión 1
            </button>
            <button
              className='w-full max-w-md transform rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300'
              onClick={() => {
                // Redirigir a la página del simulacro, versión 2
                window.location.href = '/practice/simulated-test?version=2'
              }}
            >
              ¡Comenzar Práctica! Versión 2
            </button>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className='mt-8 text-center text-sm text-gray-600'>
        © {new Date().getFullYear()} Mathyu Cardozo. Todos los derechos
        reservados.
      </footer>
    </div>
  )
}
