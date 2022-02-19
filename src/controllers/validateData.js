const Joi = require('@hapi/joi');

let validateNewPost = data => {
    let schema = Joi.object({
        title: Joi.string().required().min(2).max(250),
        description: Joi.string().required().min(2).max(250)
    });

    return schema.validate(data);
};

let validateChangePost = data => {
    let schema = Joi.object({});
};
