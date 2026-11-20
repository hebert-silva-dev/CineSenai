// 1. Crie um array de strings com três ou quatro gêneros, por exemplo `['Ação', 'Drama', 'Comédia']`.
// 2. Mostre os gêneros em uma lista `<ul>`, usando `map` para gerar um `<li>` para cada gênero.
// 3. Use a própria string como `key` de cada `<li>`.
// 4. Agora repita um gênero no array (dois "Drama") e abra o console (F12).
const generos = [
    "Ação",
    "Comédia",
    "Ficção Científica",
    "Animação",
    "Drama"
];

export const Teste = () => {
    return(
        <ul>
            {generos.map((genero) => (
                <li key={genero}>
                    {genero}
                </li>
            ))}
        </ul>
    )
}