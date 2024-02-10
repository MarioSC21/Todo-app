# Todo-app

Este proyecto utiliza Docker para gestionar la base de datos MySQL. Asegúrate de tener Docker instalado en tu sistema antes de continuar.

## Configuración de la base de datos

1. Ejecuta el siguiente comando para levantar el contenedor de la base de datos MySQL:

   ```bash
   docker-compose up -d
   ```

   Este comando iniciará el contenedor en segundo plano (`-d`).

2. Una vez que el contenedor de la base de datos esté en funcionamiento, asegúrate de que estás ubicado en la raíz del proyecto y sigue los pasos siguientes.

## Configuración del servidor Node.js

Asegúrate de tener `typescript`, `ts-node`, `nodemon` y `pnpm` instalados de forma global. Puedes instalarlos ejecutando los siguientes comandos:

```bash
npm install -g typescript ts-node nodemon
pnpm install -g pnpm
```

Después de haber instalado estas dependencias, instala las dependencias del proyecto ejecutando:

```bash
pnpm install
```

Una vez que todas las dependencias se hayan instalado correctamente, puedes iniciar el servidor de desarrollo con el siguiente comando:

```bash
pnpm run dev
```

Este comando iniciará el servidor Node.js en modo de desarrollo. Ahora puedes probar el front-end de la aplicación.

## Configuaracion de las variables de entrono
En la raiz del proyecto crear un archivo `.env` y dentro de archivo crear la varaible de entorno de **PORT** Y **DATABASE_URL** puede copiar lo siguiente:
```bash
PORT=3500
DATABASE_URL="mysql://root:root@localhost:3306/todos_db?connection_limit=5"
# DOMAIN=
```
## Configuración del ORM Prisma
Este proyecto utiliza Prisma como ORM para interactuar con la base de datos MySQL. Después de haber levantado la base de datos y asegurarte de que está en funcionamiento, sigue los siguientes pasos para configurar Prisma:
1. Ejecuta el siguientes comandos para aplicar las migraciones y actualizar la estructura de la base de datos:

   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

## Nota sobre el uso de PNPM

Se ha optado por utilizar `pnpm` en lugar de `npm` debido a su mayor velocidad y eficiencia en la gestión de dependencias. Si prefieres utilizar `npm`, puedes sustituir `pnpm` por `npm` en los comandos anteriores, aunque se recomienda mantener `pnpm` para un mejor rendimiento.

¡Ahora estás listo para comenzar a trabajar en el pro
