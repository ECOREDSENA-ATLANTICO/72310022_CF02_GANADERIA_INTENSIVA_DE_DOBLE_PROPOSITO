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
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Producción limitada de carne y leche.',
              esCorrecta: true,
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
              texto: 'Prevenir enfermedades parasitarias.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir el uso de medicamentos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Maximizar la producción de leche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Prevenir enfermedades parasitarias.',
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
              texto: 'Mayor variabilidad genética.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Menor costo de implementación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción de enfermedades de transmisión sexual',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mayor tasa de partos múltiples',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es el tiempo ideal para inseminar a una vaca luego del inicio del celo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Entre 1 y 3 horas.', esCorrecta: false },
            { id: 'b', texto: 'Entre 12 y 24 horas.', esCorrecta: false },
            { id: 'c', texto: 'Entre 36 y 48 horas.', esCorrecta: true },
            { id: 'd', texto: 'Entre 48 y 72 horas.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el objetivo principal de un plan de sanidad animal en una finca?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción de leche.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Garantizar el bienestar y la salud del ganado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Mejorar la calidad de la carne.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Facilitar el ordeño.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué tipo de vacuna es común en un plan de sanidad para ganado bovino?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Antirrábica.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Contra el virus del mosaico.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Contra la sarna.', esCorrecta: false },
            { id: 'd', texto: 'Para el moquillo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una enfermedad que debe controlarse en un plan sanitario de bovinos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resfriado común.', esCorrecta: false },
            { id: 'b', texto: 'Brucelosis.', esCorrecta: true },
            { id: 'c', texto: 'Gripe bovina.', esCorrecta: false },
            { id: 'd', texto: 'Anemia bovina.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué es el ciclo estral en bovinos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'El período de gestación.', esCorrecta: false },
            {
              id: 'b',
              texto: 'La fase de crecimiento del ternero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La serie de cambios hormonales que ocurre regularmente en hembras.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'La producción de leche.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Cuál es el principal indicador de celo en las vacas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Disminución de apetito.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Levantarse y moverse constantemente.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Montarse sobre otras vacas.', esCorrecta: true },
            {
              id: 'd',
              texto: 'Cambios de color en el pelaje.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Con qué frecuencia se recomienda desparasitar a los bovinos?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Anualmente.', esCorrecta: false },
            { id: 'b', texto: 'Cada seis meses.', esCorrecta: false },
            { id: 'c', texto: 'Mensualmente.', esCorrecta: false },
            { id: 'd', texto: 'Cada tres meses.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Qué técnica se usa para diagnosticar el embarazo en vacas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ecografía.', esCorrecta: true },
            { id: 'b', texto: 'Radiografía.', esCorrecta: false },
            { id: 'c', texto: 'Examen de sangre.', esCorrecta: false },
            { id: 'd', texto: 'Prueba de leche.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué instrumento es esencial en la inseminación artificial para depositar el semen en la vaca?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ecógrafo.', esCorrecta: false },
            { id: 'b', texto: 'Termómetro rectal.', esCorrecta: false },
            { id: 'c', texto: 'Pistola de inseminación.', esCorrecta: true },
            { id: 'd', texto: 'Microscopio.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Cuál es la función de un desparasitante en el ganado bovino?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Incrementar el peso.', esCorrecta: false },
            { id: 'b', texto: 'Reducir el estrés.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Eliminar parásitos internos y externos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Mejorar la producción de leche.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué medida es parte de un plan de bioseguridad en una finca?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de pastos nuevos.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Control de acceso de visitantes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Inseminación artificial.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Entrenamiento de los trabajadores.',
              esCorrecta: false,
            },
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
