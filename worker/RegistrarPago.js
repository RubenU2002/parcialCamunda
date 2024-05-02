import { Client, Variables, logger } from "camunda-external-task-client-js";

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = {baseUrl: "http://localhost:8080/engine-rest", use: logger};

// create a client instance with custom configuration
const client = new Client(config);

client.subscribe("RegistrarPago", async function({ task, taskService }) {
    const fechaPago = task.variables.get("fechaPago");
    const nombreFactura = task.variables.get("nombreFactura");
    const numeroFactura = task.variables.get("numeroFactura");
    const precioFactura = task.variables.get("precioFactura");
    const processVariables = new Variables();
    console.log(`Registrando pago de factura ${numeroFactura} con valor de ${precioFactura} realizada el día ${fechaPago}`);
    processVariables.set("pagoGuardado",true);
    await taskService.complete(task, processVariables);
});
