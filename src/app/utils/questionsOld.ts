export interface Question {
  id: number
  question: string
  image?: string
  options: string[]
  correctAnswer: number
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      'La docente del aula de doce meses sabe que los niños están en proceso de construir su imagen corporal y, por eso, cuando está en el cambiador atendiendo a Doris, le dice mientras la cambia: "Voy a ponerte el polo y quiero que me ayudes. A ver, voy a hacer que pase tu cabeza, ahora pásame este brazo, ahora este otro brazo y, para terminar, voy a acomodar el polo en la parte de tu pecho y de tu espalda". ¿La situación descrita es pertinente para promover el desarrollo de la imagen corporal de Doris? ¿Por qué?',
    options: [
      'Sí, porque permite que Doris perciba su cuerpo mientras escucha el nombre de las partes del mismo.',
      'Sí, porque, al repetir permanentemente los nombres de las partes del cuerpo de Doris, ella los podrá aprender.',
      'No, porque para que Doris se conozca, la docente debe utilizar un espejo y señalarle las partes de su cuerpo frente a su imagen.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 2,
    question:
      'En el aula de 12 a 18 meses cuatro niños están alimentándose con ayuda de la docente. Ella observa que uno de ellos, Manuel, se acerca a Corina y le coge la cara. Corina reacciona mostrándose muy fastidiada. En el marco del enfoque á infantil temprano del Minedu, ¿cuál es la acción docente pertinente para esta situación?',
    image: '/images/image-1.png',
    options: [
      'Decir a Manuel "No cojas la cara a Corina", y sujetar con delicadeza su mano para evitar que lo continúe haciendo.',
      'Decir a Corina "Vamos a sentarnos más cerca de los otros amigos de la mesa", para alejarla de Manuel y prevenir que se repita la situación.',
      'Decir a Manuel "A Corina no le gusta que le agarres la cara" para que vaya tomando conciencia del otro y continuar observando cómo interactúan.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  }
]
