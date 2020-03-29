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
                '/job-offer-1': 'app/job-offer-1.html',
                '/job-offer-2': 'app/job-offer-2.html',
                '/job-offer-3': 'app/job-offer-3.html',
                '/job-offer-4': 'app/job-offer-4.html',
                '/job-offer-5': 'app/job-offer-5.html',
                '/job-offer-6': 'app/job-offer-6.html',
                '/job-offer-7': 'app/job-offer-7.html',
                '/job-offer-8': 'app/job-offer-8.html',
                '/job-offer-9': 'app/job-offer-9.html',
                '/job-offer-10': 'app/job-offer-10.html',
                '/job-offer-11': 'app/job-offer-511html',
                '/job-offer-12': 'app/job-offer-6.12tml',
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
