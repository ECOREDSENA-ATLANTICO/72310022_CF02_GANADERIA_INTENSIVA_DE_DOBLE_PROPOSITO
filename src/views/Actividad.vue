<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'Reproducción en bovinos de doble propósito',
      titulo: 'Reproducción bovina de doble propósito.',
      introduccion:
        '<b> Objetivo:</b> Validar el conocimiento adquirido sobre la reproducción bovina de doble propósito en Colombia.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué caracteriza a la ganadería intensiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso extensivo de tierra.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Alta densidad de animales por área.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Producción limitada de carne y leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bajo control de sanidad animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el objetivo principal del sistema de control de parásitos en una finca ganadera?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el peso del ganado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevenir enfermedades parasitarias.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el uso de medicamentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Maximizar la producción de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el propósito de la diferenciación sexual en bovinos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Controlar la natalidad.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Seleccionar animales para reproducción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar enfermedades genéticas',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Determinar el peso ideal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: '¿Qué implica la inseminación artificial en bovinos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transferencia de embriones congelados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fecundación natural de la vaca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Uso de semen de toros seleccionados sin la presencia del toro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reproducción directa entre toro y vaca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué método reproductivo se utiliza más en la ganadería intensiva para mejorar la eficiencia productiva?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Monta natural.', esCorrecta: false },
            { id: 'b', texto: 'Inseminación artificial.', esCorrecta: true },
            {
              id: 'c',
              texto: 'Transferencia de embriones.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Reproducción in vitro', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué ventaja ofrece la ganadería intensiva en comparación con otros tipos de ganadería?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Mayor espacio por animal.', esCorrecta: false },
            { id: 'b', texto: 'Menor costo de producción.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Mayor productividad en menos espacio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Menor necesidad de alimentación especializada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué parásito es comúnmente controlado en bovinos mediante desparasitantes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ácaros', esCorrecta: false },
            { id: 'b', texto: 'Garrapatas', esCorrecta: false },
            { id: 'c', texto: 'Piojos', esCorrecta: false },
            { id: 'd', texto: 'Lombrices intestinales', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la diferencia principal entre la monta natural y la inseminación artificial?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La monta natural ocurre sin intervención humana directa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La inseminación artificial es más lenta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La monta natural es menos efectiva.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La inseminación artificial no requiere manejo del ganado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué significa que una vaca es poliéstrica?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que tiene múltiples periodos fértiles durante el año.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Que solo se reproduce una vez al año.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que necesita intervención hormonal para reproducirse.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que solo se reproduce en primavera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué método de reproducción puede aumentar la eficiencia genética del rebaño?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Monta natural.', esCorrecta: false },
            { id: 'b', texto: 'Alimentación controlada.', esCorrecta: false },
            { id: 'c', texto: 'Inseminación artificial.', esCorrecta: true },
            { id: 'd', texto: 'Uso de vacunas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
