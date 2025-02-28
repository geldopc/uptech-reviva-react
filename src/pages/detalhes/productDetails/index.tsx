import React,{useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { productsSelector } from "../../../selectors";
import { Items } from "../../home/data";
import {
	ProductDetailsDescription,
	ProductDetailsDescriptionName,
	ProductDetailsDescriptionText,
	ProductDetailsImage,
	ProductDetailsPrice,
	ProductDetailsSideInfos,
	ProductDetailsWrapper,
	Thumbnails,
	Sizes,
	Size,
	DetailRadio,
	AddToBagButton,
	CardInner,
	CardFront,
	CardFrontText,
	ShoppingCart
} from './detailsStyle'

function ProductDetails() {
	const [product, setProduct] = useState<Items>()
	const idProduct = useParams().id;
	console.log("idProduct",idProduct)
	const products = useRecoilValue(productsSelector);

	useEffect(() => {
		const result = products.find((p) => p.id === Number(idProduct))
		if (result) {
			setProduct(result)
		}
	}, [])
	
	return (
  <section id="productDetails">
			<ProductDetailsWrapper>
				<ProductDetailsImage>
					<img src={process.env.PUBLIC_URL + product?.imagens[0].url} alt="Foto do produto " width="564px " height="593px "/>
				</ProductDetailsImage>

				<ProductDetailsSideInfos>
					<div>
						<ProductDetailsDescription>
							<ProductDetailsDescriptionName>
								<p>{product?.nome}
								</p>
								<ProductDetailsPrice>{product?.preco}
								</ProductDetailsPrice>
								<ProductDetailsDescriptionText>{product?.descricao}</ProductDetailsDescriptionText>
							</ProductDetailsDescriptionName>
						</ProductDetailsDescription>

						<Thumbnails>
							<div>
								<img src={process.env.PUBLIC_URL + '/images/cropped.png'} alt="crooped preto " width="140px " height="109px "/>
							</div>
							<div>
								<img src={process.env.PUBLIC_URL + '/images/vestido_longo.png'} alt="Vestido longo azul estampado " width="140px " height="109px "/>
							</div>
							<div>
								<img src={process.env.PUBLIC_URL + '/images/listrada.png'} alt="blusa listrada " width="140px " height="109px "/>
							</div>
							<div>
								<img src={process.env.PUBLIC_URL + '/images/calca.png'} alt="calça preta " width="140px " height="109px "/>
							</div>
						</Thumbnails>
					</div>

					<div>
						<div>
								<Sizes>
									<DetailRadio type="radio" id="PP" name="sizes" />
									<Size htmlFor="PP">PP</Size>
									<DetailRadio type="radio" id="P" name="sizes"/>
									<Size htmlFor="P">P</Size>
									<DetailRadio type="radio" id="M" name="sizes"/>
									<Size htmlFor="M">M</Size>
									<DetailRadio type="radio" id="G" name="sizes"/>
									<Size htmlFor="G">G</Size>
									<DetailRadio type="radio" id="GG" name="sizes"/>
									<Size htmlFor="GG">GG</Size>
								</Sizes>
						</div>

						<AddToBagButton>
							<CardInner>
								<CardFront>
									<CardFrontText>ADICIONAR À SACOLA</CardFrontText>
									<ShoppingCart>
										<svg width="24 " height="28 " viewBox="0 0 24 28 " fill="none " xmlns="http://www.w3.org/2000/svg "><path d="M6 5.98944C6 2.68134 8.68393 0 12 0C15.3161 0 18 2.68134 18 5.98944V8.55634H21.4286C22.8482 8.55634 24 9.7061
										24 11.1232V22.2465C24 25.0808 21.6964 27.3803 18.8571 27.3803H5.14286C2.3025 27.3803 0 25.0808 0 22.2465V11.1232C0 9.7061 1.15125 8.55634 2.57143 8.55634H6V5.98944ZM8.57143 8.55634H15.4286V5.98944C15.4286 4.09902 13.8911
										2.5669 12 2.5669C10.1089 2.5669 8.57143 4.09902 8.57143 5.98944V8.55634ZM7.28571 13.6901C7.99821 13.6901 8.57143 13.1179 8.57143 12.4067C8.57143 11.6954 7.99821 11.1232 7.28571 11.1232C6.57321 11.1232 6 11.6954 6 12.4067C6
										13.1179 6.57321 13.6901 7.28571 13.6901ZM16.7143 11.1232C16.0018 11.1232 15.4286 11.6954 15.4286 12.4067C15.4286 13.1179 16.0018 13.6901 16.7143 13.6901C17.4268 13.6901 18 13.1179 18 12.4067C18 11.6954 17.4268 11.1232 16.7143
										11.1232Z " fill="white "/>
										</svg>
									</ShoppingCart>
								</CardFront>
							</CardInner>
						</AddToBagButton>
					</div>
				</ProductDetailsSideInfos>
			</ProductDetailsWrapper>
	</section>
	)
}

export default ProductDetails;