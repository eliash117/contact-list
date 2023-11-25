const contactos = ["Juan Pérez", "María García", "Pedro Sánchez"];
function añadirContacto(lista, contacto) {
    lista.push(contacto);
  }
  function borrarContacto(lista, contacto) {
    const index = lista.indexOf(contacto);
  
    if (index !== -1) {
      lista.splice(index, 1);
    }
  }
  function imprimirContactos(lista) {
    
    for (const contacto of lista) {
      console.log(contacto);
    }
  }

  