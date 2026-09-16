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
    categorias: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h6v6H4zM14 5h6v6h-6zM4 15h6v4H4zM14 15h6v4h-6z"/></svg>',
    catalogo: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
    sucursales: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10h16"/><path d="M6 10v10h12V10"/><path d="m5 10 1.5-5h11L19 10"/><path d="M9 14v6M15 14v6"/></svg>',
    usuarios: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.7-3 2.8-5 5.5-5s4.8 2 5.5 5"/><circle cx="17" cy="9" r="2.2"/><path d="M15.5 14.5c2.5.2 4.2 1.7 5 4"/></svg>',
    categoriasGasto: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16v12H4z"/><path d="M8 10h8M8 14h5"/></svg>',
    pagos: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18M7 15h3"/></svg>',
    reportes: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
    auditoria: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h5"/><path d="m15.5 15.5 1.5 1.5 3-3"/></svg>',
    salir: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4H5v16h5"/><path d="M14 8l4 4-4 4"/><path d="M8 12h10"/></svg>'
  };

  const gruposMenu = [
    { titulo: "Principal", opciones: [{ archivo: "dashboard.html", texto: "Inicio", icono: "inicio" }] },
    { titulo: "Operación", opciones: [
      { archivo: "registrar-venta.html", texto: "Registrar venta", icono: "venta" },
      { archivo: "historial-ventas.html", texto: "Historial de ventas", icono: "historial" },
      { archivo: "gastos.html", texto: "Gastos", icono: "gastos" },
      { archivo: "reabastecimiento.html", texto: "Reabastecimiento", icono: "reabastecimiento" },
      { archivo: "inventario.html", texto: "Inventario", icono: "inventario" },
      { archivo: "corte-caja.html", texto: "Corte de caja", icono: "caja" }
    ]},
    { titulo: "Productos", opciones: [
      { archivo: "productos.html", texto: "Productos", icono: "productos" },
      { archivo: "categorias.html", texto: "Categorías", icono: "categorias" },
      { archivo: "catalogo-sucursal.html", texto: "Catálogo por sucursal", icono: "catalogo" }
    ]},
    { titulo: "Administración", opciones: [
      { archivo: "sucursales.html", texto: "Sucursales", icono: "sucursales" },
      { archivo: "usuarios.html", texto: "Usuarios", icono: "usuarios" },
      { archivo: "categorias-gasto.html", texto: "Categorías de gasto", icono: "categoriasGasto" },
      { archivo: "metodos-pago.html", texto: "Métodos de pago", icono: "pagos" }
    ]},
    { titulo: "Supervisión", opciones: [
      { archivo: "reportes.html", texto: "Reportes", icono: "reportes" },
      { archivo: "auditoria.html", texto: "Auditoría", icono: "auditoria" }
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
      id: "michoacana-clasica",
      nombre: "Michoacana clásica",
      descripcion: "Rosa de marca, menú profundo y fondo limpio",
      principal: "#ed2b85",
      secundario: "#ffd43b",
      menu: "#151a23",
      fondo: "#f6f8fb",
      tarjeta: "#ffffff",
      texto: "#17141d",
      textoSecundario: "#716a74",
      borde: "#e2e6ec"
    }
  ];

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
    return {
      r: parseInt(limpio.slice(0, 2), 16),
      g: parseInt(limpio.slice(2, 4), 16),
      b: parseInt(limpio.slice(4, 6), 16)
    };
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

  function temaGuardado() {
    try { return JSON.parse(localStorage.getItem("temaMichoacana")); }
    catch (_) { return null; }
  }

  function aplicarTemaGlobal(tema) {
    if (!tema) return;
    const raiz = document.documentElement;

    if (tema.principal) {
      raiz.style.setProperty("--principal", tema.principal);
      raiz.style.setProperty("--principal-oscuro", oscurecer(tema.principal, 24));
      raiz.style.setProperty("--principal-claro", rgba(tema.principal, .11));
      raiz.style.setProperty("--sidebar-active", tema.principal);
      raiz.style.setProperty("--sidebar-active-bg", rgba(tema.principal, .28));
    }

    if (tema.secundario) raiz.style.setProperty("--secundario", tema.secundario);
    if (tema.fondo) raiz.style.setProperty("--fondo", tema.fondo);
    if (tema.tarjeta) raiz.style.setProperty("--tarjeta", tema.tarjeta);
    if (tema.texto) raiz.style.setProperty("--texto", tema.texto);
    if (tema.textoSecundario) raiz.style.setProperty("--texto-secundario", tema.textoSecundario);
    if (tema.borde) raiz.style.setProperty("--borde", tema.borde);

    if (tema.menu) {
      raiz.style.setProperty("--menu", tema.menu);
      raiz.style.setProperty("--sidebar-bg", tema.menu);
      raiz.style.setProperty("--sidebar-bg-2", oscurecer(tema.menu, 12));
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
      enlace.className = "menu-opcion";
      enlace.href = rutaOpcion(opcion.archivo, estaEnPaginas);
      enlace.append(crearIcono(opcion.icono), document.createTextNode(opcion.texto));
      if (opcion.archivo === archivoActivo) enlace.classList.add("activa");
      navegacion.appendChild(enlace);
    });

    fragmento.append(titulo, navegacion);
    return fragmento;
  }

  function construirUsuario(sidebar, usuarioOriginal, estaEnPaginas) {
    const sesion = (() => {
      try { return JSON.parse(localStorage.getItem("usuarioSesion")); }
      catch (_) { return null; }
    })();

    const nombre = sesion?.nombre || usuarioOriginal?.querySelector("strong")?.textContent || "Administrador";
    const rol = sesion?.rol || "Administrador";
    const bloque = document.createElement("div");
    bloque.className = "menu-usuario";
    const resumen = document.createElement("div");
    resumen.className = "menu-usuario-resumen";
    const avatar = document.createElement("div");
    avatar.className = "menu-avatar";
    avatar.textContent = nombre.charAt(0).toUpperCase();
    const texto = document.createElement("div");
    texto.className = "menu-usuario-texto";
    const fuerte = document.createElement("strong");
    fuerte.textContent = nombre;
    const pequeno = document.createElement("small");
    pequeno.textContent = rol === "ADMINISTRADOR" ? "Administrador" : rol;
    texto.append(fuerte, pequeno);
    const cerrar = document.createElement("button");
    cerrar.className = "menu-cerrar-sesion";
    cerrar.type = "button";
    cerrar.title = "Cerrar sesión";
    cerrar.setAttribute("aria-label", "Cerrar sesión");
    cerrar.appendChild(crearIcono("salir"));
    cerrar.addEventListener("click", () => {
      if (!window.confirm("¿Deseas cerrar la sesión actual?")) return;
      localStorage.removeItem("usuarioSesion");
      localStorage.removeItem("carritoMichoacana");
      localStorage.removeItem("ventaActual");
      localStorage.removeItem("ventaConfirmada");
      window.location.href = estaEnPaginas ? "../index.html" : "index.html";
    });
    resumen.append(avatar, texto, cerrar);
    bloque.appendChild(resumen);
    sidebar.appendChild(bloque);
  }

  function sincronizarInputsTema(tema) {
    const mapa = {
      colorPrincipal: tema.principal,
      colorSecundario: tema.secundario,
      colorMenu: tema.menu,
      colorFondo: tema.fondo
    };
    Object.entries(mapa).forEach(([id, valor]) => {
      const input = document.getElementById(id);
      if (input && valor) input.value = valor;
    });
  }

  function guardarTema(tema) {
    localStorage.setItem("temaMichoacana", JSON.stringify(tema));
    aplicarTemaGlobal(tema);
    sincronizarInputsTema(tema);
    window.dispatchEvent(new CustomEvent("temaMichoacanaCambiado", { detail: tema }));
  }

  function instalarPaletas() {
    const panel = document.getElementById("panelColores");
    if (!panel || panel.querySelector(".menu-paletas")) return;

    const referencia = panel.querySelector(".opciones-colores");
    if (!referencia) return;

    const bloque = document.createElement("section");
    bloque.className = "menu-paletas";
    const titulo = document.createElement("h3");
    titulo.className = "menu-paletas-titulo";
    titulo.textContent = "Paletas";
    const descripcion = document.createElement("p");
    descripcion.className = "menu-paletas-descripcion";
    descripcion.textContent = "Aplica una combinación completa a toda la interfaz.";
    bloque.append(titulo, descripcion);

    paletas.forEach(paleta => {
      const boton = document.createElement("button");
      boton.type = "button";
      boton.className = "menu-paleta";
      boton.dataset.paleta = paleta.id;

      const info = document.createElement("span");
      info.className = "menu-paleta-info";
      const nombre = document.createElement("strong");
      nombre.textContent = paleta.nombre;
      const detalle = document.createElement("small");
      detalle.textContent = paleta.descripcion;
      info.append(nombre, detalle);

      const muestras = document.createElement("span");
      muestras.className = "menu-paleta-muestras";
      [paleta.principal, paleta.secundario, paleta.menu, paleta.fondo].forEach(color => {
        const muestra = document.createElement("span");
        muestra.className = "menu-paleta-muestra";
        muestra.style.background = color;
        muestras.appendChild(muestra);
      });

      boton.append(info, muestras);
      boton.addEventListener("click", () => {
        document.querySelectorAll(".menu-paleta").forEach(el => el.classList.remove("seleccionada"));
        boton.classList.add("seleccionada");
        guardarTema({ ...paleta });
      });
      bloque.appendChild(boton);
    });

    panel.insertBefore(bloque, referencia);
  }

  function enlazarPersonalizacionManual() {
    ["colorPrincipal", "colorSecundario", "colorMenu", "colorFondo"].forEach(id => {
      const input = document.getElementById(id);
      if (!input || input.dataset.temaCompartido === "1") return;
      input.dataset.temaCompartido = "1";
      input.addEventListener("input", () => {
        const actual = temaGuardado() || paletas[0];
        const tema = {
          ...actual,
          principal: document.getElementById("colorPrincipal")?.value || actual.principal,
          secundario: document.getElementById("colorSecundario")?.value || actual.secundario,
          menu: document.getElementById("colorMenu")?.value || actual.menu,
          fondo: document.getElementById("colorFondo")?.value || actual.fondo
        };
        aplicarTemaGlobal(tema);
        localStorage.setItem("temaMichoacana", JSON.stringify(tema));
      });
    });
  }

  function construirMenu() {
    aplicarTemaGlobal(temaGuardado());

    const sidebar = document.querySelector(".sidebar, .side");
    if (!sidebar) return;
    const marca = sidebar.querySelector(".marca");
    const usuario = sidebar.querySelector(".usuario-menu, .usuario, .user, .userbox");
    if (!marca) return;

    const archivoActual = nombreArchivoActual();
    const archivoActivo = paginasRelacionadas[archivoActual] || archivoActual;
    const estaEnPaginas = window.location.pathname.includes("/paginas/");

    [...sidebar.children].forEach(elemento => {
      if (elemento !== marca && elemento !== usuario) elemento.remove();
    });

    gruposMenu.forEach(grupo => sidebar.appendChild(crearGrupo(grupo, archivoActivo, estaEnPaginas)));
    if (usuario) usuario.remove();
    construirUsuario(sidebar, usuario, estaEnPaginas);

    instalarPaletas();
    enlazarPersonalizacionManual();
  }

  window.addEventListener("storage", evento => {
    if (evento.key === "temaMichoacana" && evento.newValue) {
      try { aplicarTemaGlobal(JSON.parse(evento.newValue)); } catch (_) {}
    }
  });

  window.addEventListener("temaMichoacanaCambiado", evento => aplicarTemaGlobal(evento.detail));

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", construirMenu);
  } else {
    construirMenu();
  }
})();
