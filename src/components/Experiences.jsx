function Experiences() {
    const list = [
        {poste: 'Stagiaire developpeur', lieu: 'ABC Solutions', annee: '2025'},
        {poste : 'Etudiante en emploi', lieu: 'XYZ Tech', annee: '2024'},
    ]
    return (
        <section>
            <h2>Expériences</h2>
            {list.map((exp) => (
                <div key={exp.poste}>
                    <h3>{exp.poste}</h3>
                    <p>{exp.lieu} -{exp.annee}</p>
                </div>
            ))}
        </section>
    )
}
export default Experiences