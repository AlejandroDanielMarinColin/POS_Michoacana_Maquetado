(function () {
  "use strict";

  const enPaginas = window.location.pathname.includes("/paginas/");
  const base = document.createElement("script");
  base.src = enPaginas ? "../scripts/menu-base.js" : "scripts/menu-base.js";
  base.async = false;
  document.head.appendChild(base);

  function ajustarDashboard() {
    const archivo = window.location.pathname.split("/").pop() || "dashboard.html";
    if (archivo !== "dashboard.html") return;

    const estilo = document.createElement("style");
    estilo.textContent = `
      .db-chart-canvas {
        background: transparent !important;
        border-left-color: var(--borde) !important;
        border-bottom-color: var(--borde) !important;
      }
      .db-products-table th:nth-child(2),
      .db-products-table td:nth-child(2) {
        width: 145px;
        text-align: right;
      }
      .db-products-table th:nth-child(3),
      .db-products-table td:nth-child(3) {
        width: 120px;
        text-align: right;
      }
    `;
    document.head.appendChild(estilo);

    const filtros = [...document.querySelectorAll(".db-periodo")];
    ["1 día", "7 días", "30 días", "1 año"].forEach((texto, indice) => {
      if (filtros[indice]) filtros[indice].textContent = texto;
    });
    filtros.slice(4).forEach(boton => boton.remove());

    const svg = document.querySelector(".db-chart-svg");
    if (svg) {
      const ns = "http://www.w3.org/2000/svg";
      const lineaActual = svg.querySelector(".db-chart-line");
      if (lineaActual) {
        const curva = document.createElementNS(ns, "path");
        curva.setAttribute("class", "db-chart-line");
        curva.setAttribute(
          "d",
          "M0 220 C35 214 65 194 100 185 S165 158 200 152 S265 126 300 116 S365 78 400 72 S465 80 500 90 S565 128 600 136 S665 104 700 96 S765 84 800 80 S865 100 900 108 S965 126 1000 134 S1065 148 1100 153 S1165 165 1200 171 S1265 195 1300 204"
        );
        lineaActual.replaceWith(curva);
      }

      const area = svg.querySelector(".db-chart-fill");
      area?.setAttribute(
        "d",
        "M0 220 C35 214 65 194 100 185 S165 158 200 152 S265 126 300 116 S365 78 400 72 S465 80 500 90 S565 128 600 136 S665 104 700 96 S765 84 800 80 S865 100 900 108 S965 126 1000 134 S1065 148 1100 153 S1165 165 1200 171 S1265 195 1300 204 L1300 240 L0 240 Z"
      );
    }

    const tarjetas = [...document.querySelectorAll(".db-bottom-grid .db-card")];
    const sucursales = tarjetas.find(card => card.querySelector(".db-card-title")?.textContent.includes("VENTAS POR SUCURSAL"));
    const productos = tarjetas.find(card => card.querySelector(".db-card-title")?.textContent.includes("PRODUCTOS MÁS VENDIDOS"));

    if (sucursales) {
      [...sucursales.querySelectorAll("tbody tr")].slice(3).forEach(fila => fila.remove());
    }

    if (productos) {
      const tabla = productos.querySelector("table");
      const encabezado = tabla?.querySelector("thead tr");
      encabezado?.children[0]?.remove();

      const filas = [...(tabla?.querySelectorAll("tbody tr") || [])];
      filas.forEach(fila => fila.children[0]?.remove());
      filas.slice(3).forEach(fila => fila.remove());
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ajustarDashboard, { once: true });
  } else {
    ajustarDashboard();
  }
})();