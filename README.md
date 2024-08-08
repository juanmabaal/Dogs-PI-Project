![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# 🐶 Dogs PI Project

## 🎯 Objetivos del Proyecto

- Desarrollar una Single Page Application (SPA) usando React, Redux, Node.js, Express y Sequelize.
- Aplicar y mejorar técnicas de diseño UX/UI.
- Consolidar y conectar conceptos aprendidos durante el bootcamp.
- Adoptar y practicar las mejores prácticas de desarrollo.
- Perfeccionar el workflow con GIT.
- Implementar y practicar testing.

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React, Redux, CSS Modules.
- **Backend**: Node.js, Express.
- **Base de Datos**: PostgreSQL, Sequelize.
- **Testing**: Jest, Supertest.
- **API Externa**: TheDogAPI.

## 🚀 Instalación y Configuración

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/juanmabaal/Dogs-PI-Project.git
    cd Dogs-PI-Project
    ```

2. **Configurar el backend**:
    - Crear un archivo `.env` en la carpeta `api` con las siguientes variables:
      ```
      DB_USER=tuUsuarioDePostgres
      DB_PASSWORD=tuPasswordDePostgres
      DB_HOST=localhost
      API_KEY=tuApiKeyDeTheDogAPI
      ```
    - Crear la base de datos:
      ```bash
      psql -U tuUsuarioDePostgres -c "CREATE DATABASE dogs;"
      ```

3. **Instalar dependencias**:
    ```bash
    # En la carpeta raíz
    npm install

    # En la carpeta api
    cd api
    npm install

    # En la carpeta client
    cd ../client
    npm install
    ```

4. **Iniciar el servidor**:
    ```bash
    # En la carpeta api
    cd api
    npm start
    ```

5. **Iniciar el cliente**:
    ```bash
    # En la carpeta client
    cd ../client
    npm start
    ```

## 🌟 Funcionalidades

### Backend

- **GET /dogs**: Obtiene un arreglo de objetos con todas las razas de perros.
- **GET /dogs/:idRaza**: Obtiene el detalle de una raza específica.
- **GET /dogs/name?="..."**: Busca razas de perros por nombre.
- **POST /dogs**: Crea una nueva raza de perro.
- **GET /temperaments**: Obtiene todos los temperamentos existentes.

### Frontend

- **Landing Page**: Página de inicio con imagen representativa y botón para ingresar a la Home Page.
- **Home Page**: 
  - **SearchBar**: Búsqueda de razas de perros por nombre.
  - **Listado de Cards**: Muestra imagen, nombre, temperamentos y peso de cada perro.
  - **Filtros y Ordenamiento**: Filtrado por temperamentos y origen (API o BD), y ordenamiento alfabético y por peso.
  - **Paginado**: Paginación para mostrar 8 perros por página.
- **Detail Page**: Muestra la información específica de un perro seleccionado.
- **Form Page**: Formulario para crear una nueva raza de perro, con validaciones en JavaScript.

## 🔍 Información de la API Usada

Este proyecto utiliza [TheDogAPI](https://thedogapi.com/) para obtener información sobre las razas de perros. Los endpoints principales utilizados son:

- **Search By Raza**: `https://api.thedogapi.com/v1/breeds/search?q={raza_perro}`

Es necesario crear una cuenta y obtener una API Key para realizar las solicitudes.

## 🧪 Testing

- **Frontend**: Test de componentes con Jest.
- **Backend**: Test de rutas y modelos con Supertest.

## ✅ Consideraciones Finales

- Utilizar y practicar el workflow de GIT.
- Mantener el código limpio y bien documentado.
- Retirar todos los `console.log` antes de la presentación final.
- Practicar y preparar una presentación clara y concisa del proyecto.

Para más información y detalles específicos, consulta el [repositorio del proyecto](https://github.com/juanmabaal/Dogs-PI-Project).


<img src="./dogs.jpg" alt="" width="1000px" />
