import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redhat_frontend';
  
    showAvinashInfo: boolean = false;
    showMaheshInfo: boolean = false;
    showManishaInfo: boolean = false;
  
    showAvinash() {
      this.showAvinashInfo = !this.showAvinashInfo;
      this.showMaheshInfo = false; 
      this.showManishaInfo = false; 
    }
  
    showMahesh() {
      this.showMaheshInfo = !this.showMaheshInfo;
      this.showAvinashInfo = false; 
      this.showManishaInfo = false; 
    }
  
    showManisha() {
      this.showManishaInfo = !this.showManishaInfo;
      this.showAvinashInfo = false; 
      this.showMaheshInfo = false; 
    }
    



  }







 







  
  



  


  

