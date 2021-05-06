const api_url_random = "https://api.adviceslip.com/advice"

const app = Vue.createApp({
    data() {
        return{
            advice: "",
            url: "https://api.adviceslip.com/advice"
            }
        },
        methods:{
            async randomAdvice(){
                const response = await fetch(api_url_random);
                var data = await response.json();
                this.advice = data.slip.advice
                //document.getElementById('advice').innerHTML = data.slip.advice;
            }
        }, 
        mounted: function(){
            this.$nextTick(function(){
                    this.randomAdvice()
        })
    }
})

app.mount('#adviceGiver');


