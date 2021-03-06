import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl('', Validators.pattern('[\\w\\-\\s\\/]+')),
      category: new FormControl('Drama'),
      year: new FormControl('')
    });
  }

  onSubmit(mediaItem) {
    console.log(mediaItem);
  }
}
