import React from 'react'
import Input from './Input'
import Select from './Select'
import { statusOptions, typeOptions } from '../../utils/constant'
import api from "../../utils/api"
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { createJob } from '../../redux/slices/jobSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jobData = Object.fromEntries(formData.entries())

        jobData.date = Date.now()



        api.post("/jobs", jobData)
            .then(() => {
                dispatch(createJob(res.data))
                toast.success('Başvuru Oluşturuldu')
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
                toast.error("Başvuru Oluşturulamadı!!")
            })

    }



    return (
        <div className='add-page'>
            <section>
                <h2>Yeni İş Ekle</h2>7

                <form onSubmit={handleSubmit}>

                    <Input label="Pozisyon" name="position" />
                    <Input label="Şirket" name="company" />
                    <Input label="Lokasyon" name="location" />

                    <Select label="Durum" name="status" options={statusOptions} />
                    <Select label="Tür" name="type" options={typeOptions} />


                    <div className="btn-wrapper">
                        <button class="button">Oluştur</button>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Create