import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit , OnDestroy{

  @Input() img: string = "";
  @Output() loaded = new EventEmitter<string>();

  imageDefault = "./assets/images/default.png";

  constructor() {
    // before render
    // NO async -- one time
    console.log("constructor", "imgValue=>", this.img)
  }

  ngOnChanges() {
    // before and during render
    // changes inputs -- x times
    console.log("ngOnChanges", "imgValue=>", this.img)
  }

  ngOnInit(): void {
    // before render
    // async - fetch, promises -- one time
    console.log("ngOnInit", "imgValue=>", this.img)
  }

  ngAfterViewInit(): void {
    // after render
    // handle children
    console.log("ngAfterViewInit")
  }

  ngOnDestroy(): void {
    // delete component 
    console.log("ngOnDestroy")
  }
  
  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);
  }
}

//https://www.w3schools.com/howto/img_avatar.png
