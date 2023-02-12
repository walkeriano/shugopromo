import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles/styles.css";
import { Router } from './Router';
import { ExampleProvider } from './state/Example/ExampleProvider';



export default function App() {
  return (
    <BrowserRouter>
      <ExampleProvider>
        <Router/>
      </ExampleProvider>
    </BrowserRouter>
  )
}
