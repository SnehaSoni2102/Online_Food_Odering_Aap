import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            usreInfo:{
                name:"Dummy",
                location:"Default",
                
            },
        };
       
    }
    async componentDidMount(){
       // console.log("child component did mount");
        const data=await fetch("https://api.github.com/users/SnehaSoni2102");
        const json = await data.json();
        this.setState({
             usreInfo:json,
        });

        // this.timer = setInterval(() =>{
        //      console.log("Namste-oops")
        // },1000);
       

    }

    componentDidUpdate(prevProps, prevState){
        // console.log("update");
        //Different if else conditions for different values(dependency value)
        // if(this.state.name!== prevState.name){
        //     //code
        // }
        // if(this.state.name1!== prevState.name1){
        //     //code
        // }
    }
    componentWillUnmount(){
       // console.log("unmount") ;
      
       clearInterval(this.timer );
    }
    render(){
       const {name,location, avatar_url}=this.state.usreInfo;
        
        return (
            <div className="user-card">
                <img src={avatar_url} />
             <h3>Name: {name}</h3>
              <h3>Location: {location}</h3>
              <h3>City: Rasra</h3>
            </div>
          );
    }
}
export default UserClass;
/*
--------MOUNTING---------------------------
constructor gets call
Rendre(with dummy data)
<html has dummy data>
component did mount gets call
<Api call>
<this.setState>->State variable is updated

----------UPDATE----------------------------
    rendre(API data)
    <HTML (new api data)
    component did update get calls
    */