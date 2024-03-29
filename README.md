# PONG

Link al videojuego: https://pong-maurivaz.vercel.app/

![Imagen de archivo](/public/img/PONG.png)

## Tecnologías utilizadas

Utilizaremos librerías para este proyecto:

- Parcel: https://parceljs.org/ Para levantar un servidor que ejecute nuestro proyecto.
- Lodash: https://lodash.com/ Para la utilización de números random.
- Eslint: https://eslint.org/ Para seguir unas pautas de código y que este sea uniforme.
- Typescript: https://www.typescriptlang.org/ Como lenguaje de codificación.
- Node.js: https://nodejs.org/es/ Como entorno de ejecución.

## Descripción del proyecto

Juego tipo Pong, el clásico de Atari de los años 80, en el que dos hay dos jugadores que controlan una barra, en la que debe rebotar una pelota, para que se mueva hacia el lado contrario, con el objetivo de qué el otro jugador no pueda rechazar la pelota y se sumen puntos estilo fútbol con los goles, el juego acaba cuando uno de los jugadores consiga 9 puntos.

Existirían 3 tipos de tableros que se diferenciarían en el color del fondo, con temáticas de campo de fútbol, campo de baloncesto o campo de tenis, si el usuario no quiere escoger un fondo, se seleccionará uno al azar.

Otra idea es que se puedan seleccionar personajes para poner como barra del jugador.

## Instalación y ejecución

Para instalar el juego se realizará un clone de este repositorio con el siguiente comando:

```
git clone git@github.com:MauriVaz/PONG.git
```

Una vez descargado el repositorio, hay que acceder a su carpeta con el siguiente comando el

```
cd PONG
```

Para acabar hace falta instalar las dependencias del proyecto y ejecutarlo para eso será necesario ejecutar los siguientes comandos

```
yarn install
yarn run dev
```

## Requisitos mínimos

- Entorno de trabajo Node.js.
- Se utilizará Canvas para dibujar el mapa.
- Al menos de la mitad del proyecto tiene que estar codificado en lenguaje Typescript.
- El juego tiene que mantenerse a una tasa de frames de 60 frames por segundo.
- Tiene que ser un juego interactivo es decir, el o los jugadores tienen que presionar teclas en su equipo para que los actores del juego ejecuten una o varias acciones.

## Inspiración del proyecto

La idea de este proyecto nació debido a que encontré un vídeo en YouTube, de un videojuego de la página web de Cartoon Network, que jugaba cuando era un zagal en la cúal existía una sección dedicada a videojuegos de las series animadas que ellos producían.

Enlace del pong inspirador https://www.youtube.com/watch?v=Ml654eP6gFQ

## Agradecimientos

Muchas gracias a Core Code School por la oportunidad
