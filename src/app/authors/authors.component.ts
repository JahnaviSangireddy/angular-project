import { Component } from '@angular/core';
import { AuthorServiceService } from '../author-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [NgFor],
  providers: [AuthorServiceService],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})
export class AuthorsComponent {

  authors;
  constructor(service: AuthorServiceService){
    this.authors = service.getAuthors();
  }

}
