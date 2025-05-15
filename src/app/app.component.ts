import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TimezoneService } from './time-service.service';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class TimeComponent implements OnInit {
  timezones: string[] = [];
  selectedTimezone = 'UTC'; // Default timezone
  localTime = '';
  selectedTime = '';
 
  constructor(private timezoneService: TimezoneService) {}
 
  ngOnInit() {
    // Fetch available timezones
    this.timezoneService.getTimezones().subscribe((zones) => {
      this.timezones = zones;
    });
    setInterval(() => {
      this.updateLocalTime();
      this.updateSelectedTime();
    }, 1000); // Update every second
  }
 
  updateLocalTime() {
    const now = new Date();
    this.localTime = now.toLocaleString();
  }
 
  updateSelectedTime() {
    if (this.selectedTimezone) {
      this.timezoneService.getSelectedTime(this.selectedTimezone).subscribe((response) => {
        this.selectedTime = response.selectedTime;
      });
    }
  }
}