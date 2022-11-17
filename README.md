
# Smarphone shop

Proyecto test de ejemplo utilizando las tecnologícas React, Typescript, Jest.


## Requirements

Node >= 18.12.0

## First Deploy

Instalar las dependencias y desplegar el servidor en local
```
npm install 
npm start
```

## Develop
Para arrancar el proyecto en local hay que lanzar cualquiera de los siguientes comandos y se abrira en el navegador automáticamente en la url [http://localhost:3000](http://localhost:3000)

```
npm run dev
```

```
npm start
```

## Testing

```
npm test
```
Se puede activar el modo "watch" para desarrollar test con el siguiente comando
```
npm run test:watch
```

Para actualizar los "snapshot" con el código HTML/CSS generado se puede utilizar el siguietne comando
```
npm run test:update
```


# Coverage

Automáticamente se generará un informe con la cobertura del código que se puede abrir en el navegador con el siguiente fichero

```
coverage/lcov-report/index.html
```

# Linter

```
npm run lint
```
```
npm run lint:fix
```

## Build

Para construir el "bundle" con todos los ficheros transpilados bastaría con lanzar el siguiente comando

```
npm run build
```

