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
        presence: {
            allowEmpty: false,
            message: '^Nomor KTP tidak boleh kosong.'
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
