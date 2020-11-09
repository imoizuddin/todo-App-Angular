import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) {

  }
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executableHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8081/hello-world-bean');
    // console.log("Excecuted hello world service")
  }


  executableHelloWorldWithPathVariable(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8081/hello-world/path-varaible/${name}`);
  }
}
