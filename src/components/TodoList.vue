<script setup>
import { ref } from "vue";

const opgaver = ref(["Ogpave 1", "Ogpave 2", "Ogpave 3"]);
const nyOpgave = ref("");

const tilføjOpgave = () => {
    if (nyOpgave.value.trim() !== "") {
        opgaver.value.push(nyOpgave.value);
        nyOpgave.value = "";
    }
};

const sletOpgave = (index) => {
    opgaver.value.splice(index, 1);
};
</script>

<template>
    <div class="container">
        <ul class="opgaveliste">
            <li v-for="(opgave, index) in opgaver" :key="index" class="opgaveliste__item">
                {{ opgave }}
                <button @click="sletOpgave(index)" class="opgaveliste__item--slet">Slet</button>
            </li>
        </ul>
        <div class="input-container">
            <input v-model="nyOpgave" placeholder="Skriv en opgave..." class="input-container__input" />
            <button @click="tilføjOpgave" :disabled="!nyOpgave" class="input-container__button">Tilføj</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "@/assets/TodoList.scss"
</style>
