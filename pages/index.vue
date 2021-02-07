<template>
  <div class="container">
      <div class="wrapper">
          <Chart :dataOne="dataOne"/>
      </div>
  </div>
</template>

<script>
import Chart from '~/components/Chart'
export default {
  components: {
    Chart
  },
  data(){
    return{
      dataOne: [
        'Front End developer', 
        'Account officer', 
        'HR Admin', 
        'Software Engineer', 
        'Back end developer', 
        'Sells Excutive', 
        'Managing Director', 
        'Computer Operator'
      ],
    }
  }
}
</script>

