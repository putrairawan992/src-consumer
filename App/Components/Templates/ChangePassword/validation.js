const validation = {
    password: {
      presence: {
        allowEmpty: false,
        message: '^Password tidak boleh kosong.'
      },
      format: {
        pattern: '^(?=.*?[A-Z])(?=.*?[0-9]).{8,15}$',
        message:
          '^Password harus memiliki 1 digit angka, 1 huruf kapital, minimum 8 karakter dan maksimum 15 karakter.'
      }
    },
    passwordConfirmation: {
      presence: {
        allowEmpty: false,
        message: '^Konfirmasi password tidak boleh kosong.'
      }
    }
  };
  
  export default validation;
