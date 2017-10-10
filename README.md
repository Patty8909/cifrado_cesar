# Cifrado César

Para devolver un mensaje encriptado según el **algoritmo de cifrado césar**, con el parámetro de desplazamiento de 33 espacios hacia la derecha seguimos estos pasos.

### Obtener el código ASCII del mensaje brindado

+ Mediante un `for` recorremos letra a letra el mensaje.
+ Creamos una nueva variable en la que se retornará el número correspondiente según el código ASCII mediante `charCodeAt()`.
+ Encontramos su posición en el alfabeto restándole al número de la letra ASCII 65.
+ A esto le sumamos el valor fijo que es 33 espacios hacia a derecha y a esto le aplicamos el residuo de 26, que es el número de letras del alfabeto.
+ Luego sumamos nuevamente 65 a este resultado para obtener el código Ascii.
# cipher
