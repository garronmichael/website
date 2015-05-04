var app = angular.module('website', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('about', {
      url: '/',
      templateUrl: 'app/about.html'
    })
    .state('about.portfolio', {
      url: 'portfolio',
      templateUrl: 'app/portfolio.html',
      controller: function($scope) {
        $scope.portOpen = false;
        $scope.portfolio = [
          {
            name: 'HackBox',
            imageUrl: 'assets/images/hackbox.png',
            brief: 'A remote interview platform for software engineers designed with AngularJS, Node, mongoDB, \
                    Express, Node and GitHub OAuth.',
            description: 'This project was very cool. We leveraged a new \
                          client-to-client data-streaming software called WebRTC. It\'s so new only Firefox and Chrome \
                          browsers support it. Essentially, we wanted to make a way to streamline technical interviews because \
                          today most remote interviews are a messy mix of Skype + Google Drive + Notes + CodeShare. We really \
                          tackled the issues head-on and learned so much from working with profession technical interviewers. \n\n \
                          On this project, I wanted more back end experience so I built the Node server and designed the \
                          authentication with GitHub. However, by the midpoint of the project I was building out my own Angular \
                          controllers, redesigning views and even making new database queries. I loved being able to work on the full \
                          stack of this project.'
          },
          {
            name: 'SnackPlant',
            imageUrl: 'assets/images/snackplant.png',
            brief: 'A social web platform that visualizes where users are dining and was developed with \
                    AngularJS, Node, Express, SQLite and Google Places API.', 
            description: 'This project was one I inherited \
                          from another team. Working with legacy code is always a challenge, but I had an amazing team on this \
                          project and we really made the app our own. We basically gutted the entire front end, integrated \
                          GitHub profiles more prominently and cut some features we thought weren\'t high value. Overall \
                          this project was a great experience and I\'m very happy to have had it.'
          },
          {
            name: 'Wayfare',
            imageUrl: 'assets/images/wayfare.png',
            brief: 'A web application that suggests inexpensive flights to spontaneous travelers and was built \
                    with AngularJS, Node, Express, MySQL and Google\'s QPX API.',
            description: 'I really loved working on this \
                          project because I felt like I was building the app for myself. Who wants a cheap flight to \
                          an incredible destinaton? Me. For this project I was primarily charged with backend tasks. \
                          I migrated my team to a MySQL database and I deployed the project to Azure. Discovering \
                          the quirks of Google\'s QPX Flight API was really fun and interesting.'
          },
          {
            name: 'VaxTrak',
            imageUrl: 'assets/images/vaxtrak.png',
            brief: 'A web application that stores and displays your vaccination history and was made with Backbone, SQLite and Node.',
            description: 'One word that describes this project? Challenging. This was a project I developed in twenty-four hours. Woah. \
                          It was such a crazy and wild experience working under such a tight deadline to produce an MVP \
                          (Minimal Viable Product), but one that came with a lot of value. The idea was inspired by love for travel \
                          and my interest in health.'
          }
        ];
      }
    })
    .state('hackbox', {
      url: '/hackbox',
      templateUrl: 'app/projects/hackbox.html'
    })
    .state('snackplant', {
      url: '/snackplant',
      templateUrl: 'app/projects/snackplant.html',
      controller: function($scope) {
        $scope.things = ['A', 'Set', 'Of', 'Things'];
      }
    })
    .state('wayfare', {
      url: 'app/projects/wayfare',
      templateUrl: 'projects/wayfare.html'
    })
    .state('vaxtrak', {
      url: 'app/projects/vaxtrak',
      templateUrl: 'projects/vaxtrak.html'
    });
});