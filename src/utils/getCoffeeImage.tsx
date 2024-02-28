import CoffeeImages from "@/assets/CoffeeList";

function getCoffeeImage(imageAlias: string) {
  let image = undefined;
  if (imageAlias in CoffeeImages)
    image = CoffeeImages[imageAlias as keyof typeof CoffeeImages];

  return <img src={image} alt="" />;
}

export default getCoffeeImage;
