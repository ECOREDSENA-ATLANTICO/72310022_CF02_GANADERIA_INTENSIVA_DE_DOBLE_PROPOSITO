<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se ofrece una visión general sobre los aspectos clave de la producción ganadera de doble propósito. Se comienza destacando la importancia de que la ganadería intensiva de doble propósito es un sistema productivo que integra la producción de carne y leche en una misma finca, lo cual optimiza los recursos disponibles. Su relevancia radica en su capacidad para incrementar la eficiencia productiva y, al mismo tiempo, garantizar la sostenibilidad del negocio. Para lograrlo, es fundamental implementar un sistema de control de parásitos, además de un plan de sanidad animal. De igual manera, la reproducción en bovinos, mediante la diferenciación sexual, facilita la selección de los mejores reproductores. Por último, la monta natural y la inseminación artificial son técnicas clave que aseguran una adecuada tasa de natalidad y mejoran los resultados productivos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
