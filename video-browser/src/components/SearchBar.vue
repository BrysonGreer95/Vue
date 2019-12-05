<template>
    <div>
        <!-- This @input means, when there is input (typing), execute the method "whenUserTypes" -->
        <input @input="whenUserTypes"/>
    </div>
</template>

// This is the script of the code below. Basically where we add functionality, and make connections.
<script>
export default{
    name: 'SearchBar',
    methods: {
        // This is the method, "whenUserTypes" which we referenced above on the @input. 
    whenUserTypes: function(event) {
        // this next line means, when "this" (the function), emits a change, update the value termChange
        // basically reads as, this function should emit a change called termChange, when event.target.value changes.
        this.$emit('termChange', event.target.value);
}
    }
};
</script>