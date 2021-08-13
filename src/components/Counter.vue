<template>
  <h2> {{ customTitle }} </h2>
  <!-- Html Elements with Data Attributes for tests -->
  <p test-id="expressionCounter"> {{ counter }} <sup>2</sup> = {{ squareCounter }}  </p>
  <p test-id="counter"> {{ counter }}  </p>
  <div>
      <button test-id="increaseBtn" @click="increaseCounter" class="button">+1</button>
      <button test-id="decreaseBtn" @click="decreaseCounter" class="button">-1</button>
  </div>
</template>

<script>
export default {
    name: 'Counter',
    // Props: 1º aprox
    // props: [ 'title' ],
    // Props: 2º aprox
    props: {
        title: String,
        start: {
            type: Number,
            default: 1,
            required: false,
            validator: (value) => {
                return value >= 0
            }
        }
    },
    data() {
        return {
            counter: this.start
        }
    },
    methods: {
        getSquareValue() {
            // console.log("Method square value")
            return this.counter * this.counter
        },
        increaseCounter( event ) {
            this.counter++
        },
        decreaseCounter( event ) {
            this.counter > 0 ? this.counter-- : this.counter = 0
        }

    },
    computed: {
        squareCounter() {
            // console.log("Computed square counter")
            return this.counter * this.counter
        },
        customTitle() {
            return this.title ? this.title : "Counter"
        }
    }
}
</script>

<style>

    .button {
        background-color: #64BB87;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        cursor: pointer;
        margin: 0px 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;
    }

    .button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }

</style>