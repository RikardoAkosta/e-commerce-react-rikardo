visita del sitio

https://e-commerce-react-rikardo.netlify.app/#/login


Evaluación semana 6 - Proyecto Final: Ecommerce.

Pueden hacerlo en squads de hasta tres personas. En ese caso, los tres integrantes del equipo deben subir el mismo entregable a classroom y enviar un comentario privado por classroom nombrando a los miembros de su squad.

Instrucciones:
Hacer un ecommerce donde el usuario pueda loguearse, ver y filtrar productos, añadirlos al carrito y comprarlos. Utiliza esta API para poder hacer las funcionalidades mencionadas anteriormente: https://documenter.getpostman.com/view/5028918/UVypxw3W#8d80d26a-7c0a-4283-a272-253ae4144624. 
Importante: 
Esta API necesita autenticación con token de tipo Bearer para poder consumir los endpoints de “/cart” y “/purchases”. Para practicar, puedes loguearte con:
Email: mason@gmail.com
Password: mason1234
Debes hacer al menos una petición HTTP con redux thunk.

Crear la ruta raíz “/”, en la cuál se listarán todos los productos. 
Cada producto será un link que llevará a la ruta “/product/:id”, cuyo id dependerá del producto seleccionado. 
Se listarán las categorías de los productos. Al darles clic, deben filtrar los productos de acuerdo a la categoría seleccionada. 
Debe haber un input para que el usuario pueda buscar un producto por el nombre. 
Las querys del endpoint /products te ayudarán con estos filtros.

Crear la ruta “/shop/:id”. El id será de uno de los productos de la API. 
En esta ruta se mostrará toda la información del producto: nombre, imágenes, descripción y precio.
Debe contener un contador para que el usuario seleccione cuántos productos desea comprar. 
Debe haber un botón para agregar el producto al carrito. 
(Ver endpoint “/cart - post”).
Finalmente, debe haber un listado de productos con la misma categoría del producto seleccionado.






Crear la ruta “/purchases” La cuál será un ruta protegida. Aquí el usuario podrá ver los productos que ha comprado. (consumir endpoint “/purchases”).


Crear la ruta pública “/login”, donde el usuario pueda loguearse en la aplicación










Debe de haber una navbar que sea visible en cualquier parte de la aplicación. Debe tener tres botones principales:

Un botón para ir a “/login”

Un botón para ir a “/purchases”

Un botón para abrir un modal dónde ver y comprar el carrito de compras (Consumir el endpoint “/cart”)




El código debe estar en inglés, pero los comentarios pueden ser en español.

Para el diseño pueden guiarse de aqui: https://dashing-puppy-89779d.netlify.app

Criterios de evaluación:
Tener las rutas libres (“/” - “/products/:id” - “/login”) y la ruta protegida (“/purchases”) (10pts).
Consumir con redux thunk un endpoint, como mínimo (15pts).
En “/” los productos deben ser Links que lleven a la ruta /products/:id (10pts).
En “/” Los productos se pueden filtrar por nombre y categoría (5pts).
En “/products/:id” debe haber un contador para que el usuario pueda elegir la cantidad del producto que quiera agregar al carrito (10pts).
En “/products/:id” debe haber un botón para agregar el producto al carrito (10pts).
En “/products/:id” deben listarse los productos de la misma categoría del producto mostrado (15pts).
Modal que muestre los productos del carrito con un botón para comprarlo (10pts).
El código debe estar en inglés (5pts).


Retos opcionales:
Hacer un filtro por precio en la ruta raíz “/”
Colocar botones para retirar los productos del carrito
Agregar una opción para modificar la cantidad llevada en los productos del carrito
Agregar una ruta pública “/signup” donde el usuario pueda crear una cuenta
Agregar una ruta privada “/user” donde el usuario pueda ver sus datos.

¡Buena suerte muchachos!
