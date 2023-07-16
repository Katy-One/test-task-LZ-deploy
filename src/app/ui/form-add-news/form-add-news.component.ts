import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { FormNews } from 'src/app/models/news.model'
import { NewsService } from 'src/app/services/news.service'

@Component({
  selector: 'app-form-add-news',
  templateUrl: './form-add-news.component.html',
  styleUrls: ['./form-add-news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAddNewsComponent {
  public newsForm!: FormGroup
  @Output()
  public submitEmit = new EventEmitter<FormNews>()

  constructor(
    private formBuilder: FormBuilder,
    public newsService: NewsService,
  ) {}

  public ngOnInit(): void {
    this.createForm()
  }

  public onSubmit(): void {
    this.submitEmit.emit(this.newsForm.value)
  }

  private createForm(): void {
    this.newsForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    })
  }
}
