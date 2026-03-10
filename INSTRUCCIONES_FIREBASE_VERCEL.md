# 🚀 Guía de Configuración y Despliegue - RentaComayagua

## 1. Configuración de Firebase Console

1. **Crear Proyecto:** Ve a [Firebase Console](https://console.firebase.google.com/) y crea el proyecto "RentaComayagua".
2. **Habilitar Authentication:**
   - Ve a _Build > Authentication_.
   - Haz clic en *Get Started* y habilita el proveedor de **Email/Password**.
3. **Habilitar Firestore Database:**
   - Ve a _Build > Firestore Database_ y dale a *Create Database*.
   - Inicia en **Production Mode** (las reglas de seguridad ya te las generé en `firestore.rules`).
   - Ve a la pestaña _Rules_, pega el contenido de `firestore.rules` que generé y dale a *Publicar*.
4. **Habilitar Cloud Storage:**
   - Ve a _Build > Storage_.
   - Inicia con los valores por defecto.
   - Ve a la pestaña _Rules_, pega el contenido de `storage.rules` y dale a *Publicar*.
5. **Obtener las Claves Web:**
   - Ve al ícono de engranaje (Project Settings) > _General_ > En la sección "Your apps", selecciona el ícono `</>` (Web).
   - Registra la app como "RentaComayagua Web".
   - Copia todo el bloque de configuración `firebaseConfig`.
   - Úsalo para rellenar tu archivo `.env.local` basado en `.env.local.example`.

---

## 2. Ejecutar y Probar Localmente

Asegúrate de tener instalado Node.js, luego en la raíz del proyecto ejecuta:

```bash
# 1. Instalar dependencias
npm install code

# 2. Levantar el servidor de desarrollo
npm run dev
```

La app estará corriendo normalmente en `http://localhost:5173`.

---

## 3. Despliegue a Producción (Vercel)

Vercel es la mejor plataforma para desplegar proyectos hechos en Vite + React.

### Opción A (Vía Git/GitHub):
1. Sube tu código a un repositorio privado en **GitHub**.
   - Asegúrate de que `.env.local` esté en tu `.gitignore` para no filtrar tus llaves de Firebase.
2. Inicia sesión en [Vercel](https://vercel.com/) usando tu cuenta de GitHub.
3. Haz clic en **Add New... > Project**.
4. Importa tu repositorio de GitHub "RentaComayagua".
5. Vercel detectará automáticamente que es un proyecto **Vite**.
6. **MUY IMPORTANTE:** En la sección *Environment Variables* dentro de Vercel, copia todas y cada una de las variables que pusiste en tu `.env.local` (e.g. `VITE_FIREBASE_API_KEY`, etc.).
7. Haz clic en **Deploy**. ¡Listo, en 30 segundos tendrás la URL pública y Vercel se encargará del autoescalado comercial!

### Opción B (Vía Vercel CLI - Rápido desde la terminal):
```bash
# Instala Vercel CLI globalmente
npm i -g vercel

# Despliega
vercel
```
Sigue el asistente en consola. Cuando te pregunte si quieres linkear el proyecto, dile Y. Recuerda añadir las variables de entorno en el panel de Vercel (Project Settings > Environment Variables).
