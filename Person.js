class Person extends React.Component {

    render() {
      const {name,age,hobbies} = this.props;
      const overEighteen = age>=18 ? true:false; 
      const truncName = name.length>=8 ? name.slice(0,6):name;

      return (
        <div>
          <p>
          <li>
            <ul>Learn some information about this person</ul>
            <ul>Name:{truncName}</ul>
            <ul>Age:{age}</ul>
            <ul>Hobbies:
              <ul>
                {hobbies.map(h=><li>{h}</li>)}
              </ul>
            </ul>
          </li>
          <h3>{overEighteen ? 'please go vote':'you must be 18'}</h3>

          </p>
        </div>
      );
    }
  }