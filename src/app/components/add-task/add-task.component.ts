import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text: string | undefined;
  day: string | undefined;
  reminder: boolean = false;
  
  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }
    const newTask = {
      text: this.text, 
      day: this.day,
      reminder: this.reminder
    }

    // @todo - emit event

    this.text = '';
    this.day = '';
    this.reminder = false;



  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
