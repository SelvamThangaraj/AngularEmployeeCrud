# Employee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
C:\Users\222>cd C:\Users\222\FSE\ProjectManagerAngular

C:\Users\222\FSE\ProjectManagerAngular>ng g module user
CREATE src/app/user/user.module.ts (188 bytes)

C:\Users\222\FSE\ProjectManagerAngular>cd user
The system cannot find the path specified.

C:\Users\222\FSE\ProjectManagerAngular>ng g c user/adduser
CREATE src/app/user/adduser/adduser.component.html (26 bytes)
CREATE src/app/user/adduser/adduser.component.spec.ts (635 bytes)
CREATE src/app/user/adduser/adduser.component.ts (273 bytes)
CREATE src/app/user/adduser/adduser.component.css (0 bytes)
UPDATE src/app/user/user.module.ts (268 bytes)

C:\Users\222\FSE\ProjectManagerAngular>ng g c user/modifyuser
CREATE src/app/user/modifyuser/modifyuser.component.html (29 bytes)
CREATE src/app/user/modifyuser/modifyuser.component.spec.ts (656 bytes)
CREATE src/app/user/modifyuser/modifyuser.component.ts (285 bytes)
CREATE src/app/user/modifyuser/modifyuser.component.css (0 bytes)
UPDATE src/app/user/user.module.ts (362 bytes)

C:\Users\222\FSE\ProjectManagerAngular>ng g c user/deleteuser
CREATE src/app/user/deleteuser/deleteuser.component.html (29 bytes)
CREATE src/app/user/deleteuser/deleteuser.component.spec.ts (656 bytes)
CREATE src/app/user/deleteuser/deleteuser.component.ts (285 bytes)
CREATE src/app/user/deleteuser/deleteuser.component.css (0 bytes)
UPDATE src/app/user/user.module.ts (456 bytes)

C:\Users\222\FSE\ProjectManagerAngular>ng g c user/displayuser
CREATE src/app/user/displayuser/displayuser.component.html (30 bytes)
CREATE src/app/user/displayuser/displayuser.component.spec.ts (663 bytes)
CREATE src/app/user/displayuser/displayuser.component.ts (289 bytes)
CREATE src/app/user/displayuser/displayuser.component.css (0 bytes)
UPDATE src/app/user/user.module.ts (554 bytes)

Adding Clarity to Angular
 ProjFolder> ng add @clr/angular
 refer: https://clarity.design/documentation/get-started
 
 Adding Bootstrap to angular project
   ProjFolder> npm install bootstrap@3.3.7
   refer: https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
   
ProjectManagerAngular> ng g class /user/usermodel

ProjectManagerAngular>ng g service /user/userservice
 
 To create Angulare 5 project using CLI:
    So if I want to create a new application for Angular 5 I do this:

    npm install -g @angular/cli@1
    ng new my-ng5-app
  Remember, Angular CLI was version 1.7 for Angular 5.
  ref: https://blog.angularindepth.com/angular-5-or-angular-6-yes-please-d71b08b5e59b
  
 
