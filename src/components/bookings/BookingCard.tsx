import { Booking } from '@/types/booking';
import moment from 'moment';

export default function BookingCard({ booking }: { booking: Booking }) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-md p-4 text-gray-200 shadow-md">
      <h3 className="text-xl font-semibold text-gray-50 mb-1">{booking.hotelName}</h3>
      <p>Guest: {booking.guestName} ({booking.guestPhone})</p>
      <p>
        Dates: {moment(booking.checkIn).format('MMM D, YYYY')} →{' '}
        {moment(booking.checkOut).format('MMM D, YYYY')}
      </p>
      <p>Rooms: {booking.rooms} | People: {booking.people}</p>
      <p className="text-sm text-gray-500 mt-1">
        Booked on: {moment(booking.createdAt).format('MMMM D, YYYY')}
      </p>
    </div>
  );
}
