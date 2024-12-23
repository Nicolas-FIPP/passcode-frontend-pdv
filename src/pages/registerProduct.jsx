import style from '../styles/registerProduct.module.css';
import Head from 'next/head';
import Image from 'next/image';
import Link from  'next/link'
import loginImg from '../pictures/login.png'; 
import voltar from '../pictures/voltar.png'
import { useState } from 'react';

export default function RegisterProduct() {

    const [codigo,setCodigo] = useState('');
    const [nome,setNome] = useState('');
    const [preco,setPreco] = useState(0);
    const [desconto,setDesconto] = useState(0);
    const [descontopor,setDescontopor] = useState(0);
    const [ncm,setNcm] = useState('');
    const [validade,setValidade] = useState('');
    const [estoque,setEstoque] = useState(0);
    const [maxEstoque,setMaxEstoque] = useState(0);
    const [minEstoque,setMinEstoque] = useState(0);

    const [dataCadastro, setDataCadastro]= useState('');
    const [dataAtualizado, setDataAtualizado]= useState('');





    const saveProduct = async (e) => {
        e.preventDefault();
    
        if (!codigo || !nome || !preco || !ncm || !estoque) {
            alert('Por favor, preencha todos os campos');
            return;
        }
    
        const productData = {
            codigo,
            nome,
            preco: parseFloat(preco),
            desconto: parseFloat(desconto),
            descontopor: parseFloat(descontopor),
            validade,
            estoque: parseInt(estoque, 10),
            maxEstoque: parseInt(maxEstoque, 10),
            minEstoque: parseInt(minEstoque, 10),
            ncm,
        };
    
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(productData),
            });
    
            if (response.ok)
                alert('Produto cadastrado com sucesso!');
            else 
                alert('Erro ao cadastrar produto.');
            
        } catch (error) {
            alert('Erro', error);
        }
    };
    


    return (
        <>
            <style jsx>
                {`
                    input[type=number]::-webkit-inner-spin-button {
                    appearance: none;
                }`}
            </style>

            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Limelight&display=swap" rel="stylesheet"/>



                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"/>
            </Head>
            <div className={style.body}>
                <div className={style.header}>
                    <h2 className={style.title_header}>PDV</h2>

                    <div className={style.login}>
                        <Image src={loginImg} className={style.image_header} alt="Imagem de login"/>
                        <Link href="login" className={style.login_button}><p>Sair</p></Link>
                    </div>
                
                </div>
                   
                <div className={style.test}>

                     <div className={style.screen_products}>
                        <Link href="/" className={style.button_voltar}><Image src={voltar} className={style.img_voltar} alt="" /></Link>
                        <h2 className={style.title}>Cadastro de produtos</h2>
                    </div>


                    <form className={style.cadastro_produtos}>

                        <div className={style.infoProducts}>

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Códio de barras</label>
                                <input type="text" onChange={(e) => setCodigo(e.target.value)} value={codigo} className={style.input_product} required/>
                            </div>
                            
                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Nome</label>
                                <input type="text" onChange={(e) => setNome(e.target.value)} value={nome} className={style.input_product} required/>
                            </div>

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Preço</label>
                                <input type="number" onChange={(e) => setPreco(e.target.value)} value={preco} className={style.input_product} required/>
                            </div>
                            
                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Desconto</label>
                                <input type="number" onChange={(e) => setDesconto(e.target.value)} value={desconto} className={style.input_product} required/>
                            </div>

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Desconto %</label>
                                <input type="number" onChange={(e) => setDescontopor(e.target.value)} value={descontopor} className={style.input_product} required/>
                            </div>                     
                        </div>


                        <div className={style.infoProducts}>

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Data de vencimento </label>
                                <input type="date" onChange={(e) => setValidade(e.target.value)} value={validade} className={style.input_product} required/>
                            </div>

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Estoque</label>
                                <input type="number" onChange={(e) => setEstoque(e.target.value)}  value={estoque} className={style.input_product} required/>
                            </div>
                            
                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Estoque máximo</label>
                                <input type="number" onChange={(e) => setMaxEstoque(e.target.value)} value={maxEstoque} className={style.input_product}/>
                            </div>


                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>Estoque mínimo</label>
                                <input type="number" onChange={(e) => setMinEstoque(e.target.value)} value={minEstoque} className={style.input_product}/>
                            </div>
                                                        

                            <div className={style.data_product}>
                                <label htmlFor="" className={style.label_product}>NCM</label>
                                <input type="text" onChange={(e) => setNcm(e.target.value)} value={ncm} className={style.input_product } required/>
                            </div>
                            
                        </div>

                        <div className={style.infoProducts}>

                            <div className={style.data_product}>
                                <p>Produto cadastrado em :</p>
                                <p className={style.input_product }>DATA</p>
                            </div>

                            <div className={style.data_product}>
                                <p>Última atualização do produto :</p>
                                <p className={style.input_product }>DATA</p>
                            </div>
                            
                        </div>
                        
                    </form>
                    <div className={style.save_product}>
                        <input type="button" value="Salvar" onClick={saveProduct} className={style.button_save}/>
                        <input type="button" value="Cancelar" className={style.button_cancel}/>
                        <input type="button" value="Excluir" className={style.button_cancel}/>
                    </div>
                </div> 

            </div>
            
        </>
       
    );
}
