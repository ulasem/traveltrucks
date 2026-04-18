'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import css from './Sidebar.module.css';
import Icon from '@/components/common/Icon';

export default function Sidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [form, setForm] = useState(searchParams.get('form') || '');
  const [engine, setEngine] = useState(searchParams.get('engine') || '');
  const [transmission, setTransmission] = useState(searchParams.get('transmission') || '');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set('location', location);
    if (form) params.set('form', form);
    if (engine) params.set('engine', engine);
    if (transmission) params.set('transmission', transmission);

    router.push(`/catalog?${params.toString()}`);
  };

  const handleClear = () => {
    setLocation('');
    setForm('');
    setEngine('');
    setTransmission('');
    router.push('/catalog');
  };

  return (
    <aside className={css.sidebar}>
      <div>
        <div className={css.section}>
          <label className={css.label}>Location</label>
          <div className={css.inputWrapper}>
            <input
              type="text"
              placeholder="Kyiv, Ukraine"
              value={location}
              onChange={e => setLocation(e.target.value)}
              className={css.input}
            />
            <Icon id="map" size={20} className={css.mapIcon} />
          </div>
        </div>

        <div className={css.wrapper}>
          <h2 className={css.mainTitle}>Filters</h2>
          <div className={css.filterGroup}>
            <h3 className={css.filterSubtitle}>Camper form</h3>
            <div className={css.radioList}>
              {[
                { id: 'alcove', label: 'Alcove' },
                { id: 'panel_van', label: 'Panel Van' },
                { id: 'integrated', label: 'Integrated' },
                { id: 'semi_integrated', label: 'Semi Integrated' },
              ].map(item => (
                <label key={item.id} className={css.radioLabel}>
                  <input
                    type="radio"
                    name="form"
                    checked={form === item.id}
                    onChange={() => setForm(item.id)}
                  />
                  <span className={css.customRadio}></span>
                  {item.label}
                </label>
              ))}
            </div>
          </div>

          <div className={css.filterGroup}>
            <h3 className={css.filterSubtitle}>Engine</h3>
            <div className={css.radioList}>
              {['Diesel', 'Petrol', 'Hybrid', 'Electric'].map(type => (
                <label key={type} className={css.radioLabel}>
                  <input
                    type="radio"
                    name="engine"
                    checked={engine === type.toLowerCase()}
                    onChange={() => setEngine(type.toLowerCase())}
                  />
                  <span className={css.customRadio}></span>
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div className={css.filterGroup}>
            <h3 className={css.filterSubtitle}>Transmission</h3>
            <div className={css.radioList}>
              {['Automatic', 'Manual'].map(type => (
                <label key={type} className={css.radioLabel}>
                  <input
                    type="radio"
                    name="transmission"
                    checked={transmission === type.toLowerCase()}
                    onChange={() => setTransmission(type.toLowerCase())}
                  />
                  <span className={css.customRadio}></span>
                  {type}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={css.actions}>
        <button onClick={handleSearch} className={css.searchBtn}>
          Search
        </button>
        <button onClick={handleClear} className={css.clearBtn}>
          <IoCloseOutline size={24} /> Clear filters
        </button>
      </div>
    </aside>
  );
}
