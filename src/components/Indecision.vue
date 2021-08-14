<template>
  <img v-if="image" :src="image" alt="background image">
  <div class="bg-dark"></div>

  <div class="indecision-container">
      <input 
        v-model="question"
        type="text" 
        placeholder="Make me a question">
      <p>Remember to end your question with ?</p>

      <div v-if="isValidQuestion">
          <h2> {{ question }} </h2>
          <h1> {{ answer }} </h1>
      </div>
  </div>
</template>

<script>
export default {
    name: "Indecision",
    data() {
        return {
            question: null,
            answer: null,
            image: null,
            isValidQuestion: false,
            spanishAnswers: {
                "yes": "Si",
                "no": "No",
                "maybe": "Quizas"
            }
        }
    },
    methods: {
        async getAnswer() {
            try {
                this.answer = "Thinking..."
                const { answer, image } = 
                    await fetch('https://yesno.wtf/api')
                        .then( resp => resp.json() )
                
                this.answer = this.spanishAnswers[answer]
                this.image = image
            } catch (error) {
                console.log( 'Indecision component: ', error)
                this.image = null
                this.answer = 'Cant\'t load from API'
                // throw new Error(error)
            }
        }
    },
    watch: {
        question( value, oldValue ) {
            this.isValidQuestion = false

            console.log( { value } )

            if(value.endsWith("?")) {
                this.isValidQuestion = true
                this.getAnswer()
            }
        }
    }
    
}
</script>

<style scoped>

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 1;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>