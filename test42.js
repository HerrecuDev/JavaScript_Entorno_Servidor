//Fabricantes
const fabricantes = [
  { codigo: 1, nombre: 'Asus' },
  { codigo: 2, nombre: 'Lenovo' },
  { codigo: 3, nombre: 'Hewlett-Packard' },
  { codigo: 4, nombre: 'Samsung' },
  { codigo: 5, nombre: 'Seagate' },
  { codigo: 6, nombre: 'Crucial' },
  { codigo: 7, nombre: 'Gigabyte' },
  { codigo: 8, nombre: 'Huawei' },
  { codigo: 9, nombre: 'Xiaomi' },
];

// Productos
const productos = [
  { codigo: 1,  nombre: 'Disco duro SATA3 1TB',            precio: 86.99,  codigo_fabricante: 5 },
  { codigo: 2,  nombre: 'Memoria RAM DDR4 8GB',             precio: 120,    codigo_fabricante: 6 },
  { codigo: 3,  nombre: 'Disco SSD 1 TB',                   precio: 150.99, codigo_fabricante: 4 },
  { codigo: 4,  nombre: 'GeForce GTX 1050Ti',               precio: 185,    codigo_fabricante: 7 },
  { codigo: 5,  nombre: 'GeForce GTX 1080 Xtreme',          precio: 755,    codigo_fabricante: 6 },
  { codigo: 6,  nombre: 'Monitor 24 LED Full HD',           precio: 202,    codigo_fabricante: 1 },
  { codigo: 7,  nombre: 'Monitor 27 LED Full HD',           precio: 245.99, codigo_fabricante: 1 },
  { codigo: 8,  nombre: 'Portátil Yoga 520',                precio: 559,    codigo_fabricante: 2 },
  { codigo: 9,  nombre: 'Portátil Ideapd 320',              precio: 444,    codigo_fabricante: 2 },
  { codigo: 10, nombre: 'Impresora HP Deskjet 3720',        precio: 59.99,  codigo_fabricante: 3 },
  { codigo: 11, nombre: 'Impresora HP Laserjet Pro M26nw',  precio: 180,    codigo_fabricante: 3 },
];







// 42. Devuelve un listado con los nombres de los fabricantes y el número de productos que tiene cada uno con un precio superior o igual a 220 €. Ordenado de mayor a menor número de productos.
//Opcion 1 por productos mediante groupBy
let arrJoinProdFab = productos

                      .filter(p => p.precio >= 220)

                        .map(p => {
                                return {   
                                codigo: p.codigo, 

                                precio: p.precio, 
                                nombreFabricante: fabricantes.find( f => f.codigo == p.codigo_fabricante).nombre
                            }
                    });

let map = Map.groupBy(arrJoinProdFab, prodFab => prodFab.nombreFabricante);

console.log(map);

let arrFabContProds= Array.from(map)    
                                .map( ([key, value])  => [key, value.length] )
                                .sort((arrkeyvalueA , arrKeyvalueB) => {

                                  if (arrkeyvalueA[1] > arrKeyvalueB[1]) {
                                    return -1;
                                  }else if(arrkeyvalueA[1] == arrKeyvalueB[1]){
                                    return 0;
                                  }else{
                                    return 1;
                                  }

                                }

                                )

console.log(arrFabContProds);

//Opcion 2 por fabricantes

let arrObjFabContProds  = fabricantes.map( f => {
    return { nombre: f.nombre, 
                numProds: productos.filter( p => p.codigo_fabricante == f.codigo ).length };
});

console.log(arrObjFabContProds);
