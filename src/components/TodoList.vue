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
.container {
    padding: 20px;
    max-width: 400px;
    margin: auto;
}

.opgaveliste {
    list-style: none;
    padding: 0;

    &__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #f4f4f4;
        padding: 10px;
        margin: 5px 0;
        border-radius: 5px;

        &--slet {
            background-color: red;
            color: white;
            border: none;
            padding: 5px;
            cursor: pointer;
            border-radius: 3px;

            &:hover {
                background-color: darkred;
            }
        }
    }
}
.input-container {
    display: flex;
    gap: 10px;
    margin-top: 10px;

    &__input {
        flex: 1;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    &__button {
        background-color: green;
        color: white;
        border: none;
        padding: 8px;
        cursor: pointer;
        border-radius: 5px;

        &:disabled {
            background-color: gray;
            cursor: not-allowed;
        }
    }
}
</style>
