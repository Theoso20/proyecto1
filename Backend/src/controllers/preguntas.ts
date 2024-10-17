import { Request, Response } from 'express';
import Preguntas from '../models/preguntas';

export const getpreguntas = async (req: Request, res: Response) => {
    const listpreguntas = await Preguntas.findAll()
    res.json(listpreguntas)
}

export const getpregunta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const preguntas = await Preguntas.findByPk(id);

    if (preguntas) {
        res.json(preguntas)
    } else {
        res.status(404).json({
            msg: `No existe un DATO con el id ${id}`
        })
    }
}

export const deletepregunta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const preguntas = await Preguntas.findByPk(id);

    if (!preguntas) {
        res.status(404).json({
            msg: `No existe un DATO con el id ${id}`
        })
    } else {
        await preguntas.destroy();
        res.json({
            msg: 'El DATO fue eliminado con exito!'
        })
    }

}

export const postpregunta = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const preguntas = await Preguntas.create(body);
        const id = preguntas.get('id');

        res.json({
            Message: `La pregunta fue agregado con éxito!`,
            id: id
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Upps ocurrió un error, comuníquese con soporte`
        });
    }
};


export const updatepregunta = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const preguntas = await Preguntas.findByPk(id);
    if(preguntas) {
        await preguntas.update(body);
        res.json({
            msg: 'El DATO fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un DATO con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }

    
}