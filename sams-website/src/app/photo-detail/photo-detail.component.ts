import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-photo-detail',
  standalone: true,
  imports: [],
  templateUrl: './photo-detail.component.html',
  styleUrl: './photo-detail.component.css'
})
export class PhotoDetailComponent {

	imageId:string = "";

    
    constructor(
		private location: Location,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void{
		this.imageId = Number(this.route.snapshot.paramMap.get('id')).toString().padStart(4, '0');
	}

	goBack(): void {
		this.location.back();
	}
}
