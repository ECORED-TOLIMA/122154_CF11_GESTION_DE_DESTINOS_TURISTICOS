<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/intro/img1.svg', alt='Texto que describa la imagen')
      .col-lg-9(data-aos="fade-left")
        p Este componente formativo aborda los principios y herramientas fundamentales del #[i marketing] aplicados a la promoción de destinos turísticos. A través de estrategias digitales y tradicionales, los aprendices explorarán cómo mejorar la imagen y el posicionamiento de los destinos, diseñar eventos promocionales efectivos, y evaluar los resultados de las acciones implementadas. El enfoque se centra en la integración de tecnologías emergentes, como la inteligencia artificial, para potenciar las estrategias promocionales y optimizar el impacto en el mercado turístico. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col-lg-12(data-aos="zoom-in")
        figure
          .video
            iframe(width="1493" height="840" src="https://www.youtube.com/embed/Iiy6SnX3SIQ" title="El marketing turístico" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)

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
