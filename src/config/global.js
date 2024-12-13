export default {
  global: {
    componenteFormativo: 'Reproducción en bovinos de doble propósito',
    descripcionCurso:
      'Aplicar técnicas de sanidad bovina es fundamental para garantizar el bienestar animal, prevenir enfermedades y promover una mejor calidad de vida. Además, gestionar la reproducción bovina conforme a las necesidades productivas del sistema ganadero, optimiza la eficiencia en la producción de carne y leche, asegurando un mayor rendimiento económico y sostenibilidad a largo plazo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
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
        titulo: 'Ganadería intensiva',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Sistema de control de parásitos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Plan de sanidad animal en una finca ganadera doble propósito',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reproducción en bovinos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Diferenciación sexual en bovinos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Monta natural e inseminación artificial',
        desarrolloContenidos: true,
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
        download: 'downloads/72310022_CF02_DU.pdf',
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
      tema: 'Reproducción en bovinos',
      referencia: 'TvAgro (2023). [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pIKKpHQ7AL0',
    },
    {
      tema: 'Monta natural e inseminación artificial',
      referencia: 'Contexto Ganaderos (2015).',
      tipo: 'Página <em>web</em>',
      link:
        'https://www.contextoganadero.com/internacional/8-cualidades-que-usted-debe-saber-sobre-el-semen-del-toro-ideal',
    },
  ],
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'concepto que abarca las condiciones físicas y psicológicas adecuadas para los animales, garantizando su salud, confort y calidad de vida en un entorno de crianza.',
    },
    {
      termino: 'Diferenciación sexual en bovinos',
      significado:
        'proceso biológico que determina el desarrollo de características sexuales masculinas o femeninas en los bovinos, fundamental para la gestión reproductiva y selección de animales en un sistema ganadero.',
    },
    {
      termino: 'Ganadería de bovinos',
      significado:
        'actividad dedicada a la cría y manejo de vacas para la producción de carne, leche o ambos.',
    },
    {
      termino: 'Ganadería intensiva',
      significado:
        'método de cría de animales que se caracteriza por el uso de sistemas de producción en recintos cerrados, con un alto nivel de inversión en tecnología y alimentación, para maximizar la producción de carne y/o leche.',
    },
    {
      termino: 'Inseminación artificial',
      significado:
        'técnica de reproducción asistida que consiste en introducir esperma directamente en el tracto reproductivo de la vaca, con el objetivo de lograr la fertilización sin necesidad de la presencia física del toro.',
    },
    {
      termino: 'Monta natural',
      significado:
        'método de reproducción en el cual un toro se monta a una vaca de manera natural para la fertilización, sin intervención tecnológica en el proceso.',
    },
    {
      termino: 'Reproducción en bovinos',
      significado:
        'proceso biológico y manejo de técnicas para la reproducción del ganado bovino, con el objetivo de mejorar la genética y asegurar la producción continua de crías para carne y/o leche.',
    },
    {
      termino: 'Sistema de control de parásitos:',
      significado:
        'conjunto de estrategias y tratamientos para prevenir y eliminar parásitos internos y externos en el ganado, protegiendo así la salud animal y la productividad del sistema ganadero.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cifuentes, J. (2014). Reproducción Animal. Armenia, Quindío: SENA.',
      link: '',
    },
    {
      referencia:
        'Dejarnette, M. y Nebel, R. (s.f.). Anatomía y Fisiología de la reproducción bovina. ',
      link:
        'https://www.produccion-animal.com.ar/informacion_tecnica/inseminacion_artificial/97-fisiologia.pdf',
    },
    {
      referencia:
        'FAO. (2004). Sanidad animal. Consultado el 30 de octubre de 2015, en ',
      link: 'http://www.fao.org/docrep/008/y5224s/y5224s05.htm',
    },
    {
      referencia:
        'FAO. (2010). Manejo sanitario eficiente del ganado bovino: principales enfermedades. Roma, Italia: Comercial 3H.',
      link: '',
    },
    {
      referencia:
        'García, J. (2013). Visión fisiológica de la reproducción bovina.',
      link: '',
    },
    {
      referencia:
        'Valencia, W. L. (2015). “Caracteristicas del aparato reproductor en vacas criollas en el matadero de Quicapata a 2800 m.s.n.m. Ayacucho.',
      link:
        'https://repositorio.unsch.edu.pe/server/api/core/bitstreams/f48c97fc-e11e-4112-86bf-4f397726f338/content',
    },
    {
      referencia:
        'Sanchez1, D. A. ( 2020 ). Actualidad en ginecología y obstetricia en bovinos. Villavicencio, Meta.',
      link:
        'https://repository.ucc.edu.co/server/api/core/bitstreams/8eac119b-9770-4db0-8d75-5810fedfa349/content#:~:text=Dentro%20de%20la%20vagina%20se,Dejarnette%20%26%20Nebel%2C%202018)',
    },
    {
      referencia:
        'Gasque, R. (2008). Reproducción bovina. En Universidad Nacional Autónoma de México, Enciclopedia bovina, (pp. 391-413). México, México D.F.: Comité editorial de la FMVZ.',
      link: '',
    },
    {
      referencia:
        'Echevarría, L., Mendoza, G., Fouilloux, A., & Torr, A. (2021). Capitulo 2 Anatomía funcional de los órganos genitales del macho y de la hembra. Mexico: Universidad Nacional Autónoma de México.',
      link:
        'https://reproduccionanimalesdomesticos.fmvz.unam.mx/libro/capitulo2/aparato-reproductor-del-macho.html ',
    },
    {
      referencia:
        'Gobierno	Provincial	y	la	Empresa	Pública	de	Desarrollo	Productivo	y Agropecuario del Sur. (2011). Guía básica para el manejo bovino bajo criterios de sostenibilidad ambiental. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Angela Viviana Páez Perilla',
          cargo: 'Experta temática',
          centro: 'Centro Agroindustrial – Regional Quindío ',
        },
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez',
          cargo: 'Guionista - línea de producción',
          centro: 'Centro Agroindustrial – Regional Quindío ',
        },
        {
          nombre: 'Gilberto Herrera Delgans',
          cargo: 'Evaluador Instruccional',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Antonio Vecino Valer',
          cargo: 'Diseñador <em>web</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Álvaro Guillermo Araújo Angarita',
          cargo: 'Desarrollador <em>full stack</em>',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
        },
        {
          nombre: 'Juan Carlos Cardona Acosta',
          cargo: 'Validador y vinculador de recursos digitales',
          centro:
            'Centro para el Desarrollo Agroecológico y Agroindustrial - Regional Atlántico',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
