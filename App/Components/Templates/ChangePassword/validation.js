const validation = {
    password: {
      presence: {
        allowEmpty: false,
        message: '^Password tidak boleh kosong.'
      },
      format: {
        pattern: '^(?=.*?[A-Z])(?=.*?[0-9]).{6,15}$',
        message:
          '^Password harus memiliki 1 digit angka, 1 huruf kapital, minimum 6 karakter dan maksimum 15 karakter.'
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
