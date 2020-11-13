import { Course } from './../models/course.model';
import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {
  courses: Course[];

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() { 
    this.courses = this.courseService.getCourses();
  }
}
