<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="https://picsum.photos/300/150"
            class="App__photo"
        />
        <MyForm foo="bar" />
    </div>
</template>

<script>
// [adam]: switch which component is imported to see they're identical
import MyForm from './components/MyForm--Composition';
// import MyForm from './components/MyForm--Options';

export default {
    name: 'App',
    components: {
        MyForm,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
.App__photo {
    margin-bottom: 8px;
}
</style>
