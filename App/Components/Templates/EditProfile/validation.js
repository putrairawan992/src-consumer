const validation = {
    name: {
        presence: {
            allowEmpty: false,
            message: '^Nama tidak boleh kosong.'
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
      }
};

export default validation;
