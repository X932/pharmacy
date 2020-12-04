import React from 'react';
import { useTranslation } from 'react-i18next';
import './Info.scss'

function Info() {
    const { t, i18n } = useTranslation();
    
    function handleLanguage(lang) {
        i18n.changeLanguage(lang);
    }

    const personalInfo = [
        {
            id: 1,
            person: <>{t('info.person_1.name')}</>,
            position: <>{t('info.person_1.position')}</>,
            experience: <>{t('info.person_1.experience')}</>,
            education: <>{t('info.person_1.education')}</>,
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
            experience: <>{t('info.person_3.experience')}</>,
            education: <>{t('info.person_3.education')}</>,
        }
    ];
    return (
        <div className="info_container" id="about_us">
            <button onClick={() => handleLanguage('en')}>Eng</button>
            <button onClick={() => handleLanguage('ru')}>Rus</button>
            
            <div className="short_info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto maxime natus, ducimus repellat recusandae eveniet accusantium veritatis! Et iusto repellendus, nisi voluptatibus id provident aspernatur pariatur voluptate consequatur omnis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto maxime natus, ducimus repellat recusandae eveniet accusantium veritatis! Et iusto repellendus, nisi voluptatibus id provident aspernatur pariatur voluptate consequatur omnis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos iusto maxime natus, ducimus repellat recusandae eveniet accusantium veritatis! Et iusto repellendus, nisi voluptatibus id provident aspernatur pariatur voluptate consequatur omnis.
            </div>

            <div className="personal_info_container">
                <h1 className="intro_header">За вашу улыбку ответственны</h1>
                
                <div className="intro">
                    Врачи со стажем от 8 лет, 91% из которых прошли стажировку в зарубежных клиниках:
                </div>
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
                                <p className="education">
                                    <span>{t('info.fields.education')}:</span> {p.education}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Info;