import { Component, OnInit } from "@angular/core";

import { Observable } from "rxjs";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { map, shareReplay } from "rxjs/operators";

import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import {
  MatSnackBar,
  MatSnackBarRef,
  SimpleSnackBar,
} from "@angular/material/snack-bar";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { NewContactComponent } from '../new-contact/new-contact.component';


@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  showFiller = false;
  users: Observable<User[]>;
  otherTheame: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
    iconRegistry.addSvgIconSet(
      sanitizer.bypassSecurityTrustResourceUrl("assets/avatars.svg")
    );
  }

  cheangeTheme() {
    this.otherTheame = !this.otherTheame;
    console.log("click");
  }
  ngOnInit() {
    this.users = this.userService.users;
    this.userService.loadAll();
  }

  openContactDialog() {
    let dialogRef = this.dialog.open(NewContactComponent, { width: "450px" });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("The dialog was closed", result);

      if (result) {
        this.openSnackBar("Contact added", "Navigate")
          .onAction()
          .subscribe(() => {
            this.router.navigate([`/navigation`, result.id]);
          });
      }
    });
  }

  openSnackBar(
    message: string,
    action: string
  ): MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }
}
