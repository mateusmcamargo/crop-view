import LeafletMap from '@/components/leaflet/Index';

export default function map() {

    const talhoes = [
        {
            name: 'Talhão Sul',
            culture: 'Soja',
            area: '48 ha',
            risk: 'Baixo',
            color: 'var(--accent)',
        },
        {
            name: 'Talhão Norte',
            culture: 'Milho',
            area: '32 ha',
            risk: 'Moderado',
            color: 'var(--info)',
        },
        {
            name: 'Talhão Leste',
            culture: 'Algodão',
            area: '27 ha',
            risk: 'Alto',
            color: 'var(--warning)',
        },
        {
            name: 'Talhão Oeste',
            culture: 'Soja',
            area: '41 ha',
            risk: 'Crítico',
            color: 'var(--danger)',
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--background)',
            }}
        >
            {/* Header */}
            <header
                style={{
                    padding: '28px 32px 18px',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(14,13,11,0.85)',
                    backdropFilter: 'blur(10px)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 20,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '24px',
                    }}
                >
                    <div>
                        <div
                            style={{
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.12em',
                                color: 'var(--muted)',
                                marginBottom: '8px',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            Monitoramento Geoespacial
                        </div>

                        <h1
                            style={{
                                margin: 0,
                                fontSize: '32px',
                                lineHeight: 1,
                                color: 'var(--foreground)',
                                fontFamily: 'var(--font-display)',
                                letterSpacing: '-0.04em',
                            }}
                        >
                            Mapa de Talhões
                        </h1>
                    </div>

                    <button
                        style={{
                            height: '42px',
                            padding: '0 16px',
                            borderRadius: '10px',
                            border: '1px solid var(--border)',
                            background: 'var(--surface)',
                            color: 'var(--foreground)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '13px',
                        }}
                    >
                        Atualizar mapa
                    </button>
                </div>
            </header>

            {/* Content */}
            <div
                style={{
                    flex: 1,
                    padding: '24px 32px 32px',
                    display: 'grid',
                    gridTemplateColumns: '340px 1fr',
                    gap: '20px',
                }}
            >
                {/* Sidebar info */}
                <aside
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}
                >
                    {/* Fazenda */}
                    <section
                        style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '16px',
                            padding: '20px',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '16px',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em',
                                        color: 'var(--muted)',
                                        marginBottom: '6px',
                                    }}
                                >
                                    Propriedade
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: '20px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Fazenda Santa Cruz
                                </h2>
                            </div>

                            <div
                                style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: 'var(--accent)',
                                    boxShadow: '0 0 12px var(--accent)',
                                }}
                            />
                        </div>

                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '12px',
                            }}
                        >
                            <InfoCard
                                label='Talhões'
                                value='04'
                            />

                            <InfoCard
                                label='Área Total'
                                value='148 ha'
                            />

                            <InfoCard
                                label='Ocorrências'
                                value='12'
                            />

                            <InfoCard
                                label='Risco Médio'
                                value='Moderado'
                            />
                        </div>
                    </section>

                    {/* Talhões */}
                    <section
                        style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '16px',
                            padding: '20px',
                        }}
                    >
                        <div
                            style={{
                                marginBottom: '18px',
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '11px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    color: 'var(--muted)',
                                    marginBottom: '6px',
                                }}
                            >
                                Talhões Monitorados
                            </div>

                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: '18px',
                                    fontFamily: 'var(--font-display)',
                                }}
                            >
                                Áreas da Safra
                            </h3>
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                            }}
                        >
                            {talhoes.map((talhao) => (
                                <div
                                    key={talhao.name}
                                    style={{
                                        background: 'var(--surface-2)',
                                        border: '1px solid var(--border)',
                                        borderRadius: '12px',
                                        padding: '14px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '10px',
                                                height: '10px',
                                                borderRadius: '50%',
                                                background: talhao.color,
                                            }}
                                        />

                                        <div>
                                            <div
                                                style={{
                                                    color: 'var(--foreground)',
                                                    fontSize: '14px',
                                                    fontWeight: 600,
                                                    marginBottom: '2px',
                                                }}
                                            >
                                                {talhao.name}
                                            </div>

                                            <div
                                                style={{
                                                    color: 'var(--muted)',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                {talhao.culture} • {talhao.area}
                                            </div>
                                        </div>
                                    </div>

                                    <span
                                        style={{
                                            fontSize: '11px',
                                            padding: '5px 8px',
                                            borderRadius: '999px',
                                            background: 'var(--surface-3)',
                                            color: 'var(--foreground)',
                                            border: '1px solid var(--border)',
                                        }}
                                    >
                                        {talhao.risk}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>
                </aside>

                {/* Map */}
                <section
                    style={{
                        position: 'relative',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        minHeight: '780px',
                    }}
                >
                    {/* Overlay */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '18px',
                            right: '18px',
                            zIndex: 500,
                            background: 'rgba(22,20,16,0.92)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid var(--border)',
                            borderRadius: '14px',
                            padding: '14px 16px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                marginBottom: '6px',
                            }}
                        >
                            Status do Monitoramento
                        </div>

                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    background: 'var(--accent)',
                                    boxShadow: '0 0 10px var(--accent)',
                                }}
                            />

                            <span
                                style={{
                                    color: 'var(--foreground)',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                }}
                            >
                                4 áreas ativas
                            </span>
                        </div>
                    </div>

                    <LeafletMap />
                </section>
            </div>
        </div>
    );
}

function InfoCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div
            style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '14px',
            }}
        >
            <div
                style={{
                    fontSize: '11px',
                    color: 'var(--muted)',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                }}
            >
                {label}
            </div>

            <div
                style={{
                    color: 'var(--foreground)',
                    fontSize: '18px',
                    fontWeight: 700,
                    lineHeight: 1,
                }}
            >
                {value}
            </div>
        </div>
    );
}