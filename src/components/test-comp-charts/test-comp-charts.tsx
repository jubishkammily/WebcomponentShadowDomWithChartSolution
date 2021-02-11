import { Component, Prop, h, Host,Element } from '@stencil/core';
// import { format } from '../../utils/utils';
import {  Chart,  ChartConfiguration,  ChartOptions,  ChartScales,  ChartTitleOptions } from 'chart.js';

@Component({
  tag: 'test-comp-charts',
  styleUrl: 'test-comp-charts.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  @Element() el: HTMLElement;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

//   private getText(): string {
//     return format(this.first, this.middle, this.last);
//   }

  componentDidLoad(){
    // var ctx = document.getElementById('myChart').getContext('2d');
    let ctx =  this.el.shadowRoot.querySelector('#myChart');

    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

  }


  protected render(): HTMLElement {
    return (
      <Host>
        {/* <CoToolbarSlots marginBottom={false} />
        <div
          ref={(el) => (this.printContainerEl = el)}
          class='print-container'
          style={{
            position: 'relative',
            height: this.height,
            width: '100%',
            overflow: 'hidden'
          }}
        >
          <div ref={(el) => (this.printingEl = el)} class='printing'>
            <p>Chart wird exportiert ...</p>
          </div>
          <div
            ref={(el) => (this.chartContainerEl = el)}
            class='chart-container'
            style={{ position: 'relative', height: this.height, width: '100%' }}
          >
            <canvas ref={(el) => (this.canvas = el)} width='400' height='300' />
          </div>
        </div> */}
        <div class="test">
        <canvas id="myChart" class ="graph-canvas"></canvas>
        </div>
       
      
      </Host>
    );
  }
}
