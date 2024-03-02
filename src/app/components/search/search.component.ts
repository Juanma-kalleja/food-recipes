import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, NgClass, FontAwesomeModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  faGlass = faMagnifyingGlass;
  searchForm!: FormGroup;
  @Output() searchEvent = new EventEmitter<string>();
  searchValue: string = '';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.nonNullable.group({
      searchValue: '',
    })
  }

  onSearchSubmit(): void{
    this.searchValue = this.searchForm.value.searchValue ?? '';
    console.log(this.searchValue);
    this.searchEvent.emit(this.searchValue);
  }
}
