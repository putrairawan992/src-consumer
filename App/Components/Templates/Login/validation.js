const validation = {
  phone: {
    presence: {
      allowEmpty: false,
      message: '^Nomor handphone tidak boleh kosong.'
    }
  },
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
  }
};

export default validation;