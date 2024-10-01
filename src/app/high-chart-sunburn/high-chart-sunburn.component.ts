// import { Component, OnInit } from '@angular/core';
// import * as Highcharts from 'highcharts';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import Sunburst from 'highcharts/modules/sunburst';
import vecData from "../test.json";


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

    // data.forEach((point: any) => {
    //   if (point.value > 5) {
    //     // point.borderWidth = 0;
    //     // point.color = '#cc66ff';
    //     // point.color = '#BFBFBF';
    //   } else {
    //     point.borderWidth = 1; // Keep border if     value <= 6
    //     // point.color = '#582A72';
    //   }
    //   // if(point.name == ' ') {
    //   //   point.color = '#cc66ff';
    //   // }
    // });
    this.chartOptions = {
      chart: {
        height: '100%',
      },
      colors: ['transparent', '#C68FE6', '#86D293', '#54C392', '#15B392'],
      title: {
        text: 'Test Data',
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
            filter: {
              property: 'innerArcLength',
              operator: '>',
              value: 16,
            },
          },
          levels: [
            {
              level: 1,
              color: '#00DFA2',
              dataLabels: {
                filter: {
                  property: 'outerArcLength',
                  operator: '>',
                  value: 64,
                },
              },
              levelSize: {
                unit: 'percentage',
                value: 15,
              },
            },
            {
              level: 2,
              colorByPoint: true,
              levelSize: {
                unit: 'percentage',
                value: 15,
              },
            },
            {
              level: 3,
              color: '#480032',
              colorVariation: {
                key: 'brightness',
                to: -0.5,
              },
              levelSize: {
                unit: 'percentage',
                value: 15,
              },
            },
            {
              level: 4,
              levelSize: {
                unit: 'percentage',
                value: 20,
              },
              color: '#00215E',
              colorVariation: {
                key: 'brightness',
                to: 0.5,
              },
            },
          ],
          levelIsConstant: false,
        },
      ],
      tooltip: {
        headerFormat: '',
        pointFormat: '<b style="color: red">{point.value}</b>',
      },
    };
  }
}
