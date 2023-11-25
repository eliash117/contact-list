function crearContacto(lista, contacto) {
    lista.push({
      id: contacto.id,
      nombres: contacto.nombres,
      apellidos: contacto.apellidos,
      teléfono: contacto.teléfono,
      ubicaciones: contacto.ubicaciones,
      ciudad: contacto.ciudad,
      dirección: contacto.dirección,
    });
  }
  function borrarContacto(lista, contacto) {
    const index = lista.indexOf(contacto);
  
    if (index !== -1) {
      lista.splice(index, 1);
    }
  }
  const contactos = [];

  const contacto1 = {
    id: 1,
    nombres: "Juan",
    apellidos: "Pérez",
    teléfono: "555-555-5555",
    ubicaciones: ["Casa", "Trabajo"],
    ciudad: "San José",
    dirección: "Calle Principal 123",
  };
  
  const contacto2 = {
    id: 2,
    nombres: "María",
    apellidos: "García",
    teléfono: "666-666-6666",
    ubicaciones: ["Casa", "Universidad"],
    ciudad: "Tegucigalpa",
    dirección: "Avenida Central 456",
  };
  
  crearContacto(contactos, contacto1);
  crearContacto(contactos, contacto2);
  
  console.log(contactos);
  // [
  //   {
  //     id: 1,
  //     nombres: "Juan",
  //     apellidos: "Pérez",
  //     teléfono: "555-555-5555",
  //     ubicaciones: ["Casa", "Trabajo"],
  //     ciudad: "San José",
  //     dirección: "Calle Principal 123",
  //   },
  //   {
  //     id: 2,
  //     nombres: "María",
  //     apellidos: "García",
  //     teléfono: "666-666-6666",
  //     ubicaciones: ["Casa", "Universidad"],
  //     ciudad: "Tegucigalpa",
  //     dirección: "Avenida Central 456",
  //   },
  // ]
  
  borrarContacto(contactos, contacto2);
  
  console.log(contactos);
  // [
  //   {
  //     id: 1,
  //     nombres: "Juan",
  //     apellidos: "Pérez",
  //     teléfono: "555-555-5555",
  //     ubicaciones: ["Casa", "Trabajo"],
  //     ciudad: "San José",
  //     dirección: "Calle Principal 123",
  //   },
  // ]
      