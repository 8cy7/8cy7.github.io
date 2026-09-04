import { Header } from '@/components/hero/Header';
import { Hero } from '@/components/hero/Hero';
import { Projects } from '@/components/projects/Projects';
import { Services } from '@/components/services/Services';
export default function Home() {
  return <><Header /><main id="main"><Hero /><Services /><Projects /></main></>;
}
