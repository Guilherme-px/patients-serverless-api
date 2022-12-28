const customMessageErrors = (field: string) => {
    return {
        'string.empty': `Informe ${field}!`,
        'any.required': `Informe ${field}!`,
        'object.regex': `Campo ${field} inválido!`,
        'any.valid': `Campo ${field} inválido!`,
        'string.email': `Email inválido!`,
    };
};

export { customMessageErrors };
