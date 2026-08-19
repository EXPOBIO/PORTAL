# Estructura del Proyecto EXPOBIO

## Diagrama de Relación entre Repositorios

```
┌─────────────────────────────────────────────────────────────┐
│                    EXPOBIO 2026                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  │    PORTAL    │◄────►│ INSCRIPCION  │◄────►│  CONSULTAS   │
│  │  (Principal) │      │ (Referencia) │      │   (Futuro)   │
│  └──────────────┘      └──────────────┘      └──────────────┘
│         │                     │                     │
│         │                     │                     │
│         ▼                     ▼                     ▼
│  ┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│  │  Concursos   │      │ Formularios  │      │   Soporte    │
│  │ Programación │      │    Pagos     │      │    Dudas     │
│  │  Enlaces     │      │  Inscripción │      │  Consultas   │
│  └──────────────┘      └──────────────┘      └──────────────┘
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Flujo de Información

### 1. Usuario llega al PORTAL
- Accede a la página principal
- Ve las opciones disponibles

### 2. Navegación
- **Inscripción**: Redirige a INSCRIPCION
- **Concursos**: Muestra información local
- **Programación**: Muestra agenda del evento
- **Consultas**: Redirige a CONSULTAS

### 3. Datos
- **PORTAL**: Información estática del evento
- **INSCRIPCION**: Formularios dinámicos con backend
- **CONSULTAS**: Sistema de soporte (futuro)

## Tecnologías Utilizadas

### Frontend
- HTML5
- CSS3
- JavaScript vanilla
- Google Fonts (Noto Serif)

### Diseño
- Responsive design
- Tarjetas con fondo oscuro semitransparente
- Botones redondeados con efectos hover
- Colores: Verde (#4CAF50) como acento

### Backend (INSCRIPCION)
- Google Apps Script
- GitHub Pages

## Archivos Principales

### PORTAL
```
PORTAL/
├── index.html          # Página principal
├── style.css           # Estilos
├── Logaso.png          # Escudo UNSAAC
├── biologia-unsaac.jpeg # Fondo
└── README.md           # Documentación
```

### INSCRIPCION
```
INSCRIPCION/
├── index.html          # Selección de inscripción
├── datosEstudiante.html # Formulario estudiante
├── datosGrupo.html     # Formulario grupo
├── datosEgresado.html  # Formulario egresado
├── guia.html           # Guía de pago
├── style.css           # Estilos
├── common.js           # Lógica compartida
└── Logaso.png          # Escudo UNSAAC
```

## Personalización

### Cambiar Colores
Edita `style.css` y busca:
```css
/* Verde principal */
background: #4CAF50;

/* Acentos */
color: #a5d6a7;
```

### Cambiar Imágenes
1. Reemplaza `Logaso.png` (escudo)
2. Reemplaza `biologia-unsaac.jpeg` (fondo)
3. Actualiza nombres en HTML

### Agregar Secciones
1. Copia una sección existente en `index.html`
2. Modifica contenido y enlaces
3. Agrega ID si necesitas navegación

## Próximos Pasos

### Corto Plazo
- [ ] Agregar información específica de concursos
- [ ] Implementar programación detallada
- [ ] Agregar fechas límite de inscripción

### Mediano Plazo
- [ ] Integrar CONSULTAS cuando esté listo
- [ ] Agregar sistema de notificaciones
- [ ] Implementar búsqueda de información

### Largo Plazo
- [ ] Agregar autenticación de usuarios
- [ ] Implementar panel de administración
- [ ] Agregar estadísticas del evento

## Mantenimiento

### Actualizar Información
1. Edita `docs/datos_evento.json`
2. Actualiza el HTML correspondiente
3. Haz commit y push

### Solucionar Problemas
1. Revisa la consola del navegador (F12)
2. Verifica los enlaces en `index.html`
3. Comprueba que los archivos existen

## Recursos

- [Documentación de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Documentación de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Google Fonts](https://fonts.google.com/)
- [GitHub Pages](https://pages.github.com/)