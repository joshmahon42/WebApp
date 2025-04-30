import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  async getDeviceInfo() {
    const info = await Device.getInfo();
    return info;
  }
}
