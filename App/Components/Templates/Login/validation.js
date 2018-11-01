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
    length: {
      minimum: 6,
      tooShort: '^Password minimum 6 karakter'
   }
  }
};

export default validation;
