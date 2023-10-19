import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../useForm';


const genderItems = [
    { id: 'M.', title: 'M.' },
    { id: 'Mme', title: 'Mme' },
    { id: 'Autres', title: 'Autres' },
]

const classItems = [
    { id: 1, title: 'L1IGAB'},
    { id: 2, title: 'L2IGAB'},
    { id: 3, title: 'L3IGAB'},
    { id: 4, title: 'L1BAFAB'},
    { id: 5, title: 'L2BAFAB'},
    { id: 6, title: 'L3BAFAB'},
]

const initialFValues = {
    id: 0,
    nom: '',
    email: '',
    mobile: '',
    birthday: '',
    identify: '',
    city: '',
    class: '',
    gender: 'M.',
}

export default function AdminForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('identify' in fieldValues)
            temp.identify = fieldValues.identify.length != 0 ? "" : "This field is required."
        if ('class' in fieldValues)
            temp.class = fieldValues.class ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="nom"
                        label="Prénom et Nom"
                        value={values.nom}
                        onChange={handleInputChange}
                        error={errors.nom}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.Input
                        label="Téléphone"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="Adresse"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Input
                        label="Matricule"
                        name="identify"
                        value={values.identify}
                        onChange={handleInputChange}
                        error={errors.identify}
                    />
                    <Controls.Input
                        label="Date de naissance"
                        name="birthday"
                        value={values.birthday}
                        onChange={handleInputChange}
                        error={errors.birthday}
                    />
                    <Controls.Select
                        label="Classe"
                        name="class"
                        value={values.class}
                        options={classItems}
                        onChange={handleInputChange}
                        error={errors.class}
                    />
                    <Controls.RadioGroup
                        name="gender"
                        label="Genre"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />      
                    <div>
                        <Controls.Button
                            type="submit"
                            text="Ajouter" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
