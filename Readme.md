# St Albans Good Neighbour Society

A website for a local charity organisation. (To replace http://sagns.org)

Currently availble to view at [https://sagns.netlify.com](https://sagns.netlify.com)

## Maintaining this site

Maintiaining this site will require either content management or code development. Most updates should only need to performed as content management.


### Content Management

The content for the site is updateable without the need to write code thanks to a simple CMS (content management system) provided by [NetlifyCMS](https://www.netlifyCMS.com).


### Code development

This site is a static web site generated by [Hugo](https://gohugo.io). It uses a custom Hugo theme (`sagns-simple`) built specifically to be simple and tailored to this site's requirements which is included as part of this repository.

### Project bootstrapping

To build this site you should first checkout this git repository, and then ensure that you have the following prerequisites:

- [Node and NPM ](https://nodejs.org)
- [Gulp](https://gulpjs.com/)
- [Hugo](https://gohugo.io)

With these prerequisites installed, you can install all other dependencies with:

`npm install`

Since Hugo does not currently include a pipeline for compiling Sass into CSS, a Gulp task performs that action. You can start a watcher tasks to automatically compile all Sass into versioned CSS assets by running `gulp`.

While developing, you can also have Hugo automatically recompile the site whenever changes are detected by running `hugo serve`. This will also serve the site on a local web server for testing.

The build task while outputs as deployable site asset is `gulp build`. This is the task triggered automatically on the Netlify hosting environment.


### Deployment

Code and content deployments are performed via git commits to this repository. Any commit pushes to the `master` branch of this repository will trigger an automatic build and deployment by Netlify.

Builds typically take a few seconds and updates should udually be visible in the live site within a minute of majing the change.



## Hosting

The live site is hosted on [Netlify](https://www.netlify.com) as a static web site and visible online at [https://sagns.netlify.com](https://sagns.netlify.com).

Feature branches can be deployed on Netlify for testing. Any git branch pushed to this repository will become available for testing at `https://{BRANCH-NAME}--sagns.netlify.com`

Source code for the site is hosted on Github at [https://github.com/philhawksworth/sagns.com](https://github.com/philhawksworth/sagns.com)


