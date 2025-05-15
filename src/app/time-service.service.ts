import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class TimezoneService {
  private baseUrl = 'https://time.runasp.net/api/time'; // Backend API base URL
 
  constructor(private http: HttpClient) {}
 
  getTimezones(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/timezones`);
  }
 
  // Fetch the selected timezone time
  getSelectedTime(timezone: string): Observable<{ selectedTime: string }> {
    const encodedTimezone = encodeURIComponent(timezone); // Encode timezone to solve the issue
    return this.http.get<{ selectedTime: string }>(
        `${this.baseUrl}?timezone=${encodedTimezone}`
    );
}
}