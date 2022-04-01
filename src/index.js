import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopCluster from './components/TopCluster';
import Post from './components/Post';

const MENU_LINKS = ['About', 'Blog', 'Repo', 'Misc'];

ReactDOM.render(
    <div className={styles.clearday}>
        <div className={styles.bgcover}>
            <div className={styles.container}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <TopCluster menus={MENU_LINKS} styles={styles}/>
                        <Routes>
                            <Route path='/blog' element={<Post styles={styles}/>}/>
                        </Routes>
                </BrowserRouter>
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