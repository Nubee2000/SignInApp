import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";


@Component({
    selector: 'courses',
    template: `
    <button class = "btn btn-primary">Save</button>
    `
})
export class CoursesComponent {
    title = "3 Authors";
    courses = ["author1", "author2", "author3"]

    constructor(service: CoursesService) {
       
        this.courses = service.getCourses();
    }
}
