import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

import { expireTime } from '../const/const'
import { SnackbarComponent } from '../shared/components/snackbar/snackbar.component'

@Injectable({
  providedIn: 'root',
})
export class SnackbarNotificationModal {
  constructor(private snackBar: MatSnackBar) {}

  public open(data: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      data,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: expireTime,
    })
  }
}
