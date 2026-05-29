# # [Nombre del Proyecto]
> Proyecto del Módulo 1 — HTML + CSS + JS · Diplomado Fullstack IPSS
## Integrantes
- Manuel Muñoz

## Descripción
Proyecto busca replicar página web www.ingoose.cl tomando solo estrcuturas vistas en clases
## Demo
- Sitio desplegado: https://ingoose-dev.github.io/base_project/

## Cómo correr localmente
```bash
git clone https://github.com/ingoose-dev/base_project.git
cd ingoose
# Abrir index.html en el navegador
# O con un servidor:
python3 -m http.server 8000
```
## Estructura del proyecto
```
.
├── index.html
├── css/
│ └── custom.css ← CSS propio, cargado DESPUÉS de Bootstrap
├── js/
│ └── main.js ← Eventos y JS propio
└── img/
```
## Stack
- HTML5 semántico
- Bootstrap 5 (vía CDN)
- CSS custom propio (paleta, tipografía, ajustes)
- JavaScript vanilla
- Sweetalert2 para notificaciones

## Consumo de api 
Se realiza consumo de api desde https://mindicador.cl/api
permite acceder a servicios de indicadores economicos de Chile
se agregan en el footer

