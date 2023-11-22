import React from 'react';
interface nameProps {
    id: number,
    name:string,
    skills:string
}
const ShowName:React.FC<nameProps> = ({id,name,skills})=>{
    return (
        <div>{id}------{name}-------{skills}</div>
    )
}
export default ShowName