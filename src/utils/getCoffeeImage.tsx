import CoffeeImages from "@/assets/CoffeeList";
import { TCoffee } from "@/types/coffee";

function getCoffeeImage(coffee: TCoffee) {
  let image = undefined;
  if (coffee.imageAlias in CoffeeImages)
    image = CoffeeImages[coffee.imageAlias as keyof typeof CoffeeImages];

  return <img src={image} alt="" />;
}

export default getCoffeeImage;
