import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.page.html',
  styleUrls: ['./course-details.page.scss'],
})
export class CourseDetailsPage implements OnInit {
  course = {};

  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.course = this.courseService.getCourse(id);
  }

  deleteCourse() {
    this.courseService.deleteCourse(this.course.id);
    this.router.navigate(['/courses']);
  }

  async deleteCourseConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm Delete!',
      message: 'Are you <strong>Sure</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteCourse();
          }
        }
      ]
    });

    await alert.present();
  }

}
