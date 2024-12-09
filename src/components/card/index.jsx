import './card.scss';
import { FaCalendar, FaSuitcase } from 'react-icons/fa'
import { MdLocationPin } from 'react-icons/md'
import DelButton from './DelButton'



const Card = ({ job }) => {


    const colors = {
        Reddedildi: "Red",
        DevamEdiyor: "orange",
        Mülakat: "green",
    }



    return (
        <div className="card">


            <section className="head">
                <div className="letter">
                    <span>{job.company[0]}</span>
                </div>

                <div className="info">
                    <p>{job.position}</p>
                    <p>{job.company}</p>
                </div>

                <div>
                    <DelButton id={job.id} />
                </div>

            </section>


            <section className="body">

                <dir className="field">
                    <MdLocationPin />
                    <p>{job.location}</p>
                </dir>

                <dir className="field">
                    <FaSuitcase />
                    <p>{job.type}</p>
                </dir>

                <dir className="field">
                    <FaCalendar />
                    <p>
                        {new Date(job.date).toLocaleDateString("tr", {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </p>
                </dir>

                <div className='status'>
                    <p style={{ backgroundColor: colors[job.status] }}>{job.status}</p>
                </div>

            </section>


        </div>
    )
}

export default Card