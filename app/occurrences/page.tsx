export default function occurrences() {

    const occurrences = [
        {
            id: '#OC-1042',
            title: 'Foco de Lagarta-do-cartucho',
            talhao: 'Talhão Norte',
            severity: 'Alta',
            status: 'Em tratamento',
            date: '13 Mai 2026',
            color: 'var(--danger)',
        },
        {
            id: '#OC-1038',
            title: 'Presença de Ferrugem Asiática',
            talhao: 'Talhão Sul',
            severity: 'Moderada',
            status: 'Monitorando',
            date: '12 Mai 2026',
            color: 'var(--warning)',
        },
        {
            id: '#OC-1031',
            title: 'Infestação de Pulgões',
            talhao: 'Talhão Leste',
            severity: 'Crítica',
            status: 'Ação imediata',
            date: '11 Mai 2026',
            color: 'var(--danger)',
        },
        {
            id: '#OC-1024',
            title: 'Danos foliares',
            talhao: 'Talhão Oeste',
            severity: 'Baixa',
            status: 'Resolvido',
            date: '10 Mai 2026',
            color: 'var(--accent)',
        },
    ];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--background)',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header */}
            <header
                style={{
                    padding: '28px 32px 20px',
                    borderBottom: '1px solid var(--border)',
                    background: 'rgba(14,13,11,0.82)',
                    backdropFilter: 'blur(10px)',
                    position: 'sticky',
                    top: 0,
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
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
                            Monitoramento Fitossanitário
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
                            Ocorrências
                        </h1>
                    </div>

                    <button
                        style={{
                            height: '42px',
                            padding: '0 16px',
                            borderRadius: '10px',
                            border: 'none',
                            background: 'var(--accent)',
                            color: '#0E0D0B',
                            cursor: 'pointer',
                            fontWeight: 700,
                            fontSize: '13px',
                        }}
                    >
                        + Nova ocorrência
                    </button>
                </div>
            </header>

            {/* Content */}
            <div
                style={{
                    padding: '24px 32px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}
            >
                {/* Stats */}
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '16px',
                    }}
                >
                    <StatsCard
                        title='Ocorrências Ativas'
                        value='12'
                        color='var(--danger)'
                    />

                    <StatsCard
                        title='Talhões Afetados'
                        value='04'
                        color='var(--warning)'
                    />

                    <StatsCard
                        title='Tratamentos em Andamento'
                        value='07'
                        color='var(--info)'
                    />

                    <StatsCard
                        title='Resolvidas'
                        value='31'
                        color='var(--accent)'
                    />
                </section>

                {/* Filters */}
                <section
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '16px',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '16px',
                        padding: '16px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                        }}
                    >
                        <FilterButton label='Todas' active />
                        <FilterButton label='Críticas' />
                        <FilterButton label='Em tratamento' />
                        <FilterButton label='Resolvidas' />
                    </div>

                    <input
                        placeholder='Buscar ocorrência...'
                        style={{
                            width: '260px',
                            height: '40px',
                            borderRadius: '10px',
                            border: '1px solid var(--border)',
                            background: 'var(--surface-2)',
                            color: 'var(--foreground)',
                            padding: '0 14px',
                            outline: 'none',
                            fontSize: '13px',
                        }}
                    />
                </section>

                {/* Table */}
                <section
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        overflow: 'hidden',
                    }}
                >
                    {/* Table header */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '120px 1.8fr 1fr 120px 160px 120px',
                            padding: '16px 20px',
                            borderBottom: '1px solid var(--border)',
                            fontSize: '11px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                            color: 'var(--muted)',
                            fontFamily: 'var(--font-mono)',
                        }}
                    >
                        <div>ID</div>
                        <div>Ocorrência</div>
                        <div>Talhão</div>
                        <div>Gravidade</div>
                        <div>Status</div>
                        <div>Data</div>
                    </div>

                    {/* Rows */}
                    {occurrences.map((occurrence) => (
                        <div
                            key={occurrence.id}
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '120px 1.8fr 1fr 120px 160px 120px',
                                padding: '18px 20px',
                                borderBottom: '1px solid var(--border)',
                                alignItems: 'center',
                                transition: 'all 0.15s ease',
                                cursor: 'pointer',
                            }}
                        >
                            <div
                                style={{
                                    color: 'var(--muted)',
                                    fontSize: '13px',
                                    fontFamily: 'var(--font-mono)',
                                }}
                            >
                                {occurrence.id}
                            </div>

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
                                        background: occurrence.color,
                                        boxShadow: `0 0 10px ${occurrence.color}`,
                                    }}
                                />

                                <div>
                                    <div
                                        style={{
                                            color: 'var(--foreground)',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            marginBottom: '4px',
                                        }}
                                    >
                                        {occurrence.title}
                                    </div>

                                    <div
                                        style={{
                                            color: 'var(--muted)',
                                            fontSize: '12px',
                                        }}
                                    >
                                        Detectado por sensor de campo
                                    </div>
                                </div>
                            </div>

                            <div
                                style={{
                                    color: 'var(--foreground)',
                                    fontSize: '13px',
                                }}
                            >
                                {occurrence.talhao}
                            </div>

                            <div>
                                <SeverityBadge
                                    label={occurrence.severity}
                                />
                            </div>

                            <div>
                                <StatusBadge
                                    label={occurrence.status}
                                />
                            </div>

                            <div
                                style={{
                                    color: 'var(--muted)',
                                    fontSize: '13px',
                                }}
                            >
                                {occurrence.date}
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}

function StatsCard({
    title,
    value,
    color,
}: {
    title: string;
    value: string;
    color: string;
}) {
    return (
        <div
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
                    marginBottom: '18px',
                }}
            >
                <div
                    style={{
                        fontSize: '12px',
                        color: 'var(--muted)',
                    }}
                >
                    {title}
                </div>

                <div
                    style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 12px ${color}`,
                    }}
                />
            </div>

            <div
                style={{
                    color: 'var(--foreground)',
                    fontSize: '32px',
                    fontWeight: 800,
                    lineHeight: 1,
                    fontFamily: 'var(--font-display)',
                }}
            >
                {value}
            </div>
        </div>
    );
}

function FilterButton({
    label,
    active,
}: {
    label: string;
    active?: boolean;
}) {
    return (
        <button
            style={{
                height: '36px',
                padding: '0 14px',
                borderRadius: '10px',
                border: active
                    ? '1px solid transparent'
                    : '1px solid var(--border)',
                background: active
                    ? 'var(--accent-dim)'
                    : 'var(--surface-2)',
                color: active
                    ? 'var(--accent)'
                    : 'var(--muted)',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: 600,
            }}
        >
            {label}
        </button>
    );
}

function SeverityBadge({
    label,
}: {
    label: string;
}) {

    const map: Record<string, string> = {
        Baixa: 'var(--accent)',
        Moderada: 'var(--warning)',
        Alta: 'var(--danger)',
        Crítica: '#ff3b30',
    };

    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '6px 10px',
                borderRadius: '999px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: map[label],
                fontSize: '12px',
                fontWeight: 700,
            }}
        >
            {label}
        </span>
    );
}

function StatusBadge({
    label,
}: {
    label: string;
}) {

    const colors: Record<string, string> = {
        Resolvido: 'var(--accent)',
        Monitorando: 'var(--warning)',
        'Em tratamento': 'var(--info)',
        'Ação imediata': 'var(--danger)',
    };

    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 10px',
                borderRadius: '999px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--foreground)',
                fontSize: '12px',
                fontWeight: 600,
            }}
        >
            <span
                style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: colors[label],
                }}
            />

            {label}
        </span>
    );
}