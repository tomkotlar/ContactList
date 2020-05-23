import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Note } from '../models/note';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() notes: Note[]

  displayedColumns: string[] = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note> 

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator
  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  } 

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes)
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}


