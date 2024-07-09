import BasicReact from "./components/BasicReact";
import BodyContent from "./components/BodyContent/BodyContent";
import HeaderContent from "./components/HeaderContent/HeaderContent";
// import './App.css'

function App() {

  return (
    <div>
      {/* <BasicReact /> */}
      <HeaderContent />
      <BodyContent>
        <h2>test props</h2>
        <button>jjjjj</button>
      </BodyContent>
      <BodyContent>
        <a href="#">Google</a>
        <p>kSDVkssssssssssssssssssssssssssvzkvdddddddddddddddddsldvsldvmmmmmmmmmmmmmmmm</p>
      </BodyContent>
    </div>
  )
}

export default App
