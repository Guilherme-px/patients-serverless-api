import { Joi, Segments } from 'celebrate';
import { customMessageErrors } from '../utils/errors';

const patientValidator = {
    [Segments.BODY]: Joi.object().keys({
        firstName: Joi.string()
            .required()
            .messages(customMessageErrors('o nome')),
        lastName: Joi.string()
            .required()
            .messages(customMessageErrors('o sobrenome')),
        email: Joi.string()
            .email()
            .required()
            .messages(customMessageErrors('o email')),
        gender: Joi.string()
            .valid('Masculino', 'Feminino')
            .required()
            .messages(customMessageErrors('o genero')),
        birthday: Joi.string()
            .regex(/^\d{2}\/\d{2}\/\d{4}$/)
            .required()
            .messages(customMessageErrors('a data de nascimento')),
        address: Joi.object({
            street: Joi.string()
                .required()
                .messages(customMessageErrors('o nome da rua')),
            streetNumber: Joi.number()
                .required()
                .messages(customMessageErrors('o numero da casa')),
            city: Joi.string()
                .required()
                .messages(customMessageErrors('a cidade')),
            state: Joi.string()
                .required()
                .messages(customMessageErrors('o estado')),
        }).required(),
    }),
};

export { patientValidator };
