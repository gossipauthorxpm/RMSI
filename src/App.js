import React from 'react';
import Header from './components/Header';
import Pages from "./components/Pages";
class App extends React.Component{
  render(){
    return <main className={'main-app'}>
      <Header/>
      <Pages/>
    </main>
  }
}

export default App;
