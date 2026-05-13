export default function relatories() {

    const reports = [
        {
            id: '#REL-4021',
            title: 'Análise de Pragas da Safra',
            category: 'Fitossanitário',
            author: 'Dr. André Lima',
            date: '13 Mai 2026',
            status: 'Finalizado',
            color: 'var(--accent)',
        },
        {
            id: '#REL-4018',
            title: 'Eficiência Operacional',
            category: 'Operações',
            author: 'Carlos Mendes',
            date: '11 Mai 2026',
            status: 'Em revisão',
            color: 'var(--warning)',
        },
        {
            id: '#REL-4011',
            title: 'Mapa de Infestação',
            category: 'Geoespacial',
            author: 'Ana Paula',
            date: '10 Mai 2026',
            status: 'Finalizado',
            color: 'var(--info)',
        },
        {
            id: '#REL-4004',
            title: 'Consumo de Insumos',
            category: 'Financeiro',
            author: 'João Ferreira',
            date: '08 Mai 2026',
            status: 'Pendente',
            color: 'var(--danger)',
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
                            Inteligência Agrícola
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
                            Relatórios
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
                        + Gerar relatório
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
                {/* Metrics */}
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '16px',
                    }}
                >
                    <MetricCard
                        title='Relatórios Gerados'
                        value='128'
                        color='var(--accent)'
                    />

                    <MetricCard
                        title='Pendentes'
                        value='06'
                        color='var(--warning)'
                    />

                    <MetricCard
                        title='Análises Críticas'
                        value='03'
                        color='var(--danger)'
                    />

                    <MetricCard
                        title='Precisão dos Dados'
                        value='98%'
                        color='var(--info)'
                    />
                </section>

                {/* Main content */}
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.5fr 360px',
                        gap: '20px',
                    }}
                >
                    {/* Reports list */}
                    <div
                        style={{
                            background: 'var(--surface)',
                            border: '1px solid var(--border)',
                            borderRadius: '18px',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Header */}
                        <div
                            style={{
                                padding: '20px',
                                borderBottom: '1px solid var(--border)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        color: 'var(--muted)',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Central Analítica
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Relatórios Recentes
                                </h2>
                            </div>

                            <input
                                placeholder='Buscar relatório...'
                                style={{
                                    width: '220px',
                                    height: '38px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--surface-2)',
                                    color: 'var(--foreground)',
                                    padding: '0 14px',
                                    outline: 'none',
                                    fontSize: '13px',
                                }}
                            />
                        </div>

                        {/* Table header */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '120px 1.8fr 1fr 1fr 140px 120px',
                                padding: '14px 20px',
                                borderBottom: '1px solid var(--border)',
                                fontSize: '11px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                                color: 'var(--muted)',
                                fontFamily: 'var(--font-mono)',
                            }}
                        >
                            <div>ID</div>
                            <div>Relatório</div>
                            <div>Categoria</div>
                            <div>Responsável</div>
                            <div>Status</div>
                            <div>Data</div>
                        </div>

                        {/* Rows */}
                        {reports.map((report) => (
                            <div
                                key={report.id}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '120px 1.8fr 1fr 1fr 140px 120px',
                                    padding: '18px 20px',
                                    borderBottom: '1px solid var(--border)',
                                    alignItems: 'center',
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
                                    {report.id}
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
                                            background: report.color,
                                            boxShadow: `0 0 10px ${report.color}`,
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
                                            {report.title}
                                        </div>

                                        <div
                                            style={{
                                                color: 'var(--muted)',
                                                fontSize: '12px',
                                            }}
                                        >
                                            Documento analítico da safra
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        color: 'var(--foreground)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {report.category}
                                </div>

                                <div
                                    style={{
                                        color: 'var(--foreground)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {report.author}
                                </div>

                                <div>
                                    <StatusBadge
                                        label={report.status}
                                    />
                                </div>

                                <div
                                    style={{
                                        color: 'var(--muted)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {report.date}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Side panel */}
                    <aside
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                        }}
                    >
                        {/* Insights */}
                        <section
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '18px',
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
                                        color: 'var(--muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Insights da Safra
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Indicadores
                                </h3>
                            </div>

                            <InsightCard
                                label='Redução de pragas'
                                value='-18%'
                                positive
                            />

                            <InsightCard
                                label='Eficiência operacional'
                                value='+12%'
                                positive
                            />

                            <InsightCard
                                label='Risco fitossanitário'
                                value='+4%'
                            />
                        </section>

                        {/* Exports */}
                        <section
                            style={{
                                background: 'var(--surface)',
                                border: '1px solid var(--border)',
                                borderRadius: '18px',
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
                                        color: 'var(--muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Exportação
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Downloads
                                </h3>
                            </div>

                            <ExportButton label='Exportar PDF' />
                            <ExportButton label='Exportar Excel' />
                            <ExportButton label='Compartilhar relatório' />
                        </section>
                    </aside>
                </section>
            </div>
        </div>
    );
}

function MetricCard({
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
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                        boxShadow: `0 0 10px ${color}`,
                    }}
                />
            </div>

            <div
                style={{
                    fontSize: '32px',
                    fontWeight: 800,
                    lineHeight: 1,
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-display)',
                }}
            >
                {value}
            </div>
        </div>
    );
}

function StatusBadge({
    label,
}: {
    label: string;
}) {

    const colors: Record<string, string> = {
        Finalizado: 'var(--accent)',
        'Em revisão': 'var(--warning)',
        Pendente: 'var(--danger)',
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

function InsightCard({
    label,
    value,
    positive,
}: {
    label: string;
    value: string;
    positive?: boolean;
}) {
    return (
        <div
            style={{
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '14px',
                marginBottom: '12px',
            }}
        >
            <div
                style={{
                    color: 'var(--muted)',
                    fontSize: '12px',
                    marginBottom: '6px',
                }}
            >
                {label}
            </div>

            <div
                style={{
                    color: positive
                        ? 'var(--accent)'
                        : 'var(--warning)',
                    fontWeight: 700,
                    fontSize: '22px',
                    lineHeight: 1,
                }}
            >
                {value}
            </div>
        </div>
    );
}

function ExportButton({
    label,
}: {
    label: string;
}) {
    return (
        <button
            style={{
                width: '100%',
                height: '42px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                background: 'var(--surface-2)',
                color: 'var(--foreground)',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '13px',
                marginBottom: '10px',
                textAlign: 'left',
                padding: '0 14px',
            }}
        >
            {label}
        </button>
    );
}