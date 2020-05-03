import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

const users: User[] = [
    { id: '1', displayName: 'Sevcan ALKAN', username: 'salkan' },
    { id: '2', displayName: 'Kagan KUSCU', username: 'kagan' },
    { id: '3', displayName: 'Sercan A.', username: 'sercan' }
];

@Injectable()
export class UserInterceptor implements HttpInterceptor {
    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.includes('users') && req.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: users }));
        } else {
            return next.handle(req);
       }
    }
}