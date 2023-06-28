import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            
        };
    }
    componentDidMount(){
        console.log("child component did mount");
    }
    render(){
        const{name}=this.props;
        const{count}=this.state;
        return (
            <div className="user-card">
                <h3>Count:{count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    })
                }}>count increase</button>
              <h3>Name: {name}</h3>
              <h3>Location: Uttar Pradesh</h3>
              <h3>City: Rasra</h3>
            </div>
          );
    }
}
export default UserClass;