# README #

### What is this repository for? ###

a.k.a. miniERP, or mini Engineering Resource Planning.

This web app has the ambition to coordinate the design and production of ShopFloor and ShopFloor+ orders. The end game is a replacement of the current functions of GP, the shipping system, the M.O. system, the ordering system, and the M.O. file system. Don't hold your breath.

### Set Up ###

* Summary of set up
	
	- Install [meteor](https://www.meteor.com/), [npm](https://www.npmjs.com/), and [modulus](https://www.npmjs.com/package/modulus) (only needed for deploying).
	- Run `npm install`.
	- Run `meteor`.

* Configuration
* Dependencies

	az-app depends on az-shared, also on bitbucket. az-shared is included as an npm dependency in `package.json`, but I couldn't get authentication to work, so it references a neighboring clone of az-shared. 
	
* Deployment instructions

	Deploy to modulus using `npm run modulus-deploy`.

### Learning All The Things ###

* Typescript

	http://www.typescriptlang.org/Handbook
	
	https://basarat.gitbooks.io/typescript/content/docs/getting-started.html

* Promises (For running node migration scripts on MongoDB)

	http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html


### ASSUMPTIONS ###

Some simplifying assumptions were made. I don't forsee these ever being a problem...

* We can distinguish between template events and regular project events without looking at the host project if we assume that: No events occured before 2000, and no project template is longer than 30 years.

### Contribution guidelines ###

* Favicons

	The illustrator source file and full-res png is in `.extra`. Use [http://realfavicongenerator.net/] to generate assets, and put them in `public/`. `client/index.html` includes the icons in `head`.  

* Writing tests

	No tests yet, because I haven't figured out how to write them!

* Committing

	The change log at `client/pages/changelog/changelog.html` is updated automatically when committing. Preface commit messages with '[FEATURE]' to include the commit in the changelog. 
	New versions should be tagged by running `npm version <version string>|patch|minor|major -m "Comment"`. This command will automatically commit, tag, update the changelog, and push to bitbucket.  

* Database Migration

	Database migrations are handled by [mongodb-migrate](https://www.npmjs.com/package/mongodb-migrate).
	
	* Create: `npm run migrate-local create <migration-name>`, then edit the created file at `.scripts/migrations/...`.
	* Up: `npm run migrate-local up [version]`
	* Down: `npm run migrate-local down [version]`
		
	Note: There is a much more popular npm project called [db-migrate](https://github.com/db-migrate/node-db-migrate). It looks nearly identical, but it might be worth switching at some point.

### Whom do I talk to? ###

* Trygve Wastvedt (twastvedt@azahner.com)