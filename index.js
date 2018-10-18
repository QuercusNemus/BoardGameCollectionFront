function getGamesForUserFromFB(userName) {
    new Vue({
        el: '#app',
        data () {
            return {
                info: null
            }
        },
        mounted () {
            const config = {
                headers: {'userName': userName}
            };
            axios
                .get('http://localhost:8080/api/collection/read', config)
                .then(response => (this.info = response))
        }
    })
}
