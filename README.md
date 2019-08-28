# Movies App
This app is made with the Ionic 4 framework. The purpose is to track movies and tv shows directly from a smartphone.

Today's version : `1.0.0`

## Installation
In order to install this project, please run the following commands:
#### Getting the tools
```
npm install -g ionic
```
You will also need the [Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction). Please checkout the documentation to generate your **API_KEY**.

#### Cloning the project
```
git clone https://github.com/raphaelsfeir/moviesApp.git
cd moviesApp
```

#### Setting up the project
```
ionic g service services/credentials
```

In `src/app/services/credentials.service.ts`, please insert your **API_KEY** in a public *TMD_API_KEY* : 
```javascript
public TMD_API_KEY = 'YOUR_API_KEY';
```

# Running the project
#### In the browser
```
ionic serve
```
#### On a device
The app needs to access your local storage.
```
ionic cordova platform add (<android | ios>)
ionic cordova run (<android | ios>)
```

# Building the project
```
ionic cordova platform add (<android | ios>)
ionic cordova build (<android | ios>) [--prod | --debug]
```
