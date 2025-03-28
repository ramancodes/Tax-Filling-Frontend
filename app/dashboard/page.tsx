import { redirect } from 'next/navigation';

export default function Dashboard() {
  // Redirect to profile page
  redirect('/dashboard/profile');
}