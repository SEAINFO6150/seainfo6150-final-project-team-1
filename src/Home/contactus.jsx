import React from 'react';
import styles from "./css/contactus.module.css";

class contactus extends React.Component {
    constructor(){
        super();
        this.state = {
            username: "",
            advice: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
	    alert(`Dear ${this.state.username}! We received your information, we will contact you soon!`);
    }

    render(){
        return (
            <div className={styles.body}>
                <h3 className={styles.contacttitle}>Contact Us</h3>
                <div>
                    <form className={styles.form} onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input required="required" type="name" value={this.state.username} onChange={this.handleChange} name="username" placeholder="enter your name" maxLength="10"/>
                        </label><br />
                        <label>
                            E-mail:
                            <input required="required" type="email" name="email" placeholder="enter your email" />
                        </label><br />
                        <label>
                            Select Age group:  
                            <select>
                                <option value ="children">under 18</option>
                                <option value ="young">18 - 25</option>
                                <option value ="adult">26 - 59</option>
                                <option value="old"> above 60</option>
						    </select>
                        </label><br />
                        <label>
                            Comments<br />
                            <textarea value={this.state.advice} onChange={this.handleChange} name="advice" rows="50" cols="50">Plese write down what you want to tell us here!</textarea>
                        </label>
                        <br/>
                        <input className={styles.button} type="submit" value="Submit" />
                    </form>
                </div>
                <div className={styles.letter}>
                    <p>Thank you for contacting us</p>
                    <p>We have received your message and will get back to you as soon as possible</p>
                </div>
            </div>
        );
    }
};

export default contactus;


