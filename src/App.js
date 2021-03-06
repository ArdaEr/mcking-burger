import React, { useState } from 'react';
import './App.css'
import Header from './components/Header/Header';
import Layout from './Layout';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';



function App() {
  
  return (
  
    <div className="App">
     
      <header className="App-header">
        <div className="App-container">
        <Layout>
        <Header />
        <Content />
        <Footer />
        </Layout>
        </div>
      
   
      </header>
    </div>
 
  );
};
  export default App;

/*class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [],
            totalPrice: 0
        };

        this.malzemeEkle = this.malzemeEkle.bind(this);
        this.malzemeCikar = this.malzemeCikar.bind(this);
        this.hesapla = this.hesapla.bind(this);
    }

    malzemeEkle(malzeme){
        this.setState({
            ingredients: [...this.state.ingredients].concat([
                {...malzeme, displayId: Math.random()}
            ])
        })
    }

    malzemeCikar(malzeme){
        // Cikarılması gereken malzemeyi alalım.
        const selectedMalzeme = this.state.ingredients.find((ingredient) => {
           return ingredient.name === malzeme.name;
        });

        // Elimizde olan ilk malzemenin displayId alalım
        const targetId = selectedMalzeme.displayId;

        // Display Id üzerinden bu malzemeyi silelim.
        this.setState({
            ingredients: this.state.ingredients.filter((ingredient) => {
                return ingredient.displayId !== targetId;
            })
        })
    }

    hesapla(){
        let toplam = 0;
        this.state.ingredients.forEach((item) => {
            toplam += item.price
        });
        return toplam;
    }

    render(){
        return (
            <div>
                <Hamburger ingredients={this.state.ingredients} />
                <TotalPrice toplam={this.hesapla}/>
                <ItemList items={ingrediends}
                          malzemeEkle={this.malzemeEkle}
                          malzemeCikar={this.malzemeCikar}
                          selectedIngredients={this.state.ingredients}
                />
            </div>
        );
    }
}*/