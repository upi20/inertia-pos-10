<script setup>
import { ref, reactive } from "vue";
import { usePage, Link, Head } from "@inertiajs/vue3";
import axios from "axios";

const datas = reactive({
  count: 0,
  nama: "Isep Lutpi Nur",
  loop: [],
});

const message = ref("Hello World!");

const google =
  "https://www.google.co.id/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// const message = ref('Hello World!')

// console.log(message.value) // "Hello World!"
// message.value = 'Changed'

// component logic
// declare some reactive state here.W
const nama = ref("isep lutpi nur");
const isProcessing = ref(false);
const reqResult = reactive({
  nama: "",
});

function plus() {
  datas.count++;
  refreshLoop();
}

function min() {
  datas.count--;
  refreshLoop();
}

function refreshLoop() {
  const result = new Array();
  for (let i = 1; i <= datas.count; i++) {
    result.push(i);
  }
  datas.loop = result;
}

async function kirim() {
  // fetch('/lab/ok', {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'X-CSRF-TOKEN': usePage().props.csrf
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({ name: nama.value }) // body data type must match "Content-Type" header
  // }).then((data) => {
  //     console.log(data);
  // });

  isProcessing.value = true;
  try {
    const { data } = await axios.post(
      "/lab/ok",
      { nama: datas.nama },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRF-TOKEN": usePage().props.csrf,
        },
      }
    );
    isProcessing.value = false;
    reqResult.nama = data.nama;
    console.log(datas);
  } catch (error) {
    isProcessing.value = false;
    alert("check yout network");
    console.log(error);
  }
}

console.log(route("login"));
console.log(route("login"));
kirim();
</script>

<template>
  <Head>
    <title>Lab</title>
  </Head>
  <div class="container mt-5">
    <!-- <img v-bind:src="google" alt=""> -->

    <div class="form-group">
      <input type="text" v-model="datas.nama" class="form-control" />

      <p>Value: {{ nama }}</p>
      <button @click="kirim" class="btn btn-primary" :disabled="isProcessing">
        <div
          v-if="isProcessing"
          class="spinner-border"
          role="status"
          style="height: 1em; width: 1em"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        Kirim
      </button>
    </div>
    <span class="mx-2">
      Result:
      <div
        v-if="isProcessing"
        class="spinner-border"
        role="status"
        style="height: 1em; width: 1em"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      {{ isProcessing ? "" : reqResult.nama }}
    </span>

    <button class="px-2" @click="min">-</button>
    <span class="mx-2">count is: {{ datas.count }}</span>
    <button class="px-2" @click="plus">+</button>
    <div class="row mt-3">
      <div
        v-for="(item, index) in datas.loop"
        class="col-sm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2"
        :key="index"
      >
        <div
          class="d-flex justify-content-center align-items-center bg-primary"
          style="height: 100px; width: 100%; border-radius: 8px"
        >
          <p class="text-white">{{ item }}</p>
        </div>
      </div>
    </div>

    <a
      :href="route('login')"
      class="underline text-sm text-white hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Forgot your password?
    </a>
  </div>
</template>
