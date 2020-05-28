<template>
   <div class="container-fluid">
        <h3 class="col-md-6 col-lg-12 text-center">Password Generator</h3>
            <div class="information col-md-6 col-lg-12">
            <h3>Instruction: </h3><br>
            1. Move the slider to increase the password length <br>
            2. Click generate to generate the password <br>
            3. The maximum password length can be 30 <br><br><br>
            </div>
            <div class="generator col-md-6 col-lg-12 text-center">
            <input type="text" id="display" v-model="display">
            <input type="range" min="0" max="30" name="passwordLength" id="passwordLength" v-model="passwordLength">
            <button @click="passwdGenerate()">Generate</button>
            <div id="length">Length: {{passwordLength}}</div>
            </div>
    </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.min.js'

const characters = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    
export default {
    name: 'Generator',
    data(){
        return {
            passwordLength: '15',
            display: '',
        }
    },
    methods: {
        passwdGenerate(){
             let password = "";
             for(let i = 1; i <= this.passwordLength; i++){
             password += characters.charAt(Math.floor(Math.random() * Math.floor(characters.length)));
             }
             this.display = password;
        }
    }
}

</script>

<style lang="scss" scoped>

@import './src/scss/Generator/_generator.scss';

</style>
