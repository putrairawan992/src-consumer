import React, { Component } from 'react';
import { ScrollView, Text, View, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, LinkText } from '@partials';
import styles from './styles';
import globalStyles from '../../../GlobalStyles';

class TermConditionComponent extends Component {
    renderContent() {
        if (this.props.termState === 'term') {
            return (
                <View>
                    <Text style={globalStyles.textHeading}>
                    Syarat & Ketentuan 
                </Text>
                    <Text style={globalStyles.textChildren}>
                        {`
Selamat datang di Aplikasi AYO SRC.

Syarat & ketentuan yang ditetapkan di bawah ini mengatur pemakaian jasa yang ditawarkan oleh PT. - terkait penggunaan situs dan aplikasi AYO SRC. Pengguna disarankan membaca dengan seksama karena dapat berdampak kepada hak dan kewajiban Pengguna di bawah hukum.

Dengan mendaftar dan/atau menggunakan situs dan aplikasi AYO SRC!, maka pengguna dianggap telah membaca, mengerti, memahami dan menyetujui semua isi dalam Syarat & ketentuan. Syarat & ketentuan ini merupakan bentuk kesepakatan yang dituangkan dalam sebuah perjanjian yang sah antara Pengguna dengan PT.-. Jika pengguna tidak menyetujui salah satu, sebagian, atau seluruh isi Syarat & ketentuan, maka pengguna tidak diperkenankan menggunakan layanan di Aplikasi atau situs AYO SRC
                    `
                        }
                    </Text>
                    <Text style={globalStyles.textHeading}>
                        1. DEFINISI
                </Text>
                    <Text style={globalStyles.textChildren}>
                        {`
1. Kami & Kita berarti PT. - / Penyedia Situs dan Aplikasi AYO SRC, sebuah perusahaan yang didirikan di Indonesia dengan nomor registrasi - dan dengan kantor terdaftar di -
2. Anda & Pengguna berarti setiap pengguna Situs Web maupun Aplikasi AYO SRC.
3. “Cookie” berarti file teks kecil yang ditempatkan Situs web atau Aplikasi kami di penyimpanan perangkat lokal Anda untuk menyimpan informasi tentang sesi penggunaan Anda dan untuk mengidentifikasi perangkat Anda.
4. Syarat & ketentuan adalah perjanjian antara Pengguna dan Kami yang berisikan seperangkat peraturan yang mengatur hak, kewajiban, tanggung jawab pengguna dan penyedia aplikasi AYO SRC, serta tata cara penggunaan situs dan aplikasi AYO SRC.
5. Pengguna adalah pihak yang menggunakan layanan dan aplikasi maupun situs atau Aplikasi AYO SRC, termasuk namun tidak terbatas pada pembeli, penjual, tim dari penjual, pihak pembuat / penyelenggara promosi ataupun pihak lain yang sekedar berkunjung menggunakan Situs dan aplikasi AYO SRC. 
6. Penjual adalah Pengguna terdaftar yang melakukan tindakan buka toko dan/atau melakukan penawaran dan/atau promosi atas suatu barang kepada para Pengguna Situs / Aplikasi AYO SRC.
Anggota adalah Pengguna terdaftar yang mengikuti promosi dengan penjual yang menyelenggarakan promosi di Situs dan/atau aplikasi AYO SRC.
`}
                    </Text>
                </View>
            );
        }
        else if (this.props.termState === 'privacy') {
            return (
                <View>
                    <Text style={globalStyles.textHeading}>
                        PEMBERITAHUAN PRIVASI KONSUMEN PMI
                </Text>
                    <Text style={globalStyles.textChildren}>
                        {`
Kami menganggap privasi sangat penting. Pemberitahuan ini menyampaikan kepada anda siapakah kami, informasi apa yang kami kumpulkan mengenai anda, dan apa yang kami lakukan mengenai hal itu. Klik di “dapatkan lebih banyak lagi” di masing-masing seksi untuk informasi lebih lanjut.

Mohon dibaca juga ketentuan penggunaan berkaitan dengan jasa yang anda minati. Ketentuan tersebut memberikan lebih banyak informasi mengenai bagaimana kami melakukan usaha, dan batasan yang boleh dilakukan.
                    `
                        }
                    </Text>
                    <Text style={globalStyles.textHeading}>
                        Siapakah Kami?
                </Text>
                    <Text style={globalStyles.textChildren}>
                        {`
Kami adalah anggota Philip Morris International. Data kami (nama, alamat, dsb.) akan diberikan kepada anda secara terpisah pada waktu (atau melakukan konfirmasi) mengumpulkan informasi mengenai anda, misalnya, melalui pemberitahuan di aplikasi atau situs web, atau melalui email, yang berisi tautan kepada pemberitahuan ini.
`}
                    </Text>
                    <LinkText
                        onPress={() => {
                            Linking.canOpenURL('www.pmiprivacy.com').then(supported => {
                                if (supported) {
                                    Linking.openURL('www.pmiprivacy.com');
                                } else {
                                    console.log("Don't know how to open URI: " + 
                                    'www.pmiprivacy.com');
                                }
                            });
                        }} style={{ textAlign: 'center', color: '#000', fontFamily: 'ProximaNova-Bold' }}
                    >
                        www.pmiprivacy.com</LinkText>
                </View>
            );
        }
    }
    render() {
        return (
            <ScrollView contentContainerStyle={styles.container} >

                {this.renderContent()}
                <Button
                    style={{ margin: 0, marginTop: 25 }}
                    onPress={() => {
                        Actions.pop();
                    }}
                >Tutup
                </Button>
            </ScrollView>
        );
    }
}

export default TermConditionComponent;
