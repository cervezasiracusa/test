$(document).ready(function(){
  $(".loader").fadeOut("slow");
    // $(".general-container").hide(); //para probar el loader


  // window.addEventListener('load', () => {
  //       const progress3 = document.getElementById("progress3");
  //     requestAnimationFrame(update3);
  // });

  // let word1 = document.getElementById('word1');
  // let word2 = document.getElementById('word2');
  // let texto = document.getElementsByClassName('textpPresentacion');
  // let texto2 = document.getElementsByClassName('textpPresentacion2');
  let logoPresentacion = document.getElementById('logo-presentacion-2');

  let word1 = document.getElementById('word1');
  let word2 = document.getElementById('word2');
  let texto = document.getElementsByClassName('textpPresentacion');
  let texto2 = document.getElementsByClassName('textpPresentacion2');

  let word11 = document.getElementsByClassName('word11');
  let word22 = document.getElementsByClassName('word22');
  let textoSection = document.getElementsByClassName('textpPresentacion3');


  var menu = document.getElementById("myMenu");
  var closeIcon = document.getElementsByClassName("close-icon");
  closeIcon[0].style.display = "none";
  var menuIcon = document.getElementsByClassName("menu-icons");

  let header = document.getElementsByTagName("header");
  let logo = document.getElementsByClassName("logo-cuadrado-borde-blanco");
  let completeMenu = document.getElementsByClassName("menu");
  let ulMenu = document.getElementById("ulMenu");
  let central = document.getElementsByClassName("central");

  let fondoOscuro = document.getElementsByClassName("fondo-oscuro");
  // let redes = document.getElementById("redes");
  let contactSection = document.getElementById("section-contacto");

  let whiteSection =  document.getElementsByClassName("white-section");
  // let whiteSection1 = $(whiteSection[0]).offset().top;
  // let whiteSection2 = $(whiteSection[1]).offset().top;
  let manoIndicadora = document.getElementsByClassName("mano-indicadora");

  let home = document.getElementById("presentacion2");
  let seccionContacto = document.getElementById("section-contacto");
  let instagram = document.getElementsByClassName("instagram");
  
  // console.log(whiteSection1+" * "+whiteSection2);

  // let indexSection= 0;

    // var indiceGaleria = 0;
    // var vecFoto=[];
    // var vecFotoOver=[];
    // var child ;
    // var vecText=[]; // guarda los textos de cada foto
    // var vecAlt=[];
    // var vecTitle=[];
    // var vecLinkFoto=[];
    // var vecLinkTexto=[];
    // var ul;
    // var li;
    // var pageWidth  = document.documentElement.clientWidth ;
    // let id;
    // let pos;
    // var menuChico;
    // var iconoMenuChico;
    // var iconoCerrarMenuChico;
    // let menu = document.getElementById("menu");
    // let sombra = document.getElementById("fondo-sombra");
    // var w = document.getElementsByClassName("dataMenu");

    // let sections = document.getElementsByClassName('myParallax');
    // let noParallax=0; // 0 hacer parallax - 1 no hacerlo porque esta usando el menu

    // let animado = document.querySelectorAll(".animado");
    // let animado1;
    // let animado2 = document.querySelectorAll(".animado2");
    // let animado3 = document.querySelectorAll(".animado3");
    // let animado4 = document.querySelectorAll(".animado4");
     
  


// let parallax = document.getElementsByClassName('myParallax');
// let footer = document.getElementsByTagName('footer');
// let contenedorParallax = document.getElementsByClassName('contenedorgrandeJB');
// let totalHeight = contenedorParallax[0].getBoundingClientRect().height;
// let totalHeightInicial = contenedorParallax[0].getBoundingClientRect().height;

// function update3() {
//   // progress2.style.height = (100-((window.scrollY)/(document.body.scrollHeight - window.innerHeight) *100)) + '%' ;
//   progress3.style.height = (((window.scrollY)/(document.body.scrollHeight - window.innerHeight) *100)) + '%' ;
//   requestAnimationFrame(update3);
// }

// screenWidthControl(); 
    presentacion();
    presentacion2();
    setInterval(presentacion, 10000);
    setInterval(presentacion2, 10000);

    window.addEventListener('scroll', function()  { resizeLogo(); });
    window.addEventListener('scroll', function()  { verificarInstagram(); });
   

    // console.log(home.clientHeight);

    // $(window).scroll(function (e) {
    //   let windowTop = $(this).scrollTop();
    //   if (windowTop >= $($(this).attr('href')).offset().top - 50){
    //     // let target = 
    //   }

    //   // $('#myMenu ul li a').each(function (event) {
    //   //   if (windowTop >= $($(this).attr('href')).offset().top - 50) {
    //   //     // $('#myMenu ul li a').removeClass('activo');
    //   //     var children = this.childNodes;
    //   //     console.log(children);
    //   //     children[0].src= "img/camello-amarillo-50px.png";
    //   //     children[1].src= "img/flecha-larga.png";
    //   //     children[1].style.width= "3rem";
    //   //     children[2].style.color = "yellow";
    //   //     // $(this).addClass('activo');
    //   //   }
    //   // }); // fin function
    // }); //fin scroll


    $("#ulMenu li").hover(function(){
      if (this.hasChildNodes()) {
        var children = this.childNodes;
        children[0].src= "img/camello-amarillo-50px.png";
      }
    });

    $("#ulMenu li").mouseleave(function(){
      if (this.hasChildNodes()) {
        var children = this.childNodes;
        children[0].src= "img/camello-blanco-50px.png";
      }
    });

    $('.menu-icons').on('click', function(){    //muestra/oculta el boton menu hamburguesa
      header[0].style.zIndex = "200000";
      menu.style.display =  "block";
      menuIcon[0].style.display =  "none";
      closeIcon[0].style.display = "block";

      menu.classList.remove("menuLateralDesaparece");
      menu.classList.remove("menuLateralIzqDesaparece");
      menu.classList.remove("menuLateral");
      menu.classList.remove("menuLateralIzq");

      pageWidth  = document.documentElement.clientWidth ;

      // if(($(window).scrollTop() > $(window).height()) || (pageWidth <= 1400)) {
        central[0].style.backgroundColor = "rgba(5, 5, 5, 0.7)";
        menu.classList.add("menuLateralIzq");
        ulMenu.style.backgroundColor = "transparent";
      // }else{
      //   menu.classList.add("menuLateral");
      //   // if ($(window).scrollTop() >= contactSection.scrollTop ) {
      //   //   // console.log(central[0]);
      //   //   $(".contenido-contacto").attr("z-index","1");
      //   //   console.log($(".contenido-contacto").classList);

      //   // }
      // }
      
      // w[0].style.display = "flex";
      // menu.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, .5)";
      // sombra.style.display =  "block";
      // // myFunction();
      // colorIconoMenu();
      // setTimeout(function(){ menu.style.backgroundColor = "rgb(0,102,115)";}, 500);
    });

    $('.close-icon').on('click', function(){    //muestra/oculta el boton menu hamburguesa
      header[0].style.zIndex = "1000";
      menu.classList.remove("menuLateralDesaparece");
      menu.classList.remove("menuLateralIzqDesaparece");

      if ($(window).scrollTop() > $(window).height()) {
        menu.classList.remove("menuLateral");
        menu.classList.add("menuLateralIzqDesaparece");
      }else{
        menu.classList.remove("menuLateralIzq");
        menu.classList.add("menuLateralDesaparece");
      }

      setTimeout(function (){  menu.style.display =  "none"; central[0].style.backgroundColor = "transparent"; }, 999); 
      // setTimeout(function (){  central[0].style.backgroundColor = "transparent"; }, 1000); 
      menuIcon[0].style.display =  "block";
      closeIcon[0].style.display = "none";
      ulMenu.style.backgroundColor = "rgba(5, 5, 5, 0.5);"
     });

    
    $("#ulMenu li a").on('click', function(e){
      e.preventDefault(); //
      goToSection($(this));
    });

    $(".variety-button a").on('click', function(e){
      e.preventDefault(); //
      goToSection($(this));
    });


    $(".seccion-derecha-variedad").hover(function(){
      for (let index = 0; index < fondoOscuro.length; index++) {
        fondoOscuro[index].style.opacity = 1;
      }
      for (let index = 0; index < manoIndicadora.length; index++) {
        manoIndicadora[index].style.opacity = 0;
      }
    });

    $(".seccion-derecha-variedad").mouseleave(function(){
      for (let index = 0; index < fondoOscuro.length; index++) {
        fondoOscuro[index].style.opacity = 0;
      }
      for (let index = 0; index < manoIndicadora.length; index++) {
        manoIndicadora[index].style.opacity = 1;
      }
    });

    function verificarInstagram() {
      console.log(seccionContacto.getBoundingClientRect().top);
      // if (($(window).scrollTop() >= seccionContacto.getBoundingClientRect().top) ) { 
        if (seccionContacto.getBoundingClientRect().top <= document.documentElement.clientHeight ) { 
          instagram[0].style.opacity= "0";
        }else{
          instagram[0].style.opacity= "1";
        }
    }


   function goToSection(object){
    header[0].style.zIndex = "1000";
      
      //var target = $(this).attr('href'); //
      var target = object.attr('href'); //
      var target = target.slice(1);
      var section = document.getElementById(target);
      var offset = section.getBoundingClientRect().top + window.scrollY;

      menu.classList.remove("menuLateralDesaparece");
      menu.classList.remove("menuLateralIzqDesaparece");
      menu.classList.remove("menuLateralIzq");
      menu.classList.remove("menuLateral");
      // if ($(window).scrollTop() > $(window).height()) {
      //   menu.classList.add("menuLateralIzqDesaparece");
      // }else{
      //   menu.classList.add("menuLateralDesaparece");
      // }


      // setTimeout(function (){  menu.style.display =  "none"; central[0].style.backgroundColor = "transparent";}, 999); 
      // setTimeout(function (){  central[0].style.backgroundColor = "transparent"; }, 1000); 
      
      central[0].style.backgroundColor = "transparent";
      ulMenu.style.backgroundColor = "rgba(5, 5, 5, 0.5)";
      menu.style.display =  "none"; 
      menuIcon[0].style.display =  "block";
      closeIcon[0].style.display = "none";

      $("html,body").animate({scrollTop:offset},1000);
      // setTimeout(function(){resizeLogo();}, 1000);
      
      // verificaIndexSection(target);  
      resizeLogo();
      presentacionSection();    
    };



    // function verificaIndexSection(target) {
    //   indexSection = 0;
    //   switch (target) {
    //     case "section-empresa":
    //       indexSection = 0;
    //       break;
    //     case "section-historia":
    //       indexSection = 1;
    //       break;
    //     case "section-proceso":
    //       indexSection = 2;
    //       break;
    //     case "section-variedades":
    //       indexSection = 3;
    //       break;
    //     case "section-contacto":
    //       indexSection = 4;
    //       break;
    //     default:
    //       indexSection = 0;
    //       break;
    //   }
    //   if (target == "top") {
    //     presentacion();
    //   }else{
    //     presentacionSection();
    //   }
      
    // };

    function presentacion() {
      // //salir de Izq
      for (let index = 0; index < texto.length; index++) {
        texto[index].style.opacity = 1;

        texto[index].animate(
          [
            { transform: "translateX(-400px)" },
            { transform: "translateX(0)" },
          ],
          { duration: 1000 + index * 1000 }
        ); //iterations: Infinity
      }
      // //salir de Dre
      for (let index = 0; index < texto2.length; index++) {
        texto2[index].style.opacity = 1;

        texto2[index].animate(
          [
            { transform: "translateX(400px)" },
            { transform: "translateX(00)" },
          ],
          { duration: 1000 + index * 1000 }
        );
      }
      //subirElemento
      word1.style.opacity = 1;
      word2.style.opacity = 1;

      word1.animate(
        [
          { transform: "translateX(400px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 1000 + 2 * 1000 }
      );
      word2.animate(
        [
          { transform: "translateX(-400px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 1000 + 3 * 1000 }
      );
      // presentacionInversa();
    }

    function presentacion2() {
      // logo central se achica
      // for (let index = 80; index > 25; index--) {
      //   logoPresentacion.style.width = index+"%";
      //   logoPresentacion.animate(
      //     [
      //       { transform: "translateX(0)" },
      //       { transform: "translateX(0)" },
      //     ],
      //     { duration: 1000 } ); 
      // };
      // logoPresentacion.animate(
      //   [
      //     { transform: "translateX(300px)" },
      //     { transform: "translateX(0)" },
      //   ],
      //   { duration: 1000 }
      // ); //iterations: Infinity
      // logo sale desde el centro
      // logoPresentacion.animate(
      //   [
      //     { transform: "translateX(300px)" },
      //     { transform: "translateX(0)" },
      //   ],
      //   { duration: 1000 }
      // ); //iterations: Infinity
       
      // //salir de Izq
      for (let index = 0; index < texto.length; index++) {
        texto[index].style.opacity = 1;

        texto[index].animate(
          [
            { transform: "translateX(-800px)" },
            { transform: "translateX(0)" },
          ],
          { duration: 1000 + index * 1000 }
        ); //iterations: Infinity
      }
      // //salir de Dre
      for (let index = 0; index < texto2.length; index++) {
        texto2[index].style.opacity = 1;

        texto2[index].animate(
          [
            { transform: "translateX(400px)" },
            { transform: "translateX(00)" },
          ],
          { duration: 1000 + index * 1000 }
        );
      }
      //subirElemento
      word1.style.opacity = 1;
      word2.style.opacity = 1;

      word1.animate(
        [
          { transform: "translateX(400px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 1000 + 3 * 1000 }
      );
      word2.animate(
        [
          { transform: "translateX(-600px)" },
          { transform: "translateX(0)" },
        ],
        { duration: 1000 + 4 * 1000 }
      );
      // presentacionInversa();
    }


    function presentacionInversa() {
      // //volver a Izq
      for (let index = 0; index < texto.length; index++) {
        // texto[index].style.opacity = 1;

        texto[index].animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(-400px)" },
          ],
          { duration: 1000 + index * 1000 }
        ); //iterations: Infinity
      }
      // //salir de Dre
      for (let index = 0; index < texto2.length; index++) {
        texto2[index].style.opacity = 1;

        texto2[index].animate(
          [
            { transform: "translateX(0)" },
            { transform: "translateX(400px)" },
          ],
          { duration: 1000 + index * 1000 }
        );
      }
      //subirElemento
      word1.style.opacity = 1;
      word2.style.opacity = 1;

      word1.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(400px)" },
        ],
        { duration: 1000 + 2 * 1000 }
      );
      word2.animate(
        [
          { transform: "translateX(0)" },
          { transform: "translateX(-400px)" },
        ],
        { duration: 1000 + 3 * 1000 }
      );
    }

    function presentacionSection() { //indexSecc
      // //salir de Izq
      for (let index = 0; index < textoSection.length; index++) {
        textoSection[index].style.opacity = 1;

        textoSection[index].animate(
          [{ transform: "translateX(-400px)" }, { transform: "translateX(0)" }],
          { duration: 1000 + 1.5 * 1000 }
        ); //iterations: Infinity
        //subirElemento
        word11[index].style.opacity = 1;
        word22[index].style.opacity = 1;

        word11[index].animate(
          [{ transform: "translateX(400px)" }, { transform: "translateX(0)" }],
          { duration: 1000 + 1 * 1000 }
        );
        word22[index].animate(
          [{ transform: "translateX(-400px)" }, { transform: "translateX(0)" }],
          { duration: 1000 + 1.5 * 1000 }
        );
      }
      
      
    }


    function resizeLogo() {

      header[0].style.zIndex = "1000";
      // if (( $(window).scrollTop()  == whiteSection1 ) || ( $(window).scrollTop()  == whiteSection2 )){
      // if (( $(window).scrollTop()  >= whiteSection1-10 && $(window).scrollTop()  < whiteSection1+$(window).height()) || ( $(window).scrollTop() >= whiteSection2-10 && $(window).scrollTop()  < whiteSection2+$(window).height())){

      // if (((whiteSection[0].getBoundingClientRect().top > 0) && (whiteSection[0].getBoundingClientRect().top < document.documentElement.clientHeight)) || ((whiteSection[1].getBoundingClientRect().top >= 0) && (whiteSection[1].getBoundingClientRect().top <= document.documentElement.clientHeight ))) { 

      // if (((whiteSection[0].getBoundingClientRect().top <= 0) ) || ((whiteSection[1].getBoundingClientRect().top <= 0))) { 

      // if (((whiteSection[0].getBoundingClientRect().top <= 0) && (whiteSection[0].getBoundingClientRect().top > document.documentElement.clientHeight*(-1))) || ((whiteSection[1].getBoundingClientRect().top <= 0) && (whiteSection[1].getBoundingClientRect().top > document.documentElement.clientHeight *(-1)))) { 

      if (((whiteSection[0].getBoundingClientRect().top <= 10) && (whiteSection[0].getBoundingClientRect().top > whiteSection[0].getBoundingClientRect().height*(-1))) || ((whiteSection[1].getBoundingClientRect().top <= 10) && (whiteSection[1].getBoundingClientRect().top > whiteSection[1].getBoundingClientRect().height*(-1)))) { 

      
        menuIcon[0].style.color = "orangered";
        closeIcon[0].style.color = "orangered";
      }else{
        menuIcon[0].style.color = "white";
        closeIcon[0].style.color = "white";
      }

      menu.classList.remove("menuLateralDesaparece");
      menu.classList.remove("menuLateralIzqDesaparece");
      menu.classList.remove("menuLateralIzq");
      menu.classList.remove("menuLateral");
      ulMenu.style.backgroundColor = "rgba(5, 5, 5, 0.5);"
      // logo[0].style.display= "none";

      pageWidth  = document.documentElement.clientWidth ;
      // if (pageWidth > 1400) {
      //   // if (($(window).scrollTop() < -1000) ) { //section active is HOME  ---  ($(window).height()-100)
      //   //   // logo[0].style.display= "none";
      //   //   completeMenu[0].style.left = "calc(50% - 1.7rem)";
      //   //   completeMenu[0].style.top = "33%";
      //   //   completeMenu[0].style.width =  "2.5rem";    //"100%";
      //   //   completeMenu[0].style.height =  "max-content";
      //   //   ulMenu.style.width = "30vw";
      //   //   menu.style.height = "max-content"; 
      //   //   central[0].style.backgroundColor = "transparent";
      //   //   // redes.style.display = 'block';
      //   // }else{     
      //     // logo[0].style.display= "block";                            //section active is NOT HOME
      //     // logo[0].style.width= "50%";
      //     completeMenu[0].style.left = "10px";
      //     completeMenu[0].style.top = "10px";
      //     completeMenu[0].style.width = "100%";
      //     completeMenu[0].style.height = "100%";
      //     ulMenu.style.width = "100%";
      //     ulMenu.style.height = "100%";
      //     menu.style.height = "100%";
      //     // redes.style.display = 'none';
      //   // }
      //   // if (($(window).scrollTop() < home.clientHeight) ) { //document.documentElement.clientHeight
      //   //   console.log("HOME");
      //   //   logo[0].style.display= "none";
      //   // }else{
      //   //   logo[0].style.display= "block";
      //   //   logo[0].style.width= "50%";
      //   // }
      //  }else{
        screenWidthControl()
      //  }
    };


    function screenWidthControl() {
      pageWidth  = document.documentElement.clientWidth ;
      // if (($(window).scrollTop() < home.clientHeight) ) {
      //   console.log("HOME");
      //   logo[0].style.display= "none";
      // }else{
      //   logo[0].style.display= "block";
      //   logo[0].style.width= "50%";
      // }
      // if (pageWidth <= 1400) {
        completeMenu[0].style.left = "10px";
        completeMenu[0].style.top = "10px";
        completeMenu[0].style.width = "100%";
        completeMenu[0].style.height = "100%";
        ulMenu.style.width = "100%";
        ulMenu.style.height = "100%";
        menu.style.height = "100%";
        // redes.style.display = 'none';
    // }
  };
   


// // console.log(totalHeight+"**");

// window.addEventListener('scroll',ScrollParallax);  // EFECTO PARALLAX

// function ScrollParallax() {
  
//   // e.preventDefault();

//   if (noParallax == 0) {
//     let scrollTop = document.documentElement.scrollTop;
//     for (let index = 0; index < parallax.length; index++) {
//         if(parallax[index].getBoundingClientRect().top >= 0) {
//             parallax[index].style.transform = 'translateY('+ scrollTop*-1 + 'px)'; // efecto parallax
//             contenedorParallax[0].style.height = totalHeight - window.pageYOffset +"px";  // redimensionar el contenedor - restar superposicion
//         }
//     }
   
//   }else{   // acomodar las secciones - sacar superposicion
//     // totalHeight = parallax[0].getBoundingClientRect().length;
//     // for (let index = 1; index < parallax.length; index++) {
//     //   parallax[index].style.top = (parallax[index-1].getBoundingClientRect().top + parallax[index-1].getBoundingClientRect().length);
//     //   totalHeight+= parallax[index].getBoundingClientRect().length;
      
//     // }
//     setTimeout(function(){noParallax=0;}, 1500);
    
//   }
// }




  
    // window.addEventListener('resize', sizeWindow);
   
    
    // window.addEventListener('scroll', function()  {
    //   entrarDerecha();
    // });
    // window.addEventListener('scroll', function()  {
    //   entrarIzq();
    // });
    // window.addEventListener('scroll', function()  {
    //   subirElemento();
    // });
    // window.addEventListener('scroll', function()  {
    //   aparecerDelCentro();
    // });
    // window.addEventListener('scroll', function()  {
    //   entrarDerechaGaleria();
    // });
   

    
    // Efecto Rebote del menu

    // $("nav a").on('click', function(){
    //     var target = $(this).attr('href');

    //     switch (target) {
    //       case "#section0":

    //           $(target).animate({paddingTop: '8rem'},1000);
               
    //           // for (let index = 0; index < animado1.length; index++) {
    //           //   animado1[index].animate([
    //           //     { transform: 'translateX(400px)' },
    //           //     { transform: 'translateX(0)' }
    //           //   ], {duration: 1000+index*1000});
    //           // }
    //           // for (let index = 0; index < animado2.length; index++) {
    //           //   animado2[index].animate([
    //           //     { transform: 'translateX(-500px)' },
    //           //     { transform: 'translateX(0)' }
    //           //   ], {duration: 1000+index*1500});
    //           // }

    //           break;
    //       case "#section1":
    //           $(target).animate({paddingTop: '6rem'},1000);

    //           // animado3[1].animate([
    //           //   { transform: 'scaleX(0)' },
    //           //   { transform: 'scaleX(1)' }
    //           // ], {duration: 1000});

    //            break;
    //       case "#section2":
    //           $(target).animate({paddingTop: '8rem'},1000);

    //           // for (let index = 0; index < animado.length; index++) {
    //           //   animado[index].animate([
    //           //     { transform: 'translateY(300px)' },
    //           //     { transform: 'translateY(0)' }
    //           //   ], {duration: 1000+index*1000});
    //           // }

              

    //           break;
    //       case "#section3":
    //             $(target).animate({paddingTop: '8rem'},1000);

    //             // for (let index = 0; index < animado.length; index++) {
    //             //   animado[index].animate([
    //             //     { transform: 'translateY(300px)' },
    //             //     { transform: 'translateY(0)' }
    //             //   ], {duration: 1000+index*1000});
    //             // }
 
    //             break;
    //       case "#sectionUltima":
    //           $(target).animate({paddingTop: '8rem'},1000);
    //           break;
                    
    //       default:
    //         $(target).animate({paddingTop: '8rem'},1000);
    //         break;
    //     }
    // });
    

//     $("#ulMenu button").on('click', function(){
//       // nav.click(function(e){
//       //   e.preventDefault();
      
//       // e.preventDefault();
      
      

//       noParallax = 1;

//       //reacomodo el container - elimino superposiciones - redimensiono el container grande

//       // totalHeight = parallax[0].getBoundingClientRect().length;
//       // window.scroll(0, 0);
//       // for (let index = 1; index < parallax.length; index++) {
//       //   console.log("ANTES * parallax["+index+"] top "+ parallax[index].getBoundingClientRect().top);
        
//       //   let posicionarEn = (parallax[index-1].getBoundingClientRect().top + parallax[index-1].getBoundingClientRect().length);
        
//       //   parallax[index].style.transform = 'translateY('+ posicionarEn + 'px)';
//       //   // parallax[index].style.offset = posicionarEn + "px";

//       //   console.log("DESPUES * parallax["+index+"] top "+ parallax[index].getBoundingClientRect().top);
//       //   totalHeight+= parallax[index].getBoundingClientRect().length;
//       // }
//       // contenedorParallax[0].style.height = totalHeight  +"px";



//       //reacomodo el container - elimino superposiciones - redimensiono el container grande

//       // window.scroll(0, 0);
//       // for (let index = 1; index < parallax.length; index++) {
//       //   let mover =  parallax[index].getBoundingClientRect().top;
//       //   parallax[index].style.transform = 'translateY('+  mover*-1 + 'px)';
//       //   parallax[index].style.transform = 'translateY('+  ($(window).height() * index) + 'px)';
//       // }
//       // contenedorParallax[0].style.height = totalHeightInicial  +"px";

  

//       // console.log("voy a : "+nameSection+" siguiente: "+nameSectionProx);

      
//       // let delta = $(window).height();
//       // let container = document.getElementsByClassName("contenedorgrandeJB");

//       // console.log("voy a : "+target+" siguiente: "+sectionProx);  // console.log(target);  // console.log(page);
      
      

//       // let scrollTop = document.documentElement.scrollTop;

//       // let delta2 = Math.round(page.getBoundingClientRect().top);
//       // console.log(page.getBoundingClientRect().top + " ir a "+delta2);


//       // window.scroll(0, delta2);
//       // window.scrollTo( 0, delta2-delta );

//       // voy al destino

//       var nameSection = $(this).attr('name');
//       var target = "#"+nameSection;
//       let page = document.getElementById(nameSection);

//       // var nameSectionProx = $(this).attr('value');
//       // var sectionProx = "#"+nameSectionProx;
//       // let pageProx = document.getElementById(nameSectionProx);
      
//       let destino = Math.round( $(target).offset().top);   // scrollTop:   page.getBoundingClientRect().top
//       $('html, body').animate({ scrollTop: destino }, 500);

//     // if (nameSectionProx != "") {
//       // console.log($(target).offset().top +" * "+ document.documentElement.clientHeight);

// // console.log("ir a "+target);

//       // if (destino != 0) { // no soy la seccion HOME

//         let initial = 0;
//         switch (nameSection) {
//           case "section00":
//             initial = 0;
//             break;
//           case "section0":
//             initial = 1;
//             break;
//           case "section1":
//             initial = 2;
//             break;
//           case "section2":
//             initial = 3;
//             break;
//           case "section3":
//             initial = 4;
//             break;
//           case "sectionUltima":
//             initial = 5;
//             break;
//           default:
//             break;
//         }
//         console.log("soy "+nameSection+" * "+initial);
//         positioAnte = 0;

//         for (let index = initial; index < parallax.length-1; index++) {

//           console.log("indice: "+index+" estoy en  "+ $(parallax[index]).offset().top );

//           var nameSectionProx = $(this).attr('value');

//           if (nameSectionProx != "") {
//             let tamVentana = Math.round($(window).height());
//             var sectionProx = "#"+nameSectionProx;
//             let pageProx = document.getElementById(nameSectionProx);
//             let myPosition= Math.round(pageProx.getBoundingClientRect().top);
//             if (myPosition % tamVentana != 0) {
//               console.log("proximo mal ubicado"+ myPosition % tamVentana);
//               let correctPosition = Math.round($(parallax[index]).offset().top + (tamVentana * index));  
         
//               console.log(" siguiente: "+sectionProx);  // console.log(target);  // console.log(page);
//               let actualPosition= Math.round(pageProx.getBoundingClientRect().top);
          
//               if ((actualPosition - correctPosition) > 1 ||  (actualPosition - correctPosition) < -1) {
//                 console.log("prox mal ubicado - está en "+actualPosition+"deberia estar en: "+correctPosition);
//                 // console.log("next deberia estar en : "+correctPosition+" pero esta en: "+pageProx.getBoundingClientRect().top);
    
//                 let diferencia = correctPosition - actualPosition;
//                 pageProx.style.transform = 'translateY('+ diferencia + 'px)';
    
//               }
//              }
//           }
        
      

//         };

     
  // });


    // Fin Efecto Rebote

    // menuChico = document.getElementById("myMenu");
    // iconoMenuChico = document.getElementsByClassName("toggle-menu");
    // iconoCerrarMenuChico = document.getElementsByClassName("tres-lineas");
    // if (iconoMenuChico[0].style.display =  "block") {
    //   iconoCerrarMenuChico[0].style.display = "none";
    // }
    
    

    
  

     // var nav = $("#ulMenu li");
// var contents = $("#contents > div");

// nav.click(function(e){
// 	e.preventDefault();
// 	var target = $(this);
// 	var index = target.index();
// 	//alert(index);
// 	var section = contents.eq(index);
// 	var offset = section.offset().top;
// 	//alert(offset);
// 	$(".offset_top").text(offset);
	
// 	$("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
// });




    //   $(".tres-lineas").on('click', function(){
    //     var x = document.getElementById("myMenu");
    //     var y = document.getElementsByClassName("toggle-menu");

    //     x.classList.add("menuLateralDesaparece");
    //     x.classList.remove("menuLateral");

    //     setTimeout(function(){ x.style.display = "none";}, 500);
      
    //     y[0].style.display = "block";
    //     $(".tres-lineas")[0].style.display = "none";
        
    //      menu.style.backgroundColor = "transparent";
    //     menu.style.boxShadow = "none";
    //     sombra.style.display =  "none";
    //     w[0].style.display = "none";
    // });

    
 
    // $("#left").on('click', function(){
    //   indiceGaleria -=1;
    //   if (indiceGaleria < 0)  indiceGaleria = li.length-1;
    //   desplazarIzqGaleria();
    // });

    // $("#right").on('click', function(){
    //   indiceGaleria +=1;
    //   if (indiceGaleria >= li.length) indiceGaleria = 0;
    //   desplazarDerGaleria();
    // });

    

    
    
    
    function subirElemento() {
       
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado.length; index++) {
        if(animado[index].getBoundingClientRect().top < screenSize) {

          setTimeout(function(){ 
            animado[index].style.opacity = 1;
            animado[index].classList.add('subirElemento');
          }, 500+(index*500));

          // animado[index].style.opacity = 1;
          // animado[index].classList.add('subirElemento');
        } else {
          animado[index].style.opacity = 0;
          animado[index].classList.remove("subirElemento");
        }
      }
    }

    

      function entrarDerecha() {
        // console.log("entrar derecha");
        let screenSize = window.innerHeight;
        animado1 = document.querySelectorAll(".animado1");
        for (let index = 0; index < animado1.length; index++) {
          if(animado1[index].getBoundingClientRect().top < screenSize) {
            animado1[index].style.opacity = 1;
            animado1[index].classList.add('entrarDerecha');
          } else {
            animado1[index].style.opacity = 0;
            animado1[index].classList.remove("entrarDerecha");
          }
        }
  
        // let scrollTop = document.documentElement.scrollTop;
         
        // for (let index = 0; index < animado1.length; index++) {
          
        //   let alturaAnimado =  animado1[index].offsetTop;
        //   if (alturaAnimado -500 < scrollTop) {
        //     animado1[index].style.opacity = 1;
        //     animado1[index].classList.add("entrarDerecha");
        //   }else{
        //     animado1[index].style.opacity = 0;
        //     animado1[index].classList.remove("entrarDerecha");
        //   }
        // }

      // document.getElementById('tituloContacto').scrollTop += 10;
      // document.getElementById('tituloContacto').animate() += 10;
    }
  
    function entrarDerechaGaleria() {
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado4.length; index++) {
        if(animado4[index].getBoundingClientRect().top < screenSize) {

          setTimeout(function(){ 
            animado4[index].style.opacity = 1;
            animado4[index].classList.add('entrarDerecha');
          }, 1000+(index*1000));

          
        } else {
          animado4[index].style.opacity = 0;
          animado4[index].classList.remove("entrarDerecha");
        }
      }
    }

    function entrarIzq() {
      let screenSize = window.innerHeight;
        for (let index = 0; index < animado2.length; index++) {
          if(animado2[index].getBoundingClientRect().top < screenSize) {
            animado2[index].style.opacity = 1;
            animado2[index].classList.add('entrarIzq');
          } else {
            animado2[index].style.opacity = 0;
            animado2[index].classList.remove("entrarIzq");
          }
        }
    }
  

    function aparecerDelCentro() {
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado3.length; index++) {
        if(animado3[index].getBoundingClientRect().top < screenSize) {
          animado3[index].style.opacity = 1;
          animado3[index].classList.add('aparecerDelCentro');
        } else {
          animado3[index].style.opacity = 0;
          animado3[index].classList.remove("aparecerDelCentro");
        }
      }
    }

    


    function myFunction() {
      var x = document.getElementById("myMenu");
      // var x = document.getElementById("ulMenu");
      // x.style.height = 0;
      x.style.display =  ( x.style.display == "none" ? "block" : "none" );
      // efectoMenu(x);
    }


    function resguardoGaleria() {
      ul=document.getElementById('galeria');
      li=ul.getElementsByTagName('li');
      
      for(let i=0;i<li.length;i++){
        if(li[i].parentNode==ul){
          vecFoto.push(document.getElementById('imagen'+i).src);
          let name = i.toString()+i.toString();
          vecFotoOver.push(document.getElementById('imagen'+name).src);
          vecAlt.push(document.getElementById('imagen'+i).alt);
          vecTitle.push(document.getElementById('imagen'+i).title);
          vecText.push(document.getElementById('text'+i+"1Galeria").textContent);  
          vecLinkFoto.push(document.getElementById('link'+i+"1Galeria").href);
          vecLinkTexto.push(document.getElementById('link'+i+"2Galeria").href);
        }   
      }
    }

    
  
    
    function colorIconoMenu() {
        var x = document.getElementById('menu');
        var y = document.getElementById('menu-line');
        if ( x.style.display == "none") {
          y.style.backgroundColor = "white";
          x.style.backgroundColor = "transparent";
         
        }else{
          y.style.backgroundColor = "red";
        }
    }

  
    function sizeWindow() {
      pageWidth  = document.documentElement.clientWidth ;
  
      if (pageWidth >1280) {
        document.getElementById('myMenu').style.display = "block";
        menu.style.backgroundColor = "rgb(0,102,115)";

       } else {
        document.getElementById('myMenu').style.display = "none";
        menu.style.backgroundColor = "transparent";
       }
    }

    

    function desplazarDerGaleria() {
      
      for(let i=0;i<vecFoto.length;i++){
          let aux;
        
          if (indiceGaleria+i < vecFoto.length) {
             aux = indiceGaleria+i;
          }else{
              aux = indiceGaleria+i - vecFoto.length;
          }
          document.getElementById('imagen'+i).src = vecFoto[aux];
          let name = i.toString()+i.toString();
          document.getElementById('imagen'+name).src = vecFotoOver[aux];
          document.getElementById('imagen'+i).alt = vecAlt[aux];
          document.getElementById('imagen'+i).title = vecTitle[aux];
          document.getElementById('text'+i+'1Galeria').textContent = vecText[aux];
          document.getElementById('link'+i+'1Galeria').href = vecLinkFoto[aux];
          document.getElementById('link'+i+'2Galeria').href = vecLinkTexto[aux];
        }
      }


         function desplazarIzqGaleria() {
          let x = indiceGaleria;
          for(let i=0;i<vecFoto.length;i++){
            
              if (x >= vecFoto.length) x = 0;

              document.getElementById('imagen'+i).src = vecFoto[x];
              let name = i.toString()+i.toString();
              document.getElementById('imagen'+name).src = vecFotoOver[x];
              document.getElementById('imagen'+i).alt = vecAlt[x];
              document.getElementById('imagen'+i).title = vecTitle[x];
              document.getElementById('text'+i+'1Galeria').textContent = vecText[x];
              document.getElementById('link'+i+'1Galeria').href = vecLinkFoto[x];
              document.getElementById('link'+i+'2Galeria').href = vecLinkTexto[x];
              x +=1;  
          }           
        }

   

        
        

       


/***********************PRUEBA BORRAR */
// var nav = $("#nav ul li");
// var contents = $("#contents > div");

// nav.click(function(e){
// 	e.preventDefault();
// 	var target = $(this);
// 	var index = target.index();
// 	//alert(index);
// 	var section = contents.eq(index);
// 	var offset = section.offset().top;
// 	//alert(offset);
// 	$(".offset_top").text(offset);
	
// 	$("html,body").animate({scrollTop:offset},600,"easeInOutExpo");
// });


// $(window).scroll(function(){
// 	var wScroll = $(this).scrollTop();
	
// 	$(".scroll_top").text(wScroll);
	
// 	if(wScroll >= contents.eq(0).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(0).addClass("active");
// 	}
// 	if(wScroll >= contents.eq(1).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(1).addClass("active");
// 	}
// 	if(wScroll >= contents.eq(2).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(2).addClass("active");
// 	}
// 	if(wScroll >= contents.eq(3).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(3).addClass("active");
// 	}
// 	if(wScroll >= contents.eq(4).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(4).addClass("active");
// 	}
// 	if(wScroll >= contents.eq(5).offset().top){
// 		nav.removeClass("active");
// 		nav.eq(5).addClass("active");
// 	}
	
// });




/************************** */
    
});

