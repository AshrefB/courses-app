import { CourseService } from './../services/course.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.page.html',
  styleUrls: ['./add-course.page.scss'],
})
export class AddCoursePage implements OnInit {
  course = {};

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
