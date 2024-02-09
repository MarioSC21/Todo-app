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

## Nota sobre el uso de PNPM

Se ha optado por utilizar `pnpm` en lugar de `npm` debido a su mayor velocidad y eficiencia en la gestión de dependencias. Si prefieres utilizar `npm`, puedes sustituir `pnpm` por `npm` en los comandos anteriores, aunque se recomienda mantener `pnpm` para un mejor rendimiento.

¡Ahora estás listo para comenzar a trabajar en el pro