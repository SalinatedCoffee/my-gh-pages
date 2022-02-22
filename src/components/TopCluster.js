import React from 'react';
import profile from '../coffeeprofile.jpg';
import { HashRouter, Link } from 'react-router-dom';

export default class TopCluster extends React.Component {
    render() {
        const links = this.props.menus.map((text, idx) => {
            return (
                <Link to={'/'.concat(text).toLowerCase()}>
                <div className={this.props.styles.topmenulink} key={idx}>{text}</div>
                </Link>
            )
        })
        return (
            <div className={this.props.styles.topmenu}>
                <img className={this.props.styles.pfp} src={profile} alt='tooltip'></img>
                <div className={this.props.styles.topmenusub}>
                <h1>Title Text</h1>
                <div className={this.props.styles.topmenulinkcluster}>
                <HashRouter>
                {links}
                </HashRouter>
                </div>
                </div>
            </div>
        )
    }
}
