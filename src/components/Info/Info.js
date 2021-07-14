import React from 'react';
import { useTranslation } from 'react-i18next';
import './Info.scss';
// import personImg from '../../assets/images/info/person.jpg';
import Fade from 'react-reveal/Fade';

function Info() {
    const { t } = useTranslation();
    
    const personalInfo = [
        {
            id: 1,
            person: <>{t('info.person_1.name')}</>,
            position: <>{t('info.person_1.position')}</>,
            experience: <>{t('info.person_1.experience')}</>
        },
        {
            id: 2,
            person: <>{t('info.person_2.name')}</>,
            position: <>{t('info.person_2.position')}</>,
            experience: <>{t('info.person_2.experience')}</>,
            education: <>{t('info.person_2.education')}</>,
        },
        {
            id: 3,
            person: <>{t('info.person_3.name')}</>,
            position: <>{t('info.person_3.position')}</>,
            experience: <>{t('info.person_3.experience')}</>
        }
    ];
    return (
        <div className="info_container" id="about_us">
            <Fade bottom delay={200}>
                <div className="short_info">
                    {t('info.short_info')}
                </div>
            </Fade>
            <Fade>
                <div className="personal_info_container">
                    <div className="persons">
                        {personalInfo.map(p => {
                            return (
                                <div className="personal_info" key={p.id}>
                                    <div className="avatar"></div>
                                    <p className="name">{p.person}</p>
                                    <p className="position">{p.position}</p>
                                    <p className="experience">
                                        <span>{t('info.fields.experience')}:</span> {p.experience}
                                    </p>
                                    {p.education && <p className="education">
                                        <span>{t('info.fields.education')}:</span> {p.education}
                                    </p>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Info;