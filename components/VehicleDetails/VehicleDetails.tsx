import { Camper } from '@/types/camper';
import css from './VehicleDetails.module.css';
import Icon from '../common/Icon';

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  const formatValue = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1).replace('_', ' ');
  };

  return (
    <div className={css.container}>
      <section className={css.headerSection}>
        <h2 className={css.name}>{camper.name}</h2>
        <div className={css.meta}>
          <span className={css.rating}>
            <Icon id="rating-default" size={16} className={css.starIcon} />
            {camper.rating}({camper.totalReviews} Reviews)
          </span>
          <span className={css.location}>
            <Icon id="map" size={16} className={css.mapIcon} />
            {camper.location}
          </span>
        </div>
        <p className={css.price}>€{camper.price.toFixed(2)}</p>
        <p className={css.description}>{camper.description}</p>
      </section>

      <section className={css.detailsSection}>
        <h3 className={css.sectionTitle}>Vehicle details</h3>

        <div className={css.badges}>
          <span className={css.badge}>{formatValue(camper.transmission)}</span>
          <span className={css.badge}>AC</span>
          <span className={css.badge}>{formatValue(camper.engine)}</span>
          <span className={css.badge}>Kitchen</span>
          <span className={css.badge}>Radio</span>
          <span className={css.badge}>{formatValue(camper.form)}</span>
        </div>

        <table className={css.table}>
          <tbody className={css.tableBody}>
            <tr>
              <td>Form</td>
              <td>{formatValue(camper.form)}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td>{camper.length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td>{camper.width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td>{camper.height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td>{camper.tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td>{camper.consumption}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
