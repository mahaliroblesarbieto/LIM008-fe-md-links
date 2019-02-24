# Markdown Links

## Diagrama de flujo

Se planteó el siguiente flujo para la función mdLinks

![Sin titulo](img/flujo.jpeg)


## Pseudocodigo

1. evaluatePath 
- Ingresa: Ruta (string)
- Proceso: Utilizar método path.isAbsolute para reconocer si la ruta es absoluta
- Salida: true/false (booleano)

2. transformToAbsPath
- Ingresa: Ruta (string)
- Proceso: Utilizar método path.resolve para convertir ruta relativa a absoluta
- Salida: Ruta absoluta (string)

16. recognizeIfIsFile
- Ingresa: Ruta absoluta (string)
- Proceso: Utilizar método fs.lstat.isFile para reconocer si es archivo
- Salida: true/false (booleano)

13. getFiles
- Ingresa: Ruta absoluta (string)
- Proceso: Obtener todos los archivos
- Salida: Array con las rutas de todos los archivos(array)

3. getMDContent
- Ingresa: Ruta absoluta MD (string)
- Proceso: Obtener el contenido del archivo markdown utilizando la libreria fs.readFile (con UTF)
- Salida: Contenido(string)

5. convertMDToHtml
- Ingresa: Contenido (string)
- Proceso: Usar librería Marked para convertir contenido a HTML
- Salida: Contenido HTML(string)

7. extractATagAttr
- Ingresa: HTML (string)
- Proceso: Utilizar librería JSDOM para: obtener href y contenido de los link y meter la información dentro de un objeto.
- Salida: Informacion de los link(objeto)

8. createArrLinkObj
- Ingresa: Informacion de los link(objeto)
- Proceso: Crear array, meter objeto a array
- Salida: Array con informacion de links dentro de objeto(array)

9. extractHref
- Ingresa: Array con informacion de links dentro de objeto(array)
- Proceso: Extraer href de cada objeto que esta dentro del array y guardarlo en un nuevo array
- Salida: Array con href de cada link(array)

10. verifyLink
- Ingresa: Array con href de cada link(array)
- Proceso: Utilizar método http para verificar si href es valido o no, guardar cada ok o fail dentro de un array.
- Salida: Array con status de cada link(array)

11. addVerification
- Ingresa: Array con status de cada link(array)
- Proceso: Meter status de cada link dentro de array con informacion de links dentro de objeto(array)
- Salida: Array con informacion de links y status dentro de objeto (array)

12. calculateStats
- Ingresa: Array con informacion de links dentro de objeto o Array con informacion de links y status dentro de objeto (array)
- Proceso: Calcular total de links, cuantos son unicos, y en caso a que se ingrese array con status de los links entonces calcular tambien los links que están rotos.
- Salida: Array con estadisticas de total, unique y broken (array)









