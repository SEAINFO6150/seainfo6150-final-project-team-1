import React from "react";
import styles from "./css/AddVehicle.module.css";

class AddRecipe extends React.Component {
	constructor() {
		super();
		this.state = {
			Mode: "",
			Price: "",
			Features: "",
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
	    this.setState({ [event.target.name]: event.target.value});
	}

	handleSubmit = (e) => {
		e.preventDefault();
	    alert(`You vehicle is submitted successfully, thank you for your help! ${this.state.Mode}!`);
	}

	render () {
		return (
			<div id={styles.add_vehicle_page}>
				<h3>Add Your Favorite Vehicles Here !!!</h3>
				<form className={styles.add_form} onSubmit={this.handleSubmit}>
					<ul className={styles.form_item}>
						<li>
							<label className={styles.to_send}>
								Choose Brand:
								<select>
									<option value ="Audi">Audi</option>
									<option value ="BMW">BMW</option>
									<option value="Mercedes">Mercedes</option>
								</select>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>
							  Mode:
							  <input required="required" value={this.state.Mode} onChange={this.handleChange} name="Mode"/>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>
							  Price:
							  <textarea required="required" value={this.state.Price} onChange={this.handleChange} name="Price"/>
							</label>
						</li>
						<li>
							<label className={styles.to_send}>
							  Features:
							  <textarea required="required" value={this.state.Features} onChange={this.handleChange} name="Features"/>
							</label>
						</li>
						<li>			
							<input type="Submit" value="Add" />
						</li>
					</ul>
				</form>			
			</div>
		)
	}
}


export default AddRecipe;