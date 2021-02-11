import { Component, Prop, h,Element } from '@stencil/core';
import { format } from '../../utils/utils';

import ApexCharts from 'apexcharts'



@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {

  @Element() el: HTMLElement;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  componentDidLoad(){
    var options = {
      series: [{
        name: "Session Duration",
        data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
      },
      {
        name: "Page Views",
        data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
      },
      {
        name: 'Total Visits',
        data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
      }
    ],
      chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: [5, 7, 5],
      curve: 'straight',
      dashArray: [0, 8, 5]
    },
    title: {
      text: 'Page Statistics',
      align: 'left'
    },
    legend: {
      tooltipHoverFormatter: function(val, opts) {
        console.log("tooltipHoverFormatter");
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
      }
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6
      }
    },
    xaxis: {
      categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
        '10 Jan', '11 Jan', '12 Jan'
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " (mins)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " per session"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val;
            }
          }
        }
      ]
    },
    grid: {
      borderColor: '#f1f1f1',
    }
    };


    
    var options2 = {
      chart: {
        height: 350,
        type: "line",
        stacked: false
      },
      dataLabels: {
        enabled: false
      },
      colors: ["#FF1654", "#247BA0"],
      series: [
        {
          name: "Series A",
          data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6]
        },
        {
          name: "Series B",
          data: [20, 29, 37, 36, 44, 45, 50, 58]
        }
      ],
      stroke: {
        width: [4, 4]
      },
      plotOptions: {
        bar: {
          columnWidth: "20%"
        }
      },
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016]
      },
      yaxis: [
        {
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#FF1654"
          },
          labels: {
            style: {
              colors: "#FF1654"
            }
          },
          title: {
            text: "Series A",
            style: {
              color: "#FF1654"
            }
          }
        },
        {
          opposite: true,
          axisTicks: {
            show: true
          },
          axisBorder: {
            show: true,
            color: "#247BA0"
          },
          labels: {
            style: {
              colors: "#247BA0"
            }
          },
          title: {
            text: "Series B",
            style: {
              color: "#247BA0"
            }
          }
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      legend: {
        horizontalAlign: "left",
        offsetX: 40
      }
    };


    

    
    var chart = new ApexCharts(this.el.shadowRoot.querySelector("#myChart1"), options);
    // var chart = new ApexCharts(this.el.querySelector("#myChart1"), options);
    chart.render();
  }

  render() {
    return <div>
      <h1>Test Apex</h1>
      <div id= "myChart1"></div>
      <apex-chart
  type="bar"
  series={[{
    name: 'sales',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
  }]}
  options={{
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }} />
      </div>;
  }
}
