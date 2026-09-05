import { Header } from '@/components/hero/Header';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Experience } from '@/components/experience/Experience';
import { Footer } from '@/components/footer/Footer';
import { Projects } from '@/components/projects/Projects';
import { Services } from '@/components/services/Services';
export default function Home() {
  return <><Header /><main id="main"><Hero /><About /><Services /><Projects /><Experience /></main><Footer /></>;
}
