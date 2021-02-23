
import './App.css';
import { EditorContainer } from './EditorContainer';
import ExhibitionList from './ExhibitionPage/ExhibitionList';
import ExhibitionNavigateBar from './ExhibitionPage/ExhibitionNavigateBar';
import Footer from './Homepage/Footer';
import Header from './Homepage/Header';
import NavigateBar from './Homepage/NavigateBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LogInPage from './AuthenPage/LogIn';

export default function Home(){
  return (
  <div>
  <Header/>
  <NavigateBar/>
  <ExhibitionNavigateBar></ExhibitionNavigateBar>
  <ExhibitionList></ExhibitionList>
  <Footer></Footer>
  </div>
  )
}

