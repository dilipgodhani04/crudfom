import {React, Component} from 'react';

class App  extends Component{
  constructor(){
    super();
    this.state={
      employeeData :[],
      userData:{}
    }
  }
  handelSubmit =(e) => {
    this.state.employeeData.push(this.state.userData)
    this.setState({
      employeeData:this.state.employeeData,
      userData:{
        firstName:'',
        age:''
      }
    })  
  }

  handleChange = (event) =>{
    this.setState({
      userData:{...this.state.userData,[event.target.name]:event.target.value}
    })
  }
  render(){
    return(
      <>
      <label>Name</label>
      <input type="text" placeholder='Enter Your Name' name='firstName' value={this.state.userData.firstName} onChange={(e) =>this.handleChange(e)} />
     <br/>
      <label>Age</label>
      <input type="text" placeholder='Enter Your Age' name='age' value={this.state.userData.age} onChange={(e) =>this.handleChange(e)}/>
      <button onClick={(e)=> this.handelSubmit(e)}> Save</button>
       <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {
        this.state.employeeData.map((data, i) =>
        <tr key={i}>
          <td>{data.firstName}</td>
          <td>{data.age}</td>
        </tr>)
      }
    </table>
      </>
    )
  }
}

export default App;
