# Despliegue del Portal EXPOBIO

## Despliegue Manual

### GitHub Pages (Recomendado)
1. Ve a la pestaña "Settings" del repositorio PORTAL
2. Selecciona "Pages" en el menú lateral
3. En "Source", selecciona la rama "main"
4. Guarda los cambios
5. Tu portal estará disponible en: `https://EXPOBIO.github.io/PORTAL/`

### Netlify
1. Arrastra la carpeta `PORTAL` a [app.netlify.com/drop](https://app.netlify.com/drop)
2. Obtendrás una URL temporal automáticamente

### Vercel
1. Instala Vercel CLI: `npm i -g vercel`
2. Navega a la carpeta: `cd 05_EXPOBIO/PORTAL`
3. Ejecuta: `vercel`
4. Sigue las instrucciones en pantalla

## Despliegue Automático (GitHub Actions)

### Configuración
1. Crea la carpeta `.github/workflows/`
2. Agrega el archivo `deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

3. Haz commit y push
4. El portal se desplegará automáticamente

## Verificar Despliegue

### URL del Portal
- Producción: `https://EXPOBIO.github.io/PORTAL/`
- Desarrollo: `http://localhost:8000`

### Pruebas
1. Abre la URL en diferentes navegadores
2. Verifica que los enlaces funcionen
3. Comprueba que las imágenes cargan
4. Prueba en dispositivos móviles

## Solución de Problemas

### El portal no se despliega
1. Verifica que el repositorio sea público
2. Revisa la configuración de GitHub Pages
3. Comprueba que la rama "main" existe

### Los enlaces no funcionan
1. Verifica que los repositorios estén publicados
2. Comprueba que las URLs son correctas
3. Revisa la consola del navegador

### Las imágenes no cargan
1. Verifica que los archivos de imagen existen
2. Comprueba las rutas en el HTML
3. Limpia la caché del navegador

## Actualizaciones

### Actualizar Portal
```bash
# Navegar a la carpeta
cd 05_EXPOBIO/PORTAL

# Hacer cambios
# ...

# Commit y push
git add .
git commit -m "Actualizar portal"
git push origin main
```

### Actualizar Estilos
1. Edita `style.css`
2. Prueba localmente
3. Haz commit y push

## Monitoreo

### Verificar Estado
- [GitHub Pages Status](https://www.githubstatus.com/)
- [GitHub Actions](https://github.com/EXPOBIO/PORTAL/actions)

### Métricas
- Tiempo de carga
- Dispositivos utilizados
- Enlaces más clickeados

## Recursos

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)