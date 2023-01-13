import React from 'react';
import {motion} from "framer-motion";
class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.animation = {
            start: {
                scale: 1,
                color: '#fff',
            },
            end: {
                scale: 1.3,
                color: '#ccc9ff'
            },
            settings: {
                duration: 0.3,
            }
        }
    }
    render() {
        return <div className={'navigation'}>
            <motion.span initial={this.animation.start}
                         whileHover={this.animation.end}
                         transition={this.animation.settings}>Home</motion.span>
            <motion.span initial={this.animation.start}
                         whileHover={this.animation.end}
                         transition={this.animation.settings}>Help</motion.span>
            <motion.span initial={this.animation.start}
                         whileHover={this.animation.end}
                         transition={this.animation.settings}>Devices</motion.span>
            <motion.span initial={this.animation.start}
                         whileHover={this.animation.end}
                         transition={this.animation.settings}>Account</motion.span>
        </div>
    }
}
export default Navigation;