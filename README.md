# Flash Card App - Countries, Capitals and more!

[TL;DR] A ReactJs/Tailwind app to memorise and master countries' flags and capitals with a  pomodoro timer. 

## Description
My favourite pastime as a kid was to sit with a globe 🌎 and spend hours exploring every inch of it. I've always been fascinated by different countries, their national flags 🇮🇳 and the history behind them. Being a visual learner myself, I've resorted to using Flash cards 💡 as an effective learning strategy. In this project, I built a flashcard quiz webapp using React to help memorise capital cities and national flags of countries around the world. 

### Preview screenshots
<img width="1440" alt="Screenshot of /flags page" src="https://user-images.githubusercontent.com/39496422/217321603-2f0cb80b-fe61-4fe1-a991-399cb92f9a13.png">

<img width="1440" alt="Screenshot of /capitals page" src="https://user-images.githubusercontent.com/39496422/217321749-166e6861-5a01-43d6-8a43-1f49e6084a38.png">


### Tech Stack
```
Core
---------------
- ReactJs
- Tailwind

Communication tool 
- axios

Package manager
- npm

```

#### Axios and CountryFacts API
Install `axios` with `npm install axios`. 

```
baseUrl = 'https://country-facts.p.rapidapi.com/region'
url = `baseUrl/${regionName}`

const options = {
      method: "GET",
      baseURL: baseUrl,
      url: url,
      headers: { ... } ,
    };
const response = await axios.request(options); 
return response.data; 

```
where regionName can take values `america` , `oceania`, `africa`, `asia`, or all`. 

The RapidAPI Hub provides every user with unique credentials (`x-RapidAPI-Key` and `X-RapidAPI-Host`) to be used in the `headers` object. 
[Check out the Country Facts (freemium) API here -> ](https://rapidapi.com/richardarthur228/api/country-facts)

#### ReactJs
I used `create-react-app` for building this single page application. (Check out https://reactjs.org/docs/create-a-new-react-app.html#create-react-app ) 
The Pomodoro timer was implemented using the hooks `useState`, `useEffect`, `useRef`, `useContext` by React. 

#### useQuery 
TanStack Query is the latest version of the useQuery or react query. It is a state management framework that takes care of the fresh data fetching and caching with a tiny piece of code. Setting the refetch logic for the `CountryFacts API` to once-a-day, helped me to keep the number of requests/month below the prescribed level for the freemium api. The rarely-changing api response is thus cached and returned to be used in the app instantaneously.  

#### Tailwindcss
This is the first time I've tried my hand at using `Tailwind`. Tailwind is a CSS framework that provides us with convinent classes for building the design of our website in the easiest way possible. I find it incredibly easy to maintain and compose especially when building from scratch. 

For this project, an important feature was the card flipping front-to-back. Though the `rotate-x-`/`rotate-y-`, `transform` styles needed for card flip were not handled by the framework, creating custom utility classes and plugins was intuitive and straightforward. 

### Deploy
[Check out the deployed website here -> ](https://around-the-world-quiz.netlify.app/)  

### Scope for improvement 
- Though `create-react-app` is an extremely useful tool to setup and work with React, there are other alternatives that provide a faster developer experience, built in features like server-side generation and easier typescript support. Excited to try out Vite or Nextjs on my next project. 
- To use Node.js/Express or Django for a backend that can store user data from forms etc. 
