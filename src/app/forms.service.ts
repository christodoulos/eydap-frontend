import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  http = inject(HttpClient);

  sendFirstForm(data: FormData) {
    return this.http.post(`${environment.apiUrl}/analysis/execute`, data);
  }
}
