import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notebook',
    template: `
    <nb-card>
      <nb-card-body size="small">
        <input type="text" nbInput fullWidth fieldSize="small" placeholder="Title">
        <textarea nbInput fullWidth placeholder="Textarea"></textarea>
      </nb-card-body>
    </nb-card>
  `,
})

export class NoteBookComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}