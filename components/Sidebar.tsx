'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        section: 'Principal',
        items: [
            { href: '/',                label: 'Dashboard',         icon: GridIcon },
            { href: '/map',             label: 'Mapa de Talhões',   icon: MapIcon },
            { href: '/occurrences',     label: 'Ocorrências',       icon: AlertIcon },
            { href: '/operations',      label: 'Operações',         icon: FlaskIcon },
        ],
    },
    {
        section: 'Gestão',
        items: [
            { href: '/relatories',  label: 'Relatórios',    icon: FileIcon },
            { href: '/team',        label: 'Equipe',        icon: UsersIcon },
        ],
    },
];

export default function Sidebar() {
    const path = usePathname();

    return (
        <aside style={{
            width: '220px',
            minWidth: '220px',
            background: 'var(--surface)',
            borderRight: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            padding: '0',
            height: '100vh',
            position: 'sticky',
            top: 0,
        }}>
            {/* Logo */}
            <div style={{
                padding: '20px 20px 16px',
                borderBottom: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <div style={{
                    width: '32px', height: '32px',
                    background: 'var(--accent)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <LeafIcon />
                </div>
                <span style={{
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    color: 'var(--foreground)',
                    letterSpacing: '-0.03em',
                }}>CropView</span>
            </div>

            {/* Property selector */}
            <div style={{
                margin: '12px 12px 4px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '10px 12px',
                cursor: 'pointer',
            }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Propriedade</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--foreground)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    Faz. Santa Cruz
                    <ChevronIcon />
                </div>
            </div>

            {/* Nav */}
            <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
                {navItems.map(({ section, items }) => (
                    <div key={section} style={{ marginBottom: '8px' }}>
                        <div style={{
                            padding: '8px 20px 4px',
                            fontSize: '10px',
                            color: 'var(--muted-2)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            fontFamily: 'DM Mono, monospace',
                        }}>
                            {section}
                        </div>
                        {items.map(({ href, label, icon: Icon }) => {
                            const active = path === href;
                            return (
                                <Link key={href} href={href} style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '9px 20px',
                                    margin: '1px 8px',
                                    borderRadius: '6px',
                                    textDecoration: 'none',
                                    fontSize: '13.5px',
                                    fontWeight: active ? 600 : 400,
                                    color: active ? 'var(--accent)' : 'var(--muted)',
                                    background: active ? 'var(--accent-dim)' : 'transparent',
                                    transition: 'all 0.15s ease',
                                }}>
                                    <span style={{ opacity: active ? 1 : 0.6 }}>
                                        <Icon active={active} />
                                    </span>
                                    {label}
                                </Link>
                            );
                        })}
                    </div>
                ))}
            </nav>

            {/* User */}
            <div style={{
                padding: '12px 16px',
                borderTop: '1px solid var(--border)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <div style={{
                    width: '30px', height: '30px',
                    background: 'var(--info-dim)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 600,
                    color: '#574AE2',
                }}>AG</div>
                <div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--foreground)' }}>Dr. André Lima</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Agrônomo</div>
                </div>
            </div>
        </aside>
    );
}

// Icons
function LeafIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" fill="#0E0D0B" opacity="0.2"/>
            <path d="M12 2C6 8 6 14 12 22c6-8 6-14 0-20z" fill="#0E0D0B" stroke="#0E0D0B" strokeWidth="0.5"/>
        </svg>
    );
}
function GridIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
        </svg>
    );
}
function MapIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
            <line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>
        </svg>
    );
}
function AlertIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
    );
}
function FlaskIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 3h6M9 3v7l-6 11h18L15 10V3"/>
        </svg>
    );
}
function FileIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/>
        </svg>
    );
}
function UsersIcon({ active }: { active?: boolean }) {
    return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
        </svg>
    );
}
function ChevronIcon() {
    return (
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9"/>
        </svg>
    );
}