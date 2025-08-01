# Agencia Viajes

Proyecto Angular para gestión de destinos y boletos con autenticación y navegación protegida.

---

## Cómo ejecutar el proyecto

Para ejecutar este proyecto, primero clona el repositorio con:

git clone https://gitlab.com/tu_usuario/agencia-viajes.git


Luego entra en la carpeta del proyecto:

cd agencia-viajes


Instala las dependencias necesarias con:

npm install


Finalmente, ejecuta la aplicación con:

ng serve


Y abre en tu navegador la URL:

http://localhost:4200


---

## Rutas disponibles

El proyecto contiene las siguientes rutas principales:

- `/login`: Pantalla para iniciar sesión o registrarse.
- `/dashboard`: Vista principal con resumen de la aplicación (esta ruta está protegida).
- `/destinos`: Módulo lazy loading que muestra los destinos turísticos (protegida).
- `/boletos`: Módulo lazy loading para mostrar boletos y realizar compras (protegida).
- `/boleto-destino`: Módulo lazy loading que muestra la relación entre boletos y destinos (protegida).
- Cualquier otra ruta redirige automáticamente a `/login`.

---

## Cómo funciona la autenticación

La autenticación se maneja mediante un servicio llamado `AuthService` que guarda el estado de login del usuario. Para acceder, se utiliza el usuario `admin` con la contraseña `1234`. Cuando el usuario inicia sesión correctamente, el sistema marca el estado como autenticado.

Las rutas protegidas usan un guard llamado `AuthGuard` que verifica si el usuario está autenticado. Si no lo está, redirige al login. Al cerrar sesión, se limpia el estado y el usuario vuelve a la pantalla de login.

---

## Comunicación entre componentes

El servicio `BoletoService` provee los datos compartidos entre componentes, como boletos y destinos. Los componentes utilizan `ActivatedRoute` para leer parámetros de la URL y mostrar detalles dinámicos según el contexto (por ejemplo, mostrar boletos filtrados o el detalle de uno específico).

Los módulos se cargan bajo demanda (lazy loading) para mejorar el rendimiento y la experiencia de usuario. La comunicación entre componentes se realiza usando servicios y parámetros en rutas, además de bindings y eventos de Angular para pasar información entre componentes padre e hijo.

---

## Cómo contribuir

Para contribuir al proyecto, sigue estos pasos:

1. Clona el repositorio.
2. Crea una rama nueva para tu desarrollo.
3. Realiza los cambios o mejoras que necesites.
4. Haz commits con mensajes claros y descriptivos.
5. Empuja tu rama al repositorio remoto.
6. Abre un merge request para revisión y fusión.

---

## Autores

Cedeño Cedeño Jenrrichet Josue
Villavicencio Moran Fernando Daniel
Pazmiño Aveiga Patricio Abraham
Marquez Pazmiño Jaharia Stefania
SANTILLÁN ZAMBRANO JOEL ALEXANDER

---

Si tienes alguna duda, puedes abrir un issue en el repositorio o contactarme directamente.

