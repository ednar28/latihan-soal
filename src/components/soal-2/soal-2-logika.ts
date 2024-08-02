import axios from 'axios'
import * as cheerio from 'cheerio'
import { ref } from 'vue'

export const useWiki = () => {
  const loading = ref(false)
  const listKabupaten = ref<Kabupaten[]>([])

  const ambilDataWiki = async () => {
    loading.value = true
    listKabupaten.value = []
    try {
      const response = await axios.get(
        'https://id.wikipedia.org/w/api.php?action=parse&format=json&section=0&prop=text&origin=*&page=Daftar_kabupaten_di_Indonesia',
      )

      // https://www.npmjs.com/package/cheerio
      const $ = cheerio.load(response.data.parse.text['*'])
      $('table.wikitable tbody tr').each((index, element) => {
        const nama: string = $(element).find('td:nth-child(3)').text().trim()
        const provinsi: string = $(element).find('td:nth-child(4)').text().trim()
        if (nama && provinsi) {
          listKabupaten.value.push({ nama, provinsi })
        }
      })
    } catch (error) {
      console.log('gagal mendapatkan data.')
    } finally {
      loading.value = false
    }
  }

  const unduhCsv = () => {
    let csv = 'Kabupaten,Provinsi\n'
    listKabupaten.value.forEach((kabupaten) => {
      csv += `${kabupaten.nama},${kabupaten.provinsi}\n`
    })

    const anchor = document.createElement('a')
    anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
    anchor.target = '_blank'
    anchor.download = 'kabupaten.csv'
    anchor.click()
  }

  return {
    loading,
    listKabupaten,
    ambilDataWiki,
    unduhCsv,
  }
}
