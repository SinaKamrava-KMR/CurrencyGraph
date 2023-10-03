
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,700;1,300;1,400;1,600&display=swap');

html {
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  width: 100vw;
  overflow-x:hidden;
  padding: 0;
  margin: 0;
  color: white;
}

@media (min-width:810px) {
  body{
    height: 100%;
  }
}


body::-webkit-scrollbar{
  display:none;
}

#root{
  width: 100%;
  height: 100% ;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}




`


export default GlobalStyles