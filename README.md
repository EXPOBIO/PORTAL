# PORTAL EXPOBIO 2026

Portal web centralizado para consultar la información del evento, descargar las bases de concursos y acceder a los portales de inscripción y consultas.

## Descripción

Portal de entrada principal de la EXPOBIO 2026, en versión breve: información clave del evento y enlaces rápidos a los demás portales.

- **Inscripción** → [expobio.github.io/INSCRIPCION](https://expobio.github.io/INSCRIPCION/)
- **Estado de inscripción** → [expobio.github.io/CONSULTAS](https://expobio.github.io/CONSULTAS/)
- **Bases** → `bases.html` (descargas de reglamentos y circulares)
- **Preguntas frecuentes** → `consultas.html`

## Estructura del Proyecto

```
PORTAL/
├── index.html        # Página principal: hero, stats, enlaces, mapa
├── bases.html        # Bases de concursos descargables
├── consultas.html    # Preguntas frecuentes
├── bases/            # Archivos de reglamentos (docx) y circulares (pdf)
│   ├── Investigacion.docx
│   ├── Biodex.docx
│   ├── Biodex_Junior.docx
│   ├── Danzas.docx
│   ├── Primera_Circular.pdf
│   └── Segunda_Circular.pdf
├── style.css         # Estilos compartidos
├── Logaso.png        # Escudo UNSAAC
└── README.md         # Este archivo
```

## Diseño

- Paleta clara (blanco/gris) con **acentos verde bio**.
- Tipografía **Inter** (texto) + **Space Mono** (etiquetas/logo).
- Botones con esquinas orgánicas sutiles como guiño al tema biológico.
- Totalmente responsive y con `prefers-reduced-motion`.

## Desarrollo

### Ejecución Local
```bash
python -m http.server 8000
```

### Cambiar la Paleta
Editar las variables CSS al inicio de `style.css` (`:root`):
```css
--accent: #1d6e42;
--accent-strong: #15582f;
--accent-soft: #e8f3ec;
```

### Agregar una Base Nuevo
1. Copiar el archivo a `bases/`.
2. Agregar una tarjeta en `bases.html`.

## Repositorios Relacionados

| Portales | Determinación |
|---|---|
| **PORTAL** | `EXPOBIO/PORTAL` → `expobio.github.io/PORTAL` |
| **INSCRIPCION** | `EXPOBIO/INSCRIPCION` → `expobio.github.io/INSCRIPCION` |
| **CONSULTAS** | `EXPOBIO/CONSULTAS` → `expobio.github.io/CONSULTAS` |

## Licencia

Para la EXPOBIO 2026 - Universidad Nacional San Antonio Abad del Cusco.