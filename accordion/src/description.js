import Base from 'base';

const Description = () => {
    
    const [question, setQuestion] = useState(Base)
    
    return (
        <section className='info'>
            <article className='tekst'>
                <h3>title</h3>
                <p>text</p>
            </article>
            <article className='tekst'>
                <h3>title</h3>
                <p>text</p>
            </article>
            <article className='tekst'>
                <h3>title</h3>
                <p>text</p>
            </article>
            <article className='tekst'>
                <h3>title</h3>
                <p>text</p>
            </article>
            <article className='tekst'>
                <h3>title</h3>
                <p>text</p>
            </article>

        </section>

    );
}

export default Description;


// section - powinien posiadac naglowek h1-h6. Nie uzywa sie do tworzenia ogolnego kontenera->do tego sluzy div. Powinno byc logiczne w schemacie dokumentu. Uzywa sie article