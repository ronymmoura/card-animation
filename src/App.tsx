import "./App.css";
import Card from './components/Card';

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <Card 
          title="Winter" 
          description='Winter has so much to offer - creative activities'
          icon='1'
          image="./assets/img1.jpeg"
        />

        <Card 
          title="Digital Technology" 
          description='Gets better every day - stay tuned'
          icon='2'
          image='./assets/img2.jpeg'
        />

        <Card 
          title="Globalization" 
          description='Help people all over the world'
          icon='3'
          image='./assets/img3.jpeg'
        />

        <Card 
          title="New technologies" 
          description='Space engineering becomes more and more advanced'
          icon='4'
          image='./assets/img4.jpeg'
        />
      </div>
    </div>
  )
}

export default App
