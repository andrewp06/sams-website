import { Routes } from '@angular/router';
import { PhotosComponent } from './photos/photos.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

export const routes: Routes = [
    {path: "photos", component: PhotosComponent},
    {path: "contact", component: ContactPageComponent},
    {path: "about", component: AboutPageComponent}
];
