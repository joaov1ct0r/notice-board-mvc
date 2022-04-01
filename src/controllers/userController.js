import Avisos from '../model/userModel.js';

import { validateChangePost, validateNewPost } from './validateData';

const getAll = async (req, res) => {
    try {
        const avisos = await Avisos.findAll();

        if (!avisos) return res.status(400).send('Falha ao obter dados!');

        res.send(JSON.stringify(avisos));
    } catch (error) {
        throw error;
    }
};

const newPost = async (req, res) => {
    let { error } = validateNewPost(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { title, description } = req.body;

    try {
        const aviso = await Avisos.create({
            avisosTitulo: title,
            avisosDesc: description
        });

        if (!aviso)
            return res.status(400).send('Falha ao adicionar novo aviso!');

        res.send('Aviso adicionado com sucesso!');
    } catch (error) {
        throw error;
    }
};

const changePost = async (req, res) => {
    let { error } = validateChangePost(req.body);

    if (error) return res.status(400).send('Falha na autenticação');

    let { index } = req.params;

    let { title, description } = req.body;

    try {
        const aviso = await Avisos.update(
            {
                avisosTitulo: title,
                avisosDesc: description
            },
            {
                where: {
                    avisosID: index
                }
            }
        );

        if (!aviso) return res.status(400).send('Falha ao atualizar aviso!');

        res.send('Aviso atualizado com sucesso!');
    } catch (error) {
        throw error;
    }
};

const deletePost = async (req, res) => {
    let { index } = req.params;

    try {
        const aviso = await Avisos.destroy({
            where: {
                avisosID: index
            }
        });

        if (!aviso) return res.status(400).send('Falha ao deletar aviso!');

        res.send('Aviso deletado com sucesso');
    } catch (error) {
        throw error;
    }
};

export { newPost, deletePost, changePost, getAll };
