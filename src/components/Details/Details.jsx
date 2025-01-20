import React from 'react';
import Icon from '../Icon/Icon.jsx';
import css from './Details.module.css';

// Виділення компонента для бейджів
const BadgeBox = ({ iconId, text }) => (
  <div className={css.badge_box}>
    <Icon className={css.primary_icon} id={iconId} size="20px" />
    <p className={css.option}>{text}</p>
  </div>
);

const VehicleSpec = ({ title, value }) => (
  <div className={css.info_flex_box}>
    <h4 className={css.subtitle}>{title}</h4>
    <p className={css.text}>{value}</p>
  </div>
);

const Details = ({ camper }) => {
  const {
    AC, bathroom, kitchen, TV, radio, refrigerator, microwave, gas, water,
    engine, transmission, form, length, width, height, tank, consumption,
  } = camper;

  
  const formatSize = size => size.replace(/(\d+(\.\d+)?)([a-zA-Z]+)/, '$1 $3');

  return (
    <div className={css.padded_container}>
      <div className={css.flex_wrap_container}>
        {transmission && <BadgeBox iconId="gear_ic" text={transmission} />}
        <BadgeBox iconId="petrol_ic" text={engine} />
        {AC && <BadgeBox iconId="wind_ic" text="AC" />}
        {bathroom && <BadgeBox iconId="shower_ic" text="Bathroom" />}
        {kitchen && <BadgeBox iconId="cup_ic" text="Kitchen" />}
        {TV && <BadgeBox iconId="tv-ic" text="TV" />}
        {radio && <BadgeBox iconId="radio_ic" text="Radio" />}
        {refrigerator && <BadgeBox iconId="refrigerator_ic" text="Refrigerator" />}
        {microwave && <BadgeBox iconId="microwave_ic" text="Microwave" />}
        {gas && <BadgeBox iconId="gas_ic" text="Gas" />}
        {water && <BadgeBox iconId="water_ic" text="Water" />}
      </div>
      <h3 className={css.section_title}>Vehicle details</h3>
      <div className={css.info_column}>
        <VehicleSpec title="Form" value={form} />
        <VehicleSpec title="Length" value={formatSize(length)} />
        <VehicleSpec title="Width" value={formatSize(width)} />
        <VehicleSpec title="Height" value={formatSize(height)} />
        <VehicleSpec title="Tank" value={formatSize(tank)} />
        <VehicleSpec title="Consumption" value={consumption} />
      </div>
    </div>
  );
};

export default Details;
