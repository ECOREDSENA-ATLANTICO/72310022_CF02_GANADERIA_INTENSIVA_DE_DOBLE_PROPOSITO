<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La reproducción de bovinos de doble propósito requiere un enfoque integral que incluya el control de parásitos, un plan de sanidad animal adecuado y una gestión eficiente de la reproducción, abarcando tanto la monta natural como la inseminación artificial y la diferenciación sexual en los animales. Bienvenido a este componente formativo:

    .row.mb-5
      img(src='@/assets/curso/temas/introduccion/img01.jpg' alt='Imagen Decorativa')

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 En esta actividad de aprendizaje se abordan aspectos generales de la reproducción de bovinos de doble propósito, la cual es fundamental para optimizar tanto la producción de leche como de carne. Sus ventajas incluyen un mayor rendimiento económico y la mejora genética del hato. Estrategias como el control sanitario, la inseminación artificial y la monta natural controlada permiten maximizar la eficiencia reproductiva, reducir enfermedades y mejorar la calidad del ganado.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
