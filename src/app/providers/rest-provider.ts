import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {ScheduleEntry} from "./schedule-entry";


@Injectable()
export class RestProvider {

  baseUrl: string = "http://dennisbuerger.de:6421/api/tt/vorrunde";

  constructor(private  httpClient: HttpClient) {
  }

  public  getSchedule(): Observable<ScheduleEntry[]> {
    let scheduleEntries = this.httpClient.get<ScheduleEntry[]>(this.baseUrl);
    return scheduleEntries;
  }
}
