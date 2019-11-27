<template>
    <div>
        <input v-on:input="whenUserTypes"/>
    </div>
</template>

<script>
export default{
    name: 'SearchBar',
    methods: {
    whenUserTypes: function(event) {
        console.log(event.target.value);
    }
    }
};
</script>