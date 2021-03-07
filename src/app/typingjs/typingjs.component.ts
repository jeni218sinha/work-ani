import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typingjs',
  templateUrl: './typingjs.component.html',
  styleUrls: ['./typingjs.component.css']
})
export class TypingjsComponent implements OnInit {

  wordsList = [];
  wordMessage = [
    {name: 'Prafulla Sharma', words: ['Cricketer', 'Tutor', 'Life long Learner']},
    {name: 'Narendra Katlamudi', words: ['Highly energetic', 'intelligent and sensible person']},
    {name: 'Rahul Tibdewal', words: ['Fun Happy Leader']},
    {name: 'Ananta Gupta', words: ['Dynamic', 'Respectful', 'Organised']},
    {name: 'Kishore Chintalapati', words: ['Passion', 'Smiling', 'Caring']},
    {name: 'Harshavardhan Papudippu', words: ['calm', 'smart', 'humble']},
    {name: 'Anurag Agarwal', words: ['Versatile Great Buddy']},
    {name: 'Mayur Kale', words: ['Easy-Going', 'Smart', 'Hard working']},
    {name: 'Gaurav Solanki', words: ['Young (looks that way) ;-)', 'passionate', 'energetic']},
    {name: 'Vaibhav Gupta', words: ['Logical', 'Simple', 'Empathetic ']},
    {name: 'Mukul Verma', words: ['Energetic', 'Compassionate', 'Optimistic']},
    {name: 'Mohit', words: ['Strong', 'Positive', 'Hard working']},
    {name: 'Jayneeta', words: ['Mentor', 'Destress - therapist', 'Good Listener']}
  ];
  joinWords = ['says ', 'thinks that you are a ', 'feels', 'thinks of you as a', 'adds', 'calls you'];

  constructor() { }

  ngOnInit(): void {
    this.wordsList = [];
    for (const x of this.wordMessage) {
      const randomIndex =  Math.floor(Math.random() * this.joinWords.length);
      this.wordsList.push(' ' + x.words + ' -- ' + x.name);
    }
  }

}
