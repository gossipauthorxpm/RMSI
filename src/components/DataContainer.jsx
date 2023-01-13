import React from "react";
import TextContainer from "./TextContainer";
import HR from "./HR";
import {motion} from "framer-motion";
class DataContainer extends React.Component{
    constructor(props) {
        super(props);
        this.animation = {
            start: {
                y: 100,
                opacity: 0
            },
            end: {
                y: 0,
                opacity: 1,
            },
            settings: {
                duration: 1.5,
                repeat: 0,
                type: 'spring',
            }
        }
    }
    render() {
        return <motion.div initial={this.animation.start}
                           whileInView={this.animation.end}
                           transition={this.animation.settings}
                           viewport={{ once: true }}
                           className={'data-container'}>
            <h1>{this.props.h1}</h1>
            <TextContainer text={this.props.data}/>
            <HR/>
        </motion.div>
    }
}
export default DataContainer;