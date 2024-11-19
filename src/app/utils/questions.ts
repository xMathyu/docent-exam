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
    options: [
      'Decir a Manuel "No cojas la cara a Corina", y sujetar con delicadeza su mano para evitar que lo continúe haciendo.',
      'Decir a Corina "Vamos a sentarnos más cerca de los otros amigos de la mesa", para alejarla de Manuel y prevenir que se repita la situación.',
      'Decir a Manuel "A Corina no le gusta que le agarres la cara" para que vaya tomando conciencia del otro y continuar observando cómo interactúan.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  // Preguntas 3 a 60 agregadas a continuación:
  {
    id: 3,
    question:
      'Álvaro tiene un año y medio y, desde hace poco, dice "no" cada vez que se le pide algo. Tomando en cuenta la etapa de desarrollo en la que se encuentra Álvaro, ¿a qué se debe este comportamiento?',
    options: [
      'A que Álvaro acaba de aprender la palabra "no" y por eso quiere usarla cada vez que sea posible.',
      'A que Álvaro intenta diferenciarse de los demás pues ha empezado a tomar conciencia de sí mismo.',
      'A que Álvaro tiene una personalidad que tiende a la trasgresión y que, si no se interviene, es posible que en el futuro presente comportamientos conflictivos.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 4,
    question:
      'Alicia tiene 18 meses, y su familia habla quechua en su casa y se comunica en castellano con sus vecinos. Alicia ha sido matriculada en una cuna cuya población es predominantemente castellano hablante. Si tomamos en cuenta que su docente es bilingüe, ¿cuál es la intervención docente más pertinente para el desarrollo del lenguaje de Alicia desde el enfoque de desarrollo infantil temprano del Minedu?',
    options: [
      'Dedicar a Alicia un tiempo determinado cada día para hacer que repita palabras de uso cotidiano en castellano, a fin de que se adapte al contexto en el que ahora vive.',
      'Indicar a los padres que tanto ellos como la docente deben hablarle a Alicia solo en castellano, a fin de no confundirla con dos lenguas diferentes.',
      'Usar el quechua en los momentos de cuidado y, si se requiere, también en los momentos de juego libre, a fin de respetar la lengua materna de Alicia.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 5,
    question:
      'Cuando la docente de la cuna se da cuenta de que Manuel, de dos años y medio, intenta ponerse las zapatillas y con mucho esfuerzo logra ponérselas, pero al revés. Ante la situación presentada, ¿cuál es la intervención docente pertinente para acompañar al niño en el desarrollo de su autonomía?',
    options: [
      '"Manuel, veo que lograste ponerte las zapatillas, ¡qué bueno! Veo también que están al revés, ¿quieres que te ayude?".',
      '"Manuel, acabas de colocarte las zapatillas al revés, deja que te las saque y te las coloque bien".',
      '"Manuel, veo que te pusiste mal las zapatillas; sácatelas, por favor y póntelas bien".'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 6,
    question:
      'La docente observa a dos niños del grupo de dos años que están jugando con pelotas plástico. En ese momento, Luisa, una de las niñas, lanza al piso la pelota y al rebotar cae en el brazo de César, quien se frota el brazo mostrando fastidio. La docente continúa observando sin intervenir y después de un momento César continúa jugando. En el marco del enfoque de desarrollo infantil temprano del Minedu, ¿qué se puede decir acerca de que la docente observe la situación sin intervenir?',
    options: [
      'La docente debió ayudar a Luisa a darse cuenta de que debe tener cuidado al jugar con los objetos.',
      'La docente debió ubicar a los niños alejados uno del otro para evitar que se hagan daño entre ellos.',
      'La docente brindó a César la oportunidad de reponerse por sí mismo antes de actuar.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 7,
    question:
      'Diego, de dos años de edad, suele decir "caca" a los adultos que lo cuidan cuando algo le desagrada. Desde el enfoque de desarrollo infantil temprano del Minedu, ¿cuál de las siguientes intervenciones es pertinente realizar cuando el niño dice "caca"?',
    options: [
      '"Diego, no se habla así. Eso es feo".',
      '"Diego, ¿quieres ir al baño? Vamos, te llevo".',
      '"Diego, ¿quieres decirme que hay algo que no te gusta?"'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 8,
    question:
      'En el momento de la alimentación, la docente está con un grupo de niños de dos años. Aunque, por lo general, Milagros come por sí misma, le pide a la docente que le dé de comer. Desde el enfoque de desarrollo infantil temprano del Minedu, ¿cuál es la acción docente pertinente ante esta situación?',
    options: [
      'Prometer a Milagros que, si come sola ella sabe hacerlo, le dará el juguete que le gusta.',
      'Acoger el pedido de Milagros y darle de comer, pues si pide ayuda es porque está necesitándola.',
      'Pedirle a Milagros que haga un esfuerzo pues ya es una niña grande y las niñas grandes comen solas.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 9,
    question:
      'En el aula de dos años de una cuna, ha llegado el momento en que los niños se cambian de ropa para prepararse para la salida. Sofía, de dos años y ocho meses, coge su blusa del bolso que trajo de casa y la docente observa que se la pone con esfuerzo e intenta abotonársela. Ante la situación descrita, ¿cuál es la acción docente pertinente para promover el desarrollo autónomo de Sofía?',
    options: [
      'Atender a Sofía diciéndole “Yo te ayudaré porque aún eres pequeña para abotonarte la blusa sola".',
      'Observar cómo Sofía se desenvuelve y, en caso necesite apoyo, acercarse y preguntarle si desea que le ayude.',
      'Aproximarse y ofrecer a Sofía cambiar la blusa por un polo que es más fácil de ponerse y así evitar que se frustre.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 10,
    question:
      'Durante la hora de la lonchera, Pablo, un niño de tres años, está intentando de forma reiterada abrir su botella de jugo. La docente se acerca, le dice que lo ayudará y él le responde: "No, yo solo". Considerando el desarrollo personal de los niños a esta edad, ¿qué se puede decir de lo que dijo Pablo?',
    options: [
      'Presenta problemas para comunicar que necesita ayuda.',
      'Es consciente de sus logros personales y se autorregula.',
      'Manifiesta la necesidad de reafirmar su autonomía.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 11,
    question:
      'La docente del aula de cinco años, con el propósito de que los niños representen sus gustos y preferencias, acordó con ellos modelar en plastilina el animal que más les gusta. Durante la actividad, ella observa que Rodrigo manipula la plastilina con desgano, se le acerca y le pregunta qué le sucede. Rodrigo dice: "Quiero hacer a mi perrito, pero no me sale con plastilina, lo quiero hacerlo con crayolas". Ante esta situación, ¿cuál es la intervención más respetuosa para atender a Rodrigo?',
    options: [
      'Permitir que Rodrigo utilice las crayolas para representar a su perro considerando su individualidad.',
      'Decirle a Rodrigo que elabore el perro como él quiera, pero recalcarle que la consigna era hacerlo con plastilina.',
      'Decirle a Rodrigo que siga intentando modelar el perro con plastilina y que ella le dará más tiempo para terminar.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 12,
    question:
      'El docente del aula de cuatro años tiene el propósito de que los niños vayan construyendo su corporeidad. ¿Cuál de las siguientes alternativas más pertinente para ese propósito?',
    options: [
      'Promover situaciones que impliquen movimiento como correr, saltar y estirarse, para sentir su cuerpo.',
      'Formar parejas para que, entre los dos niños, dibujen el contorno de sus cuerpos y luego nombren sus partes.',
      'Enseñarles una canción como “Mi cuerpo", para que identifiquen las partes de su cuerpo, como la cabeza, los brazos y las piernas.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 13,
    question:
      'La docente pide a los niños del aula de cuatro años que dibujen lo que más les gustó de la visita realizada y, para ello, coloca en cada mesa un depósito con crayolas para que el grupo comparta los materiales. Sin embargo, en más de una mesa los niños se quitan los materiales. ¿Qué acción debe realizar la docente para favorecer una convivencia respetuosa entre los niños?',
    options: [
      'Recordar a los niños que no está bien quitarse las cosas y por qué, y proseguir con la actividad.',
      'Continuar con la actividad que estaban realizando para dar la oportunidad a que se autorregulen solos.',
      'Conversar con los niños sobre lo sucedido y entre todos acordar cómo actuar en situaciones iguales o parecidas a la ocurrida.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 14,
    question:
      'Durante la hora del recreo, un grupo de niños está jugando con una pelota. Al ver pasar a Rosa y a su amiga, Daniel toma la pelota y la lanza contra Rosa. La amiga de Rosa va buscar a su profesora para contarle lo que sucedió. ¿Cuál es la acción más pertinente para la intervención de la docente?',
    options: [
      'Consolar a Rosa y explicarle que debe tener cuidado cuando están jugando los niños porque pueden golpearla sin querer.',
      'Decir a Daniel que lo que hizo estuvo mal e indicarle él y sus amigos deben pedir disculpas a Rosa.',
      'Preguntar a ambos niños qué sucedió, luego preguntar a Daniel cómo se sentiría si a él le tiraran la pelota y qué propone para que no vuelva a pasar.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 15,
    question:
      'La mamá de Luis, que está en el aula de cinco años, se ha acercado a hablar con la docente porque ha observado que ella solo le está enseñando los números del 1 al 10. La madre de familia le dice a la docente: "Señorita, Luis se está atrasando, él ya sabe contar hasta 20". ¿Cuál es la respuesta decente más pertinente ante el requerimiento de la mamá de Luis?',
    options: [
      'Explicarle que está bien que su hijo cuente hasta 20; sin embargo, está establecido a nivel nacional que se trabaje solo hasta el número 10.',
      'Explicarle que su hijo está adelantado y sugerirle que, en casa, continúe motivándolo a avanzar, por ejemplo, podría pegar bolitas de papel sobre números dibujados.',
      'Decirle que está bien que su hijo cuente hasta 20 o más, pero eso no garantiza que tenga la noción de cantidad; por ello, en el aula, se usan pequeñas cantidades para afianzar la comprensión de los números.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 16,
    question:
      'Felipe, de tres años, quiere abrir su mochila. Coge el jalador del cierre y lo lleva en distintas direcciones, pero no logra abrir el cierre. Entonces, va en busca de la docente y le pide que lo ayude. En esa situación, ¿qué intervención es más pertinente para favorecer la autonomía del niño?',
    options: [
      'Pedirle a Felipe que le muestre cómo está abriendo el cierre. Luego, decirle: “¿Y si coges el jalador y lo llevas derechito por el camino del cierre? Prueba hacerlo, si necesitas yo te ayudo”.',
      'Decirle a Felipe: “Esta vez yo voy a abrir el cierre. Presta mucha atención para que la próxima vez lo hagas tú solo”. Luego, pedirle la mochila, abrir el cierre y devolvérsela.',
      'Animar a Felipe diciéndole: “Abrir el cierre es muy fácil. Vamos, inténtalo de nuevo. Yo sé que tú lo puedes hacer”. Luego esperar que lo haga.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 17,
    question:
      'La docente y los niños del aula de cinco años acuerdan salir al jardín de la IE para observar qué animalitos viven allí. La docente piensa aprovechar esta situación para plantear actividades que favorezcan el desarrollo de habilidades de indagación científica. Así, les distribuye a los niños lupas y les indica que observen a los animalitos sin tocarlos para evitar que algunos de ellos los piquen. Además, les pide que sean cuidadosos para no maltratarlos.',
    options: [
      'Durante la observación, pedir a los niños que tomen notas sobre lo que ven y luego discutirlas en grupo.',
      'Realizar una lluvia de ideas antes de la observación sobre qué animalitos podrían encontrar.',
      'Iniciar un diario de campo donde los niños registren sus observaciones diarias sobre los animalitos.'
    ],
    correctAnswer: 0 // Este es un ejemplo, actualizar según corresponda
  },
  {
    id: 18,
    question:
      'Cuando Matías, Susana y Lola, del aula de cinco años, están jugando en el sector del hogar. De pronto, la docente escucha que el grupo está discutiendo porque Matías quiere jugar a ser el papá y quedarse en casa limpiando y cocinando, mientras que Susana y Lola dicen que los papás salen de la casa a trabajar y que son las mamás quienes se quedan a cocinar y cuidar a los hijos. Ante esta situación, ¿qué intervención es pertinente para favorecer la reflexión de los niños sobre los roles familiares?',
    options: [
      'Explicar a Matías que, en el juego de la casita, lo usual es que las mamás cocinen y limpien la casa, y que los papás salgan a trabajar, y proponerle que les pida a Susana y Lola que le enseñen cómo se juega en la casita.',
      'Preguntar a los tres niños a quiénes han visto cocinar y limpiar en casa. A partir de sus respuestas, decirles que puede haber papás o hermanos que lo hacen, y que, por eso, también podrían jugar al juego que Matías propone.',
      'Decir a Susana y a Lola que existen muchas familias en las que la mamá sale a trabajar y el papá se queda cocinando y limpiando la casa, y sugerirles que hoy podrían jugar como Matías está proponiendo y mañana como ellas proponen.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 19,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 20,
    question:
      'En el aula de cinco años, se ha realizado una votación entre dos opciones para elegir a dónde irán, en el marco del proyecto que están realizando: al río o a la playa. La votación resultó con 7 votos a favor de ir al río y 10 votos a favor de ir a la playa. Al escuchar el resultado, Rodrigo recordó que Carmen había faltado y propuso esperar a que vuelva y vote para ver quién gana. A partir de esta situación la docente tiene la intención de desarrollar en los niños la capacidad de resolución de problemas. ¿Cuál de las siguientes es la acción docente pertinente para dicho propósito?',
    options: [
      'Resolver en la pizarra "7+1" utilizando palotes; a continuación, pedir a los niños comparar los palotes del resultado uno a uno con los de la otra opción para saber cuál es la que gana.',
      'Preguntar a los niños: "¿Cuánto es 7+1?" y "¿Cuánto 10+1?", y esperar sus respuestas; luego preguntar "¿Qué número es mayor, 8 u 11?, entonces, ¿qué opción ganó?".',
      'Plantear a los niños: "Si Carmen vota a favor de ir al río, ¿Esta opción podría ganar? ¿qué tendríamos que hacer para saberlo?".'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 21,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 22,
    question:
      'La docente del aula de cinco años tiene el propósito de promover en los niños el uso del número como ordinal. Para ello, ha planificado jugar a las carreras. Los niños y la docente salen al patio y ella forma grupos de cinco integrantes. Luego, la docente le pide al primer grupo que se acomode para la partida y da la señal de inicio para la carrera. Luego de la carrera les pide a los niños que participaron que formen una fila según el en que llegaron a la meta. ¿Cuál de los siguientes grupos de preguntas es pertinente plantear para que los estudiantes usen el número como ordinal?',
    options: [
      '¿Cuántos niños hay en la fila? ¿Quiénes forman la fila? ¿Quién ganó la carrera? ¿Quién llegó al último?',
      '¿Quién llegó en primer lugar? ¿Quién llegó en segundo? ¿Qué orden de llegada tiene Manuel quien está inmediatamente después del segundo lugar?',
      '¿Quién llegó antes que Sofía? ¿Quién llegó después de Sofía? ¿Quién o quiénes llegaron antes que Jesús y Norma? ¿Quién o quiénes llegaron después de Jesús y Norma?'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 23,
    question:
      'Los niños del aula de cinco años realizan agrupaciones. Liliana ha agrupado algunos de sus bloques de la siguiente manera: por un lado, ha agrupado cuatro círculos de diferentes colores y tamaños. Por otro, ha agrupado cinco triángulos, también de diferentes colores y tamaños. ¿Qué fase de la clasificación se evidencia en las agrupaciones realizadas por Liliana?',
    options: [
      'Colecciones figurales.',
      'Colecciones no figurales.',
      'Clases lógicas.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 24,
    question:
      'Las docentes de las aulas de cinco años están dialogando sobre cómo promover en los niños el conteo. ¿Cuál de las siguientes propuestas es más pertinente para promover el conteo en los niños?',
    options: [
      'Flor dice: “Cuando van a realizar un trabajo, pediré a diferentes niños que recojan de mi mesa material, como pinceles, tijeras u otros, para distribuirlo a su grupo. Diré al niño responsable que, usando una bandeja, lleve la cantidad de material para que cada miembro del grupo tenga con qué trabajar y no le falte ni sobre ningún material”.',
      'Lucy dice: “Colocaré en el aula una recta con los números. Cada día, antes del inicio de la asamblea de la mañana, señalaré los números de la recta para que los cuenten. Luego, pediré a diferentes niños que identifiquen uno de los números. Por ejemplo, preguntaré a un niño dónde está el número 5, o a otro niño, dónde está el número 8, etc.”.',
      'Inés dice: “Organizaré juegos para contar, por ejemplo, el juego de las tapitas, que consiste en entregar recipientes y tapitas de gaseosa. Usaré tarjetas con los números del 1 al 9. Sacaré al azar una tarjeta, nombraré el número que salió; luego, pediré que todos juntos contemos hasta dicho número, mientras que cada niño coloca las tapitas en su recipiente”.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 25,
    question:
      'Jimena se encuentra jugando con dos muñecas de diferente tamaño; de pronto la niña se acerca a la docente y le dice: “Mira esta muñeca que tiene vestido amarillo es más grande que la de vestido azul”, la maestra le responde: “Eso quiere decir que la muñeca de vestido azul es más pequeña que la de amarillo, ¿verdad?”, entonces la niña responde: “No sé”. En esta situación, ¿Cuál es la propiedad de la seriación que evidencia no haber alcanzado Jimena?',
    options: ['Reciprocidad.', 'Transitividad.', 'Reversibilidad.'],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 26,
    question:
      'En la hora del juego libre en los sectores, Ananías, de cinco años, está jugando con botones de diferentes colores. El niño pone en fila 6 botones negros y llama a la docente para mostrarle lo que hizo. La docente se acerca y, al verlo, le propone: “Ananías, qué tal si con los botones blancos formas otra fila con la misma cantidad de botones que los negros”. Entonces, Ananías lo hace de la siguiente manera',
    image: '/images/image-1.png',
    options: [
      'Conservación no duradera.',
      'Ausencia de correspondencia término a término.',
      'Correspondencia término a término sin conservación.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 27,
    question:
      'En el aula de cinco años, se ha realizado una votación entre dos opciones para elegir a dónde irán, en el marco del proyecto que están realizando: al río o a la playa. La votación resultó con 7 votos a favor de ir al río y 10 votos a favor de ir a la playa. Al escuchar el resultado, Rodrigo recordó que Carmen había faltado y propuso esperar a que vuelva y vote para ver quién gana. A partir de esta situación la docente tiene la intención de desarrollar en los niños la capacidad de resolución de problemas. ¿Cuál de las siguientes es la acción docente pertinente para dicho propósito?',
    options: [
      'Resolver en la pizarra "7+1" utilizando palotes; a continuación, pedir a los niños comparar los palotes del resultado uno a uno con los de la otra opción para saber cuál es la que gana.',
      'Preguntar a los niños: "¿Cuánto es 7+1?" y "¿Cuánto 10+1?", y esperar sus respuestas; luego preguntar "¿Qué número es mayor, 8 u 11?, entonces, ¿qué opción ganó?".',
      'Plantear a los niños: "Si Carmen vota a favor de ir al río, ¿Esta opción podría ganar? ¿qué tendríamos que hacer para saberlo?".'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 28,
    question:
      'Los La docente del aula de cinco años observa que algunos niños dejan el caño abierto luego de lavarse las manos. Entonces, decide conversar con ellos en asamblea. La docente inicia la reunión comentándoles lo que ha observado. En esa situación, ¿cuál de las siguientes acciones es más pertinente que realice la docente para promover la reflexión de los niños sobre la importancia de cuidar el agua?',
    image: '/images/image-2.png',
    options: [
      'Dialogar con los niños sobre cómo usan el agua en sus casas. Luego, mostrarles imágenes de lugares que carecen de agua y preguntarles qué pasaría si no tuvieran agua en sus casas o en la IE. Por último, preguntarles: “¿Qué pueden hacer para asegurarse de cerrar el caño después de usarlo?”.',
      'Decirles: “Niños, el agua es importante para todos los seres vivos. Por ello, no deben dejar el caño abierto. Para que lo recuerden, realizaremos el concurso ‘Yo cuido el agua´. Cada uno recibirá una estrellita cuando cierre el caño después de usarlo y ganará quien tenga más estrellitas”.',
      'Preguntar a los niños: “¿Por qué dejan el caño abierto?”. Luego, proponerles que elaboren carteles con la imagen de un caño cerrado y el mensaje: “Cierra el caño después de usarlo”, para que no se olviden de hacerlo. Finalmente, pegar conjuntamente con los niños los carteles en los lavaderos.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 29,
    question:
      'Antonella, de cinco años, llega al aula con la lista que escribió para ir a comprar a la tienda. Al ver a la docente, se la muestra. Cuando la docente le pregunta qué escribió en la lista, la niña contesta: “Queso, sandía y arroz”. A continuación, se presenta el escrito de la niña: Considerando los niveles de apropiación del sistema de escritura propuestos por Emilia Ferreiro y Ana Teberosky, ¿en qué nivel se encuentra Antonella?',
    options: ['Presilábico.', 'Silábico.', 'Silábico alfabético.'],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 30,
    question:
      'En el aula de cinco años, los niños han elaborado barquitos de papel periódico y ahora juegan a hacerlos flotar en un recipiente con agua. Los niños observan que, al cabo de un rato, los barquitos se remojan y se hunden. Entonces, Javier comenta: “Todos los barquitos se nos hunden muy rápido”. Lorena responde: “Sí, el papel no sirve, hay que hacerlos de otra cosa”. Los niños del grupo están de acuerdo y deciden elaborar barquitos con otros materiales que no se hundan tan rápido. En esta situación, ¿cuál de las siguientes alternativas es más pertinente para seguir favoreciendo la iniciación a la indagación científica en los niños?',
    options: [
      'Preguntar a los niños qué materiales podrían emplear para hacer barquitos que no se hundan. Luego, pedirles que busquen esos materiales en el aula, para que prueben qué ocurre cuando los ponen en el agua. Finalmente, proponerles elaborar barquitos con los materiales que comprobaron que no se hundían.',
      'Explicar a los niños que las botellas de plástico vacías no se hunden en el agua. Luego, elaborar un barquito con una botella de plástico cortada y comprobar junto con ellos que no se hunde. Finalmente, decirles que elaboren sus barquitos con ese material, pero de la forma, tamaño y color que prefieran.',
      'Colocar en una tina con agua varios objetos de diversos materiales. Luego, pedir a los niños que observen qué sucedió con cada uno de ellos al ponerlos en el agua. Finalmente, sugerirles que elaboren sus barquitos con los materiales de aquellos objetos que no se hayan hundido en la tina.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 31,
    question:
      'Jimena, de cinco años, se encuentra jugando con dos muñecas de diferente tamaño; de pronto la niña se acerca a la docente y le dice: “Mira esta muñeca que tiene vestido amarillo es más grande que la de vestido azul”, la maestra le responde: “Eso quiere decir que la muñeca de vestido azul es más pequeña que la de amarillo, ¿verdad?”, entonces la niña responde: “No sé”. En esta situación, ¿Cuál es la propiedad de la seriación que evidencia no haber alcanzado Jimena?',
    options: ['Reciprocidad.', 'Transitividad.', 'Reversibilidad.'],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 32,
    question:
      'César, de tres años, está contándole a su profesora que el fin de semana fue a visitar a sus abuelitos diciendo: "¡Mañana me fui donde mis abuelitos y comí mi sopa!". Si la docente tiene el propósito de contribuir con el desarrollo de la oralidad de César, ¿cuál de las siguientes intervenciones NO es pertinente?',
    options: [
      '¿Qué querrá decir “bayas”?',
      '¿De qué color es la flor llamada “pervinca”?',
      '¿Qué les parece que los ratoncitos junten alimentos para el invierno?'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 33,
    question:
      'La docente del aula de cinco años tiene el propósito de que los niños resuelvan problemas, ¿Cuál de las siguientes acciones contribuiría a dicho propósito?',
    options: [
      'Realizar acciones que impliquen juntar objetos como loncheras, libros, bloques de madera entre otros, mostrar la representación simbólica de una suma y plantear un problema en que se aplique lo aprendido.',
      'Aprovechar situaciones cotidianas, como que una plastilina quedó pegada en el techo del aula, y pedir a los niños ideas de cómo podrían bajarla utilizando solo los objetos que están en el aula.',
      'Presentar un cartel con el texto de problema como "Rosita tiene 3 caramelos y le regalan 2 caramelos más, ¿cuántos caramelos tiene Rosita?" y pedir que lo resuelvan.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 34,
    question:
      '¿Cuál de las siguientes actividades es menos pertinente para desarrollar la creación de textos orales?',
    options: [
      'La docente presenta una lámina con una escena y pide a los niños que la observen con atención. Luego, les plantea preguntas como las siguientes: “¿Quiénes son? ¿Dónde están? ¿Qué hacen?”. Comenta sus respuestas y contribuye a que la historia continúe preguntando: “Entonces, ¿qué sucedió? ¿A quién? ¿Dónde? ¿Y qué ocurrió al final?”.',
      'La docente coge la punta de una madeja de lana e inicia una historia diciendo: “Hoy me levanté temprano...” Luego, se queda con la punta de la madeja y entrega la madeja a un niño para que continúe la narración y para que, cuando termine, se la dé a un compañero. Esto ocurre sucesivamente hasta que entre todos construyan la historia.',
      'La docente lee a los niños un cuento. Luego, les entrega una hoja de papel para que dibujen a los personajes, lo que les ocurrió y cómo terminó la historia. Cuando terminan, les pide que, apoyándose en sus dibujos, narren el cuento a sus compañeros con sus propias palabras.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 35,
    question:
      'Antonella, de cinco años, llega al aula con la lista que escribió para ir a comprar a la tienda. Al ver a la docente, se la muestra. Cuando la docente le pregunta qué escribió en la lista, la niña contesta: “Queso, sandía y arroz”. A continuación, se presenta el escrito de la niña: Considerando los niveles de apropiación del sistema de escritura propuestos por Emilia Ferreiro y Ana Teberosky, ¿en qué nivel se encuentra Antonella?',
    options: ['Presilábico.', 'Silábico.', 'Silábico-alfabético.'],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 36,
    question:
      'La docente del aula de cuatro años busca promover la expresión oral de los niños. ¿Cuál de las siguientes acciones es menos pertinente para ese propósito?',
    options: [
      'Plantear a los niños que elaboren predicciones antes y durante la lectura de cuentos.',
      'Pedir a los niños que todos los días practiquen las canciones, poesías, rimas y trabalenguas aprendidos hasta el momento.',
      'Proponer a los niños que lleven al aula el juguete que más les gusta y compartan con sus compañeros por qué les gusta.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 37,
    question:
      'Durante el refrigerio, Julio, de cuatro años, se dispone a comer sus uvas. Antes de hacerlo, las cuenta: “1, 2, 3, 4 y 5”. Al verlo, la docente le pregunta: “¿Cuántas uvas trajiste, Julio?”. El niño le responde volviendo a contar: “1, 2, 3, 4 y 5”. La docente replica: “¿Y dónde hay 5?”. Entonces, Julio señala la última uva que contó. ¿Cuál de los siguientes principios del conteo se evidencia en la intervención de Julio?',
    options: ['Abstracción.', 'Cardinalidad.', 'Orden estable.'],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 38,
    question:
      'Los niños del aula de cinco años han elaborado barquitos de papel periódico y ahora juegan a hacerlos flotar en un recipiente con agua. Los niños observan que, al cabo de un rato, los barquitos se remojan y se hunden. Entonces, Javier comenta: “Todos los barquitos se nos hunden muy rápido”. Lorena responde: “Sí, el papel no sirve, hay que hacerlos de otra cosa”. Los niños del grupo están de acuerdo y deciden elaborar barquitos con otros materiales que no se hundan tan rápido. En esta situación, ¿cuál de las siguientes alternativas es más pertinente para seguir favoreciendo la iniciación a la indagación científica en los niños?',
    image: '/images/image-4.png',
    options: [
      'Preguntar a los niños qué materiales podrían emplear para hacer barquitos que no se hundan. Luego, pedirles que busquen esos materiales en el aula, para que prueben qué ocurre cuando los ponen en el agua. Finalmente, proponerles elaborar barquitos con los materiales que comprobaron que no se hundían.',
      'Explicar a los niños que las botellas de plástico vacías no se hunden en el agua. Luego, elaborar un barquito con una botella de plástico cortada y comprobar junto con ellos que no se hunde. Finalmente, decirles que elaboren sus barquitos con ese material, pero de la forma, tamaño y color que prefieran.',
      'Colocar en una tina con agua varios objetos de diversos materiales. Luego, pedir a los niños que observen qué sucedió con cada uno de ellos al ponerlos en el agua. Finalmente, sugerirles que elaboren sus barquitos con los materiales de aquellos objetos que no se hayan hundido en la tina.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 39,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 40,
    question:
      'Jimena se encuentra jugando con dos muñecas de diferente tamaño; de pronto la niña se acerca a la docente y le dice: “Mira esta muñeca que tiene vestido amarillo es más grande que la de vestido azul”, la maestra le responde: “Eso quiere decir que la muñeca de vestido azul es más pequeña que la de amarillo, ¿verdad?”, entonces la niña responde: “No sé”. En esta situación, ¿Cuál es la propiedad de la seriación que evidencia no haber alcanzado Jimena?',
    image: '/images/image-5.png',
    options: ['Reciprocidad.', 'Transitividad.', 'Reversibilidad.'],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 41,
    question:
      'Durante la hora del juego libre en los sectores, Ananías, de cinco años, está jugando con botones de diferentes colores. El niño pone en fila 6 botones negros y llama a la docente para mostrarle lo que hizo. La docente se acerca y le propone: “Ananías, qué tal si con los botones blancos formas otra fila con la misma cantidad de botones que los negros”. Entonces, Ananías lo hace de la siguiente manera: La docente, a continuación, le pregunta: ¿Hay la misma cantidad de botones blancos que negros?, el niño responde que sí. Según la situación presentada, ¿En qué fase del desarrollo de la conservación de la cantidad se encuentra Ananías?',
    image: '/images/image.png',
    options: [
      'Conservación no duradera.',
      'Ausencia de correspondencia término a término.',
      'Correspondencia término a término sin conservación.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 42,
    question:
      'Durante la hora del juego libre en los sectores, Ananías, de cinco años, está jugando con botones de diferentes colores. El niño pone en fila 6 botones negros y llama a la docente para mostrarle lo que hizo. La docente se acerca y le propone: “Ananías, qué tal si con los botones blancos formas otra fila con la misma cantidad de botones que los negros”. Entonces, Ananías lo hace de la siguiente manera: La docente, a continuación, le pregunta: ¿Hay la misma cantidad de botones blancos que negros?, el niño responde que sí. Según la situación presentada, ¿En qué fase del desarrollo de la conservación de la cantidad se encuentra Ananías?',
    options: [
      'Conservación no duradera.',
      'Ausencia de correspondencia término a término.',
      'Correspondencia término a término sin conservación.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 43,
    question:
      'Durante la hora del recreo, un grupo de niños está jugando con una pelota. Al ver pasar a Rosa y a su amiga, Daniel toma la pelota y la lanza contra Rosa. La amiga de Rosa va buscar a su profesora para contarle lo que sucedió. ¿Cuál es la acción más pertinente para la intervención de la docente?',
    options: [
      'Consolar a Rosa y explicarle que debe tener cuidado cuando están jugando los niños porque pueden golpearla sin querer.',
      'Decir a Daniel que lo que hizo estuvo mal e indicarle él y sus amigos deben pedir disculpas a Rosa.',
      'Preguntar a ambos niños qué sucedió, luego preguntar a Daniel cómo se sentiría si a él le tiraran la pelota y qué propone para que no vuelva a pasar.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 44,
    question:
      'La mamá de Luis, que está en el aula de cinco años, se ha acercado a hablar con la docente porque ha observado que ella solo le está enseñando los números del 1 al 10. La madre de familia le dice a la docente: "Señorita, Luis se está atrasando, él ya sabe contar hasta 20". ¿Cuál es la respuesta decente más pertinente ante el requerimiento de la mamá de Luis?',
    options: [
      'Explicarle que está bien que su hijo cuente hasta 20; sin embargo, está establecido a nivel nacional que se trabaje solo hasta el número 10.',
      'Explicarle que su hijo está adelantado y sugerirle que, en casa, continúe motivándolo a avanzar, por ejemplo, podría pegar bolitas de papel sobre números dibujados.',
      'Decirle que está bien que su hijo cuente hasta 20 o más, pero eso no garantiza que tenga la noción de cantidad; por ello, en el aula, se usan pequeñas cantidades para afianzar la comprensión de los números.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 45,
    question:
      'Felipe, de tres años, quiere abrir su mochila. Coge el jalador del cierre y lo lleva en distintas direcciones, pero no logra abrir el cierre. Entonces, va en busca de la docente y le pide que lo ayude. En esa situación, ¿qué intervención es más pertinente para favorecer la autonomía del niño?',
    options: [
      'Pedirle a Felipe que le muestre cómo está abriendo el cierre. Luego, decirle: “¿Y si coges el jalador y lo llevas derechito por el camino del cierre? Prueba hacerlo, si necesitas yo te ayudo”.',
      'Decirle a Felipe: “Esta vez yo voy a abrir el cierre. Presta mucha atención para que la próxima vez lo hagas tú solo”. Luego, pedirle la mochila, abrir el cierre y devolvérsela.',
      'Animar a Felipe diciéndole: “Abrir el cierre es muy fácil. Vamos, inténtalo de nuevo. Yo sé que tú lo puedes hacer”. Luego esperar que lo haga.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 46,
    question:
      'Durante la hora del juego libre en los sectores, Ananías, de cinco años, está jugando con botones de diferentes colores. El niño pone en fila 6 botones negros y llama a la docente para mostrarle lo que hizo. La docente se acerca y le propone: “Ananías, qué tal si con los botones blancos formas otra fila con la misma cantidad de botones que los negros”. Entonces, Ananías lo hace de la siguiente manera: La docente, a continuación, le pregunta: ¿Hay la misma cantidad de botones blancos que negros?, el niño responde que sí. Según la situación presentada, ¿En qué fase del desarrollo de la conservación de la cantidad se encuentra Ananías?',
    image: '/images/image-7.png',
    options: [
      'Conservación no duradera.',
      'Ausencia de correspondencia término a término.',
      'Correspondencia término a término sin conservación.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 47,
    question:
      'En el aula de cinco años, se ha realizado una votación entre dos opciones para elegir a dónde irán, en el marco del proyecto que están realizando: al río o a la playa. La votación resultó con 7 votos a favor de ir al río y 10 votos a favor de ir a la playa. Al escuchar el resultado, Rodrigo recordó que Carmen había faltado y propuso esperar a que vuelva y vote para ver quién gana. A partir de esta situación la docente tiene la intención de desarrollar en los niños la capacidad de resolución de problemas. ¿Cuál de las siguientes es la acción docente pertinente para dicho propósito?',
    options: [
      'Resolver en la pizarra "7+1" utilizando palotes; a continuación, pedir a los niños comparar los palotes del resultado uno a uno con los de la otra opción para saber cuál es la que gana.',
      'Preguntar a los niños: "¿Cuánto es 7+1?" y "¿Cuánto 10+1?", y esperar sus respuestas; luego preguntar "¿Qué número es mayor, 8 u 11?, entonces, ¿qué opción ganó?".',
      'Plantear a los niños: "Si Carmen vota a favor de ir al río, ¿Esta opción podría ganar? ¿qué tendríamos que hacer para saberlo?".'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 48,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 49,
    question:
      '¿Cuál de las siguientes preguntas es pertinente para que los niños realicen inferencias sobre el texto?',
    options: [
      '¿Dónde vivían los ratoncitos?',
      '¿Les gustó esta historia? ¿Por qué?',
      '¿Cómo era Frederick en el cuento? ¿Por qué dicen eso?'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 50,
    question:
      'En el jardín, los niños se encuentran observando chanchitos de tierra o humedad, lombrices, hormigas, entre otros animalitos. Entonces, la docente les pregunta: “¿Qué pasará si alumbramos a los animalitos con una linterna pequeña?”. Mientras un grupo de niños dice que los animalitos se irán corriendo, otro grupo señala que estos se quedarán en su sitio como si nada ocurriera. ¿Qué actividad es más pertinente para que los niños registren sus observaciones respecto de la reacción de los animalitos?',
    options: [
      'Pedirles que, en parejas, alumbren a los animalitos y conversen sobre lo que observan prestando atención a todos los detalles. Luego, decirles que dibujen lo que más les gustó de la experiencia.',
      'Darles una ficha de trabajo que contenga imágenes de los animalitos que observarán en una columna y, en la otra, la imagen de una linterna prendida para que unan a la linterna solo aquellos animalitos que salen corriendo ante la luz.',
      'Acordar los símbolos que utilizarán para registrar la reacción de los animalitos ante la luz. Luego, entregarles una tabla para que dibujen en cada casilla de la primera fila a los animalitos que observarán y, debajo de cada uno de estos, los símbolos acordados según lo que observen.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 51,
    question:
      'Los niños del nivel Inicial están construyendo un huerto en la IE. En ese contexto, realizan distintas actividades. Los niños del aula de cuatro años están escarbando la tierra y, al hacerlo, encuentran algunas lombrices. Al principio, las observan y conversan sobre ellas. Después de un rato, la docente nota que los niños están jugando a que las lombrices conversan, inventando diálogos entre ellas. En esa situación, ¿cuál de las siguientes acciones es más pertinente que realice la docente para continuar favoreciendo la expresión oral de los niños?',
    options: [
      'Seguir de cerca la conversación de los niños y participar en el juego si ellos así lo solicitan.',
      'Pedir a los niños que inventen una historia sobre lombrices a partir de los diálogos realizados.',
      'Enseñar a los niños expresiones y gestos que pueden usar para enriquecer sus diálogos en el juego.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 52,
    question:
      'La docente y los niños del aula de cuatro años se encuentran en el huerto. En ese contexto, se produce el siguiente diálogo: Juan: ¡Qué bonito este árbol! Docente: Así es, es muy bonito. Martina: (Señalando un capullo de mariposa) ¡Mira eso! ¿Qué es? Docente: ¿Qué podría ser, Martina? Martina: Parece una fruta. Docente: ¿Y a qué fruta se parece? Martina: ¡A una pasa grande! Docente: ¿Tú qué dices, Juan? Juan: No, yo creo que se parece a un tamarindo. En la situación presentada ¿qué acción está realizando principalmente la docente?',
    options: [
      'Promover la metacognición sobre los procesos de aprendizaje.',
      'Favorecer la transferencia de los aprendizajes.',
      'Activar los saberes previos de los niños.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 53,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 54,
    question:
      'En el aula de cinco años, se ha realizado una votación entre dos opciones para elegir a dónde irán, en el marco del proyecto que están realizando: al río o a la playa. La votación resultó con 7 votos a favor de ir al río y 10 votos a favor de ir a la playa. Al escuchar el resultado, Rodrigo recordó que Carmen había faltado y propuso esperar a que vuelva y vote para ver quién gana. A partir de esta situación la docente tiene la intención de desarrollar en los niños la capacidad de resolución de problemas. ¿Cuál de las siguientes es la acción docente pertinente para dicho propósito?',
    options: [
      'Resolver en la pizarra "7+1" utilizando palotes; a continuación, pedir a los niños comparar los palotes del resultado uno a uno con los de la otra opción para saber cuál es la que gana.',
      'Preguntar a los niños: "¿Cuánto es 7+1?" y "¿Cuánto 10+1?", y esperar sus respuestas; luego preguntar "¿Qué número es mayor, 8 u 11?, entonces, ¿qué opción ganó?".',
      'Plantear a los niños: "Si Carmen vota a favor de ir al río, ¿Esta opción podría ganar? ¿qué tendríamos que hacer para saberlo?".'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  },
  {
    id: 55,
    question:
      'La docente del aula de cinco años tiene el propósito de trabajar la noción de número con los niños y, aprovecha el inicio de una actividad lúdica con pelotas de trapo en el patio. Ella organiza a los niños en cinco grupos de cinco integrantes y a cada grupo le entrega una caja con 4, 6 o 7 pelotas. Cuando entrega las pelotas a los grupos, indica que cada niño trabajará con una pelota. Luego pide a cada grupo que compare la cantidad de integrantes del grupo con la cantidad de pelotas recibidas. Mientras los niños lo hacen, va preguntando a cada grupo: "¿Hay igual cantidad de niños que pelotas? ¿Qué hay más, niños o pelotas? ¿Qué es lo que falta, niños o pelotas? ¿Qué sobra, niños o pelotas? ¿Cuánto falta para que haya igual cantidad de niños y pelotas? ¿Cuánto sobra para que haya igual cantidad de niños y pelotas?". A partir de la situación descrita, ¿qué se puede decir de la acción de la docente?',
    options: [
      'La docente con su acción demora el inicio del juego y esto hace que los niños pierdan el interés y baje su motivación, por lo que no se genera un ambiente propicio para trabajar la noción de número con el grupo.',
      'La docente posibilita por medio de las preguntas que los niños comuniquen sus ideas y emociones, lo que genera condiciones emocionales adecuadas para luego adquirir la noción de número de manera formal.',
      'La docente permite que los niños establezcan relaciones entre cantidades, propicia la correspondencia uno a uno y así permite que vayan construyendo la noción de número.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 56,
    question:
      'Jimena se encuentra jugando con dos muñecas de diferente tamaño; de pronto la niña se acerca a la docente y le dice: “Mira esta muñeca que tiene vestido amarillo es más grande que la de vestido azul”, la maestra le responde: “Eso quiere decir que la muñeca de vestido azul es más pequeña que la de amarillo, ¿verdad?”, entonces la niña responde: “No sé”. En esta situación, ¿Cuál es la propiedad de la seriación que evidencia no haber alcanzado Jimena?',
    options: ['Reciprocidad.', 'Transitividad.', 'Reversibilidad.'],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 57,
    question:
      'La docente del aula de cinco años ha colocado recientemente un libro de poesía en la biblioteca. Hoy dos niños han cogido ese libro y, luego de revisarlo, han escogido un poema y le han pedido a la docente que se los lea. Al notar los otros niños que la docente les leerá el libro, varios se acercan a escuchar. A continuación, se presenta el poema que los niños escogieron: La semillita que despertó El sol la alumbró, su cuerpecito calentó y la lluvia con sus gotitas la despertó. Entonces asomó curiosa la semillita preciosa. Abrió muy grande sus ojos y en planta se convirtió. La docente les pide a los niños que se pongan cómodos y les muestra el poema. A continuación, la docente les lee el poema. ¿Cuál de las siguientes acciones es más pertinente para seguir acercando a los niños a este tipo de texto?',
    options: [
      'Leer el poema mientras todos escuchan con atención. Luego, invitarlos a compartir sus comentarios sobre lo que sintieron al escuchar el poema. Finalmente, pedirles que digan cómo se imaginan a la semillita, a la lluvia y al sol.',
      'Explicar a los niños que los poemas suelen tener palabras que suenan parecido. Luego, leerles el poema enfatizando palabras como “alumbró”, “calentó” o “despertó”. Finalmente, preguntarles qué palabras parecidas identificaron.',
      'Leerles el poema acompañando la lectura con movimientos corporales. Luego, preguntarles si les gustó el poema y si quisieran aprenderlo. Finalmente, practicar con ellos cada verso hasta que logren recitar todo el poema por sí solos.'
    ],
    correctAnswer: 0 // Actualizar según corresponda
  },
  {
    id: 58,
    question:
      'Antonella, de cinco años, llega al aula con la lista que escribió para ir a comprar a la tienda. Al ver a la docente, se la muestra. Cuando la docente le pregunta qué escribió en la lista, la niña contesta: “Queso, sandía y arroz”. A continuación, se presenta el escrito de la niña: Considerando los niveles de apropiación del sistema de escritura propuestos por Emilia Ferreiro, ¿en qué nivel se encuentra Antonella?',
    options: ['Presilábico.', 'Silábico.', 'Silábico-alfabético.'],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 59,
    question:
      'Los niños del aula de cinco años han elaborado barquitos de papel periódico y ahora juegan a hacerlos flotar en un recipiente con agua. Los niños observan que, al cabo de un rato, los barquitos se remojan y se hunden. Entonces, Javier comenta: “Todos los barquitos se nos hunden muy rápido”. Lorena responde: “Sí, el papel no sirve, hay que hacerlos de otra cosa”. Los niños del grupo están de acuerdo y deciden elaborar barquitos con otros materiales que no se hundan tan rápido. En esta situación, ¿cuál de las siguientes alternativas es más pertinente para seguir favoreciendo la iniciación a la indagación científica en los niños?',
    options: [
      'Preguntar a los niños qué materiales podrían emplear para hacer barquitos que no se hundan. Luego, pedirles que busquen esos materiales en el aula, para que prueben qué ocurre cuando los ponen en el agua. Finalmente, proponerles elaborar barquitos con los materiales que comprobaron que no se hundían.',
      'Explicar a los niños que las botellas de plástico vacías no se hunden en el agua. Luego, elaborar un barquito con una botella de plástico cortada y comprobar junto con ellos que no se hunde. Finalmente, decirles que elaboren sus barquitos con ese material, pero de la forma, tamaño y color que prefieran.',
      'Colocar en una tina con agua varios objetos de diversos materiales. Luego, pedir a los niños que observen qué sucedió con cada uno de ellos al ponerlos en el agua. Finalmente, sugerirles que elaboren sus barquitos con los materiales de aquellos objetos que no se hayan hundido en la tina.'
    ],
    correctAnswer: 1 // Actualizar según corresponda
  },
  {
    id: 60,
    question:
      'En el aula de cinco años, durante la actividad "Cocinamos juntos", los niños han aprendido a preparar una receta de galletas. Han medido los ingredientes, mezclado y horneado. Al día siguiente, la docente introduce una nueva actividad: "Hagamos plastilina casera". La docente les da los ingredientes necesarios: harina, sal, agua y colorante. Antes de comenzarse produce el siguiente diálogo: Docente dice: “¿Recuerdan cómo medimos y mezclamos los ingredientes para hacer galletas?”. Niños dicen: “Sí”. Docente dice: “Muy bien, ahora usaremos esas mismas habilidades para medir y mezclar estos ingredientes para hacer plastilina. ¿Quién quiere empezar a medir la harina?”. Pablo dice: “Yo sé medir, usamos la taza medidora como ayer”. Alicia dice: “Y mezclamos con la cuchara grande, como cuando hicimos las galletas”. Docente dice: “¡Exactamente! Vamos a hacerlo así”. Los niños proceden a medir y mezclar los ingredientes para hacer plastilina, aplicando las habilidades que aprendieron al hacer las galletas el día anterior. En la situación planteada, ¿Qué está promoviendo principalmente la docente?',
    options: [
      'Recojo de saberes previos.',
      'Transferencia de los aprendizajes.',
      'Generar el conflicto cognitivo.'
    ],
    correctAnswer: 2 // Actualizar según corresponda
  }
]