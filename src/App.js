import './App.css';
import Component from './components/Component';

function App() {
  return (
    <>
      <Component name={"data"} title={"Успешное получение данных"} />
      <Component name={"error"} title={"Получение 500 ошибки"} />
      <Component name={"loading"} title={"Индикатор загрузки"} />
    </>
  );
}

export default App;
