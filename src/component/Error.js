import { useRouteError } from "react-router-dom";

export const Error=()=>{
    const err= useRouteError();
    return (
        <div>
            <h1>Opps!!!</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}:{err.statusText}</h3>
        </div>
    );
};
