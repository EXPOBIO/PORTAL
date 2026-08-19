# PORTAL EXPOBIO 2026

Portal web centralizado para consultar la información del evento, acceder a páginas relacionadas y redirigir al portal de inscripción.

## Descripción

Este portal sirve como punto de entrada principal para la EXPOBIO 2026, centralizando acceso a:

- **Inscripción**: Formularios de registro para participantes
- **Concursos**: Categorías y bases de los concursos científicos
- **Programación**: Agenda y actividades del evento
- **Consultas**: Resolución de dudas sobre el evento

## Estructura del Proyecto

```
PORTAL/
├── index.html              # Página principal del portal
├── style.css               # Estilos (mismo diseño que INSCRIPCION)
├── Logaso.png              # Escudo UNSAAC
├── biologia-unsaac.jpeg    # Fondo de imagen
└── README.md               # Este archivo
```

## Enlaces Externos

- **Inscripción**: [expobio.github.io/INSCRIPCION](https://expobio.github.io/INSCRIPCION/)
- **Consultas**: [expobio.github.io/CONSULTAS](https://expobio.github.io/CONSULTAS/)

## Diseño

El portal utiliza el mismo estilo visual que el repositorio de inscripción para mantener consistencia en la identidad del evento.

### Características del Diseño
- Fondo con imagen de biología UNSAAC
- Tarjetas con fondo oscuro semitransparente
- Botones redondeados con efecto hover
- Tipografía Noto Serif para títulos
- Colores: Verde (#4CAF50) como acento principal

## Funcionalidades

### Navegación
- **Inscripción**: Redirige al formulario de inscripción
- **Concursos**: Muestra las categorías disponibles
- **Programación**: Agenda del evento
- **Consultas**: Enlace al portal de consultas

### Enlaces Rápidos
- Guía de pago
- Formulario de inscripción directo

## Desarrollo

### Requisitos
- Navegador web moderno
- Conexión a internet (para fuentes Google Fonts)

### Ejecución Local
```bash
# Usando Python
python -m http.server 8000

# Usando Node.js
npx live-server --port=8000
```

### Personalización
1. Editar `index.html` para modificar el contenido
2. Editar `style.css` para cambiar el diseño
3. Actualizar enlaces en los botones según sea necesario

## Mantenimiento

### Actualizar Enlaces
Los enlaces a otros repositorios están en `index.html`:
```html
<button onclick="window.top.location.href='URL_DEL_REPOSITORIO'">
```

### Agregar Nuevas Secciones
1. Copiar una sección existente en `index.html`
2. Modificar el contenido y enlaces
3. Agregar IDs si se necesita navegación interna

## Próximos Pasos

- [ ] Agregar información de concursos específica
- [ ] Implementar programación detallada del evento
- [ ] Agregar sección de patrocinadores
- [ ] Implementar buscador de información
- [ ] Agregar formulario de contacto directo

## Repositorios Relacionados

- **INSCRIPCION**: Formularios de registro y pagos
- **CONSULTAS**: Portal de resolución de dudas (futuro)

## Licencia

Este proyecto es parte de la EXPOBIO 2026 - Universidad Nacional San Antonio Abad del Cusco.