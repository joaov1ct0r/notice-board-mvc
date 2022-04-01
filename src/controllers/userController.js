import Avisos from '../model/userModel.js';

import { validateChangePost, validateNewPost } from './validateData';

    const getAll = async (req, res) => {
        try {
            const avisos = await Avisos.findAll();

            if(!avisos) return res.json({msg: 'Falha ao obter dados!'});

            res.send(JSON.stringify(avisos));
        } catch (error) {
            throw error;
        }
    }

    newPost(req, res) {
        let { error } = validateNewPost(req.body);

        if (error) {
            return res.status(400).send('Falha na autenticação');
        }
        let { title, description } = req.body;

        db.newPost(title, description, function (result) {
            console.log(result);

            res.send('Aviso Adicionado com sucesso');
        });
    },

    changePost(req, res) {
        let { error } = validateChangePost(req.body);

        if (error) {
            return res.status(400).send('Falha na autenticação');
        }
        let { index } = req.params;

        let { title, description } = req.body;

        db.changePost(index, title, description, function (result) {
            console.log(result);

            res.send('Aviso deletado com sucesso');
        });
    },

    deletePost(req, res) {
        let { index } = req.params;

        db.deletePost(index, function (result) {
            console.log(result);

            res.send('Aviso deletado com sucesso');
        });
    }

module.exports = user;
