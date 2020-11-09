import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMsg:string;
  name = '';

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit(): void {
    // console.log(this.message)
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    console.log(this.service.executableHelloWorldBeanService());
    // console.log("hello");
    this.service.executableHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response) {
    this.welcomeMsg = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  getWelcomeMessageWithPathVariable() {
    console.log(this.service.executableHelloWorldBeanService());
    // console.log("hello");
    this.service.executableHelloWorldWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
}
