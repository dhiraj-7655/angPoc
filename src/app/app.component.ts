import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit
,AfterViewInit
 {
  title = 'Angular Project';
  @ViewChild('paragraph', { static: false }) paragraph?: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // (this.paragraph?.nativeElement as HTMLParagraphElement).style.fontSize = `42px`;
  }

  ngAfterViewInit(): void {
    // (this.paragraph?.nativeElement as HTMLParagraphElement).style.color = '#2f44dd';
    // (this.paragraph?.nativeElement as HTMLParagraphElement).style.fontSize = `22px`;
  }
}
