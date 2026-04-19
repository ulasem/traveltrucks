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
      <header className={css.headerSection}>
        <h2 className={css.name}>{camper.name}</h2>
        <div className={css.meta}>
          <span className={css.rating}>
            <Icon id="rating-default" size={16} className={css.starIcon} />
            {camper.rating} ({camper.totalReviews} Reviews)
          </span>
          <span className={css.location}>
            <Icon id="map" size={16} className={css.mapIcon} />
            {camper.location}
          </span>
        </div>
        <p className={css.price}>€{camper.price.toFixed(2)}</p>
        <p className={css.description}>{camper.description}</p>
      </header>

      <section className={css.detailsSection}>
        <h3 className={css.sectionTitle}>Vehicle details</h3>

        <div className={css.badges}>
          {[camper.transmission, 'AC', camper.engine, 'Kitchen', 'Radio', camper.form].map(
            (item, index) => (
              <span key={index} className={css.badge}>
                {formatValue(item)}
              </span>
            ),
          )}
        </div>

        <table className={css.table}>
          <tbody className={css.tableBody}>
            {[
              { label: 'Form', value: formatValue(camper.form) },
              { label: 'Length', value: camper.length },
              { label: 'Width', value: camper.width },
              { label: 'Height', value: camper.height },
              { label: 'Tank', value: camper.tank },
              { label: 'Consumption', value: camper.consumption },
            ].map((row, index) => (
              <tr key={index}>
                <td>{row.label}</td>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
