const validation = {
    password: {
      presence: {
        allowEmpty: false,
        message: '^Password tidak boleh kosong.'
      },
      length: {
        minimum: 6,
        tooShort: '^Password minimum 6 karakter'
     }
    },
    passwordConfirmation: {
      presence: {
        allowEmpty: false,
        message: '^Konfirmasi password tidak boleh kosong.'
      },
      equality: {
        attribute: 'password',
        message: '^Konfirmasi kata sandi anda tidak sesuai'
      }
    }
  };
  
  export default validation;
