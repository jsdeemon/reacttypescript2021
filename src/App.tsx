import React from 'react';
import {BrowserRouter, NavLink, Route} from 'react-router-dom';
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {



    // const users: IUser[] = [
    //     {id: 1, name: 'John', email: 'john@gmail.com', address: {city: 'London', street: 'Baker', zipcode: '213232'}},
    //     {id: 2, name: 'Brad', email: 'brad@yahoo.com', address: {city: 'New York', street: 'Independency', zipcode: '2712372'}},
    // ]

    return (
       <BrowserRouter>
           <div>
               <div>
                   <NavLink to="/users">Пользователи</NavLink>
                   <NavLink to="/todos">Список дел</NavLink>
               </div>
               <Route path={'/users'} exact>
                   <UserPage />
               </Route>

               <Route path={'/todos'} exact>
                   <TodosPage />
               </Route>

               <Route path={'/users/:id'} exact>
                   <UserItemPage />
               </Route>

               <Route path={'/todos/:id'} exact>
                   <TodoItemPage />
               </Route>

               {/*<EventsExample />*/}
               {/*<Card*/}
               {/*    onClick={(num) => console.log('click', num)}*/}
               {/*    variant={CardVariant.outlined} width="200px" height="200px">*/}
               {/*    <button>Кнопка</button>*/}
               {/*</Card>*/}


           </div>
       </BrowserRouter>
    );
};

export default App;