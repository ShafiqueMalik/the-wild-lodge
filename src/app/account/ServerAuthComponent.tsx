import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function ServerAuthComponent() {
  const session = await auth();
  if (!session) redirect('/login');
  return null;
}
