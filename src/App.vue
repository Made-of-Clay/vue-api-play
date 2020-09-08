<template>
    <div id="app">
        <img
            alt="Vue logo"
            src="https://picsum.photos/300/150"
            class="App__photo"
        />
        <MyForm foo="bar" />
        <p>Simple test (w/ console open):</p>
        <ul>
            <li>Click button w/ empty fields to get error message</li>
            <li>Notice error disappears when fields are typed in again</li>
            <li>valid fields "POST" data to console.log</li>
        </ul>
        <p>
            The data being posted is admittedly contrived, but that's not the
            point.
        </p>
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
    margin: 60px auto 0;
    max-width: 600px;
}
.App__photo {
    margin-bottom: 8px;
}
ul {
    text-align: left;
}
</style>
