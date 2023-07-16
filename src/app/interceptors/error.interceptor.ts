import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { SnackbarNotificationModal } from '../modals/snackbar-notification.modal'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public snackbarNotificationModal: SnackbarNotificationModal) {}

  intercept<T>(
    request: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.snackbarNotificationModal.open(error.message)
        return throwError(() => error)
      }),
    )
  }
}
