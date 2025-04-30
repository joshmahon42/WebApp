import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Device } from '@capacitor/device';
import { HttpClient } from '@angular/common/http';
/*import { StorageService } from '../services/storage.service';*/

interface CalendarEvent {
  title: string;
  time: string;
  day: string;
}

type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CalendarComponent implements OnInit{
  jsonData: any;
  deviceInfo: any;
  constructor(private http: HttpClient) {}
  events: CalendarEvent[] = [];
  newEvent: Partial<CalendarEvent> = {};

  days: Weekday[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  times = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];

  async ngOnInit() {
    this.deviceInfo = await Device.getInfo();
    console.log('Device Info:', this.deviceInfo);
    this.loadJson();
    //await this.storageService.init();//Initialize the storage service
    //this.loadEventsFromStorage();
  }

  loadJson() {//load json file
    this.http.get<CalendarEvent[]>('assets/events.json').subscribe({
    next: data => {
      this.events = [...this.events, ...data];
      //this.saveEventsToStorage(); 
    }
  });
  }

  /*async loadEventsFromStorage() {//load up events from json file
    const storedEvents = await this.storageService.getEvents();
    if (storedEvents && storedEvents.length > 0) {
      this.events = storedEvents;
    }
  }*/

  /*async saveEventsToStorage() {//save events method
    await this.storageService.saveEvents(this.events);
  }*/

  addEvent() {
    if (this.newEvent.title && this.newEvent.time && this.newEvent.day) {
      this.events.push(this.newEvent as CalendarEvent);
      this.newEvent = {};
      //this.saveEventsToStorage();//save events after adding
    }
  }

  getEventsForSlot(day: string, time: string) {
    return this.events.filter(e => e.day === day && e.time === time);
  }

  removeEvent(eventToRemove: CalendarEvent) {
    this.events = this.events.filter(e => e !== eventToRemove);
    //this.saveEventsToStorage();//save events after removing
  }
  
  isToday(day: Weekday): boolean {
    const today = new Date();
    const dayIndex = today.getDay(); // Sunday = 0, Saturday = 6
    const calendarDaysMap: Record<Weekday, number> = {
      Sunday: 0,
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
    };
    return calendarDaysMap[day] === dayIndex;
  }
  
  
}
