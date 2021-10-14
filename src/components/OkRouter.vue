<template>
    <div>
        <h1>Salom bolajonlar</h1>
    </div>
</template>

<script>
    import CountryCreate from '@/components/CountryCreate.vue';
    export default {
        props:{
            country: {
                type: Object,
                default: {}
            }
        },
        components:{
            CountryCreate
        },
        data(){
            return{
                countryId: this.$route.params.area
            }
        },
        computed:{
            destination(){
                return countryList.find(
                countryList => countryList.area === this.countryId
                )
            }
        }

    }
</script>

<style scoped>

</style>