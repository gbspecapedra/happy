<div id="readme" class="Box-body readme blob js-code-block-container">
  <article class="markdown-body entry-content p-3 p-md-6" itemprop="text">
    <p align="center"><img alt="Happy" src="https://github.com/gisabernardess/happy/blob/main/.github/happy.svg"></p>
    <h2>:rocket: Technologies </h2>
    <p>Server-side was developed with the following technologies:</p>
    <ul>
      <li><a href="https://nodejs.org/" rel="nofollow">node.js</a></li>
      <li><a href="https://expressjs.com/" rel="nofollow">express</a></li>
      <li><a href="https://github.com/whitecolor/ts-node-dev" rel="nofollow">ts-node-dev</a></li>
      <li><a href="https://typeorm.io/" rel="nofollow">typeorm</a></li>
      <li><a href="https://github.com/mapbox/node-sqlite3" rel="nofollow">sqlite3</a></li>
      <li><a href="https://github.com/expressjs/multer" rel="nofollow">multer</a></li>
      <li><a href="https://github.com/jquense/yup" rel="nofollow">yup</a></li>
      <li><a href="https://github.com/expressjs/cors" rel="nofollow">cors</a></li>
      <li><a href="https://www.typescriptlang.org/" rel="nofollow">typescript</a></li>
      <li><a href="https://code.visualstudio.com/" rel="nofollow">VS Code</a></li>
    </ul>
    <h2>:information_source:</a> How To Use </h2>
    <p>To run this API, you'll need <a href="https://git-scm.com" rel="nofollow">Git</a> and  <a href="https://legacy.yarnpkg.com" rel="nofollow">Yarn</a>. From your command line:</p>
    <div class="highlight highlight-source-shell">
      <pre><span class="pl-c"><span class="pl-c">#</span> Be into the repository</span>
$ <span class="pl-c1">cd</span> happy/server <br/>
<span class="pl-c"><span class="pl-c">#</span> Install dependencies</span>
$ yarn <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the development server</span>
$ yarn start <br/>
<span class="pl-c"><span class="pl-c">#</span> Run the migrations</span>
$ yarn migration:run <br/>
<span class="pl-c"><span class="pl-c">#</span> The app will automatically reload if you change any of the source files.</span></pre>
</div>
<br/>
    <p>To test this API, you'll need <a href="https://insomnia.rest/" rel="nofollow">Insomnia REST</a>, or similar.
      Then, create routes:</p>
    <ul>
      <li>
        <p><code>GET /orphanages</code>: Route that returns a list of orphanages;</p>
      </li>
      <li>
        <p><code>GET /orphanages/{id}</code>: Route that return an orphanage by id. The route must receive an <code>id</code> as a route param;</p>
      </li>
      <li>
        <p><code>POST /orphanages</code>: Route that add new orphanages. The route must receive <code>name</code>, <code>latitude</code>, <code>longitude</code>, <code>about</code>, <code>instructions</code>, <code>opening_hours</code>, <code>open_on_weekends</code> and <code>images</code> inside the body request as a <code>Multipart Form</code>; </p>
      </li>
    </ul>
    <p>Also, you may need an SQL Editor like <a href="https://www.beekeeperstudio.io/" rel="nofollow">Beekeeper</a> or similar [optional].</p>
    <hr>
    <p>Made with ♥ by Gisele Silva :wave: <a href="https://www.linkedin.com/in/gisabernardess/" rel="nofollow">Get in touch!</a></p>
  </article>
</div>
