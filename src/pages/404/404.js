import TemplateDescription from '../../components/Templates/TemplateDescription/TemplateDescription';
import LinkButton from '../../components/Buttons/LinkButton/LinkButton';

const Page404 = () => {
    return (
        <>
            <TemplateDescription>
                <h2>"🤔 hmm..., strona której szukasz nie istnieje !!!"</h2>
                <LinkButton>powrót</LinkButton>
            </TemplateDescription>
            <span id='page-id'>05. 404</span>
        </>
    );
};

export default Page404;
