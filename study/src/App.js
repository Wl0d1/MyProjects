import Header from "./Header/header.js";
import Info from "./Base/database.js";
import Text from "./Text/text.js";
import "./App.css";
import Photo from "./Photo/photo.js";
import Button from './Button/button.js'
import Arrow from "./Arrow/arrow.js";
import useFetch from './Hook/useFetch.js'

function App() {

  const {isLoading, hasError, data} = useFetch()
  console.log(isLoading, hasError, data)
  
  return (
    <main>
      <div>
        <Header />
      </div>
      <Photo image={data?.avatarUri} />
      <Info name={data?.name} job={data?.id} />
      <Text text={data?.description} /> 
      <Arrow />
      <Button />   
    </main>
  );
}

export default App;

/* instancja komponentu --- <Info name="Susan Smith" job="web developer" />*/
