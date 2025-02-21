import { Grid } from '@radix-ui/themes'
import React from 'react'

const brands = [
    {
        name: "JBL",
        image : "/images/brands/JBL-logo.png"
    },
    {
        name: "Canon",
        image: "/images/brands/canon-Logo.png"
    },
    {
        name: "Beats Electronics",
        image: "/images/brands/Beats_Electronics_logo.png"
    },
    {
        name: "Casio",
        image: "/images/brands/Casio-Logo.png"
    },
    {
        name: "Sony",
        image: "/images/brands/Sony-logo.png"
    },
    {
        name: "Swatch",
        image: "/images/brands/Swatch-Logo.png"
    },
    {
        name: "Fossil",
        image: "/images/brands/fossil-logo.jpg"
    },
    {
        name: "Nioxin",
        image: "/images/brands/Nioxin-Logo.png"
    }
]


const BrandsGrid = () => {
  return (
    <Grid columns="4" gap="6" rows="repeat(2, 80px)" width="30%">
        {brands.map((brand) => (
            <img src={brand.image} alt={'Image of ' + brand.name} />
        ))}
    </Grid>

  )
}

export default BrandsGrid