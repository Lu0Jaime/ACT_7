module.exports = {
    async up(db, client) {
      // Crear la colección "usuarios"
      await db.createCollection("usuarios", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "email", "contrasena", "rol"],
            properties: {
              nombre: { bsonType: "string" },
              email: { bsonType: "string", uniqueItems: true },
              contrasena: { bsonType: "string" },
              rol: { 
                bsonType: "string",
                enum: ["estudiante", "profesor", "administrador"]
              }
            }
          }
        }
      });
  
      // Crear la colección "grupos"
      await db.createCollection("grupos", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
              nombre: { bsonType: "string" }
            }
          }
        }
      });
  
      // Crear la colección "robotica_kits"
      await db.createCollection("robotica_kits", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["nombre"],
            properties: {
              nombre: { bsonType: "string" },
              contenido: { bsonType: "string" }
            }
          }
        }
      });
  
      // Crear la colección "cursos"
      await db.createCollection("cursos", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["nombre", "robotkit_id"],
            properties: {
              nombre: { bsonType: "string" },
              portada: { bsonType: "string" },
              contenido: { bsonType: "string" },
              robotkit_id: { bsonType: "objectId" } // Relación con "robotica_kits"
            }
          }
        }
      });
  
      // Crear la colección "estudiante_grupo" (relación muchos a muchos entre usuarios y grupos)
      await db.createCollection("estudiante_grupo", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["estudiante_id", "grupo_id"],
            properties: {
              estudiante_id: { bsonType: "objectId" }, // Relación con "usuarios"
              grupo_id: { bsonType: "objectId" } // Relación con "grupos"
            }
          }
        }
      });
  
      // Crear la colección "curso_grupo" (relación muchos a muchos entre cursos y grupos)
      await db.createCollection("curso_grupo", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["grupo_id", "curso_id"],
            properties: {
              grupo_id: { bsonType: "objectId" }, // Relación con "grupos"
              curso_id: { bsonType: "objectId" } // Relación con "cursos"
            }
          }
        }
      });
    },
  
    async down(db, client) {
      // Eliminar las colecciones en caso de hacer rollback
      await db.collection("curso_grupo").drop();
      await db.collection("estudiante_grupo").drop();
      await db.collection("cursos").drop();
      await db.collection("robotica_kits").drop();
      await db.collection("grupos").drop();
      await db.collection("usuarios").drop();
    }
  };
  