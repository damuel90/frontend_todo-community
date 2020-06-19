const validations = {
    fullName: [
        {
            required: true,
            message: 'El campo es obligatorio',
        }
    ],
    email: [
        {
            type: 'email',
            message: 'El campo no tiene un correo electronico valido',
        },
        {
            required: true,
            message: 'El campo es obligatorio',
        },
    ],
    password: [
        {
          required: true,
          message: 'El campo es obligatorio',
        },
        {
            min: 6,
            message: 'La contraseña debe tener al menos 6 caracteres',
        }
    ],
    confirm: [
        {
          required: true,
          message: 'Debe confirmar su Contraseña',
        },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject('Las contraseñas no coinciden');
          },
        }),
      ]
};

export default validations;