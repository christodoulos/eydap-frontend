import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormsService } from '../forms.service';

@Component({
  selector: 'app-submit-case',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './submit-case.component.html',
  styleUrl: './submit-case.component.css',
})
export class SubmitCaseComponent implements OnInit {
  formsService = inject(FormsService);

  form = new FormGroup({
    file: new FormControl(null, Validators.required),
    otherField: new FormControl('', Validators.required),
    // Add more independent form controls as needed
  });

  ngOnInit(): void {}

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    this.form.get('file').setValue(file);
  }

  onSubmit() {
    if (this.form.valid) {
      const formData: FormData = new FormData();
      formData.append(
        'file',
        this.form.get('file').value,
        this.form.get('file').value.name
      );
      formData.append('otherField', this.form.get('otherField').value);

      this.formsService.sendFirstForm(formData).subscribe({
        next: (res: any) => {
          console.log(res);
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }
  }
}
