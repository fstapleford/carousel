import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'carousel';

  public images = [
    { path: "/assets/images/joey0.jpg", id: "imgage0" },
    { path: "/assets/images/joey1.jpg", id: "imgage1" },
    { path: "/assets/images/joey2.jpg", id: "imgage2" },
    { path: "/assets/images/joey3.jpg", id: "imgage3" },
    { path: "/assets/images/joey4.jpg", id: "imgage4" },
    { path: "/assets/images/joey5.jpg", id: "imgage5" },
    { path: "/assets/images/joey6.jpg", id: "imgage6" },
    { path: "/assets/images/joey7.jpg", id: "imgage7" },
    { path: "/assets/images/joey8.jpg", id: "imgage8" },
    { path: "/assets/images/joey9.jpg", id: "imgage9" }
  ];

  chosenImage: string | null = '';

  ngOnInit(){
  }

  getValue(mouseEvent: MouseEvent): string {
    console.log('getValue mouseEvent', mouseEvent);
    return (mouseEvent.target as HTMLInputElement).value;
  }


  handleCarouselEvents(event:MouseEvent) {

    const target = event.target as HTMLImageElement;
    let src = target.getAttribute('src');
    this.chosenImage = src;

  }

}
