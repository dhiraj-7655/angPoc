// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Sunburst from 'highcharts/modules/sunburst';
import vecData from '../test.json';

/**
 * Notes
 *  N/A or 0 value will be not plot the child nodes
 *  value 1 will be considered as not filled forms eg 0
 *  value 2 will be considered as filled forms (after calculation it comes as 0)
 */

Sunburst(Highcharts);

@Component({
  selector: 'app-high-chart-sunburn',
  templateUrl: './high-chart-sunburn.component.html',
  styleUrls: ['./high-chart-sunburn.component.scss'],
})
export class HighChartSunburnComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; // Highcharts instance
  chartOptions: Highcharts.Options = {}; // Chart options

  ngOnInit(): void {
    const data = vecData;

    data.forEach((point: any) => {
      if (point.value > 17) {
        point.borderWidth = 0;
        // point.color = '#cc66ff';
        // point.color = '#BFBFBF';
      } else {
        // point.borderWidth = 1; // Keep border if     value <= 6
        // point.color = '#582A72';
      }
      // if(point.name == ' ') {
      //   point.color = '#cc66ff';
      // }
    });
    this.chartOptions = {
      chart: {
        height: '100%',
      },
      title: {
        text: 'Test Data',
      },
      plotOptions: {
        sunburst: {
          point: {
            // events: {
            //   click: function (event) {
            //     // if (this.node.level === 1 || this.node.level === 2) {
            //     //   // Handle click event for level 1 and level 2
            //     //   console.log('Clicked on level', this.node.level);
            //     // } else {
            //     //   // Prevent click event for other levels
            //     //   event.preventDefault();
            //     // }
            //   }
            // }
          }
        }
      },
      series: [
        {
          type: 'sunburst',
          data: data,
          name: 'Root',
          allowTraversingTree: true,
          borderRadius: 3,
          cursor: 'pointer',
          enableMouseTracking: true,
          dataLabels: {
            format: '{point.name}',
            style: {
              fontSize: '12px', // Change this to your desired font size
              textOutline: 'none', // This removes the glow effect
            },
            filter: {
              property: 'innerArcLength',
              operator: '>',
              value: 16,
            },
          },
          levels: [
            {
              level: 1,
              dataLabels: {
                filter: {
                  property: 'outerArcLength',
                  operator: '>',
                  value: 64,
                },
                style: {
                  fontSize: '9px', // Change this to your desired font size
                  textOutline: 'none', // This removes the glow effect
                },
              },
              levelSize: {
                unit: 'percentage',
                value: 15,
              },
              // enableMouseTracking: true,
            },
            {
              level: 2,
              colorByPoint: true,
              levelSize: {
                unit: 'percentage',
                value: 17,
              },
              dataLabels: {
                style: {
                  fontSize: '8px', // Change this to your desired font size
                  textOutline: 'none', // This removes the glow effect
                },
              },
            },
            {
              level: 3,
              levelSize: {
                unit: 'percentage',
                value: 17,
              },
              dataLabels: {
                style: {
                  fontSize: '8px', // Change this to your desired font size
                  textOutline: 'none', // This removes the glow effect
                  color : 'white'
                },
              },
            },
            {
              level: 4,
              levelSize: {
                unit: 'percentage',
                value: 3,
              },
              colorVariation: {
                key: 'brightness',
                to: 0.5,
              },
              dataLabels: {
                style: {
                  fontSize: '12px', // Change this to your desired font size
                  textOutline: 'none', // This removes the glow effect
                },
              },
            },
          ],
          levelIsConstant: false,
        },
      ],
      tooltip: {
        headerFormat: '',
        stickOnContact: false,
        pointFormat: '<b style="color: red">{point.value}</b>',
      },
    };
  }
}
