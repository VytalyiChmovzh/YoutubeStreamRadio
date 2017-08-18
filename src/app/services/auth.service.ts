import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {}

  authorize(): void {

  }

  unauthorize(): void {

  }

  isAuthorized(): boolean {
      return false;
  }
}
