import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  a=10
  name="MBU"
  total: number=72
  curdate : Date=new Date()
}

