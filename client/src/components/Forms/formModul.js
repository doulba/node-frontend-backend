import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../useForm';


const ueItems = [
    { id: 1, title: 'UE1'},
    { id: 2, title: 'UE2'},
    { id: 3, title: 'UE3'},
    { id: 4, title: 'UE4'},
    { id: 5, title: 'UE5'},
    { id: 6, title: 'UE6'},
]

const semesterItems = [
    { id: 1, title: 'Semestre 1'},
    { id: 2, title: 'Semestre 2'},
    { id: 3, title: 'Semestre 3'},
    { id: 4, title: 'Semestre 4'},
    { id: 5, title: 'Semestre 5'},
    { id: 6, title: 'Semestre 6'},
]

const initialFValues = {
    id: 0,
    nom: '',
    semester: '',
    ue: '',
}

export default function ModulForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('nom' in fieldValues)
            temp.nom = fieldValues.nom ? "" : "This field is required."
        if ('semester' in fieldValues)
            temp.semester = fieldValues.semester.length != 0 ? "" : "This field is required."
        if ('ue' in fieldValues)
            temp.ue = fieldValues.ue ? "" : "This field is required."
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
                        label="Nom module"
                        value={values.nom}
                        onChange={handleInputChange}
                        error={errors.nom}
                    />
                    <Controls.Select
                        label="Unité d'enseignement"
                        name="ue"
                        value={values.ue}
                        options={ueItems}
                        onChange={handleInputChange}
                        error={errors.ue}
                    />   

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        label="Semestre"
                        name="semester"
                        value={values.semester}
                        options={semesterItems}
                        onChange={handleInputChange}
                        error={errors.semester}
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
