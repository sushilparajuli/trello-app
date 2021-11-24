import { AppContainer } from "./styles"
import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"

import { useAppState } from "./AppStateContext"

export const App = () =>{
  const {state} = useAppState()
  return (
    <AppContainer>
      {state.lists.map((list, i) => (
      <Column text={list.text} key={list.id} index={i}/>
      ))}
      <AddNewItem toggleButtonText="+ Add another list" onAdd={()=>{}}/>
    </AppContainer>
  )
}
