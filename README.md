# energy-stats-viewer

Energy Stats Viewer is a full stack Web App that displays data regarding energy production and demand fetched from the Hydro Quebec public API into various charts and tables.

## Requirements

You need to have [Node.js](https://nodejs.org/en) installed and of version 16.0 or higher. (This is a requirement of Vue.js)

> *Note: you can see what version of Node.js is installed on your machine by doing **node -v** in a terminal like so
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/48f8c0c6-4e90-4cc6-9fd8-dbf328adf116) 

## Getting Started

First of all, open a terminal and move over to your desired directory to import the project then **git clone** the project.

> Example :
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/543096d4-30de-4513-9862-12f9480e3956)

**OR**

Donwload the zip file and extract it where you want it.

### Backend

Once you have node installed and of the correct version then you can proceed to open a terminal in your new project directory and go to the backend folder (**cd energy-stats-viewer-service**) then run **npm i**.

> Example :
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/dbe387e5-49bb-481c-a128-c6afb6795abe)

Then, to run the backend you need to run **npm start dev** in the same terminal. You should now see the Nest.js app getting initialized in the console.

> Example
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/eb483b86-97e3-474b-941e-a1d59f9277cb)

Now your backend is running on http://localhost:3000/ and you can leave the terminal open.

### Frontend

Once you have the backend up and running then you can proceed to open a **new** terminal in your new project directory and go to the frontend folder (**cd energy-stats-viewer-web**) then run **npm i** again but for the frontend this time.

> Example :
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/5a173a16-47ee-431a-9cc1-92adb30ca013)

Then, to run the frontend you need to run **npm run dev** in the same terminal. You should now see the Vite interface in the console. Vite is the dev engine of the Vue.js framework.

> Example
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/d14fe859-8c73-4137-9f9e-3bf59aca77d9)

Now your frontend is running at the address indicated by your *Vite* instance and you can leave the terminal open.

> *Note: in my instance the port was 5173 but it can vary sometimes
> 
> ![image](https://github.com/ORBernier/energy-stats-viewer/assets/39271860/7d2c1c19-2c98-4c50-b5a2-75a756858204)

Congratulations! You can now open the application in the browser by navigating to the URL specified by *Vite*

## Tech Stack

### Language

The choice of language for this application was to use TypeScript in both the Frontend and the Backend. TypeScript is a modern and powerfull web language built over JavaScript, giving it a much needed typing structure that helps debugging and overall achieves a much higher standard of readability and maintenability. TypeScript is also the recommended language over JavaScript for Nest.js and Vue.js by both dev teams respectively.

### Backend

#### Node.js

The basic JavaScript framework that we are using is [Node.js](https://nodejs.org/en).

#### Express.js

On top of that, we are using [Express.js](https://expressjs.com/), witch in turn is a Node.js framework.

#### Nest.js

Finally, we are utimately using [Nest.js](https://nestjs.com/) to build the backend. Nest.js is an Express.js framework that offers a CLI that is easy to use for quick developpement and above all a structure in the philosophy of Angular that heavily relies on dependency injections and decorator classes. This makes it so that most of the code that we actualy have to wirte is minimal all that while maintaining a losely coupled codebase. It also use modules just like Angular to seperate and structure the code block by block. Creating a new app with the CLI also provides most of the boilerplate code used to run the application right out of the box.

### Frontend

#### Vue.js 3

Here we are using [Vue.js](https://vuejs.org/) as a JavaScprit framework to build the frontend. Vue.js is a modern JavaScript framework for developping user interfaces and is packed with modern functionalities such as reactivity and state management. It also does conveniently a lot of the hard lifting for us as it is very wise and can infer most of what is needed to run the application. We use Vue 3 because Vue 2 support will end on Dec 31, 2023 and thus will soon be legacy Vue code. We also use the Vue Composition API as opposed to the Options API, because the new Vue standard for building production application is to use it and also it is more flexible as the Options API is built on top on the Composition API. The Vue Composition API is also the preferred way of writing Vue applications when using TypeScript and it is the better API for tests so maintenability is better.

#### Vuetify 3

For a reusable UI components library we use [Vuetify](https://vuetifyjs.com/en/), witch is a Vue Component Framework and can provide us with all the necessary tools to build editable and good looking components in our application. Vuetify was by far the most adopted Vue Component Framework for Vue 2 and was recently released for Vue 3.

#### Chart.js

To build charts in our appplication we use [Chart.js](https://www.chartjs.org/) to provide us with a base chart UI element that we can configure and fill with data ourselves. Chart.js is easy to use out of the box but provides in-depth customization options for those who wish to just fine tune it.

#### vue-chartjs

As chart.js was intended for JavaScript applications, and not Vue.js, there's a package that's called [vue-chartjs](https://vue-chartjs.org/) and that provides us with some accessible Vue components for each chart from chart.js.

#### Pinia

When it comes to state management, the recommended approach by the Vue team for Vue 3 is using [Pinia](https://pinia.vuejs.org/). Pinia is in fact developped and maintained by members of the Vue dev team and is included in the Vue CLI as an option de facto. Using a central store as with Pinia helps reduce coupling between components in our code so it is less prone to errors and more easily maintained.

#### Axios

To call our API we use Axios witch is an HTTP client to send and receive data over HTTP. Axios is on of the most popular solution to make customizable http requests across all of the JavaScript frameworks. An alternative is the fetch API (integrated in JavaScript now) but it is limited in control over your requests.
