# EMBICICLATE

Embiciclate es una sencilla aplicacion web, diseñada en `mobile-only` que te permite visualizar una lista de bicicletas, crear una bicicleta, borrarla e incluso mirar los detalles en profundidad si seleccionas una bicicleta.

La aplicación está formada por 3 paginas principales

- La lista de las bicicletass
- El formulario para crear la bicicleta
- El detalle de la bicicleta

## Features

### Lista de bicibletas

- Aloja las bicicletas existentes en la base de datos
- Cada bicicleta muestra su marca modelo y disciplina
- Cada bicicleta contiene un botón el cual sirve para borrarla

### Crear una bici

- El usuario podrá rellenar el formulario con los datos de la bicicleta que desea crear y al pulsar el boto `crear` se redirijirá a la página de la lista para poder visualizar la nueva bicicleta creada

### Detalles de la bici

- Cuando el usuario pulsa sobre la imagen de una bicicleta, aparecerá la imagen de la bici en grande y todas las propiedades de la bicicleta

### 404 No encontrado

- Si el usuario, por accidente, accede a un `path` que no existe, aparecerá una página con un feedback que muestra al usuario que no existe la pagina a la que quiere acceder

## Tecnologias usadas

Este proyecto utiliza las siguientes dependencias:

### React

React: Librería de JavaScript para construir interfaces de usuario basadas en componentes.
React DOM: Integra React con el DOM del navegador.
React Router Dom
Permite la navegación entre diferentes rutas de la aplicación.

### Zustand

Librería ligera para la gestión de estado en aplicaciones React. Proporciona una API simple para gestionar el estado global sin la complejidad de otras soluciones como Redux.

### React Toastify

Muestra notificaciones de forma fácil y elegante.

### React Icons

Proporciona un conjunto de iconos que se pueden utilizar dentro de los componentes de React.

### React Spinners

Ofrece componentes de carga animados que puedes integrar en tu aplicación.

### MSW (Mock Service Worker)

Es una herramienta para simular APIs durante el desarrollo y las pruebas. Te permite trabajar sin una API real, simulando las respuestas de los servidores directamente en tu navegador.

## Dependencias de Desarrollo

### Vite

Vite es una herramienta rápida y ligera para el desarrollo frontend. Utiliza módulos de ECMAScript y optimiza el tiempo de desarrollo con un servidor rápido y eficiente. También es el encargado del empaquetado para producción.

### Vitest

Vitest es el framework de pruebas diseñado para trabajar de manera perfecta con Vite. Es rápido y está diseñado para ofrecer una experiencia fluida al ejecutar pruebas unitarias.

### TypeScript

TypeScript es un superset de JavaScript que añade tipado estático. Esto ayuda a detectar errores durante el desarrollo y proporciona una mejor experiencia de desarrollo.

### ESLint y Prettier

Estas herramientas aseguran que tu código siga las convenciones de estilo y no contenga errores de sintaxis. Prettier formatea el código automáticamente, mientras que ESLint lo analiza para detectar posibles errores.

### Husky y Lint Staged

Husky se encarga de ejecutar ciertos scripts antes de realizar commits o push, como las pruebas o el linter.
Lint Staged ejecuta scripts en los archivos que se van a commitear, asegurando que solo los archivos modificados pasen por el linter o las pruebas.

## Variables de Entorno

- Para que la aplicación funcione, necesitas de un archivo `.env` que contenga una variable de entorno

```
VITE_API_URL=<yourApiRestUrl>
```
