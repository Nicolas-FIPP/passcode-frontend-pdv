import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/cadprod.module.css';

export default function CadProd() {

    const [codigo, setCodigo] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [estoque, setEstoque] = useState("");
    const [ncm, setNcm] = useState("");



    const save_prod = async () => {
        console.log(codigo);
        if (codigo && nome && preco && !isNaN(preco) && preco > 0 && estoque && !isNaN(estoque) && estoque >= 0 && ncm) {
            const produto = {
                codigodebarras: codigo,
                name: nome,
                valor: parseFloat(preco),
                quantity: parseInt(estoque),
                ncm: ncm,
            };
            
            

            try {
                const response = await fetch('http://localhost:8080/products', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(produto),
                });
                

                if (response.ok) {
                    const data = await response.json();
                    console.log('Produto salvo com sucesso!', data);
                } else {
                    console.error('Erro ao salvar produto!', response.status);
                }
            } catch (e) {
                console.log('Erro na requisição:', e);
            }
        } else {
            alert("Por favor, complete todos os campos obrigatórios com valores válidos.");
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>Cadastro de Produto</h1>

            <div>
                <input
                    type="text"
                    placeholder="Código de barras"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    className={styles.input}
                />
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Nome do Produto"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className={styles.input}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Preço"
                    value={preco}
                    onChange={(e) => setPreco(e.target.value)}
                    className={styles.input}
                />
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Estoque"
                    value={estoque}
                    onChange={(e) => setEstoque(e.target.value)}
                    className={styles.input}
                />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Código NCM"
                    value={ncm}
                    onChange={(e) => setNcm(e.target.value)}
                    className={styles.input}
                />
            </div>


            <button onClick={save_prod} className={styles.button}>Salvar Produto</button>
            <Link href="/">
                <button className={styles.back}>Voltar</button>
            </Link>
        </div>
    );
}
