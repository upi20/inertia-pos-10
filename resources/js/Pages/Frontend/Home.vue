<script setup>
import { ref, reactive } from 'vue'
const data = reactive({
    count: 0,
    nama: 'Isep Lutpi Nur',
    loop: [],
})

const message = ref('Hello World!')

// console.log(message);

const google = "https://www.google.co.id/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

// const message = ref('Hello World!')

// console.log(message.value) // "Hello World!"
// message.value = 'Changed'

// component logic
// declare some reactive state here.W
const nama = ref('isep lutpi nur');


function plus() {
    data.count++;
    refreshLoop();
}

function min() {
    data.count--;
    refreshLoop();
}

function refreshLoop() {
    const result = new Array();
    for (let i = 1; i <= data.count; i++) {
        result.push(i);
    }
    data.loop = result;
}

console.log(route('login'));

</script>

<template>
    <div class="container">
        <img v-bind:src="google" alt="">

        <div class="form-group">
            <input type="text" v-model="nama" class="form-control" />
            <p>Value: {{ nama }}</p>
        </div>

        <button class="px-2" @click="min">-</button>
        <span class="mx-2">count is: {{ data.count }}</span>
        <button class="px-2" @click="plus">+</button>
        <div class="row mt-3">
            <div v-for="item in data.loop"
                 class="col-sm-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 p-2">
                <div class="d-flex justify-content-center align-items-center bg-primary"
                     style="height: 100px; width: 100%; border-radius: 8px;">
                    <p class="text-white">{{ item }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
