const { watch, src, dest, series, parallel } = require('gulp');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const config = {
    app: {
        scss: './app/styles/**/*.scss',
        html: './app/*.html'
    },
    dist: {
        base: './dist/',
        fonts: './dist/fonts',
        images: './dist/images',
    },
    extraBundles: [
        './dist/main.css'
    ]
};

function cssTask(done) {
    src(config.app.scss)
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(rename({ suffix: '.bundle' }))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest(config.dist.base));
    done();
}

function watchFiles() {
    watch(config.app.html, series(reload));
    watch(config.app.scss, series(cssTask, reload));
}

function liveReload(done) {
    browserSync.init({
        server: {
            baseDir: 'app',
            routes: {
                'index.html': '/app/home.html',
                '/dist': 'dist/',
                '/blog': 'app/blog.html',
                '/hire': 'app/hire.html',
                '/post': 'app/post.php',
                '/career': 'app/career.html',
                '/team': 'app/team.html',
                '/knowledgebase': 'app/knowledgebase.html',
                '/home': 'app/home.html',
                '/open-source': 'app/open-source.html',
                '/job-offer': 'app/job-offer.html',
                '/job-offer-angular-mid': 'app/job-offer-angular-mid.html',
                '/job-offer-angular-junior': 'app/job-offer-angular-junior.html',
            }
        }
    });
    done();
}

function reload (done) {
    browserSync.reload();
    done();
}

exports.dev = parallel(cssTask, watchFiles, liveReload);
 // run gulp dev to work
