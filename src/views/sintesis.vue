<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente formativo aborda los conceptos fundamentales de la promoción como una herramienta esencial del #[I marketing] en el sector turístico. Se exploran las diversas estrategias, medios y recursos utilizados para ejecutar acciones promocionales dirigidas a productos, servicios y destinos turísticos. También se destaca la relevancia del #[i marketing] digital y el aprovechamiento de tecnologías actuales para fortalecer la visibilidad y el alcance de las campañas. Asimismo, se desarrollan los elementos clave para la planificación y ejecución de eventos promocionales como mecanismos de comunicación, promoción y posicionamiento de destinos. Finalmente, se incluyen los conceptos, instrumentos e indicadores necesarios para evaluar y hacer seguimiento a los resultados obtenidos, asegurando la efectividad de las acciones promocionales implementadas.
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis del componente formativo se abordan las estrategias y herramientas de promoción en el sector turismo, la planificación de eventos, la gestión de recursos y comités, y la evaluación de resultados con instrumentos e indicadores clave.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
