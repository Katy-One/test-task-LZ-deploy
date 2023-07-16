import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },

  {
    path: 'ru/news/:id',
    loadChildren: () =>
      import('./pages/single-news/single-news.module').then(
        (m) => m.SingleNewsModule,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
