# NLW Return

## Project technologies
<br>

* **Front-End**
  * React - Web
  * React Native - Mobile
* **Back-End**
  * Node (JSON)

---
## Modules
<br>

* **TypeScript** (static typing)
* **Vite** (browser integrator)
* **Tailwindcss** (style)
* **headless** UI (acessibility)
* **phosphor-react** (icon library)

---
## Create the project with Vite
<br>

```
$ npm create vite@latest
```
* ensures that it ***runs equally in all browsers***, regardless of version
* [Vite Documentation](https://vitejs.dev/guide/why.html)

---
## Style Library - TailWindCSS
<br>

```
$ npm install -D tailwindcss postcss autoprefixer
$ npx tailwindcss init
```
* Style library ***integrated with Vite***
* [Tail Documentation](https://tailwindcss.com/docs/installation/using-postcss)

---
## Acessibility Library - HeadLess UI
<br>

```
$ npm install @headlessui/react
```
* Acessibility library ***integrated with Vite***
* [HeadLess Documentation](https://headlessui.dev/)

---
## Icon Library - PhosphorIcons
<br>

```
$ npm install phosphor-react
```
* Icons library
* [Phosphor Documentation](https://phosphoricons.com/)

---

## Important concepts - React
<br>

* File type = .tsx (TS + JSX)
* components **always start** with a capital letter
* filename always has **the same name as the component**

---

## Create The first Component
<br>

* components **are created inside "src/components"**
* inside the return can **only have a tag**

* **Button.tsx**
~~~tsx

// define a static typing
interface ButtonProps{
  text: string;
}


export function Button (props: ButtonProps){
 return <button className="button">{props.text}</button>
}

~~~

* **App.tsx**
~~~tsx
import { Button } from "./components/Button";

function App() {

  return (
    <div>
      <Button text="Enviar"/>
      <Button text="OK"/>
    </div>
  )
}
~~~
---

## useState
<br>

~~~tsx
const [isButtonOpen, setIsButtonOpen] = useState(false)
~~~

* **isButtonOpen** = Variable that holds the value
* **setIsButtonOpen** = Function that modifies the value
* **(false)** = initial value

---
## If HTML
<br>

~~~tsx
//apenas if
{ isButtonOpen && <p> Hello World</p> }

//if and else
{ isButtonOpen ? <p> Hello World</p> : null }
~~~

---
## Other file CSS
<br>

* with TailWindCSS
* **main.css**
~~~css
.button {
 @apply bg-[#8257e6] p-2 h-10 rounded hover:bg-violet-700 transition-colors
}
~~~
* **App.tsx**
~~~tsx
import { Button } from "./components/Button";
import "./main.css"

function App() {

  return (
    <div>
      <Button text="Enviar" ClassName="buton"/>
    </div>
  )
}
~~~

---


