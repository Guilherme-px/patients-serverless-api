const customMessageErrors = (field: string) => {
    return {
        'string.empty': `Informe ${field}!`,
        'any.required': `Informe ${field}!`,
        'object.regex': `Campo ${field} inválido!`,
        'any.valid': `Campo ${field} inválido!`,
        'string.email': `Email inválido!`,
        'any.only': 'Senhas não conferem!',
        'string.pattern.base': `${field} deve conter pelo menos 1 letra maiúscula, 1 número e 1 letra minúscula!`,
        'string.min': `O campo deve ter no mínimo 8 caracteres!`,
    };
};

export { customMessageErrors };
