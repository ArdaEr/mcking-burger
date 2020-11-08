import { Route, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const history = useHistory();

const homeButtonOnClickHandler = () =>{
    history.push("/");
}
  
<Router>
    <Header homeButtonOnClickHandler={homeButtonOnClickHandler}/>
    <Switch>
        <Route path='/result'>
            <Result
                ingredients={ingredients}
                total={() => hesapla()} 
            />
        </Route>

        <Route path='/'>
            <Home
                ingredients={ingredients} 
                total={() => calculate()} 
                ingredientAdd={(i) => ingredientAdd(i)}
                ingredientRemove={(i) => ingredientRemove(i)}
                selectedIngredients={ingredients}
                isOrder={number}
            />
        </Route>
    </Switch>
</Router>