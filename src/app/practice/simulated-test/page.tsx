// app/practice/simulated-test/page.tsx

import React, { Suspense } from 'react'
import SimulatedTestClient from '@/app/components/SimulatedTestClient'

const SimulatedTestPage = () => {
  return (
    <Suspense fallback={<div>Cargando preguntas...</div>}>
      <SimulatedTestClient />
    </Suspense>
  )
}

export default SimulatedTestPage
