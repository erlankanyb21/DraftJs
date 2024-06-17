import React, { useState } from 'react';
import './PassportForm.css';

const PassportForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        passportNumber: '',
        issueDate: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.passportNumber) newErrors.passportNumber = 'Passport number is required';
        if (!formData.issueDate) newErrors.issueDate = 'Issue date is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted:', formData);
        }
    };

    return (
        <form className="passport-form" onSubmit={handleSubmit}>
            <h2>Passport Information</h2>
            <div className="form-group">
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'input-error' : ''}
                />
                {errors.firstName && <span className="error-message">{errors.firstName}</span>}
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'input-error' : ''}
                />
                {errors.lastName && <span className="error-message">{errors.lastName}</span>}
            </div>
            <div className="form-group">
                <label>Passport Number</label>
                <input
                    type="text"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    className={errors.passportNumber ? 'input-error' : ''}
                />
                {errors.passportNumber && <span className="error-message">{errors.passportNumber}</span>}
            </div>
            <div className="form-group">
                <label>Issue Date</label>
                <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className={errors.issueDate ? 'input-error' : ''}
                />
                {errors.issueDate && <span className="error-message">{errors.issueDate}</span>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default PassportForm;
