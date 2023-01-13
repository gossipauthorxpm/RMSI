import React from "react";
import {motion} from "framer-motion";
class HR extends React.Component{
    constructor(props) {
        super(props);
        this.animation = {
            start: {
                opacity: 0,
                width: '0%'
            },
            end: {
                opacity: 1,
                width: '75%'
            },
            settings: {
                duration: 1,
                type: 'spring'
            },
        }
    }
    render() {
        return <motion.hr
            initial={this.animation.start}
            whileInView={this.animation.end}
            transition={this.animation.settings}
            viewport={{once: true}}
        />
    }
}
export default HR;