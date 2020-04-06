# House of Angular - static project repository
## Installation
#### Pre-installation requirements
In order to install the project locally, it is required to have `npm` package manager installed.

#### Installation process
To begin, run `npm install` command. This will add `node_modules/` directory to the folder with all required dependencies.

After installation process the project is ready to start. To run it use `npm start` command (optionally `gulp dev` will do the same).

## Deployment
There is no such thing as deployment implemented in this project, to run it outside of Gulp.

To prepare files for a manual "deploy", do the following:
* Make sure the project was started at least once, to create compiled css file in `dist/` directory,
* Copy the contents of `app/` directory to the desired place (apache, ftp, etc),
* Copy the `dist/` directory in the same place as above,
* That's it!
