import React from 'react';
import contactStyles from './Contact.module.scss';
import TemplateHero from '../../components/Templates/TemplateHero/TemplateHero';
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';

const ContactPage = () => {
    return (
        <>
            <TemplateHero>
                <section className={contactStyles.contactHero}>
                    <h2>
                        “Jeśli jesteście Państwo zaintersowani naszymi usługami
                        wypełnijcie formularz kontaktowy”
                    </h2>
                </section>
                <div className={contactStyles.contactRandomImage}></div>
            </TemplateHero>
            <div className={contactStyles.contactFormContainer}>
                <form action='#' className={contactStyles.form}>
                    <div className={contactStyles.formInputWrapper}>
                        <input
                            type='text'
                            className={contactStyles.formInputName}
                            placeholder='Twoje imię'
                        />
                    </div>
                    <div className={contactStyles.formInputWrapper}>
                        <input
                            type='email'
                            className={contactStyles.formInputEmail}
                            placeholder='Twój adres e-mail'
                        />
                    </div>
                    <div className={contactStyles.formInputWrapper}>
                        <select className={contactStyles.formInputServiceType}>
                            <option value='Rodzaj usługi'>Rodzaj usługi</option>
                            <option value='opcja 1'>Opcja 1</option>
                            <option value='opcja 2'>Opcja 2</option>
                            <option value='opcja 3'>Opcja 3</option>
                            <option value='opcja 4'>Opcja 4</option>
                            <option value='opcja 5'>Opcja 5</option>
                        </select>
                    </div>
                    <div className={contactStyles.formInputWrapper}>
                        <input
                            type='text'
                            className={contactStyles.formInputCompany}
                            placeholder='Firma (opcjonalnie)'
                        />
                    </div>
                    <div className={contactStyles.formInputWrapper}>
                        <input
                            type='text'
                            className={contactStyles.formInputPhone}
                            placeholder='Twój telefon (opcjonalnie)'
                        />
                    </div>
                    <div className={contactStyles.formInputWrapper}>
                        <input
                            type='text'
                            className={contactStyles.formInputSubject}
                            placeholder='Temat (opcjonalnie)'
                        />
                    </div>
                    <div className={contactStyles.formInputWrapperTextArea}>
                        <textarea
                            cols='30'
                            rows='10'
                            placeholder='Treść wiadomości'
                            className={contactStyles.formTextArea}
                        />
                        <LinkButton to='/'>wyślij wiadomość</LinkButton>
                    </div>
                    <div className={contactStyles.formInfoWrapper}>
                        <div className={contactStyles.formInfoData}>
                            <p className={contactStyles.formInfoDataCompany}>
                                <strong>
                                    RemontLazienki.eu - Artur Grudzień
                                </strong>
                                <br />
                                Usługi remontowo-wykończeniowe łazienek
                                <br />
                                <br />
                                Telefon: <strong>519 811 460</strong>
                                <br />
                                E-mail: <strong>dekorilla@wp.pl</strong>
                                <br />
                                <br />
                                <span
                                    className={
                                        contactStyles.formInfoDataCompanyImportant
                                    }
                                >
                                    WE CAN SPEAK ENGLISH, SO CALL TO US
                                </span>
                            </p>
                        </div>
                        <div className={contactStyles.formInfoQuote}>
                            <div>
                                <strong>Pamiętaj</strong>
                            </div>
                            <q>
                                “Idziemy z duchem czasu i wiemy, że od kilku lat
                                nastał trend na tworzenie łazienek o
                                nietuzinkowym wyglądzie, gdzie inwestor może
                                stworzyć niesamowite i efektowne wnętrze sam czy
                                korzystając z usług projektantów.”{' '}
                            </q>
                        </div>
                    </div>
                </form>
            </div>
            <span id='page-id'>04. kontakt</span>
        </>
    );
};

export default ContactPage;
