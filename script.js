$(function(){
  //Global Vars
  const globalState = {
    apps: [
      {
        nombre: 'Calendario',
        icono: './appsIcon/calendario.png',
        type: 'widgetFull',
        dinamico: true
      },
      {
        nombre: 'Clima',
        icono: './appsIcon/clima.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'FaceTime',
        icono: './appsIcon/facetime.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Calendario',
        icono: './appsIcon/calendario.png',
        type: 'app',
        dinamico: true
      },
      {
        nombre: 'Reloj',
        icono: './appsIcon/reloj.png',
        type: 'app',
        dinamico: true
      },
      {
        nombre: 'Fotos',
        icono: './appsIcon/fotos.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Mapas',
        icono: './appsIcon/maps.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Cámara',
        icono: './appsIcon/camara.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Recordatorios',
        icono: './appsIcon/recordatorios.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Facebook',
        icono: './appsIcon/facebook.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Notas',
        icono: './appsIcon/notas.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'App Store',
        icono: './appsIcon/appstore.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Salud',
        icono: './appsIcon/salud.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Mensajes',
        icono: './appsIcon/mensajes.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Configuración',
        icono: './appsIcon/configuracion.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'BBVA',
        icono: './appsIcon/bbva.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'WhatsApp',
        icono: './appsIcon/whatsapp.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Calculadora',
        icono: './appsIcon/calculadora.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Twitter',
        icono: './appsIcon/twitter.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Messenger',
        icono: './appsIcon/messenger.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Brújula',
        icono: './appsIcon/brujula.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Spotify',
        icono: './appsIcon/spotify.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Pinterest',
        icono: './appsIcon/pinterest.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Google Home',
        icono: './appsIcon/home.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Liverpool',
        icono: './appsIcon/liverpool.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Musica',
        icono: './appsIcon/musica.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Netflix',
        icono: './appsIcon/netflix.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Notas de voz',
        icono: './appsIcon/notasvoz.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Wallet',
        icono: './appsIcon/wallet.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Podcasts',
        icono: './appsIcon/podcast.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Archivos',
        icono: './appsIcon/archivos.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Contactos',
        icono: './appsIcon/contactos.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'YouTube',
        icono: './appsIcon/youtube.png',
        type: 'app',
        dinamico: false
      },
      {
        nombre: 'Buscar iPhone',
        icono: './appsIcon/findphone.png',
        type: 'app',
        dinamico: false
      }
    ],
    wrapperApps: {
      appsGrupo: 24,
      grupoActivo: 1,
      medida: $('.wrapperApps').outerWidth(true),
      transform: 0
    },
    dateTime: {
      meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
      dias: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    }
  }
  //EXtended Functions
  $.fn.extend({
    touchMov: function(config){
      config = jQuery.extend({
        mov: 'x',
        threshold: 50,
        movIzq: function () {console.log('movio a la izquierda')},
        movDer: function () {console.log('movio a la derecha')},
        movUp: function () { console.log('movio hacia arriba') },
        movDown: function () { console.log('movio hacia abajo') },
        updateMovX: function (e, mov) { console.log('se esta moviendo en x', mov) },
        updateMovY: function (e, mov) { console.log('se esta moviendo en y', mov) },
        finishMov: function () { console.log('Termino de mover') }
      }, config);
      let el = this;
      let initCoords, movCoords = { x: 0, y: 0 };
      el.mousedown(function (e) {
        initCoords = { x: e.pageX, y: e.pageY };
        el.mousemove(function (e2) {
          movCoords = { x: e2.pageX, y: e2.pageY };
          if (config.mov === 'x') {
            config.updateMovX(e2, (movCoords.x - initCoords.x))
          } else if (config.mov === 'y') {
            config.updateMovY(e2, (movCoords.y - initCoords.y))
          }
        })
        el.mouseup(function (ex) {
          if (config.mov === 'x') {
            (movCoords.x - initCoords.x) > 0 ? config.movDer(ex) : config.movIzq(ex);
          } else if (config.mov === 'y') {
            (movCoords.y - initCoords.y) > 0 ? config.movDown(ex) : config.movUp(ex);
          }
          config.finishMov(ex);
          el.off('mousemove');
          el.off('mouseup');
          el.off('mouseleave');
        })
        el.mouseleave(function (a) {
          if (config.mov === 'x') {
            (movCoords.x - initCoords.x) > 0 ? config.movDer(a) : config.movIzq(a);
          } else if (config.mov === 'y') {
            (movCoords.y - initCoords.y) > 0 ? config.movDown(a) : config.movUp(a);
          }
          config.finishMov(a);
          el.off('mousemove');
          el.off('mouseup');
          el.off('mouseleave');
        })
      })
      return this;
    },
    calendario: function(config){
      config = jQuery.extend({
        fecha: new Date(),
        diaCompleto: false
      }, config);
      let mes = globalState.dateTime.meses[config.fecha.getMonth()];
      let diasMes = new Date(config.fecha.getFullYear(), (config.fecha.getMonth() + 1), 0).getDate();
      let hoy = config.fecha.getDate();
      let primerDia = new Date(config.fecha.getFullYear(), config.fecha.getMonth(), 0).getDay();
      this.append(`
        <div class="mes">
          <p class="mesName">${mes}</p>
          <div class="calendarioTabla">
            <div class="tablaHeader"></div>
            <div class="tablaContent"></div>
          </div>
        </div>`
      );
      let header = this.find('.mes .tablaHeader');
      let content = this.find('.mes .tablaContent');
      globalState.dateTime.dias.map(dia => header.append(`<div class="diaName">${config.diaCompleto ? dia : dia.charAt(0)}</div>`))
      for (var k = 0; k <= primerDia; k++) {
        content.prepend('<div></div>');
      }
      for (let index = 1; index <= diasMes; index++) {
        content.append(`<div class="diaNum ${hoy == index ? 'activo':''}">${index}</div>`);
      }
      return this;
    },
    fechaIcono: function(config){
      config = jQuery.extend({
        fecha: new Date(),
        diaCompleto: false
      }, config);
      let hoy = config.fecha.getDate();
      let dia = globalState.dateTime.dias[config.fecha.getDay()];
      this.append(`<div class="fechaWrapper"><p class="diaNom">${config.diaCompleto ? dia : dia.substring(0, 3)}</p><p class="diaNum">${hoy}</p></div>`)

      return this;
    },
    reloj: function(){
      let tiempo = new Date();
      let numeros = '';
      for (let index = 1; index <= 12; index++) {
        numeros += `<div class="numero" data-num="${index}"></div>`;
      }
      let transformHora = `calc(${(360 / 12 - 360) * tiempo.getHours()}deg + ${(30 / 60) * tiempo.getMinutes()}deg)`;
      let transformMinutos = `calc(6deg * ${tiempo.getMinutes()} + ${(6 / 60) * tiempo.getSeconds()}deg)`;
      let transformSegundos = `calc(6deg * ${tiempo.getSeconds()})`;
      this.append(
        `<div class="relojWrapper">
          <div class="reloj">
            <div class="numeros">${numeros}</div>
            <div class="manecillas">
              <div class="manecilla hora" style="transform: rotate(${transformHora});"><div class="barra"></div></div>
              <div class="manecilla minutos" style="transform: rotate(${transformMinutos});"><div class="barra"></div></div>
              <div class="manecilla segundos" style="transform: rotate(${transformSegundos});"><div class="barra"></div></div>
            </div>
          </div>
        </div>`
      );
      return this;
    },
    hora: function(config) {
      config = jQuery.extend({
        realtime: true
      }, config);
      var hoy = new Date();
      var hora = hoy.getHours();
      if (hora < 10) hora = '0' + hora;
      var minutos = hoy.getMinutes();
      if (minutos < 10) minutos = '0' + minutos;
      if (config.realtime) {
        setInterval(() => {
          hoy = new Date();
          hora = hoy.getHours();
          if (hora < 10) hora = '0' + hora;
          minutos = hoy.getMinutes();
          if (minutos < 10) minutos = '0' + minutos;
          this.empty();
          this.append(`<div class="hora">${hora}:${minutos}</div>`);
        }, 1000);
      }
      this.append(`<div class="hora">${hora}:${minutos}</div>`);
      return this;
    }
  })
  
  //Functions
  function pintarApps(apps, container, containerDots){
    globalState.wrapperApps.grupos = Math.ceil(apps.length / globalState.wrapperApps.appsGrupo);
    let appCount = 1;
    let html = '';
    apps.map((app) => {
      if (appCount == 1) html += '<div class="grupo">';
      let clases = 'app';
      if (app.type == 'widgetFull') clases = clases + ' widgetFull';
      if (app.dinamico && app.type == 'app') clases = `${clases} ${app.nombre.toLowerCase()}Dinamico`;
      html += `<div class="${clases}" data-app="${app.type+app.nombre}">
                <div class="icono" style="${!app.dinamico ? `background-image:url(${app.icono});` : 'background-color:#fff;'}"></div>
                <p class="nombre">${app.nombre}</p>
      </div>`;
      if (appCount == globalState.wrapperApps.appsGrupo) {
        html += '</div>';
        appCount = 1;
        return false;
      }
      app.type == 'widgetFull' ? appCount = appCount + 8 : appCount++;
    })
    if (globalState.wrapperApps.grupos > 1) {
      for (let index = 0; index < globalState.wrapperApps.grupos; index++) {
        containerDots.append(`<div class="dot ${index == 0 ? 'activo':''}"></div>`);
      }
    }
    container.append(html);
  }

  pintarApps(globalState.apps, $('.wrapperApps'), $('.wrapperDots'));
  $('.wrapperApps .app[data-app="widgetFullCalendario"] .icono').append('<div class="eventos"><p>Sin más eventos para hoy</p></div><div class="calendarioWrapper"></div>');
  $('.wrapperApps .app[data-app="widgetFullCalendario"] .icono .calendarioWrapper').calendario();
  $('.wrapperApps .app.calendarioDinamico .icono').fechaIcono();
  $('.wrapperApps .app.relojDinamico .icono').reloj();
  $('.statusBar .wrapperHora').hora();
  $('.lockScreen .lockHora').hora();

  //Touch actions
  $('.lockScreen').touchMov({
    mov: 'y',
    movUp: function(e){
      console.log(e.currentTarget);
      $(e.currentTarget).addClass('hidden');
      $(e.currentTarget).siblings('.appScreen.hidden').removeClass('hidden');
    }
  });

  $('.wrapperApps').touchMov({
    updateMovX: function(e, mov){
      $(e.currentTarget).css({
        transform: `translateX(${globalState.wrapperApps.transform + mov}px)`,
        transition: 'none'
      });
    },
    movIzq: function (e) {
      if (globalState.wrapperApps.grupoActivo != globalState.wrapperApps.grupos) {
        globalState.wrapperApps.grupoActivo++;
      }
      $(e.currentTarget).css({
        transform: `translateX(-${globalState.wrapperApps.medida * (globalState.wrapperApps.grupoActivo - 1)}px)`,
        transition: 'ease all 0.2s'
      });
      $('.wrapperDots .dot').removeClass('activo');
      $('.wrapperDots .dot').eq(globalState.wrapperApps.grupoActivo - 1).addClass('activo');
    },
    movDer: function (e) {
      if (globalState.wrapperApps.grupoActivo != 1) {
        globalState.wrapperApps.grupoActivo--;
        $(e.currentTarget).css({
          transform: `translateX(${globalState.wrapperApps.transform + globalState.wrapperApps.medida}px)`,
          transition: 'ease all 0.2s'
        });
      } else {
        $(e.currentTarget).css({
          transform: `translateX(${globalState.wrapperApps.medida * (globalState.wrapperApps.grupoActivo - 1)}px)`,
          transition: 'ease all 0.2s'
        });
      }
      $('.wrapperDots .dot').removeClass('activo');
      $('.wrapperDots .dot').eq(globalState.wrapperApps.grupoActivo - 1).addClass('activo');
    },
    finishMov: function(e){
      transform = e.currentTarget.style.transform;
      if (transform.length) {
        transform = transform.split('(');
        transform = transform[1].split('px');
        transform = parseInt(transform[0]);
      } else {
        transform = 0;
      }
      globalState.wrapperApps.transform = transform;
    }
  });
})
