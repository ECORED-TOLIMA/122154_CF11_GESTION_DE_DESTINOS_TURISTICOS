<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Promoción turística
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img1.png', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        p El concepto de promoción como una variable fundamental del marketing permite comprender su origen, sus elementos clave y su aplicación en el sector turístico. La promoción es una de las cuatro variables del mix marketing, que debe combinarse eficazmente para ejecutar acciones que comuniquen productos y servicios a un mercado objetivo.
        .cajon.color-secundario.p-4.mb-4
          p Los clientes, con diversas necesidades, buscan satisfacerlas mediante productos y servicios, y sus decisiones de compra están influenciadas por la información que obtienen a través de distintos medios. Los servicios turísticos no escapan a este proceso de difusión y conocimiento, dado que los destinos deben satisfacer las demandas de ocio, recreación y aprovechamiento del tiempo libre de los turistas.
      p.mb-4 En términos simples, la comunicación se entiende como el proceso mediante el cual se intercambian ideas, opiniones o información mediante la expresión verbal, escrita, señales u otros medios. Desde una perspectiva técnica, la comunicación implica la transmisión de un mensaje desde un punto A hacia un punto B, distantes en espacio o tiempo. Este proceso involucra varios elementos fundamentales:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-6(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Emisor") La persona o empresa que inicia el proceso de comunicación. En marketing, el emisor es el vendedor u oferente de un producto o servicio. Este debe garantizar que el mensaje sea claro, atractivo, adecuado al receptor y entregado en el momento oportuno.
          p.text-small(numero="2" titulo="Receptor") El destinatario del mensaje. En marketing, el receptor es el cliente, cuya actitud de apertura y receptividad es esencial para que la comunicación sea eficaz.
          p.text-small(numero="3" titulo="Contenido") El mensaje que se transmite, generalmente relacionado con productos y servicios.
          p.text-small(numero="4" titulo="Código") El lenguaje o símbolos utilizados para transmitir la información.
          p.text-small(numero="5" titulo="Canal") de El medio a través del cual se transmite el mensaje (por ejemplo, medios digitales, impresos, etc.).
          p.text-small(numero="6" titulo="Feedback (retroalimentación)") La respuesta del receptor, que indica si el mensaje fue recibido correctamente y si la comunicación ha sido efectiva.
          
      .col-lg-4(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/tema1/img2.svg', alt='Texto que describa la imagen')
    p.mb-4 El proceso de comunicación se compone de ocho pasos esenciales:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img3_1.svg', alt='Texto que describa la imagen')
          
      .col-lg-10.desktop(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')
              
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="50%" y="22.5%" numero="+")
            p Reflexión sobre el mensaje y la intención que se desea transmitir.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="60.7%" y="30.5%" numero="+")
            P La conversión del mensaje en un formato común y comprensible para emisor y receptor.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="65%" y="49.7%" numero="+")
            P Elección del canal adecuado para la transmisión del mensaje.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="60.7%" y="69.5%" numero="+")
            P El receptor recibe el mensaje a través del canal seleccionado, utilizando sus sentidos.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="50%" y="77.5%" numero="+")
            P El receptor interpreta el mensaje recibido.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="39.5%" y="30.5%" numero="+")
            P Respuesta del receptor que cierra el ciclo de comunicación y permite aclaraciones si es necesario.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="35.3%" y="49.7%" numero="+")
            P Acción tomada por el receptor basándose en el mensaje recibido.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="39.5%" y="69.5%" numero="+")
            P El receptor decide si acepta o rechaza el mensaje.
    P La comunicación efectiva depende de un ambiente de confianza y seguridad, lo que asegura que el mensaje sea comprendido y aceptado. Los avances tecnológicos han transformado el proceso de comunicación, con la digitalización y el uso de Internet como medios principales. Esta evolución ha influido en la manera en que los consumidores reciben e intercambian información, lo que obliga a la promoción turística a adaptarse a estas nuevas tendencias y utilizar las estrategias de comunicación más adecuadas para llegar al público de forma efectiva y alineada con sus expectativas actuales.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Componentes de la promoción turística
    p.mb-4 Para diseñar estrategias de promoción efectivas que den a conocer un servicio turístico, es fundamental comprender los siguientes aspectos previos a la selección de las estrategias dentro de un plan de promoción:
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Mercado segmentado")
            .col-md-12.mb-md-0
              p El mercado turístico se caracteriza por ser altamente segmentado, lo que implica que está compuesto por grupos más pequeños de clientes con gustos, preferencias, necesidades y hábitos de consumo específicos. Estos grupos, al ser más especializados, no se ajustan al mercado masivo. Por lo tanto, surgen nichos de mercado con turistas que viajan a destinos específicos debido a actividades y atractivos únicos. Debido a esta segmentación, las herramientas de promoción deben ser más personalizadas e individuales, enfocándose en aquellos que realmente se interesan por el mensaje. Para ello, es crucial conocer las características de la audiencia, como los siguientes aspectos:
              .tarjeta--BG03
                .p-4
                  ul.lista-ul--color
                    li
                      i.fas.fa-circle
                      | #[b Demográficos]: edad, género, religión, raza, etc.
                    li
                      i.fas.fa-circle
                      | #[b Geográficos]: lugar de residencia, como país, ciudad, barrio, etc.
                    li
                      i.fas.fa-circle
                      | #[b Socioeconómicos]: ocupación, nivel de ingresos, profesión, entre otros.
                    li
                      i.fas.fa-circle
                      | #[b Psicográficos o conductuales]: gustos, comportamientos, estilos de vida, personalidad, hábitos de consumo, etc.

                figure
                  img(src='@/assets/curso/temas/tema1/img4.png', alt="Imagen decorativa")
          .row(titulo="Características de los servicios turísticos")
            .col-md-12.mb-md-0
              p Los servicios turísticos, al ser productos intangibles, presentan diferencias significativas con los productos tangibles. Por tanto, al elegir estrategias promocionales, es esencial considerar los siguientes aspectos:
              .tarjeta--BG03
                .p-4
                  ul.lista-ul--color
                    li
                      i.fas.fa-circle
                      | #[b Intangibilidad]: los servicios turísticos no tienen forma física y no pueden ser percibidos por los sentidos. En cambio, representan emociones, experiencias y sentimientos, lo que hace necesario resaltar la calidad de la experiencia en las estrategias promocionales.
                    li
                      i.fas.fa-circle
                      | #[b Heterogeneidad]: los servicios varían porque son proporcionados por personas y diseñados para satisfacer las necesidades de diferentes consumidores. Esto significa que, aunque el servicio sea el mismo, cada experiencia será única y personalizada.
                    li
                      i.fas.fa-circle
                      | #[b Inseparabilidad]: la producción, compra y consumo de los servicios ocurren simultáneamente. Por ejemplo, un servicio de restaurante se produce y se consume al mismo tiempo, lo que influye en la promoción y la comunicación del servicio.
                    li
                      i.fas.fa-circle
                      | #[b Caducidad (perecedero)]: a diferencia de los productos tangibles, los servicios no se transfieren como propiedad. Caducan en el momento de su consumo, como en el caso de un recorrido turístico o una comida en un restaurante.

                figure
                  img(src='@/assets/curso/temas/tema1/img5.png', alt="Imagen decorativa")
          .row(titulo="Uso de Tecnologías de la Información y Comunicación (TIC)")
            .col-md-12.mb-md-0
              p Hoy en día, la promoción turística incorpora un alto componente de tecnologías de la información y la comunicación, impulsado por los avances tecnológicos. La evolución de la tecnología ha transformado la manera de comunicarse, pasando de los medios tradicionales a los digitales. Plataformas en línea, correos electrónicos, teléfonos móviles, videos y podcasts permiten llegar de manera más directa y personalizada a grupos específicos de clientes. Esto permite que los consumidores elijan lo que realmente desean consumir, en lugar de recibir lo que se les impone, adaptándose así a sus preferencias y necesidades.
                figure
                  img(src='@/assets/curso/temas/tema1/img6.png', alt="Imagen decorativa")
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2	Estrategias de promoción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img7.svg', alt='Texto que describa la imagen')
      .col-lg-7(data-aos="fade-left")
        .cajon.color-primario.p-4.mb-4
          p Para abordar las estrategias de promoción, es fundamental entender su origen y concepto, los cuales provienen de la ciencia administrativa aplicada al marketing y la promoción turística.
        p La disciplina administrativa ofrece herramientas para dirigir los esfuerzos organizacionales y así atraer a nuevos clientes. A través del marketing, se coordinan diversas actividades, incluidas aquellas que promocionan y dan a conocer productos y servicios turísticos. La administración de marketing es un proceso que planea, organiza, dirige y controla los esfuerzos para lograr el intercambio de bienes y servicios con los mercados objetivo de una empresa.
    p.mb-4 La administración de marketing se considera un proceso integral para analizar oportunidades de negocio, definir objetivos concretos y formular estrategias que forman parte de un plan estructurado. Este plan permite ejecutar y controlar las actividades comerciales. La planificación de marketing comienza con la elaboración de un plan de marketing, que detalla qué se hará, cuándo, cómo y quién será responsable de llevarlo a cabo. Las ventajas de la planificación incluyen:  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img8_1.svg', alt='Texto que describa la imagen')
          
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')
    p.mb-4 La planificación de marketing establece los objetivos mediante un cuidadoso análisis y determina las acciones necesarias para alcanzarlos. Las estrategias, como las de promoción, son cruciales para cumplir con los objetivos establecidos, lo que crea una relación entre los medios y los fines. Este proceso sistemático permite evaluar los recursos disponibles en la empresa, fijar objetivos, formular estrategias y elaborar un plan de marketing que se ponga en práctica y controle adecuadamente. Este plan se convierte en un documento detallado que especifica las estrategias y actividades a realizar para lograr los objetivos.
    p.mb-4 Los planes de marketing y promoción deben identificar los resultados esperados, anticipando la situación futura al finalizar el plan. También detallan los recursos necesarios para implementar las actividades estratégicas y asignan responsabilidades, con un presupuesto correspondiente. Es esencial que estos planes sean monitoreados mediante un adecuado control y seguimiento para evaluar el éxito o los resultados obtenidos.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img9.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La evolución de la planificación ha permitido el desarrollo del concepto de planificación estratégica, que se refiere al proceso de crear y mantener una congruencia estratégica entre las metas y capacidades de la organización y sus oportunidades de marketing cambiantes (Kotler, 2012). Los beneficios de la planificación estratégica ofrecen opciones de actuación que generan alternativas para posicionar productos y servicios, a partir de un análisis exhaustivo dentro de la organización y su entorno. No obstante, estos beneficios serán mínimos si no se ejecuta lo planeado, teniendo siempre en cuenta la adaptación al sector en el que la empresa opera y los constantes cambios en el entorno.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        p Al considerar la planificación estratégica como un proceso, se deben contemplar tres etapas clave, de las cuales se derivan las estrategias de marketing, incluidas las de promoción, que son aplicables al posicionamiento de destinos turísticos:
    
    .tarjeta--BG04.p-4.mb-5
      PasosB.color-acento-contenido.tarjeta.tarjeta--BG03.p-4
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 1. Análisis de la situación
            p En esta fase, se estudian cuidadosamente los aspectos internos y externos del producto o servicio, así como el funcionamiento del sistema turístico y el producto turístico en el destino. El diagnóstico obtenido permite establecer la situación actual del sector turístico, lo que facilita la toma de decisiones estratégicas basadas en la información recabada.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Texto que describa la imagen')
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 2. Preparación
            p Aquí se establecen los objetivos del plan de marketing, basados en el diagnóstico realizado. Los objetivos deben ser alcanzables, cuantificables y realistas, con el fin de lograr un posicionamiento efectivo en el mercado, innovación, imagen, prestigio y crecimiento del destino turístico.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')
        .row(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Etapa 3. Operación
            p En esta etapa se desarrollan estrategias y tácticas que componen los planes de acción para alcanzar los objetivos establecidos. Las estrategias marcan los caminos necesarios para cumplir las metas, y las decisiones tomadas son cruciales para su éxito.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p Para dar cumplimiento de logros, se hace necesario la claridad de las acciones universales que permiten coordinar el conjunto de actividades que se presentan en los grupos, colectivos o empresas que impactan en las diferentes posiciones de los miembros, denominados puestos o cargo o en su defecto, involucrado directo de la acción. Es aquí, en donde se habla de las funciones de la administración para la puesta en marcha de estrategias de acción: 
    SlyderF.mb-4(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img14.svg' alt='AvatarTop')
        h5.text-center Estrategias de integración
        p.text-center Buscan integrar a los proveedores de insumos y distribuidores, mejorando la oferta y la competitividad del producto. En el turismo, la integración de los prestadores de servicios turísticos es clave para fortalecer la oferta del destino.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img15.svg' alt='AvatarTop')
        h5.text-center Estrategias intensivas
        p.text-center  Incluyen la penetración en el mercado, el desarrollo de mercados y productos. Estas estrategias buscan mejorar el posicionamiento de los productos mediante la promoción y comunicación efectiva, utilizando herramientas de publicidad, marketing directo y participación en eventos.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img16.svg' alt='AvatarTop')
        h5.text-center Estrategias de diversificación
        p.text-center  Implican la incursión en nuevos negocios o productos, ampliando la oferta del mercado. En el turismo, esto se traduce en la diversificación de tipos de turismo (cultural, naturaleza, salud, etc.) para atraer diferentes segmentos de turistas.
      .tarjeta.tarjeta--BG02.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema1/img13.svg' alt='AvatarTop')
        h5.text-center Estrategia de segmentación del mercado
        p.text-center Consiste en identificar segmentos específicos del mercado con características particulares, a quienes se dirigen las estrategias promocionales adaptadas a sus necesidades y preferencias.
    p.mb-4 Para complementar las estrategias generales de marketing, las estrategias específicas de promoción se enfocan en tácticas directas que buscan atraer a los turistas de manera inmediata, incrementando la visibilidad del destino y sus productos turísticos. Estas estrategias se orientan a la comunicación efectiva con los segmentos de mercado identificados, utilizando herramientas y métodos que permitan generar un impacto directo y positivo en los potenciales visitantes, con el objetivo de incrementar la demanda y el interés en el destino, como se presenta a continuación:


    .tarjeta.tarjeta--BG05.p-4.mb-4
      SlyderA(tipo="b" data-aos="zoom-in")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            h4  A.	Estrategias para informar sobre productos
            p.mb-0 Utilizan publicidad, marketing directo y eventos para dar a conocer los productos y servicios turísticos, informando al mercado sobre su existencia, características y beneficios.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img17.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            h4  B.	Estrategias para persuadir la compra
            p.mb-0 Se utilizan incentivos como promociones o descuentos para motivar la compra. Aunque en la gestión de destinos turísticos esta estrategia es más común en empresas de servicios turísticos individuales, sigue siendo relevante en algunos casos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img18.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            h4  C.	Estrategias para generar recordación
            p.mb-0 Buscan que los turistas recuerden y posicionen los destinos a través de la publicidad, relaciones públicas, marketing digital y participación en eventos, creando una memoria de la experiencia ofrecida.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img19.png' alt="Imagen decorativa")
        .row.justify-content-center
          .col-lg-5.order-lg-1.order-2
            h4  D.	Estrategias de acuerdo con las herramientas de promoción existentes
            p.mb-0 Utilizan publicidad, marketing directo y eventos para dar a conocer los productos y servicios turísticos, informando al mercado sobre su existencia, características y beneficios.
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Estrategias de publicidad.
              li
                i.fas.fa-angle-right
                | Estrategias de promoción de ventas.
              li
                i.fas.fa-angle-right
                | Estrategias de venta personal.
              li
                i.fas.fa-angle-right
                | Estrategia de relaciones públicas.
              li
                i.fas.fa-angle-right
                | Estrategia de marketing directo o digital.
              li
                i.fas.fa-angle-right
                | Estrategia de eventos, ferias y exposiciones.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/temas/tema1/img20.png' alt="Imagen decorativa")
    P Es importante señalar que las estrategias de promoción de ventas y de venta personal tienen menos aplicación en la gestión de destinos turísticos, ya que están más orientadas a las empresas individuales. Sin embargo, las demás estrategias tienen una mayor aplicación y serán detalladas más adelante en este componente formativo.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3	Imagen y marca en la promoción turística
    p.mb-4 Cuando se piensa en empresas que han permanecido mucho tiempo en el mercado, como Coca-Cola, Apple Inc. o Disney (esta última como destino turístico mundial), las cuales siguen posicionadas en la mente de las personas, se puede afirmar que el poder de una imagen y una marca es un elemento diferenciador clave. Esta fortaleza ha permitido a estas empresas consolidarse como un aspecto central en sus estrategias de marketing y promoción de productos y servicios.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-md-6.col-sm-8.mb-4(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img21.png', alt='Texto que describa la imagen')
      .col-lg-6(data-aos="fade-left")
        p Es importante comprender que el objetivo no es solo vender productos, sino mucho más que eso. Se trata de contar una historia que permita llegar a la mente de las personas y permanecer en ella. La marca es una promesa que debe permitir no solo que los consumidores elijan el producto o servicio por encima de los demás competidores en el mercado, sino también que lo perciban como el único capaz de satisfacer sus necesidades y expectativas.
        .cajon.color-primario.p-4.mb-4
          p Hoy en día, cuando la competencia es alta y feroz, la diferencia se crea a través de imágenes, símbolos y marcas, las cuales deben transmitir un concepto único y diferenciador que convierta a la marca en algo imposible de olvidar.
    p Cualquier estrategia de promoción debe estar respaldada por un diseño de imagen que forme parte de la marca, un concepto que en el marketing se conoce como branding. Este proceso implica el desarrollo y difusión de una marca mediante una serie de elementos y acciones de comunicación y promoción estratégicamente pensadas. A continuación, se detallan algunas características clave que una marca o “brand” debe cumplir:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil
        figure
          img(src='@/assets/curso/temas/tema1/img22_1.svg', alt='Texto que describa la imagen')
      .col-lg-10.desktop
        figure
          img(src='@/assets/curso/temas/tema1/img22.svg', alt='Texto que describa la imagen')
    p.mb-4 El objetivo de la promoción en marketing es lograr que las personas conozcan, acepten y confíen en los productos y servicios ofrecidos en un destino turístico. Una de las mejores formas de dar a conocer estos productos es mediante el diseño de una marca que defina cómo se quiere presentar el destino ante los turistas potenciales, especialmente dentro del segmento o nicho de mercado al cual se desea llegar.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 Nombre, término, diseño, símbolo o alguna otra característica que identifique el bien o servicio de un vendedor y lo diferencie de otros vendedores.
            i.fas.fa-quote-right
            br
            p.text-small - Diccionario de la American Marketing Association.
      .col-lg-5.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 Distintivo o señal que el fabricante pone a los productos de su industria, y cuyo uso le pertenece exclusivamente.
            i.fas.fa-quote-right
            br
            p.text-small - Real Academia Española.
      .col-lg-8.mb-5.mb-lg-0
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h5.mb-0 Todo signo susceptible de representación gráfica que sirva para distinguir en el mercado los productos y servicios de una empresa frente a otras.
            i.fas.fa-quote-right
            br
            p.text-small - Oficina Española de Patentes y Marcas.
    p.mb-4 El branding es el proceso de desarrollo y difusión de una marca mediante elementos y acciones estratégicas de comunicación y promoción. En resumen, consiste en definir los elementos que conforman la marca, alinearlos con el producto o servicio al cual pertenecen y comunicarlos de manera efectiva a los públicos o mercados objetivos.
    p.mb-4 Los componentes clave de una marca son el logotipo, el nombre y el eslogan. La combinación de estos elementos hace que la marca sea un factor fundamental para promocionar y comunicar la promesa de valor de un producto o servicio, y, por supuesto, de un destino turístico.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img23.svg', alt='Texto que describa la imagen')

      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.color-acento-botones--borde.p-4(titulo="El logotipo")
            p Es la representación gráfica de la marca, cuyo diseño debe ser simple, versátil y memorable. A través de una construcción adecuada, el logotipo puede convertirse en un símbolo icónico e inolvidable. La recordación, versatilidad y simplicidad son cualidades fundamentales para crear una imagen eficaz en una estrategia de branding de cualquier destino turístico.
          .tarjeta.color-acento-botones--borde.p-4(titulo="El naming")
            p Es la palabra o conjunto de palabras que identifican, definen y diferencian la marca del resto de productos en el mercado. Existen modelos sintácticos que deben estar presentes en todo nombre de marca, tales como descriptivo, neologismo, abstracto, sugerente, evocativo y asociativo.
          .tarjeta.color-acento-botones--borde.p-4(titulo="El slogan")
            p Es una frase breve que busca facilitar la rápida identificación y memorización de la marca por parte de los consumidores. Define o resalta lo que la marca ofrece, incrementando su impacto en las acciones de promoción y comunicación.
          .tarjeta.color-acento-botones--borde.p-4(titulo="La imagen")
            p Es la cara visible de la marca, representada principalmente en el logotipo. Acompañada del nombre, forma parte de la identidad visual que busca representar los valores del producto o servicio a través de diversos elementos, tanto físicos como digitales. Empresas como Coca-Cola o Apple han desarrollado identidades visuales coherentes y consistentes en el tiempo que facilitan la asociación instantánea de sus marcas con los consumidores.
    p.mb-4 Siguiendo estos principios, un destino turístico puede promocionarse a través del diseño de una imagen y marca asociada, como lo ejemplifica Colombia con su slogan “Colombia, el país de la belleza”. Este tipo de branding ayuda a que el destino se distinga y quede grabado en la mente de los turistas potenciales.
    .titulo-sexto.color-acento-contenido.offset-1(data-aos="zoom-in")
        h5 Figura 1.
        span  #[i Ejemplo de branding ]
    
    .row.justify-content-center.mb-4
      .col-md-10(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img24.png', alt='En la figura 1 se presenta un logo de Colombia con su eslogan “Colombia el país de la belleza”, destacando su identidad visual y el mensaje que transmite sobre la diversidad y atractivo del destino turístico.')
        figcaption Nota. Tomado de FONATUR, 2024.
        
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4	Elaboración del mensaje interpretativo
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        p La elaboración del mensaje interpretativo dentro del marketing turístico se basa en un proceso de comunicación diseñado para transmitir de manera efectiva los atractivos y el patrimonio de un destino. Este proceso involucra varios pasos esenciales, que se complementan con elementos sobre interpretación, comunicación y la aplicación de técnicas específicas para lograr una comunicación exitosa con los turistas.
        p De manera general, interpretar significa comprender un mensaje transmitido a través de un lenguaje, utilizando un medio o canal adecuado. El mensaje interpretativo es un proceso que permite al receptor entender la información transmitida por el emisor, siguiendo los principios de la comunicación. Las técnicas interpretativas aplicadas en el contexto turístico incluyen diversas estrategias para atraer la atención de los turistas, como invitaciones a participar en actividades, estimulación sensorial, generación de emociones y uso de analogías y comparaciones. Estas estrategias mejoran la efectividad del mensaje y garantizan una experiencia gratificante y memorable para el visitante.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema1/img25.svg', alt='Texto que describa la imagen')

    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img26.png')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 El proceso de elaboración de un mensaje interpretativo comienza con la identificación de los contenidos y conceptos clave que se desean transmitir. Este paso es esencial para definir claramente los objetivos del mensaje, que deben estar alineados con una actitud o respuesta deseada por parte del receptor. A continuación, el mensaje debe ser estructurado de manera que se utilicen diferentes técnicas de interpretación para facilitar la comprensión y aumentar la efectividad del mensaje.
    p.mb-4 Un mensaje interpretativo debe cumplir con varias características clave, las cuales aseguran su efectividad:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10.movil(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/tema1/img27_1.svg', alt='Texto que describa la imagen')
          
      .col-lg-10.desktop(data-aos="zoom-in")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img27.svg', alt='Texto que describa la imagen')              
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="23%" y="9%" numero="+")
            p Asegurar que el mensaje pueda ser traducido a otros idiomas si es necesario.              
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="48%" y="9%" numero="+")
            p Emplear un lenguaje sencillo y libre de tecnicismos.              
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="74%" y="9%" numero="+")
            p  Incorporar el humor de manera apropiada para hacer el mensaje más atractivo.             
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="38%" y="91%" numero="+")
            p Utilizar un tono amable y acorde al perfil del receptor.
           
          .tarjeta.color-primario.tarjeta--BG03.p-3(x="62%" y="91%" numero="+")
            p Incluir metáforas, comparaciones, anécdotas, ejemplos y analogías para enriquecer la comunicación.

          .tarjeta.color-primario.tarjeta--BG03.p-3(x="91%" y="91%" numero="+")
            p Fomentar la interacción sensorial para mejorar la percepción del contenido.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Además, es fundamental organizar el mensaje interpretativo de manera coherente. Esto implica estructurar el tema central de forma lógica y asegurarse de que sea relevante para el receptor. El mensaje debe ser presentado de manera amena y agradable, lo que facilita su comprensión y memorización.
    p Para la elaboración de un mensaje interpretativo eficaz, es crucial conocer a fondo al público al que se dirige. Esto implica investigar quién es el visitante del destino, comprender las motivaciones de su viaje, las características demográficas, socioeconómicas y los intereses específicos. Esta información permite personalizar el mensaje y hacer que resuene con el tipo de turista al que se desea atraer. 
    p La aplicación principal de los mensajes interpretativos en la promoción turística se centra en la presentación de los atractivos y el patrimonio de los destinos, utilizando los medios de comunicación adecuados para alcanzar al público objetivo. Es importante recordar que la efectividad del mensaje depende de su capacidad para conectarse emocionalmente con los turistas, asegurando que cada aspecto del mensaje refleje la esencia del destino.


</template>

<script>
export default {
  name: 'Tema1',
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
