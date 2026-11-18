function CartaoDeVisita() {
    const nome = "Hebert";
    const cidade = "São Paulo";

    return(
        <div className="glass" style={{padding: "1rem" , marginBottom: "1rem"}}>
            <h2>{nome}</h2>
            <p>Cidade: {cidade}</p>
            <p>Quero muito aprender React.</p>
        </div>
    );
};

export default CartaoDeVisita;