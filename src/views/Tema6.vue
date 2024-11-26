<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1(data-aos="fade-right") Monta natural e inseminación artificial
    
    .mod-fondo-15
      img.tarjeta.mb-5(data-aos="fade-up")(src='@/assets/curso/temas/tema6/img01.jpg', alt='Imagen Decorativa')

      p.mb-5.text-center
        strong Los toros pueden ser usados en la monta natural de dos maneras

      .tarjeta--container.row
        .col-md.tarjeta.p-4.mod-color-naranja.mb-4.mb-md-5.p-md-5(data-aos="fade-left")
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen Decorativa')
            
          h2.text-center Mota libre
          p.text-center Como su nombre lo indica se realiza de manera espontánea, donde la detección del calor se lleva a cabo por el toro y las vacas son montadas varias veces en cada periodo, un solo toro puede montar de 40 a 50 hembras en calor por año; pero si no hay una marcada estacionalidad de los calores en los sistemas ganaderos grandes, los toros se deben rotar porque a veces resulta muy complicado tener dos o más toros en el mismo lugar porque estos tienen un comportamiento agresivo.

        .col-md.tarjeta.p-4.mod-color-verde-claro.mb-4.mb-md-5.p-md-5(data-aos="fade-right")
          .row.justify-content-center.mb-4
            .col-5
              figure
                img(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')
            
          h2.text-center Monta controlada
          p.text-center En este tipo de monta la detección del celo es realizado y programada por el ganadero; consiste en que cada hembra será servida de una a dos veces en cada periodo de calor y el toro se utilizará para montar de tres a cuatro hembras por semana con un promedio de 150 a 200 vacas por año.


    h2.mb-5.titulo-imagen-izq.doce Inseminación artificial

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente(data-aos="fade-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img03.jpg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 Esta tecnología es muy importante para los sistemas de producción de ganado en climas templados y tropicales, ya que es un programa productivo que se debe planear desde el principio hasta el fin y sustituye a la monta natural. En la inseminación artificial la eyaculación de un toro se puede usar para servir de 400 a 500 vacas.

    h2.mb-3.titulo-flecha-izq Ventajas de la inseminación artificial
    .row.mb-5.mod-lista-flecha
      .col-12.col-lg-7(data-aos="fade-left")
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Se utilizan toros probados porque ayudan a mejorar la genética del hato.
          li 
            i.lista-ul__vineta
            | Hay control de las enfermedades de trasmisión sexual que son contagiosas.
          li 
            i.lista-ul__vineta
            | El productor economiza costos pues no tiene que criar al toro en la finca.
          li 
            i.lista-ul__vineta
            | La inversión es menor cuando se utiliza inseminación artificial.
          li 
            i.lista-ul__vineta
            | Se puede almacenar el semen de varios toros por periodos prolongados.
          li 
            i.lista-ul__vineta
            | La inseminación artificial ayuda a mejorar la producción.

      .col-8.col-lg-5.col-8.mx-auto(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/img04.png', alt='Imagen Decorativa')
    .mod-fondo-14
      .position-relative
        h2.mb-3.titulo-flecha-izq Recomendaciones para implementar un plan de inseminación artificial
        p.mb-5 En la inseminación artificial no se debe improvisar porque se puede fracasar en la producción bovina al no tener conocimientos acerca del tema, por lo cual se recomienda para empezar a utilizar esta metodología que haya un conocimiento previo y que tenga una buena planeación con miras en mejorar la calidad genética del hato y la productividad.
        
        .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Para implementar de manera exitosa un programa de inseminación artificial en la finca, se debe verificar lo siguiente:
      
      .row.mb-5
          .col-lg-4.col-8.mx-auto.mb-4.mb-lg-0(data-aos="fade-left")
            img(src='@/assets/curso/temas/tema6/img05.png' alt='Imagen Decorativa')
          .col-lg-8(data-aos="fade-right")
            SlyderF(columnas="col-lg-6").mod-tarjetas-fondo-blanco
              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img06.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Identificación precisa de los animales.

              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img07.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Conocimiento de los recursos naturales con los que cuenta el predio.

              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img08.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Manejo sostenible del suelo.


              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img09.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Buenos sistemas para el establecimiento, manejo y aprovechamiento de las praderas.

              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img10.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Planes	adecuados de manejo sanitario, bienestar animal, reproductivo, alimentario y administrativo.

              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img11.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Implementar programas de suplementación para bovinos.
              
              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img12.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 La finca debe tener una buena gestión empresarial.
              
              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img13.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Debe existir una buena infraestructura y disponer de un lugar adecuado para la inseminación.
              
              .tarjeta.p-4
                .row.justify-content-center.mb-3
                  .col-6
                    img(src='@/assets/curso/temas/tema6/img14.svg', alt='Imagen Decorativa')
                p.text-center.mb-0 Contar con el equipo necesario y el personal capacitado para la ejecución, evaluación y sostenimiento del programa.
        
      
   
    .row.mb-5.position-relative
      .col-md-12.col-lg-8(data-aos="fade-left")
        h2.mb-3.titulo-flecha-izq Periodos de inseminación
        p.mb-2 Lo primero que se debe hacer para realizar una inseminación es identificar el ciclo estral de las hembras y las manifestaciones de éstas a través del comportamiento y los cambios externos en la anatomía y fisiología de los órganos reproductores, para así determinar exactamente cuándo una hembra está en celo y se puede proceder a realizar la inseminación artificial; de dicho proceso depende el éxito o el fracaso del programa.
        p.mb-4 Es muy común que en las fincas ganaderas se tenga establecido que la hembra que presenta su calor en horas de la mañana se le sirve en horas de la tarde y las hembras que manifiestan el calor en la tarde se inseminen en la mañana siguiente.
      .col-md-6.col-lg-4.mx-auto.mb-4.mb-lg-0(data-aos="fade-right")
        img.img-t.mx-auto(src='@/assets/curso/temas/tema6/img15.png' alt='Imagen Decorativa')
      
    .mb-5.col-10.col-lg-8.mx-auto(data-aos="fade-up")
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Figura 3.
        span Periodos de inseminación
      img(src='@/assets/curso/temas/tema6/img16.svg' alt='Imagen Decorativa').mb-4
      figcaption Nota. SENA
    
    .mod-fondo-15
      .row.pb-5
        .col-md-4.col-8.mx-auto.mb-4.mb-lg-0(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema6/img17.png' alt='Imagen Decorativa')
        .col-lg-8(data-aos="fade-right")
          .cajon.color-acento-contenido.p-4.mb-3
            p.mb-0 Esto se maneja así porque esos horarios coinciden con el momento de la ovulación y el periodo en el cual los espermatozoides son capaces de realizar la fertilización. Las hembras que manifiestan celo al mediodía deben ser inseminadas preferiblemente en la tarde o al anochecer.
          
          p.mb-4 Se debe evitar inseminar a hembras que presenten secreciones purulentas.
          h2.mb-3.titulo-flecha-izq Inseminador
          p.mb-4 La persona que realiza el proceso de inseminación debe estar capacitada y ser consciente que de él depende la productividad del hato ganadero, por tal razón, debe ser responsable y desempeñar su labor de forma ética; además es conveniente que realice esta tarea con agilidad y de la mejor manera para así tener éxito en la inseminación.
          
        
</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
