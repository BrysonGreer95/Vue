# Installing Vue

## Just warming up
First things first, for the most pleasent viewing experience of this README file, hit `CTRL` + `SHIFT` + `M`.
This will open the Markdown viewer in your IDE (Assuming you're using something like Visual Studio Code, or Atom).

Begin by opening your terminal/command line for your project

If you don't already have node installed, now would be a good time to do that.
[NodeJS](https://nodejs.org/en/download/)

If  you need to install update your npm (Node Packet Manager), run `npm install -g npm`

## Installing Vue
Make sure you `cd` into the correct local repository!

For example, if using gitbash, or another linux style CLI  (command line interface), just type `pwd` to see your current working directory. It should look something like /Users/yourName/documents/Vue_projects/projectName

When you know you're in the correct repository, run 

`npm install vue` followed by:

`npm install -g @vue/cli`. This may take a minute to install. 

IF THIS FAILS, you are likely in the wrong directory, or you have a permissions issue. Use `ls` to see what folders exist in the directory you are currently in. This may help you realize you're in the wrong directory. If that doesn't help, try [Google](httpsd://www.google.com).

Other errors that may occur: If the vue command still can not be recognized, even though you have installed the Vue CLI, run export PATH=$PATH:/Users/brysongreer95/.npm-global/bin in your terminal, but replace my username 'brysongreer95' with your own, which should be shown in your current working directory.

## Git
While this installs, it's a good idea to ensure you have `git` properly set up! I will be using git, however, if you're using some other tool for version control, that's on you.

For me, since I am using `git` and I am using Visual Studio Code, I am taking this time to look on the left hand side of my IDE at the version control tab, and making sure I have my repository set to show changes. If you need help with understanding this, look up how version control works, specifically git.

## Back to Vue! (Only for new projects. Not this one!)
### *This is still helpful to read though so you know how to make your own project later*
`vue create projectName` will create a new vue project. It's that easy. Now, obviously you don't want to name it `projectName`. That would be silly. Come up with your own name that makes sense for what you'll be creating. In this case, I'm making a video application, so I will be doing `vue create video-browser`. Again, if you have issues, check my comments above when we installed vue. It's probably a path issue. Use the terminal, set your path given the command above using your own username, and that should take care of it. If not, again I'll recommend [Google](https://www.google.com).

After typing the command above, you'll notice that your terminal will now say "VUE CLI v.whatever"
"Please pick a preset". You can just press enter a few times and accept the default options for now. Should be fine.

When that is done, you'll notice a `package-lock.json` file will be created, as well as a `node-modules` folder and possibly a few others. Now is a time to commit these changes to your remote directory (the one you can't touch).


## Commit your changes
Assuming you have your remote directory set up (from cloning the git repository) `git clone`, you can type `git add .` to add all local chages to be `staged`. Once they are staged, they're ready to be committed (saved). 

To commit, just type `git commit -m "A message goes here"`. This will save your changes under a special save file called a commit with a custom message that you gave it. This makes it easier to find later! 

Finally, again assuming you have your remote repository set up, you can type `git push` to push these changes to the remote repository (like the Cloud, but for your saves). This way, everyone that shares the project can see your changes, and even pull your changes onto their local machines so they can work on them! If you don't have your remote repository set up, go to GitHub.com and make one! Or you can continue to use the public repo I have created for this project.

## Let's Run it!
First of all, make sure you cd into the correct project now. So let's start by typing into the terminal:

`cd video-browser`


OKAY! Now we are ready to run. So if you notice under the name of the project, in this case `video-browser`, there is a `src` folder. Click that.

Inside the src folder, there is a pretty file called `App.vue`. This is our main application. You want to see what it really looks like? Go to your terminal, and type
`npm run serve`. An internet browser should open and you should be able to see the Vue project! 

I currently have this project to run on http://localhost:8080/ So just open your internet browser (CHROME), and type that link in to see the vue application! Any changes you make locally, will reflect on the localhost page.

## API CALL
console.developers.google.com
new project
enable api services
search youtube
youtube data api
enable
create credentials
Youtube Data API v3, Web Browser (JS), Public Data
Copy Key
SAVE IT

## Making API Calls
You need axios
So, npm install --save axios