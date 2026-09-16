(function () {
  "use strict";

  const gruposMenu = [
    {
      titulo: "Principal",
      opciones: [
        {
          archivo: "dashboard.html",
          texto: "Inicio",
          icono: "⌂"
        }
      ]
    },
    {
      titulo: "Operación",
      opciones: [
        {
          archivo: "registrar-venta.html",
          texto: "Registrar venta",
          icono: "🛒"
        },
        {
          archivo: "historial-ventas.html",
          texto: "Historial de ventas",
          icono: "↺"
        },
        {
          archivo: "gastos.html",
          texto: "Gastos",
          icono: "▣"
        },
        {
          archivo: "reabastecimiento.html",
          texto: "Reabastecimiento",
          icono: "♧"
        },
        {
          archivo: "inventario.html",
          texto: "Inventario",
          icono: "◇"
        },
        {
          archivo: "corte-caja.html",
          texto: "Corte de caja",
          icono: "▤"
        }
      ]
    },
    {
      titulo: "Productos",
      opciones: [
        {
          archivo: "productos.html",
          texto: "Productos",
          icono: "◇"
        },
        {
          archivo: "categorias.html",
          texto: "Categorías",
          icono: "⌑"
        },
        {
          archivo: "catalogo-sucursal.html",
          texto: "Catálogo por sucursal",
          icono: "⌂"
        }
      ]
    },
    {
      titulo: "Administración",
      opciones: [
        {
          archivo: "sucursales.html",
          texto: "Sucursales",
          icono: "⌂"
        },
        {
          archivo: "usuarios.html",
          texto: "Usuarios",
          icono: "♙"
        },
        {
          archivo: "categorias-gasto.html",
          texto: "Categorías de gasto",
          icono: "⌑"
        },
        {
          archivo: "metodos-pago.html",
          texto: "Métodos de pago",
          icono: "▭"
        }
      ]
    },
    {
      titulo: "Supervisión",
      opciones: [
        {
          archivo: "reportes.html",
          texto: "Reportes",
          icono: "⌁"
        },
        {
          archivo: "auditoria.html",
          texto: "Auditoría",
          icono: "▣"
        }
      ]
    }
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

  function nombreArchivoActual() {
    return window.location.pathname.split("/").pop() || "dashboard.html";
  }

  function rutaOpcion(archivo, estaEnPaginas) {
    if (estaEnPaginas) {
      return archivo === "dashboard.html"
        ? "../dashboard.html"
        : archivo;
    }

    return archivo === "dashboard.html"
      ? "dashboard.html"
      : `paginas/${archivo}`;
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
      const icono = document.createElement("i");

      enlace.className = "menu-opcion";
      enlace.href = rutaOpcion(opcion.archivo, estaEnPaginas);

      icono.className = "menu-icono";
      icono.textContent = opcion.icono;

      enlace.append(icono, document.createTextNode(opcion.texto));

      if (opcion.archivo === archivoActivo) {
        const punto = document.createElement("span");

        enlace.classList.add("activa");
        punto.className = "menu-punto";
        enlace.appendChild(punto);
      }

      navegacion.appendChild(enlace);
    });

    fragmento.append(titulo, navegacion);
    return fragmento;
  }

  function construirMenu() {
    const sidebar = document.querySelector(".sidebar, .side");

    if (!sidebar) return;

    const marca = sidebar.querySelector(".marca");
    const usuario = sidebar.querySelector(
      ".usuario-menu, .usuario, .user, .userbox"
    );

    if (!marca) return;

    const archivoActual = nombreArchivoActual();
    const archivoActivo = paginasRelacionadas[archivoActual] || archivoActual;
    const estaEnPaginas = window.location.pathname.includes("/paginas/");

    [...sidebar.children].forEach(elemento => {
      if (elemento !== marca && elemento !== usuario) {
        elemento.remove();
      }
    });

    gruposMenu.forEach(grupo => {
      sidebar.insertBefore(
        crearGrupo(grupo, archivoActivo, estaEnPaginas),
        usuario || null
      );
    });

    if (usuario) {
      const cerrarSesion = document.createElement("button");
      const iconoCerrar = document.createElement("span");
      const textoCerrar = document.createElement("span");

      cerrarSesion.className = "menu-cerrar-sesion";
      cerrarSesion.type = "button";
      cerrarSesion.setAttribute("aria-label", "Cerrar sesión");

      iconoCerrar.className = "menu-icono";
      iconoCerrar.textContent = "↪";
      textoCerrar.textContent = "Cerrar sesión";

      cerrarSesion.append(iconoCerrar, textoCerrar);
      usuario.replaceWith(cerrarSesion);

      cerrarSesion.addEventListener("click", () => {
        const confirmaSalida = window.confirm(
          "¿Deseas cerrar la sesión actual?"
        );

        if (!confirmaSalida) return;

        localStorage.removeItem("usuarioSesion");
        localStorage.removeItem("carritoMichoacana");
        localStorage.removeItem("ventaActual");
        localStorage.removeItem("ventaConfirmada");

        window.location.href = estaEnPaginas
          ? "../index.html"
          : "index.html";
      });
    }

    sidebar.style.background = "var(--menu)";
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", construirMenu);
  } else {
    construirMenu();
  }
})();
