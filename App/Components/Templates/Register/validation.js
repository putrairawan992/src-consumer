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
    presence: {
      allowEmpty: false,
      message: '^Nomor KTP tidak boleh kosong.'
    },
    length: {
      minimum: 16,
      tooShort: '^Nomor KTP minimal 16 digit.'
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