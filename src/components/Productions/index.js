import React from 'react'
import {
    ProductionsContainer,
    ProductionsHeading,
    ProductionsWrapper,
    ProductionsCard,
    ProductImg,
    ProductButton,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductPrice
} from './ProductionsElements'
const Productions = ({heading, data}) => {
    return (
        <ProductionsContainer>
            <ProductionsHeading>{heading}</ProductionsHeading>
            <ProductionsWrapper>
                {
                    data.map((product, index) => {
                        return(
                        <ProductionsCard key={index}>
                            <ProductImg src={product.img} alt={product.alt} />
                            <ProductInfo>
                                <ProductTitle>{product.name}</ProductTitle>
                                <ProductDesc>{product.desc}</ProductDesc>
                                <ProductPrice>{product.price}</ProductPrice>
                                <ProductButton>{product.button}</ProductButton>
                            </ProductInfo>
                            

                        </ProductionsCard>
                        )}
                    )}
            </ProductionsWrapper>
        </ProductionsContainer>
            

    )
}

export default Productions
