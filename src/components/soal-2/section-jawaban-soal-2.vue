<script setup lang="ts">
import { useWiki } from './soal-2-logika'
import LoadingDot from './loading-dot.vue'

const { loading, listKabupaten, ambilDataWiki, unduhCsv } = useWiki()
ambilDataWiki()
</script>

<template>
  <div class="border px-4 py-2 rounded-md space-y-4">
    <div class="mb-4 text-xl font-semibold">Jawaban Soal 2</div>

    <div class="flex items-center justify-between">
      <div>Ambil data dari wikipedia</div>
      <button
        class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-600"
        type="button"
        :disabled="loading"
        @click="unduhCsv"
      >
        Unduh csv
      </button>
    </div>

    <div>
      <table class="w-full">
        <thead>
          <th class="w-px text-right">#</th>
          <th class="text-left">Kabupaten</th>
          <th class="text-left">Provinsi</th>
        </thead>
        <tbody>
          <template v-if="loading">
            <tr>
              <td colspan="1000">
                <div class="h-64 flex items-center justify-center">
                  <div class="text-gray-500">Tunggu sebentar <loading-dot /></div>
                </div>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr v-for="(kabupaten, index) in listKabupaten" :key="index">
              <td class="text-right">{{ index + 1 }}.</td>
              <td class="text-left">{{ kabupaten.nama }}</td>
              <td class="text-left">{{ kabupaten.provinsi }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
th,
td {
  @apply p-2 border-b;
}

th {
  @apply font-medium;
}
</style>
