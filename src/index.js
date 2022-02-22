import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import profile from './coffeeprofile.jpg';
import { HashRouter, Link } from 'react-router-dom';
import TopCluster from './components/TopCluster'
import Post from './components/Post'

const MENU_LINKS = ['About', 'Blog', 'Repo', 'Misc']

ReactDOM.render(
    <div className={styles.clearday}>
    <div className={styles.bgcover}>
    <div className={styles.container}>
    <TopCluster menus={MENU_LINKS} styles={styles}/>
    <Post styles={styles}/>
    </div>
    </div>
    </div>,
    document.getElementById('root')
)

/*
ReactDOM.render(
    <HashRouter>
    <div className={styles.nograd}>
            <h1>Text</h1>
            <Link to='/blog'>Blog</Link> {' '}
            <Link to='/about'>About</Link> {' '}
            <Link to='/repo'>Repo</Link>
    </div>
    </HashRouter>
    ,
    document.getElementById('root')
  );
 */