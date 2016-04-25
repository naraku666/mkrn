import React from 'react';
import {Form, Input, Button, Select, Upload, Icon, Alert, message} from 'antd';
const FormItem = Form.Item;
import ProjectStore from "../../stores/project";
import ProjectAdd from './ProjectAdd';

class ProjectEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	detail: this.props.location.state
        }
    }
    render() {
        return ( 
            <div>
            	<ProjectAdd detail={this.state.detail}></ProjectAdd>
            </div>
        );
    }
}
export default ProjectEdit;
