import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = [
    {
      name: 'Ananta Gupta',
      imgpath: 'https://media2.giphy.com/media/26DNdGM8UnWo6mSLm/giphy-downsized.gif?cid=003403176ermn3xzdiyfh23nrh6f1ghbo72af9o6y8klbb55&rid=giphy-downsized.gif',
      msg: 'Congratulations on achieving this great milestone. It\'s really amazing to work with you, and you surprise everyone around you with the amount of energy and liveliness you bring in the room. Your inclination towards technical stuff is just unbelievable. I always admire the way you put forward your views with clarity, and with inclusion for other\'s opinions. There is a lot I learn from you each day, and looking forward to work and learn more from you. \n' +
        '\n' +
        'Wishing you many more years to come!!!'
    },
    {
      name: 'Anurag Gautam',
      imgpath: '',
      msg: 'Congratulations Achindra on this big occasion. Wishing you many years of success and innovations. Your dedication and hard work are an inspiration to us all.\n' +
        '\n' +
        'Happy 10th Anniversary!'
    },
    {
      name: 'Kishore',
      imgpath: '',
      msg: 'Hi Achindra, the energy and passion you bring towards technology is inspiring. You are always full of thoughts to try new things and learn from it and with a smile - a true embodiment of Growth Mindset. It is always very refreshing to talk to you. I have thoroughly enjoyed the journey with you and learnt a lot personally from you. Thanks for being a great friend. Congratulations on completing 10 Years at Microsoft! Grateful for all the contributions you have made for the success of the company and looking forward for many more years. All the best!.'
    },
    {
      name: 'Vaibhav Gupta',
      imgpath: '',
      msg: '"It\'s been truly amazing working with Achin during support days and running some successfull projects like ""UDE ka Chashma"", To playing cricket together and now building a strong field and Engg connect." All the very best for the next decade full of awesome learnings and experiences.\n' +
        '\n'
    },
    {
      name: 'Nikunj Mittal',
      imgpath: 'https://media0.giphy.com/media/LYDNZAzOqrez6/giphy.gif?cid=003403175x5hsuoiu3dqpjy62f0nrh96hcsknto8zh8b9dbi&rid=giphy.gif',
      msg: 'Hi Achindra! I still remember the day you joined all new hires for lunch and we talked about all our college projects and experiences. I love the energy you bring with the in depth technical expertise. Your passion for design discussions inspired me when you carried the Learning sessions for new hires and explained at length the intricacies of Defender architecture. \n' +
        '\n' +
        'Congratulations Achindra on completing 10 years! 😍'
    },
    {
      name: 'Pankaj Madhurkar',
      imgpath: '',
      msg: 'Your passion and dedication to always do the right thing makes you what you are, a shining star :).'
    },
    {
      name: 'Harshvardhan P',
      imgpath: '',
      msg: 'I had the opportunity to talk with Achindra couple of times. I felt he is very humble. I observed one quality in Achindra which i am really impressed by, he explains things very clear and in simple terms. \n' +
        '\n' +
        'Congratulations Achindra on your 10th work anniversary @Microsoft.'
    },
    {
      name: 'Srinivas K',
      imgpath: '',
      msg: 'There is never a dull moment when you are around. You can talk to achin about varied things under the sun, the best biriyanis in town, Whether to rent or buy a house, cricket and almost everything. Oh how I miss our walks post lunch.\n' +
        '\n' +
        'It has been nothing short of wonderful getting to know you and working with you.Hoping to have more wonderful experiences.\n' +
        '\n'
    },
    {
      name: 'Mukul Verma',
      imgpath: 'https://media3.giphy.com/media/qnOBmH70CGSVa/giphy.gif?cid=00340317kr3vc3houn030q90d9o441ae8b3d4cizkynbl19x&rid=giphy.gif',
      msg: 'Congratulations on completing this journey Achindra. You have been one of my first teammates in Microsoft when I joined, and it\'s been a pleasure working with you since then. Always cheerful and optimistic, you bring liveliness to all our team. Keep inspiring for many more years to come! \n' +
        '\n' +
        'Party  🥳 is due when we all are back together. \n' +
        '\n'
    },
    {
      name: 'Jeevan Bhist',
      imgpath: '../assets/img/JeevanBhistMsg.jpeg',
      msg: ''
    },
    {
      name: 'Mayur Kale',
      imgpath: '',
      msg: 'Congratulations Achindra on completing 10 years in Microsoft and all the best for your future.\n' +
        '\n' +
        'I am enjoying working with you. I always find you as my mentor or friend than my manager. I like your PJs :P. I would like to meet you and work with you in person in our office. '
    },
    {
      name: 'Gaurav Solanki',
      imgpath: '',
      msg: 'Congratulations Achindra!\n' +
        '\n' +
        'It has been wonderful to know you. You bring a lot of positive energy to the team. I have learnt a lot from our discussions (how buyer has an upper hand, why idol worship, interesting weekend projects...). I look forward to continue the same when we all get back to office.\n' +
        '\n' +
        'Happy 10th!!! \n' +
        '\n'
    },
    {
      name: 'Anurag Agarwal',
      imgpath: '',
      msg: 'Achindra, in short time I really liked working with you, you are just an awesome person.'
    },
    {
      name: 'Rajay Gupta',
      imgpath: '',
      msg: 'Hi Achindra! I was an intern in Microsoft during Summer 2020. It was entirely virtual, and so I couldn\'t ever get a chance to meet you in person. But I wish to tell you that even without a direct interaction you have had a profound impact on me, solely through the quality and perfection in your work. I was handling a piece of code that you must have written a few years back, and I just want to say that I am very well sure that you are one person from whom everyone can a learn a lot. Congratulations on your impactful 10 years. Wishing you lots of success, and many more years at Microsoft (because I\'ll be there too). Hoping to meet you soon..\n' +
        '\n'
    },
    {
      name: 'Nandan Kumar',
      imgpath: '../assets/img/NandanKumarMsg.jpeg',
      msg: 'Congratulations Achin on reaching this big milestone. This really calls out for a toast!! I have always known you as a superstar dev, an idea powerhouse, and a bestie. Wish you many more success...and to the next decade!!\n' +
        '\n'
    },
    {
      name: 'Vinay Hirwakar',
      imgpath: 'https://media3.giphy.com/media/ZrlYxeVZ0zqkU/giphy.gif?cid=003403177v1eizcnk6zmlls0a900arwsq7b1qs55gns5rzzm&rid=giphy.gif',
      msg: 'Congrats Achindra on the 10 year mark at Microsoft. Achindra is really passionate about technology. He keeps the environment light and has open mind towards many things. He\'s really enthusiastic, energetic and thinks about things holistically. I find him as a great mentor and as a great friend. I have personally learnt a lot from you. You can talk to him about biryani, voyager 1, cricket and pretty much about anything else. Missing the post lunch walks :) '
    },
    {
      name: 'Mohit Malhotra',
      imgpath: '',
      msg: 'Hi Achindra, Congratulations on this wonderful milestone!\n' +
        '\n' +
        'Each day I learn something new from you. Your humble and open approach allows people to speak up their mind. You have been an amazing mentor both technically and personally. You bring so much positive energy with you which lights up the atmosphere.\n' +
        '\n' +
        'This is an amazing milestone and I wish that you achieve many more such milestones!'
    },
    {
      name: 'Ashutosh Parija',
      imgpath: 'https://media4.giphy.com/media/fxsqOYnIMEefC/giphy.gif?cid=00340317dqgxm0gc6ooayrnmfunb5bdr47f7r72q109f2uuk&rid=giphy.gif',
      msg: 'Congratulations on 10 years of awesomeness Achindra. I still remember the first reply I got on my intro mail was by you due to our common interest of cricket and electronics. There after you have just surprised us by your great mentorship qualities. The first day you came back from US, you invited all of the fresh joinees to lunch where we had a very interesting talk, basically we just discussed how many great projects you had done in past 😛. Then after you initiated the learning sessions for us which was a very present surprise. You are a great mentor and very approachable personality.\n' +
        '\n' +
        'Wish you many more awesome years 😄.'
    },
    {
      name: 'Nilesh Awate',
      imgpath: '../assets/img/NileshAwateMsg.jpeg',
      msg: 'Congratulations Achin!\n' +
        '\n' +
        'I know you for more than half a decade but still, I think there\'s a lot to know more about you.\n' +
        '\n' +
        'One of the best qualities of you is that whatever you do you do it differently. You apply all new concepts/thoughts/ideas and energy in every small thing beat whether writing a small email or a creating big presentation.\n' +
        '\n' +
        'All brainstorming sessions with you were amazing there\'s a lot to learn from you. Hoping to continue work with you.\n' +
        '\n' +
        'All the best for the  next 10yrs milestone 😇'
    },
    {
      name: 'Mukul Verma',
      imgpath: '../assets/img/MukulVermaMsg.jpeg',
      msg: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
