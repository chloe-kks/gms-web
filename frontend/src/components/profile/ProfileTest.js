import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import styled from 'styled-components';
import oc from 'open-color';
import axios from 'axios';

const WhiteBox = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 1rem;

    background: white;
    color: ${oc.gray[6]};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    cursor: text;

    &:hover {
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
`;

class ProfileTest extends Component {
	constructor(props) {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			gender: '',
			dateofbirth: '',
			ageinyrs:'',
			weightinkgs: '',
			phonenum:'',
			city:'',
			zip:'',
			region:'',
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleSubmit() {
		const data = {
			userid: 'test123',
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			gender: this.state.gender,
			dateofbirth: this.state.dateofbirth,
			ageinyrs: this.state.ageinyrs,
			weightinkgs: this.state.weightinkgs,
			phonenum: this.state.phonenum,
			city: this.state.city,
			zip: this.state.zip,
			region: this.state.region,
		};

		console.log(data);
		axios.put('/api/Accounts/profile', { data })
			.then(res => {
				console.log(data);
			});
	}
	render() {	
    return (
    <WhiteBox>
        <h1>Edit Profile</h1>
        <div className="row">
          <div className="col-md-3">
            <div className="text-center">
            </div>
          </div>
		</div>
        <div className="col-md-9 personal-info">
            <div className="alert alert-info alert-dismissable">
            <a className="panel-close close" data-dismiss="alert"></a> 
            <i className="fa fa-coffee"></i>
            Change your password <strong>every 3 months</strong> for security.
            </div>
            <h3>Personal info</h3>
            
            <Form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label className="col-lg-3 control-label">First name</label>
                  <div className="col-lg-8">
                <input className="form-control" type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} required />
                  </div>
              </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Last name</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Gender</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" name="gender" value={this.state.gender} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Date of Birth</label>
                <div className="col-lg-8">
                <input className="form-control" type="date" name="dateofbirth" value={this.state.dateofbirth} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Age in Years</label>
                <div className="col-lg-8">
                <input className="form-control" type="number" name="ageinyrs" value={this.state.ageinyrs} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Weight in Kgs</label>
                <div className="col-lg-8">
                <input className="form-control" type="number" name="weightinkgs" value={this.state.weightinkgs} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Phone Number</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" name="phonenum" value={this.state.phonenum} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">City</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" name="city" value={this.state.city} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Zip</label>
                <div className="col-lg-8">
                <input className="form-control" type="number" name="zip" value={this.state.zip} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-lg-3 control-label">Region</label>
                <div className="col-lg-8">
                <input className="form-control" type="text" name="region" value={this.state.region} onChange={this.handleChange}/>
                </div>
            </div>
            <div className="form-group">
                <label className="col-md-3 control-label"></label>
                <div className="col-md-8">
                <Button type="submit">Submit</Button>
                <span></span>
                <input type="reset" className="btn btn-default" value="Cancel"/>
                </div>
            </div>
            </Form>
        </div>
    </WhiteBox>
    );
	}
}

export default ProfileTest;
