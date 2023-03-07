import { Joi, Segments } from 'celebrate';
import { customMessageErrors } from '../utils/errors';

const userValidator = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().messages(customMessageErrors('o nome')),
        email: Joi.string()
            .email()
            .required()
            .messages(customMessageErrors('o email')),
        password: Joi.string()
            .required()
            .min(8)
            .regex(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)
            .label('password')
            .messages(customMessageErrors('a senha')),
        confirmPassword: Joi.string()
            .required()
            .valid(Joi.ref('password'))
            .messages(customMessageErrors('a confirmação da senha')),
    }),
};

export { userValidator };
