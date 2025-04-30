/*import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(private storage: Storage) {}

  async init() {//Initialize storage
    await this.storage.create();
  }

  async saveEvents(events: any[]) {//Save events to storage
    await this.storage.set('events', events);
  }

  async getEvents(): Promise<any[]> {//Get events from storage
    return await this.storage.get('events') || [];
  }

  async clearEvents() {//Clear all events from storage
    await this.storage.remove('events');
  }
}*/