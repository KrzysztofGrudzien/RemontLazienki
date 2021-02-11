import TemplateDescription from '../../components/Templates/TemplateDescription/TemplateDescription';
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';
import Slider from '../../components/Slider/Slider';

const PageAbout = () => {
    return (
        <>
            <TemplateDescription>
                <h2>
                    “Z dumą projektujemy i wykańczamy nowoczesne & stylowe
                    łazienki”
                </h2>
                <p className='multi-col'>
                    Nasza firma oferujemy usługi wykończeniowo-remontowe
                    łazienek. Idziemy z duchem czasu i wiemy, że od kilku lat
                    nastał trend na tworzenie łazienek o nietuzinkowym
                    wyglądzie, gdzie inwestor może stworzyć niesamowite i
                    efektowne wnętrze sam czy korzystając z usług projektantów.
                </p>
                <LinkButton>nasze usługi</LinkButton>
            </TemplateDescription>
            <Slider />
            <span id='page-id'>01. o nas</span>
        </>
    );
};

export default PageAbout;
