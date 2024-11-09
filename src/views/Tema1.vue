<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ganadería intensiva
      

    .row.mb-5
      .col-md-5.col-8.mx-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema1/img05.png' alt='Imagen Decorativa')
      .col-lg-7
        p.mb-4 Cuando se habla de ganadería intensiva se hace referencia a la producción bovina tanto de leche como de carne en sistemas pequeños donde la carga animal va de 8 a hasta 30 bovinos por hectárea, este sistema de producción se caracteriza porque el ganado no busca su propio alimento, sino que este es suministrado por la persona encargada de la unidad productiva.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Los animales criados bajo este sistema de producción se deben nutrir de manera balanceada garantizándoles buena calidad y cantidad de alimento. La ganancia de peso de un bovino alimentado mediante esta técnica oscila entre 450 a 1550 gr/día.


    p.mb-5 Ventajas de la ganadería intensiva de doble propósito:

    .mod-fondo-01
      .row.mod-ventajas.mb-4
        .col-sm-6.col-lg-4.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-naranja
            p.mod-ventajas-p.mb-0.mod-texto-naranja 01
            .row.justify-content-center.mb-3
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img06.png', alt='Imagen Decorativa')

            p Se logra mayor ganancia en menos tiempo por la alta productividad.

        .col-sm-6.col-lg-4.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-verde
            p.mod-ventajas-p.mb-0.mod-texto-verde 02
            .row.justify-content-center.mb-3
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img07.png', alt='Imagen Decorativa')

            p Se obtienen productos de muy buena calidad (leche y carne) y de esta manera puede satisfacer las necesidades de distribución y la demanda a gran escala.

        .col-sm-6.col-lg-4.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-naranja
            p.mod-ventajas-p.mb-0.mod-texto-naranja 03
            .row.justify-content-center.mb-3
              .col-6
                figure
                  img(src='@/assets/curso/temas/tema1/img08.png', alt='Imagen Decorativa')

            p La producción de carne va por encima de las 2 toneladas por año.



      h2.mb-5.titulo-imagen-izq Sistemas de pastoreo



      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img03.jpg')})`}"
        )

        .bloque-texto-g__texto.p-4
          p.mb-0 El sistema de pastoreo es esencial para el manejo sostenible del ganado, ya que permite un uso eficiente de los recursos forrajeros, mejora la salud del suelo y previene la sobreexplotación de los pastizales. Mediante la rotación de parcelas, se promueve la regeneración natural de los pastos, optimizando la productividad y reduciendo el impacto ambiental de la actividad ganadera. A continuación, los tipos de pastoreos:




    .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5.bg01.mod-slider-pastoreo
      SlyderA(tipo="b")
        .row
          .col-md-7.mb-4.mb-md-0.row
            h3 Pastoreo rotacional intensivo con cargas altas
            p Consiste en utilizar terrenos no muy grandes los cuales son divididos en potreros pequeños y de igual tamaño, a estos se les introduce una alta densidad de ganado que oscila entre 10 a 15 animales por hectárea y son utilizados por 3 días con periodos de descanso de 24 días, esto se hace para que las pasturas crezcan de nuevo.
            p Es recomendable que después del pastoreo cada lote reciba fertilización con nitrógeno y con algunos correctivos, por tal razón, los bovinos son llevados a otro lugar mientras se le suministra fertilizante y riego para recuperarlo; una desventaja de este sistema es el alto costo de mantenimiento y establecimiento por la gran demande de fertilidad natural, clima y topografía.

          .col-md-5.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img10.png', alt='Imagen Decorativa')
              

        
        
        .row
          .col-md-7.mb-4.mb-md-0.row
            h3 Estabulado (confinamiento)
            p En este sistema permanecen confinados y se utilizan pasturas de alta calidad que son suministradas al animal picadas o en ensilajes, mediante esta técnica se aprovechan más los forrajes porque no hay pérdidas por pisoteo ni existe contaminación por las heces del animal, lo cual ayuda a que haya una alta capacidad de la carga, esto se ve reflejado en el aumento de peso diario porque el ganado no gasta energía buscando alimento. 
            p En estabulación se suprime la selectividad del animal al buscar alimento, entonces se hace necesario reemplazarlo por suplementos y forrajes de muy buena calidad proteica.

          .col-md-5.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img11.png', alt='Imagen Decorativa')
              



        .row
          .col-md-7.mb-4.mb-md-0.row
            h3 Semiestabulación
            p Este sistema es intermedio entre el pastoreo rotacional intensivo y el estabulado, los bovinos permanecen la mayor parte del tiempo en confinamiento con alimento, minerales y agua a voluntad, pero se llevan a que pastoreen en rotación durante algunas horas al día, con el fin de que completen sus requerimientos nutricionales y ejerciten los músculos. 
            p Mediante este sistema se hace un mejor manejo del ganado, se disminuye la pérdida de forraje por pisoteo y hay un mejor aprovechamiento del estiércol que se puede utilizar para hacer abonos compostados que son empleados en la unidad productiva como fertilizantes para los cultivos y las praderas.

          .col-md-5.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema1/img12.png', alt='Imagen Decorativa')
              
        


    h2.mb-5.titulo-imagen-izq Tipos de sistemas de producción

    p.mb-5 En la actualidad existen diferentes tipos de explotación ganadera, unas se dedican a la producción de carne, otras a la de leche y algunas solo a la cría; pero existen explotaciones ganaderas que se ocupan tanto a producir leche como carne, denominada como ganadería de doble propósito.
    p.mb-5.text-center <strong>A continuación, se da una breve descripción de los tipos de sistemas de producción:</strong>


    .tarjeta--container.row
      .col-md.tarjeta.p-4.mod-color-naranja.mb-4.mb-md-5.p-md-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img13.png', alt='Imagen Decorativa')
          
        h2.text-center Cría
        p.text-center En este sistema, el ternero es el protagonista, ya que es el principal producto. Esto implica que la madre que lo amamanta debe mantenerse en buenas condiciones. Una vez que los terneros son destetados, el productor los vende, ya que este sistema de cría no tiene como objetivo la producción de leche ni de carne. Generalmente, se lleva a cabo en terrenos de baja fertilidad. Las reses que amamantan a los terneros son confinadas en terrenos poco aptos para la agricultura, siendo ubicadas en establos hasta que los animales alcanzan el peso requerido para ser vendidos a zonas más favorables para su desarrollo.

      .col-md.tarjeta.p-4.mod-color-verde-claro.mb-4.mb-md-5.p-md-5
        .row.justify-content-center.mb-4
          .col-5
            figure
              img(src='@/assets/curso/temas/tema1/img14.png', alt='Imagen Decorativa')
          
        h2.text-center Seba
        p.text-center Este sistema se basa en la producción de carne, por lo que es fundamental utilizar razas aptas para el engorde. El proceso de ceba comienza cuando los bovinos superan la etapa de levante, momento en el que son seleccionados y se les introduce en un régimen alimentario compuesto por forrajes, suplementos y ensilajes. Este régimen busca asegurar un óptimo desarrollo del animal hasta alcanzar el peso deseado por el ganadero, tras lo cual se procede a su venta a un precio acorde con dicho peso.


    .row.mb-5.mb-lg-4
      .col-md-4.col-8.mx-auto
        img(src='@/assets/curso/temas/tema1/img15.png' alt='Imagen Decorativa')
      .col-lg-8

        p.mb-5 En la actualidad la producción de carne de vacuno se hace mediante sistemas de producción intensiva por estabulación, esto implica alimentar los animales con dietas a base de forrajes conservados y cereales; dicha técnica presenta una ventaja muy importante como es la reducción del periodo de cría a menos de un año y un mejor aprovechamiento de las pasturas, pues estas suelen ser conservadas mediante ensilajes; pero cuenta a la vez con una desventaja y es que necesita mucho capital para mano de obra, infraestructura y maquinaria, sin embargo, los gastos requeridos en cuanto a dinero son repartidos en forma uniforme a lo largo del año y en comparación con las utilidades generadas, vale la pena asumirlos:

        LineaTiempoD.mod-tabs-narver
          .row(numero="1" titulo="Leche")
            .col-md-12
              p.mb-0 En este sistema, las terneras son criadas para reemplazar a las vacas cuya producción de leche ha disminuido. La correcta selección de la raza es fundamental, ya que no todas las especies tienen la capacidad de producir suficiente leche para la unidad productiva. Esta práctica puede llevarse a cabo en distintos sistemas de pastoreo, como el extensivo, intensivo y semi-intensivo.

          .row(numero="2" titulo="Doble propósito")
            .col-md-12
                p.mb-0 La explotación bovina de doble propósito es una de las más comunes en Colombia, ya que las razas criollas y sus cruces pueden producir tanto carne como leche. Además, este tipo de producción no requiere grandes modificaciones técnicas en el esquema productivo, permitiendo al productor enfocarse en uno u otro producto según las demandas del mercado.

          .row(numero="3" titulo="Ciclo completo")
            .col-md-12
                p.mb-0 Este método es ampliamente utilizado porque integra los cuatro sistemas mencionados. La explotación ganadera bajo esta técnica permite producir animales para ceba y leche, destetar terneros, y también criar bovinos seleccionados según sus características genéticas para fines reproductivos.



    .mod-fondo-02
      h3.mb-5.titulo-imagen-der Recomendaciones para la construcción de instalaciones de manejo bovino


      .row.mb-5.mb-lg-0
        .col-lg-7.mb-4.mb-md-5
          p.mb-5 Para el ganado de doble propósito proveniente del cruce entre Brahman y razas Bos Indicus, se recomienda utilizar cercas de entre 1.6 y 1.8 metros de altura para evitar que los animales se escapen o sufran lesiones. Además de la altura, las cercas deben ser robustas y duraderas, preferiblemente construidas con materiales resistentes como madera tratada, postes metálicos o concreto, dependiendo de las condiciones locales y del presupuesto disponible.
          .cajon.color-acento-contenido.p-4
            p.mb-0 Es crucial que el apretadero, la manga y la rampa cuenten con paredes sólidas, no solo para guiar el movimiento de los animales, sino también para reducir su estrés durante los procesos de manejo. Las paredes sólidas evitan que el ganado vea lo que ocurre afuera, lo que puede contribuir a disminuir la ansiedad y prevenir accidentes, ya que los bovinos tienden a asustarse fácilmente con ruidos o movimientos bruscos.
        .col-md-5.col-8.mx-auto
          img(src='@/assets/curso/temas/tema1/img16.png' alt='Imagen Decorativa')
      p.mb-5 Si el presupuesto lo permite, se recomienda también incluir paredes sólidas en el callejón de manejo. El callejón es una estructura clave en las instalaciones ganaderas, ya que facilita el traslado de los animales de un área a otra dentro de la finca. Al estar bien diseñado y construido, con suficiente espacio para el paso de los animales, se garantiza una operación más eficiente y segura tanto para los trabajadores como para los bovinos



    h3.mb-5.titulo-imagen-der ¿Qué es la sanidad animal en bovinos?

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img17.jpg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 La sanidad animal tiene como objetivo principal preservar la salud de los animales de un hato, mediante la prevención y erradicación de enfermedades y plagas que afectan directamente a los bovinos.



    .mod-fondo-03
      h2.mb-5.titulo-imagen-izq Técnicas o tratamientos para prevenir enfermedades en la finca ganadera

      img.tarjeta.mb-5(src='@/assets/curso/temas/tema1/img18.jpg', alt='Imagen Decorativa')

      p.mb-5 Es fundamental observar el comportamiento de los bovinos tanto en establos como en praderas, prestando atención a indicadores como la temperatura corporal, la digestión y el estado del pelaje (si se presenta caída, entre otros). Estos aspectos pueden ofrecer señales clave sobre la salud del animal.

      .cajon.color-acento-contenido.p-4.mb-5
          p.mb-0 Los agentes patógenos que les causan enfermedades a los bovinos entran al animal por la boca, la nariz, los genitales, las heridas o la ubre; por lo tanto, es indispensable contar con planes de manejo adecuados, buena alimentación y condiciones apropiadas para la reproducción; además tener en cuenta aspectos de sanidad animal, infraestructura, factor humano y medio ambiente que son esenciales para conservar la salud de los bovinos y por consiguiente garantizar la reproducción y alta producción de leche y carne.



    h3.mb-5.titulo-imagen-der Requisitos mínimos a tener en cuenta en la producción ganadera

    p.mb-5 El manejo adecuado del ganado bovino en una finca ganadera requiere prestar atención a diversos factores clave que influyen directamente en su bienestar y productividad. El acceso a agua limpia y suficiente, un correcto mantenimiento de los potreros. A continuación se referencian los requisimos minimos a tener encuenta en la producción ganadera.


    .row.mb-5
      .col-lg-4.col-8.mx-auto.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema1/img19.png', alt='Imagen Decorativa')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul mod-ac-narver")
          .row(titulo="Agua")
             p Es esencial garantizar que los bovinos consuman agua fresca y limpia, ya que el agua contaminada puede disminuir la producción y causar enfermedades, afectando la calidad de la leche y la carne. Es crucial contar con suficientes bebederos para que todos los animales puedan acceder al agua, especialmente dado que las necesidades hídricas varían según la edad, condición corporal y estado fisiológico. Los bovinos adultos tienen un 70% de agua en su cuerpo, mientras que los terneros recién nacidos tienen un 90%; su pérdida del 25% puede ser fatal. Se recomienda suministrar agua de 2 a 3 veces al día.

          .row(titulo="Potreros")
             p Para garantizar una alimentación rica en nutrientes debe hacerle un adecuado mantenimiento a los pastizales, sembrar forrajes resistentes de acuerdo a la zona donde se encuentra la ganadería, evitar que los animales estén siempre en el mismo potrero, mantener el pasto libre de malezas y rozar el forraje después de que el animal pastoree. También se recomienda sembrar sistemas silvopastoriles como una alternativa de alimentación en época de verano y para proteger con su sombra al ganado y sus crías del calor extremo.
          
          .row(titulo="Sales minerales")
             p Los bovinos pueden ser improductivos por la falta o exceso de sales minerales, bien sea porque se les suministra poca o debido a que el forraje que consumen no tiene buena cantidad de minerales.  Para que los bovinos tengan alto rendimiento deben consumir pequeñas dosis de sal o cloruro de sodio de manera diaria o mínimo cada dos días, puesto que este mineral es el que más necesitan los bovinos.

          .row(titulo="Bienestar bovino")
             p Para hacer un adecuado control del bienestar animal en el predio ganadero debe asegurarse que los trabajadores no maltraten a los bovinos mediante golpes, azotes o gritos para evitar que estos se estresen, si esto sucede el ganado se vuelve más vulnerable a enfermarse por microorganismos. Además se debe proporcionar el suficiente espacio para evitar que haya amontonamiento lo que causa estrés en los bovinos, garantizar buen suministro de alimento, adecuada iluminación, corrales cerrados y por último se debe distribuir de la mejor manera los animales dóciles de los dominantes.


    .mod-fondo-04
      h3.mb-5.titulo-imagen-der Técnicas para prevenir enfermedades en bovinos

      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img20.jpg')})`}"
        )

        .bloque-texto-g__texto.p-4
          p.mb-0 La salud del ganado es un aspecto fundamental en la producción de bovinos de doble propósito, ya que asegura tanto el bienestar animal como la inocuidad de la leche y la carne. Para lograrlo, se implementan acciones de manejo sanitario que incluyen la prevención de enfermedades, la administración adecuada de medicamentos y tratamientos. Revisemos las diferentes técnicas para la prevención de enfermedades en bovinos:



      TabsC.mb-5.mod-tabs-gris
        .p-5(titulo="Salud del animal")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Salud del animal
              p El manejo sanitario del ganado doble propósito incluye una serie de acciones que garantizan la salud del animal y la inocuidad de la leche y la carne. Los mecanismos utilizados para la prevención de enfermedades, administración y prescripción de medicamentos y tratamientos se deben realizar con responsabilidad y ética por parte del personal encargado del hato.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img21.png', alt='Imagen Decorativa')
        
        .p-5(titulo="Veterinario")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Veterinario
              p El sistema de producción ganadera contará con personal profesional (veterinario) que se encargue de diagnosticar el estado de salud del ganado y las posibles enfermedades que estos pueden padecer; dicho profesional dará recomendaciones técnicas a los empleados acerca de los medicamentos que se le deben suministrar a los bovinos en caso de estar enfermos y la dieta que deben llevar los animales sanos y enfermos.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img22.png', alt='Imagen Decorativa')

        .p-5(titulo="Control del ganado")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Control del ganado
              p En las fincas ganaderas de doble propósito se debe llevar un control de ingreso y de salida de los animales para evitar la propagación de enfermedades entre explotaciones ganaderas.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img23.png', alt='Imagen Decorativa')

        .p-5(titulo="Chequeo y vigilancia")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Chequeo y vigilancia
              p Los bovinos recién introducidos en la finca ganadera se deben aislar para realizarles un respectivo chequeo y vigilancia, con el propósito de determinar posibles enfermedades o parásitos; esto se hace para disminuir el riesgo sanitario.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img24.png', alt='Imagen Decorativa')


        .p-5(titulo="Controles periódicos")
          .row
            .col-md-6.mb-4.mb-md-0
              h4 Controles periódicos
              p Si en una explotación ganadera hay animales enfermos, estos se deben aislar del lote, identificarlos individualmente y realizarles controles periódicos por el profesional asignado.

            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema1/img25.png', alt='Imagen Decorativa')


    .mod-fondo-05
      h3.mb-5.titulo-imagen-der Métodos de administración de medicamentos en bovinos


      p.mb-5 Los medicamentos para los bovinos se administran por diferentes vías, como oral, intramuscular, subcutánea e intravenosa, o a través de suplementos alimenticios. A continuación, se detalla el proceso de cada una de estas modalidades:


      .row.mod-centrado-dorado
        p.mb-5.text-center <strong>Suministro de medicamento</strong>


      ImagenInfografica.col-10.col-lg-8.mx-auto.mb-5.mod-info-vaca
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img26.png', alt='Imagen Decorativa')
            
        .tarjeta.color-acento-botones.p-4(x="98%" y="44%" numero="1")
          .h4.mb-3 Oral
          p Se suministra por la boca evitando que el medicamento entre por las vías respiratorias.

        .tarjeta.color-acento-botones.p-4(x="92%" y="55%" numero="2")
          .h4.mb-3 Intravenosa o endovenosa
          p Esta técnica consiste en aplicar el medicamento en la vena yugular para que llegue al torrente sanguíneo y de esta manera se produzca un efecto inmediato.

        .tarjeta.color-acento-botones.p-4(x="3%" y="29%" numero="3")
          .h4.mb-3 Intramuscular
          p Se aplica directamente en la masa muscular (pierna, cuello o anca) y la respuesta al medicamento se produce entre 4 a 6 horas de suministrado.

        .tarjeta.color-acento-botones.p-4(x="19%" y="3%" numero="4")
          .h4.mb-3 Intraperitoneal
          p Se aplica en el flanco derecho en el centro del triángulo que está detrás de la costilla y el hueso de cadera, mediante esta técnica se pueden suministrar grandes cantidades de medicamento disuelto en agua o en suero.

        .tarjeta.color-acento-botones.p-4(x="3%" y="23%" numero="5")
          .h4.mb-3 Rectal
          p Se introducen supositorios por el recto.

        .tarjeta.color-acento-botones.p-4(x="9%" y="38%" numero="6")
          .h4.mb-3 Intrauterina
          p Por la vagina se implantan los antibióticos.

        .tarjeta.color-acento-botones.p-4(x="6%" y="50%" numero="7")
          .h4.mb-3 Intramamaria
          p Se aplica en el pezón de las hembras y sirve para controlar la mastitis.

        .tarjeta.color-acento-botones.p-4(x="5%" y="68%" numero="8")
          .h4.mb-3 Tópica
          p Se aplican sobre la piel productos como: cremas, ungüentos, aerosoles y baños de inmersión.



    h3.mb-5.titulo-imagen-der Vacunación


    .row.mod-tarjeta-sobresale.mb-5.p-4.p-md-0(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img28.png')})`}")
      .col-md-2
        figure
          img(src='@/assets/curso/temas/tema1/img27.png', alt='Imagen Decorativa')
      .col-md-10
        p.mb-0 Para proteger el ganado de enfermedades debe inmunizarlo de acuerdo con el plan de vacunación establecido por el veterinario, esto evitará enfermedades en los bovinos. También es importante conservar la cadena de frío de las vacunas y no envasarlas.


    .titulo-sexto.color-acento-contenido.mb-4
      h5 Tabla 1.
      span Plan básico de vacunación. 
       

    .tabla-a.color-secundario.mb-5.mod-tabla-verde
      table
        thead
          tr
            th Enfermedad
            th Vacuna
            th Edad de vacunación
            th Frecuencia
            th Dosis y vías de administración
        tbody
          tr
            td Aftosa
            td 
            td Desde el primer día de nacido
            td Cada 6 meses
            td 3 ml - Subcutánea (SC) depende del producto
          tr
            td Brucelosis
            td Cepa 19
            td Hembras entre 3 a 8 meses
            td Única
            td 5 ml - SC depende del producto
          tr
            td Septicemia hemorrágica, Carbón sintomático, Edema maligno
            td Sintosept, tripe o bacteriana
            td Desde los tres meses
            td Repetir cada año o cada 6 meses en zona endémica.
            td 5 ml - SC depende del producto
          tr
            td 
            td 
            td A partir de los 3 a 4 meses
            td Repetir cada año
            td 5 ml - SC depende del producto
          tr
            td Leptospirosis
            td 
            td 
            td 
            td 


    h2.mb-5.titulo-flecha-izq Recomendaciones para la correcta aplicación de las vacunas:


    .row.mb-5.mod-lista-flecha
      .col-md-4.col-8.mx-auto.mb-4.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/img29.png', alt='Imagen Decorativa')
      .col-md-8
        p.mb-5 Este tipo de suplemento es proporcionado a los bovinos para sustituir las deficiencias de proteínas que tengan los forrajes, estos pueden ser vegetales o animales (se encuentra en la harina de pescado y la carne).
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Revise el correcto funcionamiento de las jeringas y luego esterilícelas.
          li 
            i.lista-ul__vineta
            | El termo donde se guardan las vacunas, se debe colocar en un sitio fresco y con sombra.
          li 
            i.lista-ul__vineta
            | Evite mantener la vacuna fuera del termo por periodos largos.
          li 
            i.lista-ul__vineta
            | Lea las instrucciones de aplicación y dosificación que traen las vacunas.
          li 
            i.lista-ul__vineta
            | Agite con suavidad la vacuna para que mezcle bien los diluyentes.
          li 
            i.lista-ul__vineta
            | Inmovilice en mangas o calcetas a los animales que se van a vacunar.
          li 
            i.lista-ul__vineta
            | Vacune únicamente a los bovinos que estén sanos y tranquilos.

        
    .mod-fondo-06    
      h3.mb-5.titulo-imagen-der Resistencia a enfermedades en los bovinos


      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img30.jpg')})`}"
        )

        .bloque-texto-g__texto.p-4
          p.mb-0 La resistencia de los animales a las enfermedades puede clasificarse en varias categorías, según factores como la genética, el estado de salud y las condiciones ambientales. A continuación, se presentan los distintos tipos de resistencia o inmunidad que pueden presentarse en los bovinos:


      .row.mb-4
        .col-sm-6.col-lg-3.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-naranja
            .row.justify-content-center.mb-3
              .col-5.col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/img31.png', alt='Imagen Decorativa')
            p.text-center <strong>Resistencia específica (inmunidad)</strong>
            p.text-center.mb-0 Esta resistencia ocurre cuando el animal se vuelve inmune a ciertas enfermedades, puede ser natural o adquirida.

        .col-sm-6.col-lg-3.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-verde
            .row.justify-content-center.mb-3
              .col-5.col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/img32.png', alt='Imagen Decorativa')
            p.text-center <strong>Inmunidad natural</strong>
            p.text-center.mb-0 Algunas especies adquieren esta inmunidad porque se adaptan muy bien a la zona donde se han desarrollado por generaciones; un ejemplo de ello son las razas criollas existentes en el país, muchas son resistentes a enfermedades y parásitos, y transmiten esa inmunidad a otras generaciones.

        .col-sm-6.col-lg-3.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-naranja
            .row.justify-content-center.mb-3
              .col-5.col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/img33.png', alt='Imagen Decorativa')
            p.text-center <strong>La inmunidad puede ser activa o pasiva</strong>
            p.text-center.mb-0 La inmunidad activa es la que surge con las vacunaciones, o cuando el animal se enferma y se vuelve resistente a la enfermedad.

        .col-sm-6.col-lg-3.mb-4.d-flex
          .tarjeta--boton.p-4.mod-color-verde
            .row.justify-content-center.mb-3
              .col-5.col-md-7
                figure
                  img(src='@/assets/curso/temas/tema1/img34.png', alt='Imagen Decorativa')
            p.text-center <strong>La inmunidad natural pasiva</strong>
            p.text-center.mb-0 Esta suele suceder cuando a una hembra preñada le aplican sueros o la inmunidad es trasmitida a la madre a través de su genética.


    .mod-fondo-07
      h3.mb-5.titulo-imagen-der Otras medidas que ayudan a prevenir y garantizar la sanidad animal

      .row.mb-5.mod-lista-flecha
        .col-md-8
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Manejo adecuado de los forrajes.
            li 
              i.lista-ul__vineta
              | Baños antiparasitarios.
            li 
              i.lista-ul__vineta
              | Mantener limpios los recipientes donde los animales comen y beben.
            li 
              i.lista-ul__vineta
              | Limpieza diaria de establos y salones de ordeño.
            li 
              i.lista-ul__vineta
              | Bienestar animal en la aplicación de vacunas y medicamentos.
            li 
              i.lista-ul__vineta
              | Recolectar muestras de heces para realizar el examen que determina la presencia de parásitos y de sangre, y de esta manera detectar la tuberculosis y la brucelosis.
        .col-md-4.col-8.mx-auto
          figure
            img(src='@/assets/curso/temas/tema1/img35.png', alt='Imagen Decorativa')

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
