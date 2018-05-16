import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild('carousel') carousel: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onNavCarousel(next?: boolean): void {
    // if (next) {this.carousel.nativeElement.carousel('next');}
    // else this.carousel.nativeElement.carousel('prev');
  }

}
