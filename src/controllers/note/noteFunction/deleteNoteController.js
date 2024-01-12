//MÓDULO DE FUNCIONAMIENTO DE BORRADO DE NOTAS

//NOTAS//
//Función borrarmos una nota 
// Importamos las funciones del modelo de notas 
import { deleteNoteService } from '../../../services/note/indexNoteService.js';

// Controlador para eliminar una nota basada en su ID
export const deleteNoteController = async (req, res) => {
  try {
    // Extraemos el ID de la nota y el ID del usuario de la solicitud
    const { notasId } = req.params; 
    const { userId } = req.body; //AHORA VAMOS A ELLO ESTA SIN HACER

    // Verificamos si se proporcionaron los IDs necesarios
    if (!notasId && !userId) {
      return res.status(400).json({ error: 'Se requieren ID de nota y ID de usuario para eliminar una nota.🔴' });
    }

    // Intentamos eliminar la nota utilizando el servicio
    const isDeleted = await deleteNoteService(notasId, userId);

    // En función del resultado, enviamos una respuesta adecuada al cliente
    if (isDeleted) {
      return res.status(200).json({ message: 'La nota ha sido eliminada con éxito.✅' });
    } else {
      return res.status(403).json({ error: 'No se pudo eliminar la nota. Verifique los permisos o el ID proporcionado.🔴' });
    }

  } catch (error) {
    // En caso de un error, enviamos una respuesta de error al cliente
    console.error('Error al intentar eliminar la nota:🔴', error);
    return res.status(500).json({ error: 'Error interno del servidor al intentar eliminar la nota.🔴' });
  }
};

//exportamos funciones a rutas ( indexNoteController.js, ira a entries.routers.js)
//export default deleteNoteController;















