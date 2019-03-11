# Markdown Links

## Diagrama de flujo

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

## Product Backlog

![Sin titulo](img/product-backlog.png)

## Documentación técnica

El propósito de esta librería es que el usuario pueda obtener los links que se encuentran dentro de archivos markdown, ya sea ingresando la ruta de un archivo markdown o de carpetas que contengan archivos markdown, también brinda la opcion para verificar el status de cada link y obtener estadisticas como el total de links, cuantos son únicos o no se repiten y cuantos estan rotos.

## Instalación

Para instalar esta librería tienes que ejecutar el siguiente comando:

`npm i mahalirobles-mdlinks`

## Uso en línea de comandos

Hay cuatro opciones:

1. Para obtener los links, ingresar md-links y la ruta del archivo o directorio.

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

2. Para obtener los links y saber su status (si esta bien o roto), ingresar md-links, ruta del archivo o directorio y la opcion --validate.

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

3. Para obtener el total de links y cuantos no se repiten, ingresar md-links, ruta del archivo o directorio y la opcion --stats.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

4. Para obtener el total de links, cuantos no se repiten y cuantos estan rotos, ingresar md-links, ruta del archivo o directorio y las opciones --validate --stats.

```sh
$ md-links ./some/example.md --validate --stats
Total: 3
Unique: 3
Broken: 1
```

## Uso como API

`let mdLinks = require('md-links')`

Hay cuatro opciones:

1. Para obtener un array con los links, ingresar mdLinks y la ruta del archivo o directorio.

```sh
mdLinks(./some/example.md)
.then(links => {
  // => [{ href, text, file }]
  })
.catch(console.error);
```

2. Para obtener un array con los links indicando su status (si esta bien o roto), ingresar md-links, ruta del archivo o directorio y la opcion {validate:true, stats:false}

```sh
mdLinks(./some/example.md, {validate:true, stats:false})
.then(links => {
    // => [{ href, text, file, status, ok }]
  })
.catch(console.error);
```

3. Para obtener un objeto con la informacion de total de links y cuantos no se repiten, ingresar md-links, ruta del archivo o directorio y la opcion {validate:false, stats:true}

```sh
mdLinks(./some/example.md, {validate:false, stats:true})
.then(links => {
    // => { total:3 , unique:3 }
  })
.catch(console.error);
```

3. Para obtener un objeto con la informacion de total de links, cuantos no se repiten y cuantos estan rotos, ingresar md-links, ruta del archivo o directorio y la opcion {validate:true, stats:true}

```sh
mdLinks(./some/example.md, {validate:true, stats:true})
.then(links => {
    // => { total:3 , unique:3, broken:1 }
  })
.catch(console.error);
```







