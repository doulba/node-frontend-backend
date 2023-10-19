import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../useForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const genderItems = [
    { id: 'M.', title: 'M.' },
    { id: 'Mme', title: 'Mme' },
    { id: 'autres', title: 'Autres' },
]

const campusItems = [
    { id: 1, title: 'Campus 1'},
    { id: 2, title: 'Campus 2'},
    { id: 3, title: 'Campus 3'},
    { id: 4, title: 'Campus 4'},
    { id: 5, title: 'Campus 5'},
    { id: 6, title: 'Siège'},
]

const initialFValues = {
    id: 0,
    nom: '',
    email: '',
    mobile: '',
    auto: '',
    profil: '',
    city: '',
    campus: '',
    gender: 'M.',
}


export default function AdminForm(props) {
    const { addOrEdit, recordForEdit } = props

 

    const handleSuccess = () => toast.success("✔️ event success");

    const handleError = () => toast.error(" event error");


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('profil' in fieldValues)
            temp.profil = fieldValues.profil.length != 0 ? "" : "This field is required."
        if ('campus' in fieldValues)
            temp.campus = fieldValues.campus ? "" : "This field is required."
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
                    <Controls.InputNumber
                        label="Autorisation"
                        name="auto"
                        value={values.auto}
                        onChange={handleInputChange}
                        error={errors.auto}
                    />
                    <Controls.Input
                        label="Fonction"
                        name="profil"
                        value={values.profil}
                        onChange={handleInputChange}
                        error={errors.profil}
                    />
                    <Controls.Select
                        label="Campus"
                        name="campus"
                        value={values.campus}
                        options={campusItems}
                        onChange={handleInputChange}
                        error={errors.campus}
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
                            text="Ajouter"
                            onClick={handleSuccess} />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                        <ToastContainer />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
