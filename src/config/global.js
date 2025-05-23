export default {
  global: {
    componenteFormativo: 'El <em>marketing</em> turístico',
    descripcionCurso:
      'Este componente formativo aborda la promoción como variable del <em>marketing</em> aplicada a la gestión y posicionamiento de destinos turísticos. Incluye herramientas de planeación estratégica y acciones promocionales, destacando la organización de eventos que fortalecen la divulgación y el reconocimiento de destinos y productos turísticos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Promoción turística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Componentes de la promoción turística',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estrategias de promoción',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Imagen y marca en la promoción turística',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Elaboración del mensaje interpretativo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Medios de promoción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos de medios aplicados a la promoción turística',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas utilizadas en la promoción turística',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: '<em>Marketing</em> digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Fundamentos del <em>marketing</em> digital aplicado al turismo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estrategias y herramientas digitales de promoción',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Aplicaciones de la Inteligencia Artificial (IA) en el <em>marketing</em> turístico',
            hash: 't_3_3',
          },
        ],
      },

      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Eventos promocionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Clasificación de eventos turísticos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Etapas para la organización de eventos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Planificación de eventos promocionales',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Diseño del plan de trabajo y recursos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Elaboración de planes de contingencia',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Evaluación y seguimiento de eventos promocionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Actividades posteriores al evento',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Instrumentos e indicadores para la evaluación de resultados',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/DU_CF11.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },

  complementario: [
    {
      tema: '2. Medios de promoción	',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Optimización de imagen en redes sociales [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=C5LZ11pq6TE ',
    },
    {
      tema: '4.5. Elaboración de planes de contingencia',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Estructura y componentes de un plan de contingencia [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aID5HayWGSw',
    },
  ],
  glosario: [
    {
      termino: '<em>Branding</em>',
      significado:
        'proceso de creación y gestión de una marca, incluyendo su identidad, valores y percepción en el mercado, para establecer una conexión emocional con el público objetivo.',
    },
    {
      termino: 'Destino turístico',
      significado:
        'lugar con atractivos naturales, culturales o históricos que motivan a las personas a visitarlo y experimentar sus características únicas.',
    },
    {
      termino: 'Estrategia',
      significado:
        'plan diseñado para alcanzar objetivos específicos mediante la identificación de recursos, acciones y enfoques adecuados.',
    },
    {
      termino: 'Evento',
      significado:
        'actividad organizada para un público específico, con un propósito definido, como promocionar un producto, servicio o destino turístico.',
    },
    {
      termino: 'Inteligencia Artificial (IA)',
      significado:
        'tecnología que simula procesos de inteligencia humana, como el aprendizaje y la toma de decisiones, aplicada en análisis de datos, personalización de contenidos y mejora de experiencias turísticas.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'conjunto de técnicas y estrategias destinadas a satisfacer las necesidades del cliente, promoviendo productos o servicios para generar valor y fidelidad.',
    },
    {
      termino: '<em>Marketing</em> digital',
      significado:
        'uso de plataformas digitales y tecnologías en línea para promocionar productos o servicios, incluyendo redes sociales, campañas de correo electrónico y posicionamiento web.',
    },
    {
      termino: '<em>Marketing</em> turístico',
      significado:
        'rama del <em>marketing</em> enfocada en promover destinos, servicios y experiencias, con el objetivo de atraer visitantes y fomentar el turismo sostenible.',
    },
    {
      termino: 'Plan de promoción',
      significado:
        'documento que establece las acciones y estrategias necesarias para dar a conocer un producto, servicio o destino, con un enfoque claro hacia el público objetivo.',
    },
    {
      termino: 'Planeación estratégica',
      significado:
        'proceso de definir objetivos a largo plazo y trazar un plan estructurado para lograrlos, basado en el análisis de recursos y oportunidades.',
    },
    {
      termino: 'Producto turístico',
      significado:
        'conjunto de servicios, experiencias y atractivos que un destino ofrece a los visitantes, diseñado para satisfacer sus expectativas y necesidades.',
    },
    {
      termino: 'Promoción',
      significado:
        'acciones encaminadas a difundir y destacar un producto o servicio, generando interés y motivando su consumo.',
    },
    {
      termino: 'Publicidad',
      significado:
        'herramienta de comunicación pagada utilizada para informar, persuadir o recordar al público sobre un producto, servicio o destino.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'plataformas digitales que facilitan la interacción entre personas y empresas, utilizadas para compartir contenidos, construir comunidades y promocionar productos o servicios.',
    },
  ],

  referencias: [
    {
      referencia:
        'Alonso, R., & Grande, I. (2004). Comportamiento del consumidor. ESIC Editorial.',
      link: '',
    },
    {
      referencia:
        'American <em>Marketing</em> Association. (s.f.). Dictionary: Brand.',
      link: ' https://www.ama.org/resources/Pages/Dictionary.aspx ',
    },
    {
      referencia:
        'Fisher, L., & Espejo, J. (2017). Mercadotecnia. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia: 'FONTUR. (2024). El país de la belleza.',
      link: 'https://www.fontur.com.co/es/comunicados/el-pais-de-la-belleza',
    },
    {
      referencia:
        'Fred, D. (2013). Conceptos de administración estratégica. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., Bowen, J. T., & Makens, J. C. (2012). <em>Marketing</em> turístico (6.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Lindbeck, A., & Wikström, M. (1999). Technological change and information structure in the service economy. Stockholm University, Institute for International Economic Studies.',
      link: '',
    },
    {
      referencia:
        'Noblecilla, M., & Granados, M. (2018). El <em>marketing</em> y su aplicación en diferentes áreas del conocimiento. Ediciones UTMACH.',
      link: '',
    },
    {
      referencia:
        'Oficina Española de Patentes y Marcas. (s.f.). ¿Qué es una marca?',
      link: '',
    },
    {
      referencia:
        'Real Academia Española. (s.f.). Marca. En Diccionario de la lengua española (23.ª ed.).',
      link: 'https://dle.rae.es/marca ',
    },
    {
      referencia:
        'Rodríguez, I., et al. (2007). Estrategias y técnicas de comunicación. Editorial UOC.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Dora Inés Sánchez Escobar',
          cargo: 'Experta temática',
          centro: 'Centro Comercio y Servicios - Regional Risaralda',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo ',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
