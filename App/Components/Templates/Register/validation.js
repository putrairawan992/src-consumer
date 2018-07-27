const validation = {
  name: {
    presence: {
      allowEmpty: false,
      message: '^Nama tidak boleh kosong.'
    },
  },
  
  password: {
    presence: {
      message: 'Password tidak boleh kosong.'
    },
    format: {
      pattern: "^(?=.*[A-Z])(?=.*\d){8,15}",
      message: 'Password harus memiliki 1 digit angka, 1 huruf kapital, minimum 8 karakter dan maksimum 15 karakter.'
    }
  }
}

export default validation;
