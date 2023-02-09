import { ContentBox } from './components/ContentBox';
import { NumbersForm } from './components/NumbersForm';
import { TypesOfSets } from './components/TypesOfSets';
import { ResultBox } from './components/ResultBox';
import './App.css'


export const App = () => {
  return (
    <div className="container">
      <div className='combinationAPP'>
        <h3><i>Combinaciones</i></h3>
        <div className=' d-flex justify-content-between'> 
          <NumbersForm />
          <TypesOfSets />
        </div>
        <ContentBox />
        <ResultBox />
      </div>
    </div>
  );
}
