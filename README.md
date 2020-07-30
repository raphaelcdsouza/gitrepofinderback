# GitHub Finder

## Setting up environment
Clone this repository into your computer:
```sh
# Using SSH
git clone git@github.com:raphaelcdsouza/gitrepofinderback.git

# OR

# Using HTTPS
git clone https://github.com/raphaelcdsouza/gitrepofinderback.git
```
Navigate inside ```gitrepofinder``` directory:
```sh
cd gitrepofinderback
```
Then install all dependencies using Yarn:
```sh
yarn
```
## Github Credentials
Make a copy of ```.env.example``` named as ```.env``` and fill out yout Github App credentials:
```
CLIENT_ID=<your_github_app_CLIENT_ID>
CLIENT_SECRET=<your_github_app_CLIENT_SECRET>
```
## Running server
Now that you have everything set just run the server with the following command:
```sh
yarn dev
```
Now you will be able to test the application on ```http://localhost:3333```
That's it so far. If you want to contribute with the project feel free to open an issue or create a pull request by forking the repository and making your own feature!

made with :purple_heart: by Raphael
