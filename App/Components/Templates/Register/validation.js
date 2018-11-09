const validation = {
  name: {
    presence: {
      allowEmpty: false,
      message: '^Nama tidak boleh kosong.'
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
  },
  city: {
    presence: {
      allowEmpty: false,
      message: '^Kota tidak boleh kosong.'
    }
  },
  province: {
    presence: {
      allowEmpty: false,
      message: '^Provinsi tidak boleh kosong.'
    }
  },
  date: {
    presence: {
      allowEmpty: false,
      message: '^Tanggal lahir tidak boleh kosong.'
    }
  },
  idNumber: {
    format: {
      pattern: '^(|[0-9]{16})$',
      message: '^KTP harus terdiri dari 16 karakter'
    }
  },
  phone: {
    presence: {
      allowEmpty: false,
      message: '^Nomor handphone tidak boleh kosong.'
    }
  },
  isTerm: {
    presence: {
      allowEmpty: false,
      message: '^Anda harus menyetujui syarat dan ketentuan.'
    }
  }
};

export default validation;
