import React from 'react'

const ItemForm : React.FC = () => {

    const fields = [
        { name: 'Name', label: 'Name', type: 'text', placeholder: 'Enter new admin Name.',value: '' },
        { name: 'gender', label: 'Gender', type: 'select', placeholder: 'Please select your gender.',options:[
          { value: '0', label: 'Male' },
          { value: '1', label: 'Female' },
        ] ,value: ''},
        { name: 'DateOfBirth', label: 'Birthday', type: 'date',value: '' },
        { name: 'SSN', label: 'SSN', type: 'text', placeholder: 'Enter SSN',value: '' },
        { name: 'Email', label: 'Email', type: 'email', placeholder: 'Enter new admin email.',value: '' },
        { name: 'City', label: 'City', type: 'text', placeholder: 'Enter City',value: '' },
        { name: 'Password', label: 'Password', type: 'password', placeholder: 'Enter new admin password.',value: '' },
        { name: 'imageProfile', label: 'Profile Picture', type: 'file',value: ''},
        { name: 'confirmPassword', label: 'Confirm Password', type: 'password', placeholder: 'Re-enter new admin password.',value: '' },
      ];

    return (
        <div>ItemForm</div>
    )
}

export default ItemForm