// main.tsx or main.jsx
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import './index.css'
import {store,persistor} from "./redux/store.js"
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById('root');

if (rootElement !== null) {
    const root = ReactDOM.createRoot(rootElement);
    // ... render your app using the root
    root.render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <App />
        </PersistGate>
      </Provider>
    )
} else {
    // Handle the case where the element is not found (e.g., log an error)
    <div>
      Something Went Wrong
    </div>
}
