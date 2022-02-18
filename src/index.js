import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.css';
import profile from './coffeeprofile.jpg';
import { HashRouter, Link } from 'react-router-dom';

const MENU_LINKS = ['About', 'Blog', 'Repo']

class TopMenu extends React.Component {
    
    render() {
        const links = MENU_LINKS.map((text, idx) => {
            return (
                <div className={styles.topmenulink} key={idx}>{text}</div>
            )
        })
        return (
            <div className={styles.topmenu}>
                <h1>Title Text</h1>
                <div className={styles.topmenusub}>
                    <img className={styles.pfp} src={profile} alt='tooltip'></img>
                    {links}
                </div>
            </div>
        )
    }
}

class Canvas extends React.Component {
    render() {
        return (
            <div className={styles.canvas}>
                <p className={styles.canvasp}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra leo quis elit posuere congue. Morbi vehicula leo at facilisis fringilla. Quisque a lacus vitae libero dictum blandit. Fusce justo tortor, lobortis non vulputate eget, venenatis sit amet nisl. Nulla ullamcorper vulputate rhoncus. Quisque a faucibus augue, sed condimentum nisi. In vitae felis a ex ultrices posuere ac ac risus. Morbi consequat ultricies fringilla. Nam sit amet malesuada leo. Nam et faucibus est. Donec diam quam, hendrerit sit amet dui in, suscipit porta arcu. Duis quis tortor sagittis, auctor velit eu, consectetur eros.

Aenean non blandit purus, ac bibendum felis. Morbi bibendum, augue vel iaculis bibendum, nulla libero fermentum turpis, in egestas felis ipsum et quam. Fusce id nunc elit. Duis euismod mi leo, eget lacinia orci tincidunt id. Morbi finibus, velit ac semper facilisis, ante ex tincidunt metus, in mattis mauris neque et metus. Phasellus porttitor, nisl a euismod viverra, mauris mi dignissim quam, sit amet sagittis ante purus ut elit. Nullam leo magna, fermentum sit amet diam vitae, auctor tincidunt est. Ut nec vestibulum dolor.

Integer blandit vel nisl et molestie. Curabitur vestibulum augue quis diam congue tristique. Sed nulla sapien, viverra sit amet tristique non, suscipit a eros. Donec consectetur sodales dui, id lacinia nulla ornare ut. Fusce consequat vulputate dui vel laoreet. Ut molestie massa mauris, at consectetur odio placerat sit amet. Phasellus vel tristique sem.

Vestibulum hendrerit cursus ultrices. Aenean ex neque, pulvinar vel euismod et, convallis quis lectus. Nullam ante ante, egestas blandit aliquet eu, laoreet eget justo. Integer posuere turpis mollis pretium fringilla. Integer volutpat, quam ac rutrum fringilla, ligula arcu egestas felis, et consequat ante nisl sit amet nisi. Curabitur non tellus volutpat, cursus quam a, feugiat turpis. Suspendisse laoreet ipsum vitae lorem congue, et malesuada enim eleifend. Morbi tortor quam, lobortis eu condimentum et, venenatis at felis.

Nulla facilisi. Integer maximus odio a scelerisque semper. Etiam non massa vel sem ultrices elementum. Quisque sagittis tortor eu dui placerat tincidunt. Nam eros urna, varius consequat ipsum quis, vulputate suscipit leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec nec posuere diam.
</p>
</div>
        )
    }
}

ReactDOM.render(
    <div className={styles.container}>
    <TopMenu/>
    <Canvas/>
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