<template>
    <div id="app">
        <Header />
    </div>    
</template>

<script>
import Header from './resource/assets/Header';
export default {
    name: app,
    components: {
        Header
    }    
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.row {
    max-width: 960px;
    margin: 0 auto;
}

html {
    background-image: linear-gradient(rgba(77, 77, 77, 0.70), rgba(77, 77, 77, 0.70)), url("img/background.jpg");
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    height: 100vh;
}

h1, h2 {
    font-family: Lato;
}

h1 {
    font-weight: 600;
}

h2 {
    font-weight: 400;
}    
</style>

