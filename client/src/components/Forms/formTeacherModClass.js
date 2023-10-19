import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../Controls/Controls";
import { useForm, Form } from '../useForm';



const classItems = [
    { id: 1, title: 'L1IGAB'},
    { id: 2, title: 'L2IGAB'},
    { id: 3, title: 'L3IGAB'},
    { id: 4, title: 'L1BAFAB'},
    { id: 5, title: 'L2BAFAB'},
    { id: 6, title: 'L3BAFAB'},
]

const teacherItems = [
    { id: 1, title: 'M. Dieng'},
    { id: 2, title: 'M. Diop'},
    { id: 3, title: 'M. Diallo'},
    { id: 4, title: 'M. Toure'},
    { id: 5, title: 'M. Wade'},
    { id: 6, title: 'M. Seck'},
]

const semesterItems = [
    { id: 1, title: 'Semestre 1'},
    { id: 2, title: 'Semestre 2'},
    { id: 3, title: 'Semestre 3'},
    { id: 4, title: 'Semestre 4'},
    { id: 5, title: 'Semestre 5'},
    { id: 6, title: 'Semestre 6'},
]

const coefItems = [
    { id: 1, title: '1'},
    { id: 2, title: '2'},
    { id: 3, title: '3'},
    { id: 4, title: '4'},
    { id: 5, title: '5'},
    { id: 6, title: '6'},
    { id: 7, title: '7'},
    { id: 8, title: '8'},
    { id: 9, title: '9'},
    { id: 10, title: '10'},
]

const ueItems = [
    { id: 1, title: 'UE1'},
    { id: 2, title: 'UE2'},
    { id: 3, title: 'UE3'},
    { id: 4, title: 'UE4'},
    { id: 5, title: 'UE5'},
    { id: 6, title: 'UE6'},
]


const modulItems = [
    { id: 1, title: 'Algorithme'},
    { id: 2, title: 'Maintenance et reseaux'},
    { id: 3, title: 'Programmation'},
    { id: 4, title: 'Mathematiques'},
    { id: 5, title: 'Anglais'},
    { id: 6, title: 'Gestion de projet'},
]

const initialFValues = {
    id: 0,
    teacher: '',
    class: '',
    modul: '',
    semester: '',
    ue: '',
    coef: '',
}

export default function TeacherModClassForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('teacher' in fieldValues)
            temp.teacher = fieldValues.teacher ? "" : "This field is required."
        if ('class' in fieldValues)
            temp.class = fieldValues.class.length > 9 ? "" : "Minimum 10 numbers required."
        if ('semester' in fieldValues)
            temp.semester = fieldValues.semester.length != 0 ? "" : "This field is required."
        if ('modul' in fieldValues)
            temp.modul = fieldValues.modul ? "" : "This field is required."
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
                    <Controls.Select
                        label="Professeur"
                        name="teacher"
                        value={values.teacher}
                        options={teacherItems}
                        onChange={handleInputChange}
                      
                    />
                    <Controls.Select
                        label="Classe"
                        name="class"
                        value={values.class}
                        options={classItems}
                        onChange={handleInputChange}
                      
                    />
                    <Controls.Select
                        label="Semestre"
                        name="semester"
                        value={values.semester}
                        options={semesterItems}
                        onChange={handleInputChange}
                      
                    />

                </Grid>
                <Grid item xs={6}>
                    <Controls.Select
                        label="Module"
                        name="modul"
                        value={values.modul}
                        options={modulItems}
                        onChange={handleInputChange}
                        error={errors.modul}
                    />
                    <Controls.Select
                        label="Coefficient"
                        name="coef"
                        value={values.coef}
                        options={coefItems}
                        onChange={handleInputChange}
                    />
                    <Controls.Select
                        label="Unité d'enseignement"
                        name="ue"
                        value={values.ue}
                        options={ueItems}
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
