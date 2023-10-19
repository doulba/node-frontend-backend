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

const semesterItems = [
    { id: 1, title: 'Semestre 1'},
    { id: 2, title: 'Semestre 2'},
    { id: 3, title: 'Semestre 3'},
    { id: 4, title: 'Semestre 4'},
    { id: 5, title: 'Semestre 5'},
    { id: 6, title: 'Semestre 6'},
]

const examItems = [
    { id: 1, title: 'Devoir'},
    { id: 2, title: 'Examen'},
]

const modulItems = [
    { id: 1, title: 'Algorithme'},
    { id: 2, title: 'Maintenance et reseaux'},
    { id: 3, title: 'Programmation'},
    { id: 4, title: 'Mathematiques'},
    { id: 5, title: 'Anglais'},
    { id: 6, title: 'Gestion de projet'},
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
    class: '',
    year: '',
    modul: '',
    semester: '',
    exam: '',
}

export default function MarkClassForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('class' in fieldValues)
            temp.class = fieldValues.class ? "" : "This field is required."
        if ('semester' in fieldValues)
            temp.semester = fieldValues.semester.length > 9 ? "" : "Minimum 10 numbers required."
        if ('year' in fieldValues)
            temp.year = fieldValues.year.length != 0 ? "" : "This field is required."
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
                        label="Classe"
                        name="class"
                        value={values.classname}
                        onChange={handleInputChange}
                        options={classItems}
                      
                    />
                    <Controls.Select
                        label="Semestre"
                        name="semester"
                        value={values.semester}
                        options={semesterItems}
                        onChange={handleInputChange}
                      
                    />
                    <Controls.Select
                        label="Année"
                        name="year"
                        value={values.year}
                        options={yearItems}
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
                        label="Evaluation"
                        name="exam"
                        value={values.exam}
                        options={examItems}
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
