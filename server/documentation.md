Email to Helen:

Helen,

The following information should help you navigate what we've created for you.  We are using the MERN stack and writing Javascript insode the Visual Studio Code IDE (integrated development environment).  To replicate everything, this will require a number of downloads and installations.  Please follow these steps sequentially.  They may seem out of order, but its actually the fastest way to do it.

a) Install Visual Studio Code (VSC) - code.visualstudio.com

    This is the IDE (t where we write the code.  It has a large ecosystem of extensions that are downloadable from within VSC.  The ones we use are: 
        "Better Comments"       - colors comments
        "Rainbow Brackets"      - colors the code in useful ways
        "MongoDB for VS Code"   - view cloud storage from within VSC
        "Thunder Client"        - useful for testing backend from within VSC
        "Live preview"          - opens html that updates automatically.  Not needed here but really useful.
        "Cobalt-2" theme        - this will color VSC and the code in a way that is helpful.  fantastic theme used by pro's.

b) Install Node - nodejs.org

    Javascript is the language used in all parts of the MERN stack and is what we used on this project.  Javascript historically only ran inside a web browser and was strictly forbidden from accessing the host machine.  Node is a run-time environment for Javascript code, much like a browser, but it's just the environment without the browser.  Node was created so Javascript could run outside of the browser and have access to the local file system, allowing server-side development while using the same language everyone already knew.  Node and the browser are almost equal as run-time environments EXCEPT Javascript meant for Node won't recognize Javascript meant for browsers (so "getElementsById" or "window.location" will cause an error in Node, but not in the browser) and Javascript meant for browsers won't recognize Javascript meant for Node (file system stuff will err in the browser, but not in Node).

c) Extract the code

    Extract the contents of the attached zip file somewhere useful and open that folder in Visual Studio Code

d) Install frontend dependencies

    1) With Visual Studio Code opened, click File, Open Folder, and browse to your extraction folder, and open.
    2) In the left explorer planel, right click on "package.json" and "open in integrated terminal".  This brings you to command line at that specific folder.
    3) Type "npm install" and hit enter.  npm is the 'Node Package Manager' and comes with the Node install.  The "package.json" file tells Node all the software packages the frontend depends on (its dependencies).  "npm install" tells Node to download and install all the dependencies described in the "package.json" file located in the same directory.

e) Create environment file

    1) After the installation is done, type "touch .env", this will create a .env (pronounced "dot-E-N-V") and it means the environment variables.
    2) In the left panel, open the new .env file and paste the following into it and save.  Update with

        PORT = "4000"
        DEV-DATABASEURL = "mongodb://0.0.0.0:27017/"
        DATABASEURL = "mongodb+srv://hpapp:bria@pass135!@briaserver.7xsu17j.mongodb.net/test"
        JWT_KEY = "anything_random_87an4w8inia"

f) Install backend dependencies

    1) After the above install is finished, use the left panel explorer and open the "server" directory.  Right click THAT "package.json" file and "open in integrated terminal".  In the same space, a SECOND terminal will open.  This is on purpose.  You need TWO terminals open since you are running TWO servers.
    2)  This new terminal is in the backend directory and gives access to a second "package.json" file.  Again, type "npm install" so Node downloads all of the backend's dependecies.

g) Start the backend in the second terminal

    1) Go to second integrated terminal which should still be open to the project's "server" directory
    2) Type "nodemon" and hit enter.  This is the Node monitor which will automatically restart the server should change and save any backend code.  You should see the following output.  If you don't, contact us, it's gonna be something small.

        server listening on 4000
        Connected to db
    
    This will continue to display during run-time which is why a SECOND terminal is needed to start the frontend.  While this is displaying, "rs" will restart the server, and "ctrl-C" will exit back to the terminal.

h) Start frontend in the first terminal

    1) Navigate to the first integrated terminal where you last typed "touch .env"
    2) Type "npm run start" to start the frontend.  It can take a bit to spin up.  Once ready, it will open the site in a browser and you are up and running.

i) Connect to and monitor cloud storage

    Make sure you've download the VSC extension MongoDB.  Open it and "Add connection with connection string".  Copy the string below (taken from your .env file) and paste into the text entry field that appeared at the top middle of VSC and hit enter.

    mongodb+srv://hpapp:bria@pass135!@briaserver.7xsu17j.mongodb.net/test

    This will now connect to your cloud database and you can track users and gardens from within VSC.

Backend Endpoints - This is the documentation for the backend's endpoints.

/user

    POST

        /register - registers new user

            Requires: req.body = { username, email, password }
            Returns: newUser
        
        /login - logs user in

            Requires: req.body = { email, password }
            Returns: TOKEN
    
        /addGarden - logged-in user adds self to garden

            Requires: TOKEN,
                      req.query = { gardenId }
            Returns: user

    GET

        /getAny - gets a random user

            Requires: nothing
            Returns: user
   
        /getByEmailOrId - get specific user

            Requires: req.query = "?_id=<id>" || "?email=<user@site.com>"
            Returns: specific user

        /getSelf - logged-in user returns self

            Requires: TOKEN
            Returns: logged-in user
    
    PATCH

        /update - logged-in user updates self

            Requires: TOKEN,
                      req.body = { newData }
            Returns: updated user

    DELETE

        /removeGarden - logged-in user removes self from specific garden

            Requires: TOKEN,
                      req.query = { gardenId }
            Returns: updated user 

        /delete - logged-in user deletes self

            Requires: TOKEN
            Returns: deleted user

/garden

    POST

        /register - logged-in user registers new garden

            Requires: TOKEN,
                      req.body = { gardenName, city, state, email }
            Returns: new garden

    GET

        /getAny - returns random garden

            Requires: nothing
            Returns: garden

        /getByEmailOrId - gets specific garden

            Requires: req.query = "?_id=<id>" || "?email=<garden@site.com>"
            Returns: specific garden

    PATCH

        /update - logged-in user updates specific garden

            Require: TOKEN,
                     req.query = "?_id=<id>" || "?email=<garden@site.com>",
                     req.body = { newData }
            Returns: updated garden

    DELETE
        
        /deleteByEmailOrId - logged-in user deletes garden iff they are final member

            Requires: TOKEN,
                      req.query = "?_id=<id>" || "?email=<garden@site.com>"
            Returns: deleted garden


