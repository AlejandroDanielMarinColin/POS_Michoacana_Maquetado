(function () {
  "use strict";

  const iconos = {
    inicio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/></svg>',
    venta: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H6"/></svg>',
    historial: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 12a9 9 0 1 0 3-6.7"/><path d="M3 4v5h5"/><path d="M12 7v5l3 2"/></svg>',
    gastos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4"/><path d="M9 11h6M9 15h6"/></svg>',
    reabastecimiento: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h11v10H4z"/><path d="M15 10h3l2 3v4h-5z"/><circle cx="8" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
    inventario: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 8 4-8 4-8-4z"/><path d="m4 7 8 4 8-4v10l-8 4-8-4z"/><path d="M12 11v10"/></svg>',
    caja: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 9h18"/><path d="M7 14h4"/></svg>',
    productos: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5 12 4l8 4.5v7L12 20l-8-4.5z"/><path d="m4 8.5 8 4.5 8-4.5"/><path d="M12 13v7"/></svg>',
    sucursales: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16"/><path d="M6 10v10h12V10"/><path d="m5 10 1.5-5h11L19 10"/><path d="M9 14v6M15 14v6"/></svg>',
    usuarios: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.7-3 2.8-5 5.5-5s4.8 2 5.5 5"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 14.5c2.5.2 4.2 1.7 5 4"/></svg>',
    reportes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
    auditoria: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h5"/><path d="m15.5 15.5 1.5 1.5 3-3"/></svg>',
    configuracion: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.86 2.86-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V21h-4v-.1A1.7 1.7 0 0 0 8.6 19.4a1.7 1.7 0 0 0-1.88.34l-.06.06-2.86-2.86.06-.06A1.7 1.7 0 0 0 4.6 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H3v-4h.1A1.7 1.7 0 0 0 4.6 8.6a1.7 1.7 0 0 0-.34-1.88l-.06-.06L7.06 3.8l.06.06A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V3h4v.1A1.7 1.7 0 0 0 15.4 4.6a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.86 2.86-.06.06A1.7 1.7 0 0 0 19.4 9c.1.4.3.7.6 1 .3.3.7.4 1.1.4h.1v4h-.1c-.4 0-.8.1-1.1.4-.3.3-.5.6-.6 1Z"/></svg>'
  };

  const gruposMenu = [
    { titulo: "Principal", opciones: [
      { archivo: "dashboard.html", texto: "Inicio", icono: "inicio" }
    ]},
    { titulo: "Operación", opciones: [
      { archivo: "registrar-venta.html", texto: "Registrar venta", icono: "venta" },
      { archivo: "historial-ventas.html", texto: "Historial de ventas", icono: "historial" },
      { archivo: "gastos.html", texto: "Gastos", icono: "gastos" },
      { archivo: "reabastecimiento.html", texto: "Reabastecimiento", icono: "reabastecimiento" },
      { archivo: "inventario.html", texto: "Inventario", icono: "inventario" },
      { archivo: "corte-caja.html", texto: "Corte de caja", icono: "caja" }
    ]},
    { titulo: "Productos", opciones: [
      { archivo: "productos.html", texto: "Productos", icono: "productos", hijos: ["categorias.html"] }
    ]},
    { titulo: "Administración", opciones: [
      { archivo: "sucursales.html", texto: "Sucursales", icono: "sucursales", hijos: ["catalogo-sucursal.html"] },
      { archivo: "usuarios.html", texto: "Usuarios", icono: "usuarios" }
    ]},
    { titulo: "Supervisión", opciones: [
      { archivo: "reportes.html", texto: "Reportes", icono: "reportes" },
      { archivo: "auditoria.html", texto: "Auditoría", icono: "auditoria" }
    ]},
    { titulo: "Sistema", opciones: [
      { archivo: "configuracion.html", texto: "Configuración", icono: "configuracion", hijos: ["categorias-gasto.html", "metodos-pago.html"] }
    ]}
  ];

  const paginasRelacionadas = {
    "detalle-venta.html": "registrar-venta.html",
    "registrar-gasto.html": "gastos.html",
    "registrar-reabastecimiento.html": "reabastecimiento.html",
    "registrar-producto.html": "productos.html",
    "registrar-categoria-gasto.html": "categorias-gasto.html",
    "registrar-metodo-pago.html": "metodos-pago.html",
    "registrar-sucursal.html": "sucursales.html",
    "registrar-usuario.html": "usuarios.html"
  };

  const paletas = [
    {
      id: "rosa-ejecutivo",
      nombre: "Rosa ejecutivo",
      descripcion: "Rosa intenso, vino oscuro y fondos suaves",
      principal: "#e43f8f",
      secundario: "#f4b942",
      menu: "#2b1622",
      fondo: "#f8f3f6",
      tarjeta: "#ffffff",
      texto: "#241920",
      textoSecundario: "#77656f",
      borde: "#e5d9df"
    },
    {
      id: "amarillo-solar",
      nombre: "Amarillo solar",
      descripcion: "Mostaza vibrante, carbón y crema cálida",
      principal: "#d99b00",
      secundario: "#ef6c35",
      menu: "#24231f",
      fondo: "#fff8e8",
      tarjeta: "#fffdf8",
      texto: "#2d281d",
      textoSecundario: "#786f5c",
      borde: "#eadfbe"
    },
    {
      id: "azul-nocturno",
      nombre: "Azul nocturno",
      descripcion: "Azul eléctrico sobre navy profundo y grises fríos",
      principal: "#3478f6",
      secundario: "#17a6a8",
      menu: "#111b31",
      fondo: "#f1f5fa",
      tarjeta: "#ffffff",
      texto: "#18243a",
      textoSecundario: "#64728a",
      borde: "#d5deea"
    },
    {
      id: "verde-bosque",
      nombre: "Verde bosque",
      descripcion: "Esmeralda, bosque oscuro y acento cobre",
      principal: "#3f8557",
      secundario: "#c67b32",
      menu: "#17271e",
      fondo: "#f2f5f0",
      tarjeta: "#fcfefb",
      texto: "#1d2b21",
      textoSecundario: "#687469",
      borde: "#d6dfd4"
    },
    {
      id: "violeta-grafito",
      nombre: "Violeta grafito",
      descripcion: "Violeta brillante, grafito ciruela y lavanda fría",
      principal: "#8257e6",
      secundario: "#d95094",
      menu: "#21182c",
      fondo: "#f5f2f8",
      tarjeta: "#ffffff",
      texto: "#281f31",
      textoSecundario: "#746a7e",
      borde: "#dfd8e7"
    }
  ];

  let paletaActiva = null;

  function nombreArchivoActual() {
    return window.location.pathname.split("/").pop() || "dashboard.html";
  }

  function rutaOpcion(archivo, estaEnPaginas) {
    if (estaEnPaginas) return archivo === "dashboard.html" ? "../dashboard.html" : archivo;
    return archivo === "dashboard.html" ? "dashboard.html" : `paginas/${archivo}`;
  }

  function crearIcono(nombre) {
    const contenedor = document.createElement("span");
    contenedor.className = "menu-icono";
    contenedor.innerHTML = iconos[nombre] || iconos.inicio;
    return contenedor;
  }

  function hexARgb(hex) {
    const limpio = String(hex || "").replace("#", "");
    if (limpio.length !== 6) return null;
    return { r:parseInt(limpio.slice(0,2),16), g:parseInt(limpio.slice(2,4),16), b:parseInt(limpio.slice(4,6),16) };
  }

  function oscurecer(hex, cantidad) {
    const rgb = hexARgb(hex);
    if (!rgb) return hex;
    const n = valor => Math.max(0, Math.min(255, valor - cantidad));
    return `rgb(${n(rgb.r)}, ${n(rgb.g)}, ${n(rgb.b)})`;
  }

  function rgba(hex, alpha) {
    const rgb = hexARgb(hex);
    if (!rgb) return `rgba(237,43,133,${alpha})`;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  }

  function luminancia(hex) {
    const rgb = hexARgb(hex);
    if (!rgb) return 0;
    const canales = [rgb.r,rgb.g,rgb.b].map(valor => {
      const s = valor / 255;
      return s <= .03928 ? s / 12.92 : Math.pow((s + .055) / 1.055, 2.4);
    });
    return .2126 * canales[0] + .7152 * canales[1] + .0722 * canales[2];
  }

  function temaGuardado() {
    try {
      const guardado = JSON.parse(localStorage.getItem("temaMichoacana"));
      if (!guardado) return null;
      if (guardado.id && !paletas.some(paleta => paleta.id === guardado.id)) {
        localStorage.setItem("temaMichoacana", JSON.stringify(paletas[0]));
        return paletas[0];
      }
      return guardado;
    } catch (_) {
      return null;
    }
  }

  function aplicarTemaGlobal(tema) {
    if (!tema) return;
    const raiz = document.documentElement;
    const principalOscuro = tema.principal ? oscurecer(tema.principal,24) : null;
    const principalClaro = tema.principal ? rgba(tema.principal,.11) : null;

    if (tema.principal) {
      raiz.style.setProperty("--principal", tema.principal);
      raiz.style.setProperty("--p", tema.principal);
      raiz.style.setProperty("--principal-oscuro", principalOscuro);
      raiz.style.setProperty("--po", principalOscuro);
      raiz.style.setProperty("--principal-claro", principalClaro);
      raiz.style.setProperty("--pc", principalClaro);
      raiz.style.setProperty("--sidebar-active", tema.principal);
      raiz.style.setProperty("--sidebar-accent-contrast", luminancia(tema.principal) > .48 ? "#17141d" : "#ffffff");
    }

    if (tema.secundario) raiz.style.setProperty("--secundario", tema.secundario);
    if (tema.fondo) {
      raiz.style.setProperty("--fondo", tema.fondo);
      raiz.style.setProperty("--f", tema.fondo);
    }
    if (tema.tarjeta) raiz.style.setProperty("--tarjeta", tema.tarjeta);
    if (tema.texto) {
      raiz.style.setProperty("--texto", tema.texto);
      raiz.style.setProperty("--t", tema.texto);
    }
    if (tema.textoSecundario) {
      raiz.style.setProperty("--texto-secundario", tema.textoSecundario);
      raiz.style.setProperty("--ts", tema.textoSecundario);
      raiz.style.setProperty("--gris", tema.textoSecundario);
    }
    if (tema.borde) {
      raiz.style.setProperty("--borde", tema.borde);
      raiz.style.setProperty("--b", tema.borde);
    }

    if (tema.menu) {
      const menuClaro = luminancia(tema.menu) > .48;
      raiz.style.setProperty("--menu", tema.menu);
      raiz.style.setProperty("--sidebar-bg", tema.menu);
      raiz.style.setProperty("--sidebar-bg-2", menuClaro ? oscurecer(tema.menu,12) : oscurecer(tema.menu,10));
      raiz.style.setProperty("--sidebar-text", menuClaro ? "#211d24" : "#f4f7fb");
      raiz.style.setProperty("--sidebar-item", menuClaro ? "#454049" : "#c2cad5");
      raiz.style.setProperty("--sidebar-icon", menuClaro ? "#615a65" : "#939eae");
      raiz.style.setProperty("--sidebar-muted", menuClaro ? "rgba(33,29,36,.62)" : "#8f99aa");
      raiz.style.setProperty("--sidebar-section", menuClaro ? "rgba(33,29,36,.53)" : "#6f7a8c");
      raiz.style.setProperty("--sidebar-line", menuClaro ? "rgba(30,26,32,.12)" : "rgba(255,255,255,.08)");
      raiz.style.setProperty("--sidebar-hover", menuClaro ? "rgba(30,26,32,.055)" : "rgba(255,255,255,.045)");
      if (tema.principal) {
        raiz.style.setProperty("--sidebar-active-bg", menuClaro ? rgba(tema.principal,.12) : rgba(tema.principal,.28));
        raiz.style.setProperty("--sidebar-active-text", menuClaro ? tema.principal : "#ffffff");
      }
    }
  }

  function crearGrupo(grupo, archivoActivo, estaEnPaginas) {
    const fragmento = document.createDocumentFragment();
    const titulo = document.createElement("p");
    const navegacion = document.createElement("nav");
    titulo.className = "menu-seccion";
    titulo.textContent = grupo.titulo;
    navegacion.className = "menu-navegacion";

    grupo.opciones.forEach(opcion => {
      const enlace = document.createElement("a");
      const hijoActivo = (opcion.hijos || []).includes(archivoActivo);
      enlace.className = "menu-opcion";
      enlace.href = rutaOpcion(opcion.archivo, estaEnPaginas);
      enlace.append(crearIcono(opcion.icono), document.createTextNode(opcion.texto));
      if (opcion.archivo === archivoActivo || hijoActivo) enlace.classList.add("activa");
      navegacion.appendChild(enlace);
    });

    fragmento.append(titulo,navegacion);
    return fragmento;
  }

  function asegurarMarca(sidebar, estaEnPaginas) {
    let marca = sidebar.querySelector(".marca, .brand");

    if (!marca) {
      marca = [...sidebar.children].find(elemento => elemento.querySelector?.("img")) || null;
    }

    if (!marca) {
      marca = document.createElement("div");
      const imagen = document.createElement("img");
      const texto = document.createElement("div");
      const nombre = document.createElement("strong");
      const detalle = document.createElement("small");
      imagen.src = estaEnPaginas ? "../imagenes/logogranpaleteria.jpeg" : "imagenes/logogranpaleteria.jpeg";
      imagen.alt = "Logo";
      nombre.textContent = "La Michoacana";
      detalle.textContent = "Sistema administrativo";
      texto.append(nombre,detalle);
      marca.append(imagen,texto);
      sidebar.prepend(marca);
    }

    marca.classList.add("marca");
    marca.classList.remove("brand");
    return marca;
  }

  function normalizarContenedor(sidebar) {
    sidebar.classList.add("sidebar");
    sidebar.dataset.menuCompartido = "1";
    const contenedor = sidebar.closest(".app, .aplicacion") || document.querySelector(".app, .aplicacion");
    if (contenedor) contenedor.classList.add("layout-menu-compartido");
  }

  function sincronizarInputsTema(tema) {
    const mapa = { colorPrincipal:tema.principal, colorSecundario:tema.secundario, colorMenu:tema.menu, colorFondo:tema.fondo };
    Object.entries(mapa).forEach(([id,valor]) => {
      const input = document.getElementById(id);
      if (input && valor) input.value = valor;
    });
  }

  function temaDesdeControles() {
    const actual = temaGuardado() || paletas[0];
    return {
      ...actual,
      principal:document.getElementById("colorPrincipal")?.value || actual.principal,
      secundario:document.getElementById("colorSecundario")?.value || actual.secundario,
      menu:document.getElementById("colorMenu")?.value || actual.menu,
      fondo:document.getElementById("colorFondo")?.value || actual.fondo
    };
  }

  function guardarTema(tema) {
    localStorage.setItem("temaMichoacana",JSON.stringify(tema));
    aplicarTemaGlobal(tema);
    sincronizarInputsTema(tema);
    window.dispatchEvent(new CustomEvent("temaMichoacanaCambiado",{detail:tema}));
  }

  function marcarPaleta(id) {
    document.querySelectorAll(".menu-paleta").forEach(boton => boton.classList.toggle("seleccionada",boton.dataset.paleta === id));
  }

  function crearBotonPaleta(paleta) {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.className = "menu-paleta";
    boton.dataset.paleta = paleta.id;
    const info = document.createElement("span");
    info.className = "menu-paleta-info";
    const nombre = document.createElement("strong");
    nombre.textContent = paleta.nombre;
    const descripcion = document.createElement("small");
    descripcion.textContent = paleta.descripcion;
    info.append(nombre,descripcion);
    const muestras = document.createElement("span");
    muestras.className = "menu-paleta-muestras";
    [paleta.principal,paleta.secundario,paleta.menu,paleta.fondo,paleta.texto].forEach(color => {
      const muestra = document.createElement("span");
      muestra.className = "menu-paleta-muestra";
      muestra.style.background = color;
      muestras.appendChild(muestra);
    });
    boton.append(info,muestras);
    boton.addEventListener("click",() => {
      paletaActiva = paleta;
      guardarTema(paleta);
      marcarPaleta(paleta.id);
    });
    return boton;
  }

  function instalarPaletas() {
    const panel = document.getElementById("panelColores");
    if (!panel || panel.querySelector(".menu-paletas")) return;
    const referencia = panel.querySelector(".opciones-colores");
    if (!referencia) return;
    const seccion = document.createElement("section");
    seccion.className = "menu-paletas";
    const titulo = document.createElement("h3");
    titulo.className = "menu-paletas-titulo";
    titulo.textContent = "Paletas completas";
    const descripcion = document.createElement("p");
    descripcion.className = "menu-paletas-descripcion";
    descripcion.textContent = "Cinco estilos completos y claramente diferentes para toda la interfaz.";
    const grid = document.createElement("div");
    grid.className = "menu-paletas-grid";
    paletas.forEach(paleta => grid.appendChild(crearBotonPaleta(paleta)));
    seccion.append(titulo,descripcion,grid);
    referencia.parentNode.insertBefore(seccion,referencia);
    const guardado = temaGuardado();
    if (guardado) {
      const coincidente = paletas.find(p => p.id === guardado.id);
      if (coincidente) marcarPaleta(coincidente.id);
    }
  }

  function instalarSincronizacionManual() {
    ["colorPrincipal","colorSecundario","colorMenu","colorFondo"].forEach(id => {
      const input = document.getElementById(id);
      if (!input || input.dataset.menuSync === "1") return;
      input.dataset.menuSync = "1";
      input.addEventListener("input",() => {
        paletaActiva = null;
        marcarPaleta("");
        aplicarTemaGlobal(temaDesdeControles());
      });
    });

    const guardar = document.getElementById("guardarColores");
    if (guardar && guardar.dataset.menuSync !== "1") {
      guardar.dataset.menuSync = "1";
      guardar.addEventListener("click",() => {
        setTimeout(() => {
          const guardado = temaGuardado() || {};
          const extras = paletaActiva || {};
          const combinado = {...extras,...guardado,...temaDesdeControles()};
          localStorage.setItem("temaMichoacana",JSON.stringify(combinado));
          aplicarTemaGlobal(combinado);
        },0);
      });
    }

    const restablecer = document.getElementById("restablecerColores");
    if (restablecer && restablecer.dataset.menuSync !== "1") {
      restablecer.dataset.menuSync = "1";
      restablecer.addEventListener("click",() => {
        paletaActiva = null;
        marcarPaleta("");
        setTimeout(() => aplicarTemaGlobal(temaDesdeControles()),0);
      });
    }
  }

  function construirMenu() {
    const sidebar = document.querySelector(".sidebar, .side");
    if (!sidebar) return;

    const archivoActual = nombreArchivoActual();
    const archivoActivo = paginasRelacionadas[archivoActual] || archivoActual;
    const estaEnPaginas = window.location.pathname.includes("/paginas/");

    aplicarTemaGlobal(temaGuardado());
    normalizarContenedor(sidebar);
    const marca = asegurarMarca(sidebar,estaEnPaginas);

    [...sidebar.children].forEach(elemento => {
      if (elemento !== marca) elemento.remove();
    });

    gruposMenu.forEach(grupo => sidebar.appendChild(crearGrupo(grupo,archivoActivo,estaEnPaginas)));
    instalarPaletas();
    instalarSincronizacionManual();
  }

  window.addEventListener("temaMichoacanaCambiado",evento => aplicarTemaGlobal(evento.detail));
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded",construirMenu);
  else construirMenu();
})();