import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


constructor(@Inject(DOCUMENT) document: Document) {

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  title = 'loginform';
  
}
