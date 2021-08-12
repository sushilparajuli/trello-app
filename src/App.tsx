import { AppContainer } from "./styles"
import { Column } from "./Column"
import { AddNewItem } from "./AddNewItem"
import { Card } from "./Card"

export const App = () =>{
  return (
    <AppContainer>
     <Column text="todo">
       <Card text="Generate app scaffhold"/>
      </Column>
      <Column text="In Progress">
       <Card text="Learning Typescript"/>
      </Column>
      <Column text="Done">
       <Card text="Begin to use static typing"/>
      </Column>
      <AddNewItem toggleButtonText="+ Add another list" onAdd={
        console.log
      }/>
    </AppContainer>
  )
}
