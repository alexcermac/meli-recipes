import React from 'react'
import '../styles/ContactPage.css'

export default function ContactPage() {
    return (
		<div className='form-container'>
			<h3>Contact me</h3>
			<form action="" className='form'>
				<div className='form__field'>
					<label htmlFor="name">Name:</label>
					<input type="text"/>
				</div>
				<div className='form__field'>
					<label htmlFor="email">Email:</label>
					<input type="text"/>
				</div>
				<div className='form__field'>
					<label htmlFor="message">Message:</label>
					<textarea type="text"/>
				</div>
			</form>
		</div>
    )
}
