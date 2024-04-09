import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.css']
})
export class HorizontalComponent {
  showTopbar: boolean = false;

  ngOnInit() {
    this.detectScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.detectScreenSize();
  }

  detectScreenSize() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) { // Medium screen size and above
      this.showTopbar = true;
    } else {
      this.showTopbar = false;
    }
  }

  toggleTopbar() {
    this.showTopbar = !this.showTopbar;
  }
}
