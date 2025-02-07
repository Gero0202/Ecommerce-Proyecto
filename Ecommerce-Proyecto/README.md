# E-Commerce de Perfumes

## Descripcion
"E-Commerce de Perfumes es una aplicacion desarrollada con **React, Viste, y Firebase** que permite a los usuarios explorar productos, agregarlos al carrito, y realizar compras. La app integra funciones de autenticacion y almacenamiento en **Firestore**"

# Caracteristicas principales
### Lista de funciones mas destacadas

1. **Autenticacion de usuarios**: (simulada)
2. **Visualizacion dinamica de productos** : desde Firestore.
3. **Gestion de carrito de compras.**: carrito de compras a travez de hook.
4. **CRUD de productos**: Integracion y eliminacion de productos.
5. **Variables de entorno**: Uso de variables de entorno para configuraciones sensibles.
6. **Diseño**: Diseño con CSS puro.


## Tecnologias utilizadas 

 - Frontend: React + Vite
 - Base de datos: Firebase Firestore
 - Estilos: CSS puro y Flexbox
 - Gestion de estados: React Context API
 - Variables de entorno: .env con soporte para Vite 

## Instalacion

```shellscript
# Clonar el repositorio
git clone https://github.com/Gero0202/Ecommerce-Proyecto

# Entrar al directorio del proyecto
cd Ecommerce-Proyecto

# Instalar dependencias
npm install

# Crear un archivo .env con las variables de entorno necesarias
VITE_API_URL=https://tu-api-url.com
VITE_API_KEY=tu-api-key

# Iniciar el servidor de desarrollo
npm run dev
```

La aplicacion estara disponible en http://localhost:5173

## Configura tu base de datos

Crea un archivo .env en la raiz del proyecto y define la variable de entorno para conectar tu bas de datos en **Firestore**

```sh
VITE_apiKey= tu-key
VITE_authDomain= tu-key
VITE_projectId= tu-key
VITE_storageBucket= tu-key
VITE_messagingSenderId= tu-key
VITE_appId= tu-key
VITE_measurementId= tu-key
```

## Estructura del proyecto

```sh
├── src/
    ├── components/   # Componentes reutilizables
    ├── context/      # Proveedores de contexto (Cart, User)
    ├── hooks/        # Custom hooks (e.g., useFetch)
    ├── pages/        # Vistas principales
    ├── services/     # Constantes y servicios (Firebase config)
    ├── config/       # Firebase config
```


## Configuracion de Firebase

1. Accede a Firebase Console.
2. Crea un proyecto y habilita Firestore Database.
3. Configura las reglas de Firestore para el entorno de desarrollo:

```sh
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

### URL en deploy

El proyecto esta desplegado en Versel en el siguiente URL:

- **[URL Versel](https://ecommerce-proyecto-alpha.vercel.app/)**

## Aprendizajes y retos

 - Aprendi a desarrollar una app con React , Vite y configurar una base de datos en Firestore
 - La creacion del carrito y el estado con Context API fue un gran desafio, valio la pena. 

## Roadmap (funcionalidades futuras)

- [x] Autenticacion en Firebase
- [x] CRUD en Firestore
- [ ] Implementar filtros
- [ ] Soporte para idiomas
- [ ] Diseño responsivo mejorado

### Creditos 

- Al profesor y el tutor muchas gracias por acompañarme en este proyecto

## Comentarios finales

#### Muchas gracias por todo

<div aling="center">
 <img src="https://media4.giphy.com/media/blSTtZehjAZ8I/giphy.webp?cid=790b7611r1bp83w9a4uj03ifhbjdxgx8q6425dik5jlg3yj5&ep=v1_gifs_search&rid=giphy.webp&ct=g">
</div>