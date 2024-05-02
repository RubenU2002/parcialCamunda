# Solicitud del servicio de instalación de internet, TV y telefonía

## Descripción

Este proyecto se desarrolla utilizando Camunda en su versión 7 para modelar el proceso que lleva una empresa de servicios de internet para la instalación de sus servicios en diferentes hogares. El proceso inicia desde que el cliente se contacta con la empresa y termina con la instalación correcta de los servicios solicitados. Este flujo incluye la verificación de elegibilidad, programación de instalación, confirmación de pago, entre otros aspectos.

## Requisitos para el proyecto

- Java JDK 22
- Compilador como IntelliJ IDEA o NetBeans
- Node.js versión LTS
- Git

## Configuración inicial

1. Clonar el repositorio:
```bash
git clone https://github.com/RubenU2002/parcialCamunda.git
```
2. Entrar a la carpeta `worker` dentro del proyecto: `cd worker`
3. Ejecutar el comando: `npm install`
4. Ejecutar el comando: `node .\RegistraPago.js`

## Ejecución del proyecto

Correr el proyecto desde el compilador instalado.

## Verificación de la ejecución

Para verificar que el proyecto se está ejecutando correctamente, acceda al siguiente enlace: [http://localhost:8080/camunda-welcome/index.html](http://localhost:8080/camunda-welcome/index.html)

Luego, ingrese a la opción "Tasklist" y use las credenciales de inicio de sesión:
- Usuario: admin
- Contraseña: admin

## Realizar pruebas

Una vez que se han ingresado las credenciales, puede iniciar el proceso y verificar que todas sus tareas funcionen correctamente siguiendo el flujo según las opciones que tome el usuario. Esto implica asegurarse de que se ejecuten las tareas de verificación de elegibilidad, programación de instalación, confirmación de pago, entre otras, de manera satisfactoria.
