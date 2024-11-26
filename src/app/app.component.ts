import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  @ViewChild('video', { static: true }) videoElementRef!: ElementRef<HTMLVideoElement>;
  camData: any = null;

  ngOnInit(): void {
    this.askPermission();
  }

  askPermission(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((response) => {
        const video = this.videoElementRef.nativeElement
        video.srcObject = response;
        video.play();
      });
  }

  openGithubRepo(): void {
    window.open('', '_blank');
  }
}
