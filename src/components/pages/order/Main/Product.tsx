import PrimaryButton from "../../../reusable-ui/PrimaryButton";
import { formatPrice } from "../../../../utils/maths";
import type { MenuItem } from "../../../../types";

export default function Product({id ,title, imageSource, price}: MenuItem) {
  return (
    <div key={id} className="card">
      <img src={imageSource} alt={`Menu item ${id}`} />
      <div className="info-text">
        <h3>{title}</h3>
        <div className="description">
          <span className="price">{formatPrice(price)}</span>
          <PrimaryButton label="Ajouter" className="primary-button-menu" />
        </div>
      </div>
    </div>
  );
}
