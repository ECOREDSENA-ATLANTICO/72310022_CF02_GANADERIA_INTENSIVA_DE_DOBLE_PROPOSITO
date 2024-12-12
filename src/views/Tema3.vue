<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1(data-aos="fade-right") Plan de sanidad animal en una finca ganadera doble propósito

    img.tarjeta.mb-5(data-aos="fade-up")(src='@/assets/curso/temas/tema3/img01.jpg', alt='Imagen Decorativa')

    p.mb-5 Es importante que en la explotación bovina todos los días se revise el ganado para detectar a tiempo si hay animales mal nutridos, enfermos o muertos, y de esta manera realizar un tratamiento oportuno y adecuado, con el fin de evitar que las enfermedades se propaguen por toda la finca enfermando a los animales sanos. Las vacas viejas, las que no se preñan con facilidad o las desnutridas que no se les ve recuperación, es mejor que se destinen para otro fin, ya que son improductivas para el hato.

    .cajon.color-acento-contenido.p-4.mb-5
      p.mb-0 En los sistemas productivos ganaderos se deben usar registros donde se documenten las fechas de monta, abortos, producción de leche, vacunación, entre otros; este mecanismo le permite al productor ganadero tener un control de las enfermedades del hato.

    h2.mb-5.titulo-imagen-izq.tres Formación adecuada del personal

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img03.jpg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 La formación continua del personal en el uso de productos químicos veterinarios asegura procedimientos claros y coherentes para el manejo adecuado y seguro de los animales enfermos:

    TabsA.color-acento-botones.mb-5.mod-tabs-vertical-verde(data-aos="fade-right")
      .tarjeta.p-4(titulo="Manejo de animales")
        .row.align-items-center
          .col-lg-7.mb-3
            p.mb-0 Contar con procedimientos escritos para la detección y manejo de animales enfermos, así como para el uso adecuado de productos químicos veterinarios.

          .col-md-7.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img04.png', alt='Imagen Decorativa')
              
                
      .tarjeta.p-4(titulo="Sanidad animal")
        .row.align-items-center
          .col-lg-7.mb-3
            p.mb-0 Es fundamental garantizar un enfoque coherente en relación con la salud del rebaño. Es necesario sensibilizar a las personas sobre la estrategia de sanidad animal implementada en la explotación y asegurarse de que la comprendan.

          .col-md-7.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img05.png', alt='Imagen Decorativa')


      .tarjeta.p-4(titulo="Buena práctica")
        .row.align-items-center
          .col-xl-7.mb-3
            p.mb-0 Es una buena práctica documentar los procedimientos para realizar las tareas de manera controlada y periódica. Estos procedimientos deben abarcar todos los requisitos necesarios, incluyendo los detalles del proceso, el equipo y los materiales utilizados, así como los riesgos o problemas de seguridad relevantes.

          .col-sm-7.col-lg-5.col-xl-5.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img06.png', alt='Imagen Decorativa')


      .tarjeta.p-4(titulo="Formación permanente")
        .row.align-items-center
          .col-xl-7.mb-3
            p.mb-0 La formación es un proceso continuo, y todo el personal debe recibir capacitación de manera regular. Los empleados deben ser competentes para comprender el fundamento de las medidas adoptadas. Este proceso también debe facilitar el control de los procedimientos y proporcionar retroalimentación para una mejora constante. Además, se debe identificar claramente a la persona responsable de cada acción específica. (FAO, 2004)

          .col-sm-7.col-lg-5.col-xl-5.col-8.mx-auto
            figure
              img(src='@/assets/curso/temas/tema3/img07.png', alt='Imagen Decorativa')


    h2.mb-5.titulo-imagen-izq.cuatro Higiene en el ordeño

    .row.mb-5
      .col-8.col-md-7.col-xl-5.mx-auto.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img09.png' alt='Imagen Decorativa')
      .col-12.col-md-12.col-xl-7(data-aos="fade-right")
        p.mb-4 En una finca ganadera de doble propósito donde se produce leche, es de suma importancia realizar un buen manejo del ordeño porque los consumidores cada día son más exigentes y requieren productos de buena calidad; por eso todo hato lechero debe tener como propósito principal reducir la contaminación microbiana, química y física a niveles mínimos, en busca de la inocuidad del producto.
        .cajon.color-acento-contenido.p-4
          p.mb-0 La sanidad se debe implantar en toda la cadena productiva, desde que se produce hasta el momento en que se obtiene la leche en el ordeño, con el fin de controlar los posibles puntos críticos que se puedan generar y así garantizar un producto de muy buena calidad. La aplicación del procedimiento adecuado en el ordeño es una herramienta que ayuda a mejorar cada día la producción de leche.


    .mod-fondo-11
      .row.mb-5.mod-lista-flecha.align-items-center(data-aos="fade-right")
        .col-12.col-lg-8
          p.mb-5 <strong>Los principales aspectos a tener en cuenta en el ordeño son:</strong>
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | Cerciorarse que las vacas antes de ser ordeñadas estén limpias, tranquilas y sin ningún síntoma de estrés.
            li 
              i.lista-ul__vineta
              | El lugar donde se realiza el ordeño debe estar limpio y permitir la evacuación del estiércol y la orina para evitar focos de contaminación.
            li 
              i.lista-ul__vineta
              | Los operarios encargados del ordeño deben usar overol, delantal y botas, cubrir el cabello con gorro conservando siempre una buena actitud frente a la higiene.
            li 
              i.lista-ul__vineta
              | Las ubres de las vacas deben lavarse y secarse antes de cada ordeño con el fin de retirar una posible contaminación.
            li 
              i.lista-ul__vineta
              | Los operarios deben lavarse las manos antes de iniciar el proceso de ordeño y desinfectarlas con una solución yodada.
        .col-md-6.col-8.mx-auto
          figure
            img(src='@/assets/curso/temas/tema3/img10.png', alt='Imagen Decorativa')

      .row.mb-5.mod-lista-flecha.sm-flex-column-reverse.align-items-center(data-aos="fade-left")

        .col-md-6.col-8.mx-auto 
          figure
            img(src='@/assets/curso/temas/tema3/img11.png', alt='Imagen Decorativa')
        .col-12.col-lg-8
          ul.lista-ul
            li
              i.lista-ul__vineta
              | Los primeros chorros del ordeño se deben eliminar.
            li
              i.lista-ul__vineta
              | Si en la finca se utilizan ordeñadores mecánicos, asegúrese que estén limpios y bien higienizados antes y después del ordeño.
            li
              i.lista-ul__vineta
              | Cerciórese que el ordeño se realiza bajo condiciones de higiene y buena manipulación.
            li
              i.lista-ul__vineta
              | Asegúrese que a la leche se le realiza un buen manejo después del ordeño y se somete a temperatura de frío bajo refrigeración.
              

    h2.mb-5.titulo-imagen-izq.cinco Manejo de vacas próximas al parto


    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.p-md-5.mb-5.mod-derecha-gradiente
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img13.jpg')})`}"
      )

      .bloque-texto-g__texto.p-4
        p.mb-0 Se recomienda dejar de ordeñar a las vacas dos meses antes de la fecha estimada de parto. Es fundamental asegurarles una alimentación adecuada en nutrientes y cantidad, lo que les ayudará a tener un parto exitoso y a producir mayor cantidad de calostro, tenga en cuenta los siguientes puntos para el manejo de las vacas antes del parto:


    .row.mod-ventajas.dos.mb-4
      .col-sm-6.col-lg-3.mb-4.d-flex(data-aos="fade-up")
        .tarjeta--boton.p-4.mod-color-naranja
          p.mod-ventajas-p.mb-0.mod-texto-naranja 01
          .row.justify-content-center.mb-3
            .col-md-8.col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema3/img14.png', alt='Imagen Decorativa')

          p Al observar signos de proximidad del parto, la vaca debe mantenerse en un lugar tranquilo y apartado de otros animales.

      .col-sm-6.col-lg-3.mb-4.d-flex(data-aos="fade-up")
        .tarjeta--boton.p-4.mod-color-verde
          p.mod-ventajas-p.mb-0.mod-texto-verde 02
          .row.justify-content-center.mb-3
            .col-md-8.col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema3/img15.png', alt='Imagen Decorativa')

          p Las vacas primerizas deben llevarse al lote de ordeño y al corral para que se acostumbren.

      .col-sm-6.col-lg-3.mb-4.d-flex(data-aos="fade-up")
        .tarjeta--boton.p-4.mod-color-naranja
          p.mod-ventajas-p.mb-0.mod-texto-naranja 03
          .row.justify-content-center.mb-3
            .col-md-8.col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema3/img16.png', alt='Imagen Decorativa')

          p Verificar que su condición corporal sea de 4 en una escala de 1 a 6.

      .col-sm-6.col-lg-3.mb-4.d-flex(data-aos="fade-up")
        .tarjeta--boton.p-4.mod-color-verde
          p.mod-ventajas-p.mb-0.mod-texto-verde 04
          .row.justify-content-center.mb-3
            .col-md-8.col-6
              figure
                img.mx-auto(src='@/assets/curso/temas/tema3/img17.png', alt='Imagen Decorativa')

          p Observar el aumento del tamaño de la ubre, la vulva y las secreciones.



    h3.mb-5.titulo-imagen-der Síntomas de las vacas próximas a parir

    .row.mb-5.mod-lista-flecha.align-items-center

      .col-md-7.col-8.mx-auto.mb-lg-0.mb-4(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img18.png', alt='Imagen Decorativa')

      .col-12.col-lg-7(data-aos="fade-right")
        ul.lista-ul
          li 
            i.lista-ul__vineta
            | Se vuelven más mansas y dejan de comer.
          li 
            i.lista-ul__vineta
            | Se separan del grupo, prefieren estar solas y no mueven casi la cola.
          li 
            i.lista-ul__vineta
            | La ubre se calienta y aumenta de tamaño. 
          li 
            i.lista-ul__vineta
            | En la base de la cola se forma un hueco o vacío. 
          li 
            i.lista-ul__vineta
            | Se les descuelga la panza. 
          li 
            i.lista-ul__vineta
            | Cuando la vaca está próxima al parto se inquieta a causa de los dolores provocados por las contracciones. 
          li 
            i.lista-ul__vineta
            | Las contracciones en el animal se hacen más fuertes hasta que asoma la fuente o bolsa de las aguas. 
              

      
    .mod-fondo-12(data-aos="fade-up")
      h2.mb-5.titulo-flecha-izq Manejo de las crías después del parto

      p.mb-5 El manejo adecuado del ternero durante su primer día de vida es crucial para asegurar su salud y bienestar. Es importante verificar que respire correctamente y estimular su circulación frotando suavemente su cuerpo. También se deben revisar las mucosas, limpiar el ombligo con yodo y asegurarse de que no haya deformaciones en la boca que impidan el amamantamiento. A continuación, lo invitamos a profundizar más en los cuidados necesarios para las sus crías: 

      //- .row.mod-centrado-dorado
      //-   p.mb-5.text-center <strong>A continuación, lo invitamos a profundizar más en los cuidados necesarios para las sus crías:</strong>


      .tarjeta.tarjeta--azul.p-4.p-md-5.mb-5.bg01.mod-slider-pastoreo
        SlyderA(tipo="b")
          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante primer día
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Localizar a la cría si la vaca la ha escondido.
                  li 
                    i.lista-ul__vineta
                    | Diagnosticar su viabilidad comprobando si respira.
                  li 
                    i.lista-ul__vineta
                    | Frotar el cuerpo del ternero recién nacido con una tela limpia  para estimular la circulación. 
                  li 
                    i.lista-ul__vineta
                    | Observar el color de las mucosas del ano, vulva, ojos y fosas nasales, que deben ser rosadas en animales sanos.
                  li 
                    i.lista-ul__vineta
                    | Realizar la curación del ombligo con yodo al 10 % o 20 %, sumergiendo el cordón umbilical en la solución durante un minuto.
                  li 
                    i.lista-ul__vineta
                    | Limpiar las mucosas y el meconio del ternero.  
            .col-md-7.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img19.png', alt='Imagen Decorativa')
                

          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante primer día
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Verificar que la boca del ternero no tenga deformaciones que dificulten la lactancia.
                  li 
                    i.lista-ul__vineta
                    | Dedicar entre 5 y 30 minutos a inspeccionar a la madre.
                  li 
                    i.lista-ul__vineta
                    | Tatuar en la oreja izquierda el número consecutivo de nacimiento y en la derecha, el número de la madre y el peso.
                  li 
                    i.lista-ul__vineta
                    | Registrar el nacimiento en el libro correspondiente. 
                  li 
                    i.lista-ul__vineta
                    | Vacunar al ternero contra la fiebre aftosa y revacunar cada seis meses, según lo establecido por el ICA. 
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img20.png', alt='Imagen Decorativa')


          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante segundo día
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Revisar el ombligo y aplicar yodo nuevamente.
                  li 
                    i.lista-ul__vineta
                    | Observar la viabilidad del ternero.
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img21.png', alt='Imagen Decorativa')


          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante tercer día
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Revisar nuevamente el ombligo y aplicar yodo.
                  li 
                    i.lista-ul__vineta
                    | Administrar un complejo vitamínico a los terneros huérfanos.
                  li 
                    i.lista-ul__vineta
                    | Realizar el descornado.
                  li 
                    i.lista-ul__vineta
                    | Conducir a la cría al corral para un amamantamiento restringido, permitiendo que mame en la mañana y en la tarde durante períodos de 30 minutos. 
                  li 
                    i.lista-ul__vineta
                    | Vacunar contra la rabia bovina y revacunar anualmente. 
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img22.png', alt='Imagen Decorativa')



          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante desde el tercer día a los 60 días
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | En el manejo en semiconfinamiento, la cría mama durante el ordeño, se traslada a otro potrero y vuelve a amamantar 30 minutos, repitiéndose hasta el destete a los 9 meses.
                  li 
                    i.lista-ul__vineta
                    | Se pueden iniciar programas de desparasitación según los resultados de los exámenes coprológicos.
                  li 
                    i.lista-ul__vineta
                    | Verificar el tatuaje, numerar, marcar y asignar el código del padre.
                  li 
                    i.lista-ul__vineta
                    | Realizar la castración con el elastrador.
                  li 
                    i.lista-ul__vineta
                    | Implementar un manejo en semiconfinamiento con rotación de potreros y suplementación de pasto de corte, caña, leguminosas, sal y agua.
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img23.png', alt='Imagen Decorativa')

          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante de 3 a 4 meses
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Manejo en semiconfinamiento con rotación de potreros y suplementación con pasto de corte, caña, leguminosas, sal mineralizada, agua y bloques multinutricionales.
                  li 
                    i.lista-ul__vineta
                    | Descornado con topizador de copas y aplicación de aceite, insecticida y desinfectante.
                  li 
                    i.lista-ul__vineta
                    | Colocación de hierro (marca y número).
                  li 
                    i.lista-ul__vineta
                    | Castración (opcional) con administración previa de vacuna antitetánica.
                  li 
                    i.lista-ul__vineta
                    | Fumigación. 
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img24.png', alt='Imagen Decorativa')

          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante de 4 a 8 meses
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Manejo en semiconfinamiento con rotación de potreros y suplementación de pasto de corte, caña, leguminosas, sal mineralizada, agua y bloques multinutricionales.
            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img25.png', alt='Imagen Decorativa')

          .row
            .col-12.col-lg-7.mb-4.mb-md-0.row
              h3 Lactante de 8 a 9 meses
              .row.mb-5.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Destete y pesaje.
                  li 
                    i.lista-ul__vineta
                    | Control de endo y ectoparásitos.
                  li 
                    i.lista-ul__vineta
                    | Administración de vitaminas.
                  li 
                    i.lista-ul__vineta
                    | Selección para destete y venta.


            .col-md-5.col-8.mx-auto
              figure
                img(src='@/assets/curso/temas/tema3/img26.png', alt='Imagen Decorativa')


      h2.mb-3.titulo-flecha-izq Manejo de las vacas después del parto

      p.mb-5 El manejo adecuado de una vaca tras el parto es esencial para preservar su salud y la de su cría. En los primeros días, es importante evaluar su habilidad materna, descargar la ubre y vigilar posibles inflamaciones. Para conocer más sobre los cuidados necesarios durante esta etapa crucial, lo invitamos a explorar el siguiente contenido:


    .row.mb-5.mb-lg-4.position-relative
      .col-lg-5.col-6.mx-auto(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img27.png' alt='Imagen Decorativa')
      .col-lg-7(data-aos="fade-right")

        LineaTiempoD.mod-tabs-narver
          .row(numero="1" titulo="Madre primer día")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Verificar si se ha producido el parto.
                  li 
                    i.lista-ul__vineta
                    | Prestar atención al comportamiento de la madre.
                  li 
                    i.lista-ul__vineta
                    | Separarla cuidadosamente.
                  li 
                    i.lista-ul__vineta
                    | Observar su habilidad maternal.
                  li 
                    i.lista-ul__vineta
                    | La expulsión de la placenta ocurre entre 2 y 6 horas.
                  li 
                    i.lista-ul__vineta
                    | Realizar el descalostrado de la ubre.
                  li 
                    i.lista-ul__vineta
                    | Controlar la inflamación de la ubre, mastitis o retención de placenta.
                  li 
                    i.lista-ul__vineta
                    | Programar el manejo de las vacas nodrizas.
                  li 
                    i.lista-ul__vineta
                    | Vacunar contra la fiebre aftosa.

          .row(numero="2" titulo="Madre segundo día")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Observar habilidad materna.
                  li 
                    i.lista-ul__vineta
                    | Control de posibles inflamaciones, mastitis o retención de placenta.
                    
          .row(numero="3" titulo="Madre tercer día")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Conducción al lote de vacas paridas de 0 a 2 meses.
                  li 
                    i.lista-ul__vineta
                    | Observar producción de leche.
                  li 
                    i.lista-ul__vineta
                    | Salida del potrero paritorio a potreros con buen forraje para la recuperación.
                  li 
                    i.lista-ul__vineta
                    | Producción de leche y manifestación de color en ella.
                  li 
                    i.lista-ul__vineta
                    | Vacunar contra rabia bovina y revacunar cada año.

                    
          .row(numero="4" titulo="Madre desde el tercer día a los 60 días")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | El manejo en semiconfinamiento incluye rotación de potreros y suplementación con pasto, caña, leguminosas, sal, agua y bloque nutricional. 
                  li 
                    i.lista-ul__vineta
                    | Se realizan controles de parásitos según la infestación. 
                  li 
                    i.lista-ul__vineta
                    | Al llegar al corral, las vacas deben reposar 15 minutos, ordeñando primero las paridas con crías recientes, luego las de terneros medianos y mayores, dejando las mastíticas para el final.



          .row(numero="5" titulo="Madre 3 a 4 meses")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Manejo en semiconfinamiento con rotación de potreros y suplementación con pasto de corte, caña, leguminosa, sal mineralizada, agua y bloque multinutricional.
                  li 
                    i.lista-ul__vineta
                    | Palpación. 
                  li 
                    i.lista-ul__vineta
                    | Programación a toro (segunda oportunidad).
                  li 
                    i.lista-ul__vineta
                    | Selección o descarte por programación a toro.
                  li 
                    i.lista-ul__vineta
                    | Control de endo y ectoparásitos.
                  li 
                    i.lista-ul__vineta
                    | Vacunación contra carbón bacteridiano y revacunar	cada año.
                  li 
                    i.lista-ul__vineta
                    | Vacunación contra la rabia y revacunar cada año.



          .row(numero="6" titulo="Madre 4 a 8 meses")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Palpación. 
                  li 
                    i.lista-ul__vineta
                    | Programación a toro (tercera oportunidad).
                  li 
                    i.lista-ul__vineta
                    | Selección o descarte por programación a toro y/o producción. 
                  li 
                    i.lista-ul__vineta
                    | Conducción al lote de vacas entre 4 a 8 meses de paridas junto con vacas horras en producción. 
                  li 
                    i.lista-ul__vineta
                    | Manejo en semiconfinamiento con rotación de potreros y suplementación con pasto de corte, caña, leguminosa, sal mineralizada, agua y bloque multinutricional.

          .row(numero="7" titulo="Madre 8 a 9 meses")
            .col-md-12
              .row.mod-lista-flecha
                ul.lista-ul
                  li 
                    i.lista-ul__vineta
                    | Control de endo y ectoparásitos.
                  li 
                    i.lista-ul__vineta
                    | Selección y/o descarte, si se descarta va al lote de vacas para descarte y venta.
                  li 
                    i.lista-ul__vineta
                    | Conducción a lote de vacas horas en producción.




</template>

<script>
export default {
  name: 'Tema3',
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
