export const FichaDoFileme = () => {
    const titulo = "Miranha"
    const genero = "Araquiofobico"
    const duracao = 160;

    const horas = Math.floor(duracao / 60);
    const minutos = duracao % 60

    return(
        <section className="glass" style={{padding: "1rem" , marginBottom: "1rem"}}>
            <h1>{titulo}</h1>
            <p>Genero: {genero}</p> 
            <p>Duração: {horas}hs e {minutos}minutos</p>
        </section>
    );
};