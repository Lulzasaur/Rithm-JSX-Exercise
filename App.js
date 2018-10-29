class App extends React.Component {
    render() {
      return (
        <div>
            <FirstComponent />
            <NamedComponent name="VICTORRRRRRrRRR" />
            <Tweet username='asfsaf' name='adsfasdf' date='24/124/23' message='alsdfjsla;fj' bgColor='blue' />
            <Tweet username='asfsaf' name='adsfasdf' date='24/124/23' message='alsdfjsla;fj' bgColor='red'/>
            <Tweet username='asfsaf' name='adsfasdf' date='24/124/23' message='alsdfjsla;fj' bgColor='green'/>
            <Person name='test' age='100' hobbies={['chess','cats']} />
            <Person name='testtestasdfasdfsa' age='10' hobbies={['notchess','cats','notchess','notchess','notchess']} />
        </div>
      );
    }
  }