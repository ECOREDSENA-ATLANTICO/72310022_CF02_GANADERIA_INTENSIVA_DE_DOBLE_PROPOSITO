<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1(data-aos="fade-right") Sistema de control de parásitos

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img01.jpg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 Todos los animales de la finca ganadera se deben desparasitar para garantizar que los bovinos gocen de un mejor aprovechamiento de los alimentos, por ello es importante que tenga en cuenta las siguientes recomendaciones:


    .mod-fondo-09
      .row.mb-5.align-items-center
        .col-lg-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6").mod-tarjetas-fondo-blanco
            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img02.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Rotación de los productos</strong>
              p.text-center.mb-0 Realice una rotación de los productos para desparasitar, recuerde que estos deben tener diferente composición química para que el animal no se vuelva resistente al medicamento.

            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img03.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Desparasitar</strong>
              p.text-center.mb-0  Desparasite a todos los animales del hato, programando la desparasitación de todos los bovinos en la misma fecha, no solo a aquellos diagnosticados con parásitos, para prevenir la propagación de infestaciones.

            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img04.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Temporada</strong>
              p.text-center.mb-0 Los terneros se pueden desparasitar cada dos o tres meses hasta que cumplan los 6 meses de edad.

            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img05.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Efectos</strong>
              p.text-center.mb-0 Desparasite en horas donde haya menos incidencia del sol porque esto puede acarrear efectos colaterales en los bovinos.

            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img06.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Zonas</strong>
              p.text-center.mb-0 Los bovinos adultos se deben desparasitar de acuerdo a la zona donde estén ubicados o después de conocer el resultado de laboratorio en el que se verifique que tienen parásitos.

            .tarjeta.p-4
              .row.justify-content-center.mb-3
                .col-6
                  img(src='@/assets/curso/temas/tema2/img07.png', alt='Imagen Decorativa')
              p.text-center.mb-0 <strong>Dosis</strong>
              p.text-center.mb-0 La dosis de desparasitante que se le aplica al bovino debe ser la recomendada por el médico veterinario.

        .col-lg-4.col-8.mx-auto.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img08.png' alt='Imagen Decorativa')


    h2.mb-5.titulo-imagen-izq.dos Sistema de control externo de garrapatas y moscas
    .mod-fondo-10
      .row.mb-5.align-items-center
        .col-lg-5.col-8.mx-auto.mb-4.mb-md-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img09.png' alt='Imagen Decorativa')
        .col-lg-7(data-aos="fade-left")
          p.mb-4 Los programas de desparasitación de garrapatas, moscas o nuches deben ir encaminados al control y no a la erradicación de los mismos.
          .cajon.color-acento-contenido.p-4.mb-4
            p.mb-0 El mecanismo más utilizado para eliminar los parásitos externos son los baños, esto se hace dependiendo del tipo de plaga o mosca; por ejemplo, si el animal tiene garrapatas especie Amblyomma se debe bañar cada 15 días, pero si las garrapatas son de tipo Boophylusmicroplus lo debe hacer una vez al mes.
          p.mb-0 Si los bovinos están infestados con nuches, se recomienda aplicar aceite negro con veneno.

      .row.mb-5.align-items-center
        .col-lg-8.mb-4.mb-lg-0(data-aos="fade-left")
          h3.mb-5.titulo-imagen-der Recomendaciones para realizar baños de animales con parásitos externos
          LineaTiempoD.mod-tabs-narver
            .row(numero="1" titulo="Maquina fumigadora")
              .col-md-12
                p.mb-0 Verifique que la máquina fumigadora con la que va aplicar el producto no tenga residuos de venenos, luego límpiela y desinféctela.

            .row(numero="2" titulo="Producto de limpieza")
              .col-md-12
                  p.mb-0 Prepare y mezcle bien la dosis recomendada del producto que va a utilizar para desparasitar.

            .row(numero="3" titulo="Baño desparasitario")
              .col-md-12
                  p.mb-0 Cuando tenga preparado el producto para desparasitar, bañe a los animales uno a uno, realizando la aspersión con la máquina de abajo hacia arriba.
        
            .row(numero="4" titulo="Verificación del producto")
              .col-md-12
                  p.mb-0 Verifique que el producto llega hasta la piel y esta queda bien mojada.

            .row(numero="5" titulo="Garrapatas")
              .col-md-12
                  p.mb-0 Al día siguiente revise si las garrapatas están muertas.

        .col-lg-4.col-8.mx-auto.mb-4.mb-lg-0(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema2/img10.png' alt='Imagen Decorativa')




</template>

<script>
export default {
  name: 'Tema2',
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
