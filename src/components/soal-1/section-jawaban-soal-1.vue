<script setup lang="ts">
import { pesananValid } from './soal-1-logika'

const contohKasus = [
  {
    pesanan_diambil: [1, 3, 5],
    pesanan_makan_ditempat: [2, 4, 6],
    pesanan_dilayani: [1, 2, 4, 6, 5, 3],
  },
  {
    pesanan_diambil: [17, 8, 24],
    pesanan_makan_ditempat: [12, 19, 2],
    pesanan_dilayani: [17, 8, 12, 19, 24, 2],
  },
  {
    pesanan_diambil: [17, 8, 24, 11, 13],
    pesanan_makan_ditempat: [12, 19, 2],
    pesanan_dilayani: [17, 8, 12, 19, 24, 2, 11, 13],
  },
]
</script>

<template>
  <div class="border px-4 py-2 rounded-md">
    <div class="mb-4 text-xl font-semibold">Jawaban Soal 1</div>
    <div class="space-y-4">
      <div v-for="(contoh, index) in contohKasus" :key="index" class="space-y-2">
        <div class="font-medium">Kasus {{ index + 1 }}:</div>
        <div class="space-y-1">
          <div>
            <div>Pesanan ambil: {{ contoh.pesanan_diambil }}</div>
            <div>Pesanan makan di tempat: {{ contoh.pesanan_makan_ditempat }}</div>
            <div>Pesanan yang dilayani: {{ contoh.pesanan_dilayani }}</div>
          </div>
          <div>
            hasil:
            {{
              pesananValid(
                contoh.pesanan_diambil,
                contoh.pesanan_makan_ditempat,
                contoh.pesanan_dilayani,
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
