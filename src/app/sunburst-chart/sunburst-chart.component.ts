import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-sunburst-chart',
  templateUrl: './sunburst-chart.component.html',
  styleUrls: ['./sunburst-chart.component.scss'],
})
export class SunburstChartComponent implements OnInit, AfterViewInit {
  @ViewChild('chart') chartElement: ElementRef;

  private data: any = {
    /* Your data structure */
    name: 'root',
    children: [
      {
        name: 'Strategy & Vision',
        children: [
          { name: 'Organizational Strategy', size: 10 },
          { name: 'Business Model', size: 5 },
          // Add more sections as necessary
        ],
      },
      {
        name: 'Technology',
        children: [
          { name: 'Infrastructure', size: 8 },
          { name: 'Business Application', size: 12 },
        ],
      },
      // Continue adding all sections...
    ],
  };

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createSunburst();
  }

  private createSunburst() {
    const svg = d3
      .select(this.chartElement.nativeElement)
      .append('svg')
      .attr('width', 500) // Adjust the size as needed
      .attr('height', 500)
      .append('g')
      .attr('transform', 'translate(250,250)');

    const partition = d3.partition().size([2 * Math.PI, 200]);

    const root = d3.hierarchy(this.data).sum((d) => (d as any).size);
    console.log('roor log>--', root);

    partition(root);
    const arc = d3
      .arc()
      .startAngle((d: any) => d.x0)
      .endAngle((d: any) => d.x1)
      .innerRadius((d: any) => d.y0)
      .outerRadius((d: any) => d.y1);
    svg
      .selectAll('path')
      .data(root.descendants())
      .enter()
      .append('path')
      .attr('display', (d) => (d.depth ? null : 'none')) // hide the root node
      .attr('d', arc as any)
      .style('stroke', 'black')
      .style('fill', (d: any) =>
        d3.scaleOrdinal(d3.schemeCategory10)(d.depth.toString())
      );
    console.log('desceo:--', root.descendants());
  }
}
