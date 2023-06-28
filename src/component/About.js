import UserClass from "./UserClass";
import { Users } from "./Users";




const About=()=>{
    return (
        <div >
            <h1> About </h1>
            <h2> this is namste react </h2>
            <div className="ab-c">
            <Users name ={"Sneha Soni(function)"} />
            <UserClass name={"Sneha Soni(class)"} />
            </div>
        </div>
    );
};
export default About;