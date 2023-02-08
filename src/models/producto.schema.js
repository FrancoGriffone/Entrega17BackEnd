import { buildSchema } from "graphql";

const SchemaProducto = buildSchema(`
    input ProductoInpuit {
        nombre: String,
        precio: String,
        stock: Number
    }
    type Producto {
        id: ID!
        nombre: String,
        precio: String,
        stock: Number
    }
    type Query {
        listarAll: [Producto]
    }
    type Mutation {
        guardar(datos: ProductoInput) : Producto,
        listar(id: ID!) Producto,
        borrar: [Producto]
    }
`)

export default SchemaProducto