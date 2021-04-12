const api_url_random = "https://api.adviceslip.com/advice";

async function randomAdvice(){
    const response = await fetch(api_url_random);
    var data = await response.json();
    document.getElementById('advice').innerHTML = data.slip.advice;
}

const changeAdvice = {
    methods: {
        onClick(){
            this.$emit(randomAdvice())
        }
    }
} 

const app = Vue.createApp({
    data() {
        return{
            advice: randomAdvice(),
            }
        },
        components:{
            changeAdvice
        },
        methods:{
            onClickModel(){
               randomAdvice()
            }
        }
    })

app.mount('#adviceGiver');


