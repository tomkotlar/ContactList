import { Component, OnInit } from "@angular/core";
import { User } from '../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  user: User;
  
  constructor(
    private route: ActivatedRoute,
    private service: UserService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params[`id`];
      console.log(id, "hello", params[`id`]);
      if (!id) id = 1;
      this.user = null;

      this.service.users.subscribe((users) => {
        if (users.length == 0) return;
        this.user = this.service.userById(id);
      });
    });
  }
}
