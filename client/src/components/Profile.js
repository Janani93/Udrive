import React, { Component } from 'react'
import { getProfile } from './UserFunctions'
import List from '../List';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: ''
        }
    }

    componentDidMount() {
        getProfile().then(res => {
            this.setState({
                name: res.user.name,
                email: res.user.email
            })
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        
                        <h1 className="text-center">TODO List</h1>
                        <List />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile