function Competences() {
    const List =['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'Docker'];

    return (
        <section>
            <h2>Compétences</h2>
            <ul>
                {List.map((c) => (
                    <li key={c}>{c}</li>
                ))}
            </ul>
        </section>
    )
}
export default Competences