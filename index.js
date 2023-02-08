import express from "express"
import { graphqlHTTP } from "express-graphql"
import routerSession from "./src/routes/web/newConnect.js"
import prodRouter from "./src/routes/api/prodRouter.js"
import routerCarrito from "./src/routes/web/carritos.router.js"
import routerProductos from "./src/routes/web/productos.router.js"

import SchemaProducto from "./src/models/producto.schema.js"
import ProductoController from "./src/DAOs/controller.productos.js"

const app = express()
app.use('/graphql', graphqlHTTP ({
    schema: SchemaProducto,
    rootValue: {
        listarAll: ProductoController.listarAll,
        guardar: ProductoController.guardar,
        listar: ProductoController.listar,
        borrar: ProductoController.borrar
    },
    graphiql: true
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static("/public"))
app.use("/", routerSession)
app.use("/api/productos-test", prodRouter);
app.use("/api/productos", routerProductos);
app.use("/api/carritos", routerCarrito);

app.set("view engine", "ejs");
app.set("views", "./views");


//const PORT = process.env.port || 8080
const PORT = parseInt(process.argv[2]) || 8080
console.log(process.argv);


const server = app.listen(PORT, () => {
	console.log(`Http server started on port ${server.address().port}`)
})
server.on("error", (error) => console.log(`Error in server ${error}`))
