'use client';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { postBookingRequest } from '@/lib/api/api';
import css from './BookingForm.module.css';

interface BookingFormProps {
  camperId: string;
}

interface FormData {
  name: string;
  email: string;
}

export default function BookingForm({ camperId }: BookingFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await postBookingRequest(camperId, data);
      toast.success('Booking request sent successfully!');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      toast.error(`${error}`);
    }
  };

  return (
    <div className={css.card}>
      <Toaster position="top-right" />
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name*"
          className={css.input}
        />

        <input
          {...register('email', { required: 'Email is required' })}
          type="email"
          placeholder="Email*"
          className={css.input}
        />

        <button type="submit" className={css.submitBtn}>
          Send
        </button>
      </form>
    </div>
  );
}
