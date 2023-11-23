import React from 'react';
// 组件首字母小写报错
import ShowName from "./component/test1";
import './App.css';
import logo from './asset/images/logo.svg'
import nameData from './mockData/test.json';
// import styles from './test2.module.css';
// import styles from "./test1";
// import test2 from "./test2";
import styles from './test1.module.css'

function App() {
  return (
      <div className={styles.sort}>
          <img src="logo" className={styles.logoStyle} alt="logo"/>
          <div className={styles.letterColor}>
              {nameData.map(item => <ShowName key={item.id} id={item.id} name={item.name} skills={item.skill}></ShowName>)}
          </div>
      </div>

  );
}

export default App;
