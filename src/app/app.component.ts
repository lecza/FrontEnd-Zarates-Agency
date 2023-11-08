import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, AfterContentInit, AfterViewChecked, AfterViewInit, AfterContentChecked, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy, AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, DoCheck {

  constructor() {
    console.log( 'class AppComponent' );
  }

  ngAfterContentChecked(): void {
    console.log( 'ngAfterContentChecked' )
  }

  ngAfterContentInit(): void {
    console.log( 'ngAfterContentInit' );
  }

  ngAfterViewInit(): void {
    console.log( 'ngAfterContentInit' );
  }

  ngAfterViewChecked(): void {
    console.log( 'ngAfterViewChecked' );
  }

  ngDoCheck(): void {
    console.log( 'ngDoCheck' );
  }

  ngOnDestroy(): void {
    console.log( 'ngOnDestroy' );
  }

  ngOnInit(): void {
    console.log( 'ngOnInit' );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log( 'ngOnChanges' );
  }
}
