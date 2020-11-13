import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  course: Course = new Course(null, null, null, null, null);

  constructor(
    private courseService: CourseService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  addCourse() {
    this.courseService.addCourse(this.course);
    this.router.navigate(['/courses']);
  }
}
