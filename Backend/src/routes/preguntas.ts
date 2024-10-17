import { Router } from 'express';
import { deletepregunta, getpregunta, getpreguntas, postpregunta, updatepregunta } from '../controllers/preguntas';

const Pregunta = Router();

Pregunta.get('/', getpreguntas);
Pregunta.get('/:id', getpregunta);
Pregunta.delete('/:id', deletepregunta);
Pregunta.post('/', postpregunta);
Pregunta.put('/:id', updatepregunta);

export default Pregunta;