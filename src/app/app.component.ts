import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretMsg = 'Threat Level = Midnight !';
  isClicked = false;
  clickDetails = [];

  onButtonClick(){
    this.isClicked = !this.isClicked;
    this.clickDetails.push('Clicked on - ' + Date.now());



    }

    getBGColor(){
      return this.clickDetails.length > 4 ? 'blue': '' ;

  }

    getColor(){
      return this.clickDetails.length > 4 ? 'white': '' ;
      
    }
}
