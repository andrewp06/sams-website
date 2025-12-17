import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {

  images: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<string[]>('assets/photos/photos.json')
      .subscribe(ids => {
        this.images = ids;
        console.log(this.images)
      });
    
  }
}
