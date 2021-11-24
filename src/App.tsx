import { AppContainer } from "./styles"
import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"

import { useAppState } from "./AppStateContext"

export const App = () =>{
  const {state, dispatch} = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
      <Column  id={list.id} key={list.id} text={list.text} index={i}/>
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={text => dispatch({type: "ADD_LIST", payload: text})}/>
    </AppContainer>
  )
}
