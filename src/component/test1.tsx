import React from 'react';
interface nameProps {
    // id: string,
    id: number,
    name:string
}
const ShowName:React.FC<nameProps> = ({id,name})=>{
    // 可以直接解构 prop
    // const id = props.id;
    // const name = props.name;
    return (
        <div>兄弟们</div>
    )
}
export default ShowName