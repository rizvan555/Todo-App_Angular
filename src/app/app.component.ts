import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container" style="margin-top: 30px;">
      <h1>Todo-App</h1>
      <hr />
      <div class="form-group">
        <label for="work">My Work</label>
        <input
          type="text"
          class="form-control"
          id="work"
          name="work"
          [(ngModel)]="work"
        />
      </div>
      <div class="form-group mt-2">
        <button class="btn btn-outline-primary w-100" (click)="addTodo()">
          Save
        </button>
      </div>
      <hr />
      <ul>
        <li *ngFor="let w of works; let i = index">
          {{ i + 1 }}.{{ w }}
          <button (click)="deleteTodo(i)" class="btn btn-outline-danger btn-sm">
            Delete
          </button>
        </li>
      </ul>
    </div>
  `,
})
export class AppComponent {
  work: string = '';
  works: string[] = [];

  addTodo() {
    this.works.push(this.work);
    this.work = '';
  }

  deleteTodo(index: number) {
    let result: boolean = confirm('Would you like remove your Todo?');
    if (result) {
      this.works.splice(index, 1);
    }
  }
}
