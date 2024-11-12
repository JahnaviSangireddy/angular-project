import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [NgFor],
  providers: [CourseService],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  title = "List of Courses";
  courses;
  constructor(service: CourseService){
    this.courses =service.getCourses();
  }
}
