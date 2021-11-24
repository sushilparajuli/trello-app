import {createContext, useReducer, useContext} from "react"



type Task = {
    id: string
    text: string
}
  
type List = {
    id: string
    text: string
    tasks: Task[]
}

type Action = 
| { 
  type : "ADD_LIST"
  payload: string
}
| { 
  type : "ADD_TASK"
  payload: {text:string, listId: string}
}

export type AppState = {
    lists: List[]
}

const appData: AppState = {
    lists: [
      {
        id: "0",
        text: "To Do",
        tasks: [{ id: "c0", text: "Generate app scaffold" }]
      },
      {
        id: "1",
        text: "In Progress",
        tasks: [{ id: "c2", text: "Learn Typescript" }]
      },
      {
        id: "2",
        text: "Done",
        tasks: [{ id: "c3", text: "Begin to use static typing" }]
      }
    ]
}


  

//  createContext type
type AppStateContextProps = {
    state: AppState
    dispatch: React.Dispatch<Action>
}

// create createContext
const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)



// App State Reducer
const appStateReducer = (state: AppState, action : Action): AppState => {
  switch(action.type){
    case  "ADD_LIST": {
      //Reducer logic here
    
    }
    case  "ADD_TASK": {
      //Reducer logic here
    }
    default: {
       //Reducer logic here
    }
  }

}

// App state provider
export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
      const [state, dispatch] = useReducer(appStateReducer, appData)
      return (
        <AppStateContext.Provider value={{ state, dispatch }}>
          {children}
        </AppStateContext.Provider>
      )
}


// Retrieve the value from AppStateContext using useContext hook and return the result
export const useAppState = () => {
    return useContext(AppStateContext)
}