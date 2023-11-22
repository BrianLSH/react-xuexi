import React from 'react';
// 组件首字母小写报错
import ShowName from "./component/test1";
import './App.css';
import nameData from './mockData/test.json';
function App() {
  return (
   <div>
     {nameData.map(item => <ShowName id={item.id} name={item.name} skills={item.skill}></ShowName>)}
   </div>
  );
}

export default App;
