# Instrucciones para el Usuario

## Lo que se ha creado

### 1. Repositorio PORTAL
- **Ubicación**: `/home/sam/Projects/05_EXPOBIO/PORTAL/`
- **Estado**: Listo para usar
- **Diseño**: Mismo estilo que INSCRIPCION

### 2. Estructura del Portal
```
PORTAL/
├── index.html         # Página principal
├── style.css          # Estilos (copiado de INSCRIPCION)
├── Logaso.png         # Escudo UNSAAC
├── biologia-unsaac.jpeg # Fondo
├── docs/              # Documentación
└── .github/workflows/ # Despliegue automático
```

### 3. Funcionalidades
- **Inscripción**: Botón que redirige a INSCRIPCION
- **Concursos**: Sección con categorías
- **Programación**: Agenda del evento
- **Consultas**: Botón que redirige a CONSULTAS

## Próximos Pasos

### Paso 1: Hacer Commit y Push
```bash
# Navegar a PORTAL
cd /home/sam/Projects/05_EXPOBIO/PORTAL

# Ver cambios
git status

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Initial commit: Portal EXPOBIO 2026"

# Push a GitHub
git push origin main
```

### Paso 2: Verificar Despliegue
1. Ve a: https://github.com/EXPOBIO/PORTAL
2. Configura GitHub Pages:
   - Settings → Pages
   - Source: main branch
   - Guarda
3. Visita: https://EXPOBIO.github.io/PORTAL/

### Paso 3: Probar Portal
1. Abre la URL del portal
2. Prueba todos los botones
3. Verifica que los enlaces funcionan
4. Prueba en dispositivo móvil

## Personalización

### Cambiar Contenido
1. Edita `index.html`
2. Modifica textos y enlaces
3. Haz commit y push

### Cambiar Diseño
1. Edita `style.css`
2. Cambia colores, tamaños, etc.
3. Haz commit y push

### Cambiar Imágenes
1. Reemplaza `Logaso.png` (escudo)
2. Reemplaza `biologia-unsaac.jpeg` (fondo)
3. Actualiza nombres en HTML si es necesario

## Enlaces Importantes

- **Portal**: https://EXPOBIO.github.io/PORTAL/
- **Inscripción**: https://expobio.github.io/INSCRIPCION/
- **Consultas**: https://expobio.github.io/CONSULTAS/

## Solución de Problemas

### El portal no carga
1. Verifica que GitHub Pages está activado
2. Revisa que los archivos están en la rama main
3. Comprueba la consola del navegador (F12)

### Los estilos no se ven
1. Verifica que `style.css` existe
2. Limpia la caché del navegador (Ctrl+F5)
3. Revisa que los nombres de clases coinciden

### Los enlaces no funcionan
1. Verifica que los repositorios están publicados
2. Comprueba que las URLs son correctas
3. Revisa la configuración de GitHub Pages

## Documentación

- `RESUMEN.md` - Resumen del proyecto
- `docs/guia_portal.md` - Guía de uso
- `docs/estructura_proyecto.md` - Estructura del proyecto
- `docs/despliegue_portal.md` - Instrucciones de despliegue
- `docs/datos_evento.json` - Datos del evento
- `docs/repositorios.json` - Información de repositorios

## Soporte

Si tienes problemas:
1. Revisa la documentación en `docs/`
2. Verifica la consola del navegador (F12)
3. Comprueba que los archivos existen
4. Revisa los enlaces en `index.html`