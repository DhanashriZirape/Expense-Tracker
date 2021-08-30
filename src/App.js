import classes from './App.module.css';
import Container from './components/Expense/Container';


function App() {

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <Container></Container>
      </div>
    </div>
  );
}

export default App;
