import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
    ngOnInit(): void {

    }
    constructor(private router: Router) { }
    login(): void {
        this.router.navigate(["login"])
    }
    sigin(): void {
        this.router.navigate(["register"])
    }
}
