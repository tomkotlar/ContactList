import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { UserService } from "../services/user.service";
import { FormControl, Validators } from "@angular/forms";
import { User } from "../models/user";

@Component({
  selector: "app-new-contact",
  templateUrl: "./new-contact.component.html",
  styleUrls: ["./new-contact.component.scss"],
})
export class NewContactComponent implements OnInit {
  user: User;
  avatars = ["svg-1", "svg-2", "svg-3", "svg-4"];
  name = new FormControl("", [Validators.required]);

  constructor(
    private dialogRef: MatDialogRef<NewContactComponent>,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.user = new User();
  }
  getErrorMessage() {
    if (this.name.hasError("required")) {
      return "You must enter a name";
    }
  }

  save() {
    this.userService.addUser(this.user).then((user) => {
      console.log(this.user, "user");
      this.dialogRef.close(this.user);
    });
  }
}
