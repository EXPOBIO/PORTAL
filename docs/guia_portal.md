# Guía del Portal EXPOBIO 2026

## Inicio Rápido

1. **Acceder al portal**
   - Visita: [expobio.github.io/PORTAL](https://expobio.github.io/PORTAL/)
   - O ejecuta localmente: `python -m http.server 8000`

2. **Navegar por el portal**
   - Usa los botones para acceder a diferentes secciones
   - Los enlaces externos abren en nueva pestaña

## Secciones del Portal

### 1. Inscripción
- **Enlace**: Botón "Inscripción"
- **Destino**: Portal de inscripción (INSCRIPCION)
- **Función**: Registrar participantes para el evento

### 2. Concursos
- **Enlace**: Botón "Concursos"
- **Destino**: Sección de concursos (local)
- **Función**: Mostrar categorías de participación:
  - Investigación
  - Resúmenes
  - Poster Científico

### 3. Programación
- **Enlace**: Botón "Programación"
- **Destino**: Sección de agenda (local)
- **Función**: Mostrar actividades del evento:
  - Día 1: Inauguración y conferencias
  - Día 2: Talleres y premiación

### 4. Consultas
- **Enlace**: Botón "Consultas"
- **Destino**: Portal de consultas (CONSULTAS)
- **Función**: Resolver dudas sobre el evento

## Enlaces Rápidos

### Guía de Pago
- Instrucciones paso a paso para realizar el pago
- Información de cuentas bancarias
- Formato de comprobante de pago

### Inscripción Estudiante
- Formulario directo de inscripción
- Para estudiantes universitarios

## Personalización

### Cambiar Enlaces
1. Abre `index.html`
2. Busca el botón que quieres modificar
3. Cambia el valor de `onclick`:
```html
<button onclick="window.top.location.href='NUEVA_URL'">
```

### Agregar Nueva Sección
1. Copia una sección existente
2. Modifica el contenido
3. Agrega un ID si necesitas navegación interna:
```html
<div class="carta" id="nueva-seccion">
```

### Cambiar Imágenes
1. Reemplaza `Logaso.png` con tu imagen
2. Reemplaza `biologia-unsaac.jpeg` con tu fondo
3. Actualiza los nombres en `index.html`

## Solución de Problemas

### Los estilos no se aplican
- Verifica que `style.css` esté en la misma carpeta
- Limpia la caché del navegador (Ctrl+F5)

### Los enlaces no funcionan
- Verifica que las URLs sean correctas
- Asegúrate de que los repositorios estén publicados

### La imagen no carga
- Verifica que el archivo de imagen exista
- Revisa la ruta en el atributo `src`

## Estructura de Archivos

```
PORTAL/
├── index.html          # Página principal
├── style.css           # Estilos
├── Logaso.png          # Escudo UNSAAC
├── biologia-unsaac.jpeg # Fondo
├── package.json        # Configuración Node.js
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Documentación
```

## Comandos Útiles

### Desarrollo Local
```bash
# Iniciar servidor
python -m http.server 8000

# O con Node.js
npx live-server --port=8000
```

### Actualizar Portal
```bash
# Navegar a la carpeta
cd 05_EXPOBIO/PORTAL

# Agregar cambios
git add .

# Commit
git commit -m "Actualizar portal"

# Push
git push origin main
```

## Recursos

- [Documentación de HTML](https://developer.mozilla.org/es/docs/Web/HTML)
- [Documentación de CSS](https://developer.mozilla.org/es/docs/Web/CSS)
- [Google Fonts](https://fonts.google.com/)