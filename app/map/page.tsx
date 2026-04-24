import LeafletMap from '@/components/leaflet/Index';
import Link from 'next/link';

export default function Map() {

    return (
        <main className='map'>
            <Link href='/'>Home</Link>
            <p>Mapa de Talhões</p>
            <LeafletMap/>
        </main>
    )
}