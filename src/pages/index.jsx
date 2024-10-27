import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/home.module.css';

export default function Home() {
  const [produtos, setProdutos] = useState([]);
  const [nomeProduto, setNomeProduto] = useState("");
  const [precoProduto, setPrecoProduto] = useState("");
  const [codigo, setCodigo] = useState("");
  const [total, setTotal] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([]);
  const [dataCod, setDataCod] = useState();


  // const save = () => {
  //   const codigo = document.getElementById("codigodebarras").value;
  //   const nome = document.getElementById("produto").value;
  //   const valor = document.getElementById("preco").value;

  //   const novoP = {
  //     codigodebarras: codigo,
  //     name: nome,
  //     valor: valor
  //   };
  //   if (codigo && nome && valor)
  //     addProdutos(novoP);
  //   else
  //     alert("Complete o campo de código de barras para realizar busca");
  // };


  const addProdutos = (product) => {
    const preco = parseFloat(product.valor);

    setProdutos((prevProdutos) => [
      ...prevProdutos,
      {
        nome: product.name,
        preco: preco,
        codigo: product.codigodebarras
      }
    ]);

    fecharModal();
    setCodigo("");
    setPrecoProduto("");
    setTotal((prevTotal) => prevTotal + preco);
  };







  const getprod = async (codigo) => {
    const isCodigoBarras = !isNaN(codigo) && codigo.length >= 8;

    if (isCodigoBarras) {
      await fetchProductByCod(codigo);
    } else if (codigo.trim().length > 0) {
      abrirModal();
      await fetchProductByName(codigo.trim());
    } else {
      alert("Por favor, insira um código de barras válido ou nome do produto.");
    }
  };




  const fetchProductByName = async (productName) => {
    try {
      const response = await fetch(`http://localhost:8080/products?name=${productName}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const result = await response.json();
        setData(Array.isArray(result) ? result : [result]);
      } else {
        const errorText = await response.text();
        console.error('Erro:', errorText);
        setData([]);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }
  };




  const fetchProductByCod = async (codigo) => {
    try {
      const response = await fetch(`http://localhost:8080/products/cod?codigodebarras=${codigo}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const result = await response.json();

        if (result && result.codigodebarras && result.name && result.valor) {
          console.log("Deu certo, encontrou o produto:", result);
          setCodigo(result.codigodebarras);
          setPrecoProduto(result.valor);
          setNomeProduto(result.name);
          addProdutos(result);
        } else {
          console.error('Erro: O resultado não possui os campos esperados');
        }
      } else {
        const errorText = await response.text();
        console.error('Erro:', errorText);
        setDataCod(null);
      }
    } catch (error) {
      console.error('Erro de requisição:', error);
    }
  };




  // useEffect(() => {
  //   if (nomeProduto) {
  //     fetchProductByName(nomeProduto);
  //   } else {
  //     setDataCod([]);
  //   }
  // }, [nomeProduto]);



  const abrirModal = () => {
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
  };

  return (

    <>
      <div className={styles.caixa}>

        <div className={styles.entrada}>
          <h1 className={styles.title}>Caixa Registradora</h1>




          <div className={styles.campos}>
            <label className={styles.label} htmlFor="codigo">CÓDIGO DE BARRAS</label>
            <input
              id="codigo"
              type="text"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              className={styles.input}
            />
          </div>



          <div className={styles.campos}>

            <label className={styles.label} htmlFor="Preco">VALOR UNITÁRIO</label>
            <input
              id='preco'
              type="number"
              value={precoProduto}
              onChange={(e) => setPrecoProduto(e.target.value)}
              className={styles.input}
            />
          </div>


          <div className={styles.botoes}>

            <input
              type="submit"
              value="Enviar"
              onClick={() => getprod(codigo)}
              className={styles.button}
            />

            <Link href="/cadprod">
              <button className={styles.button}>Cadastrar Produto</button>
            </Link>


          </div>
        </div>


        <div className={styles.ProdVal}>

          <div className={styles.produtosLista}>
            <h2 className={styles.subTitle}>Produtos:</h2>

            <table className={styles.produtosTable}>
              <thead>
                <tr>
                  <th>Código de Barras</th>
                  <th>Nome</th>
                  <th>Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto, index) => (
                  <tr key={index}>
                    <td>{produto.codigo}</td>
                    <td>{produto.nome}</td>
                    <td>R$ {produto.preco.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className={styles.total}>
            <h2>Total: R$ {total.toFixed(2)}</h2>
          </div>


        </div>

      </div>


      {isModalOpen && (
        <div className={styles.fundo_escuro}>
          <div className={styles.div_central}>
            <div className={styles.modal}>
              <h1>Busca de produtos</h1>
              <button onClick={fecharModal} className={styles.button}>Fechar</button>
              <ul>
                {Array.isArray(data) && data.length > 0 ? (
                  data.map((product, index) => (
                    <p className={styles.lista} key={index}>
                      <div
                        className={styles.prod}
                        onClick={() => addProdutos(product)}
                      >
                        {product.codigodebarras} - {product.name} - {product.valor.toFixed(2)}
                      </div>
                    </p>
                  ))
                ) : (
                  <></>
                )}
              </ul>
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
