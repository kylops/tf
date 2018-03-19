<template>
    <div class="google-map" id="mapName">
        <div id="map" height="460px" width="100%"></div>
        <div id="form">
            <table>
                <tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>
                <tr><td>Address:</td> <td><input type='text' id='address'/> </td> </tr>
                <tr><td>Type:</td> <td><select id='type'> +
                <option value='bar' SELECTED>bar</option>
                <option value='restaurant'>restaurant</option>
                </select> </td></tr>
                <tr><td></td><td><input type='button' value='Save' onclick='saveData()'/></td></tr>
            </table>
        </div>
        <div id="message">Location saved</div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            googleMapAPIKey: 'AIzaSyCj7wbB7Rcdu0EUl0GZkdaDMIYDK9u21wA'
        }
    },
    methods: {
        loadGoogleMapScripts (src) {
            let script = document.createElement('script')
            script.setAttribute('src', src)
            document.head.appendChild(script)
        }

    },
    mounted () {
        // this.loadGoogleMapScripts('https://maps.googleapis.com/maps/api/js?key=' + this.googleMapAPIKey + '&callback=initMap')
    }
}
</script>

<style>

</style>
