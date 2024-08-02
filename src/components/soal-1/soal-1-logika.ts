const adaYangKembar = (array: number[]) => {
  return new Set(array).size !== array.length
}

const adaPesananTidakTerdaftar = (pesananCheck: number[], semuaPesanan: number[]) => {
  return pesananCheck.some((p) => !semuaPesanan.includes(p))
}

export const pesananValid = (
  pesananDiambil: number[],
  pesananMakanDitempat: number[],
  urutanPesanan: number[],
) => {
  if (
    pesananDiambil.some((pesanan) => pesananMakanDitempat.includes(pesanan)) ||
    adaYangKembar(pesananDiambil) ||
    adaYangKembar(pesananMakanDitempat)
  ) {
    return {
      status: 'tidak valid',
      pesan: 'Pastikan no pesanan tidak ada yang kembar.',
    }
  }

  if (
    adaPesananTidakTerdaftar(pesananDiambil, urutanPesanan) ||
    adaPesananTidakTerdaftar(pesananMakanDitempat, urutanPesanan)
  ) {
    return {
      status: 'tidak valid',
      pesan: 'Pastikan semua no pesanan terdaftar.',
    }
  }

  let urutanPesananDiambilSebelumnya = -1
  let urutanPesananMakanDitempatSebelumnya = -1
  for (const pesanan of urutanPesanan) {
    let urutanSebelumnya = -1

    urutanSebelumnya = pesananDiambil.findIndex((p) => p === pesanan)
    if (urutanSebelumnya >= 0 && urutanPesananDiambilSebelumnya < urutanSebelumnya) {
      urutanPesananDiambilSebelumnya = urutanSebelumnya
      continue
    }

    urutanSebelumnya = pesananMakanDitempat.findIndex((p) => p === pesanan)
    if (urutanSebelumnya >= 0 && urutanPesananMakanDitempatSebelumnya < urutanSebelumnya) {
      urutanPesananMakanDitempatSebelumnya = urutanSebelumnya
      continue
    }

    return {
      status: 'tidak valid',
      pesan: 'urutan pelayanan tidak sesuai.',
    }
  }

  return {
    status: 'valid',
    pesan: 'pelayanan sudah benar.',
  }
}
