import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

const material = [RouterModule, CommonModule]

@NgModule({
  exports: [...material],
  imports: [...material],
})
export class SharedModule {}
