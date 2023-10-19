import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../useForm';



const filiereItems = [
    { id: 1, title: 'IG'},
    { id: 2, title: 'DAF'},
    { id: 3, title: 'MC'},
    { id: 4, title: 'JCOM'},
    { id: 5, title: 'BAF'},
    { id: 6, title: 'TL'},
    { id: 7, title: 'CG'},
    { id: 8, title: 'CI'},
    { id: 9, title: 'GRH'},
    { id: 10, title: 'AE'},
]

const personItems = [
    { id: 1, title: 'M. Balde'},
    { id: 2, title: 'M. Drame'},
    { id: 3, title: 'Mme Sall'},
    { id: 4, title: 'M. Ba'},
    { id: 5, title: 'M. Thiam'},
    { id: 6, title: 'M. Tamba'},
]

const levelItems = [
    { id: 1, title: 'L1'},
    { id: 2, title: 'L2'},
    { id: 3, title: 'L3'},
    { id: 4, title: 'M1'},
    { id: 5, title: 'M2'},
]

const yearItems = [
    { id: 1, title: '2016/2017'},
    { id: 2, title: '2017/2018'},
    { id: 3, title: '2018/2019'},
    { id: 4, title: '2019/2020'},
    { id: 5, title: '2020/2021'},
    { id: 7, title: '2021/2022'},
]


const initialFValues = {
    id: 0,
    filiere: '',
    classname: '',
    person: '',
    level: '',
    year: '',
}

export default function ClassForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('classname' in fieldValues)
            temp.classname = fieldValues.classname ? "" : "This field is required."
        if ('filiere' in fieldValues)
            temp.filiere = fieldValues.filiere.length > 9 ? "" : "Minimum 10 numbers required."
        if ('person' in fieldValues)
            temp.person = fieldValues.person.length != 0 ? "" : "This field is required."
        if ('level' in fieldValues)
            temp.level = fieldValues.level ? "" : "This field is required."
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
                        label="Nom classe"
                        name="classname"
                        value={values.classname}
                        onChange={handleInputChange}
                        error={errors.profil}
                      
                    />
                    <Controls.Select
                        label="Filière"
                        name="filiere"
                        value={values.filiere}
                        options={filiereItems}
                        onChange={handleInputChange}
                      
                    />
                    <Controls.Select
                        label="Responsable"
                        name="person"
                        value={values.person}
                        options={personItems}
                        onChange={handleInputChange}
                      
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        label="Niveau"
                        name="level"
                        value={values.level}
                        options={levelItems}
                        onChange={handleInputChange}
                        error={errors.level}
                    />
                    <Controls.Select
                        label="Année"
                        name="year"
                        value={values.year}
                        options={yearItems}
                        onChange={handleInputChange}
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
