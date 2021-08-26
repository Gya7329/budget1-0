
import './App.css';
import {Container} from 'semantic-ui-react'
import Mainheader from './components/Mainheader';
import Balance from './components/Balance';

import FormGroup from './components/FormGroup';
import History from './components/History';
import DisplayBalance from './components/DisplayBalance';


function App() {
  return (
 <Container >
<Mainheader title='Budget'/>
<DisplayBalance title='Your Balance' value='10000' color='blue'/>
<Balance/>
<Mainheader title='Histroy' type='h3'/>
<History title='Income' value='250' isExpense />
<History title='Expense' value='25'  />

<Mainheader title='Add new transaction' type='h3'/>
<FormGroup/>









 </Container>
  )}

export default App;
