<template>
  <div class="page-wrapper">
      <div class="container">
        <div class="chart-wrapper">
            <div class="project-heading">
                <h3 class="title">Welcome to show Radar Chart</h3>
                <p class="author">Author: Tanvir Ahammad Chy</p>
            </div>
            <div class="chart-content">
                  <client-only>
                    <div>
                      <apexchart
                        width="500"
                        type="radar"
                        :options="chartOptions"
                        :series="series"
                      ></apexchart>
                    </div>
                  </client-only>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['dataOne'],
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        }, 
        colors:['#6AB9D1', '#E57322'],
        plotOptions: {
          radar: {
            polygons: {
              strokeColor: 'red',
              fill: {
                  colors: ['#FFC534', '#fff']
              }
            }
          }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center', 
            markers: {
              width: 50,
              height: 20,
              strokeWidth: 1,
              strokeColor: ['rgba(#6AB9D1, .7)', 'rgba(#E57322, .7)'],
              fillColors: ['#D4F4F2', '#F7D5B2'],
              radius: 0,
          },
        },
        xaxis: {
          categories: this.dataOne.map(item => {
            return item.split(' ');
          }),
          labels: {
            show: true,
            style: {
              colors: this.dataOne.map(item => {
                return '#CC9201'
              })
            }
          },
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            style: {
              colors: this.dataOne.map(item => {
                return '#E57322'
              })
            }
          },
        },
        dataLabels: {
          enabled: false,
            style: {
              colors:['red', 'yellow'],
            }
        }
      },
      series: [
        {
          name: '現在の満足度（充実度）',
          data: [20, 60, 12, 14, 59, 37, 99, 56]
        },
        {
          name: '3年後に目指したい満足度（充実度）',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.chart-content{
  display: flex;
  justify-content: center;
}

.chart-wrapper{
  .project-heading{
    margin-bottom: 50px;
    text-align: center;
    .title{
      padding-top: 30px;
      color: $orange;
      font-weight: 700;
    }
    .author{
      color: $gray;
    }
  }
}  
</style>