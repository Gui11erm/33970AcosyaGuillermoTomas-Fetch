const divProductos = document.getElementById("divProductos")

/* creo funcion asincronica para cargar productos */
const cargarProductos = async () => {
    const response = await fetch('./json/productos.json')
    const productos = await response.json()
    return productos
}

cargarProductos().then(productos => {
    productos.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div id="producto${indice}" class="card" style="width: 25rem;">
        <img src="./img/${producto.img}" class="imgProducto card-img-top" alt="...">
            <div class="card-body productos">
                <h5 class="card-header">${producto.nombre}</h5>
                <p class="card-text">Precio: $${producto.precio}</p>
                <p class="card-text">Stock Disponible: ${producto.stock}</p>
                <button id="agregarCarrito" type="button" class="btn btn-primary">Agregar al carrito</button>
            </div>
        </div>
        `
        const agregarCarrito = document.getElementById('agregarCarrito')
        agregarCarrito.addEventListener('click', (e) =>{
            e.preventDefault()
            /* INSERTAMOS SWEATALERT AL HACER CLICK */
            Swal.fire({
                title: 'Producto Agregado al Carrito',
                html:
                `
                <p>Producto: ${producto.nombre}</p>
                <p>Precio Total: $${producto.precio}</p>
                `,
                icon: 'success'
            }
                
                )
        })
    });
})


