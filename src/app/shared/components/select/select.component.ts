import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
 @Input() title: string = '';
 @Input() data: any[] = [];
 @Output() selectionValue = new EventEmitter();
  ngOnInit(): void {}
  detectChanges(event: any) {
    this.selectionValue.emit(event);
  }
}
