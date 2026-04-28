import { redirect } from 'next/navigation';

export default function Page() {
  // Sofortiger 410-Gone-Status
  redirect('/410');
  return null;
}
