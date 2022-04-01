import React from 'react';
import profile from '../coffeeprofile.png';
import { Link } from 'react-router-dom';

export default class TopCluster extends React.Component {
    render() {
        const links = this.props.menus.map((text, idx) => {
            if (text === 'Repo') {
                return (
                    <a className={this.props.styles.topmenulink} href='https://github.com/SalinatedCoffee/my-gh-pages' rel='noreferrer' target='_blank'>{text}</a>
                )
            }
            else {
            return (
                <Link to={'/'.concat(text).toLowerCase()}>
                    <div className={this.props.styles.topmenulink} key={idx}>{text}</div>
                </Link>
            )
        }
        })
        return (
            <div className={this.props.styles.topmenu}>
                <img className={this.props.styles.pfp} src={profile} alt='tooltip'/>
                <div className={this.props.styles.topmenusub}>
                    <h1>Title Text</h1>
                    <div className={this.props.styles.topmenulinkcluster}>
                        {links}
                    </div>
                </div>
            </div>
        )
    }
}
