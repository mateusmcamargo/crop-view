export default function operations() {

    const operations = [
        {
            id: '#OP-2081',
            title: 'Aplicação de Fungicida',
            talhao: 'Talhão Sul',
            operator: 'Carlos Mendes',
            status: 'Em andamento',
            date: '13 Mai 2026',
            machine: 'Pulverizador JD-4730',
            color: 'var(--info)',
        },
        {
            id: '#OP-2078',
            title: 'Pulverização Inseticida',
            talhao: 'Talhão Norte',
            operator: 'João Ferreira',
            status: 'Concluída',
            date: '12 Mai 2026',
            machine: 'Case Patriot 350',
            color: 'var(--accent)',
        },
        {
            id: '#OP-2071',
            title: 'Análise de Solo',
            talhao: 'Talhão Oeste',
            operator: 'Ana Paula',
            status: 'Agendada',
            date: '15 Mai 2026',
            machine: 'Equipe Técnica',
            color: 'var(--warning)',
        },
        {
            id: '#OP-2065',
            title: 'Controle de Pragas',
            talhao: 'Talhão Leste',
            operator: 'Ricardo Alves',
            status: 'Pausada',
            date: '11 Mai 2026',
            machine: 'Drone DJI Agras',
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
                            Gestão Operacional
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
                            Operações Agrícolas
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
                        + Nova operação
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
                        title='Operações Ativas'
                        value='08'
                        color='var(--info)'
                    />

                    <MetricCard
                        title='Máquinas em Campo'
                        value='05'
                        color='var(--accent)'
                    />

                    <MetricCard
                        title='Equipe Operacional'
                        value='17'
                        color='var(--warning)'
                    />

                    <MetricCard
                        title='Eficiência Média'
                        value='94%'
                        color='var(--accent)'
                    />
                </section>

                {/* Operational panel */}
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.4fr 360px',
                        gap: '20px',
                    }}
                >
                    {/* Operations table */}
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
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '18px 20px',
                                borderBottom: '1px solid var(--border)',
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        fontSize: '11px',
                                        color: 'var(--muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Operações Recentes
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Atividades em Campo
                                </h2>
                            </div>

                            <button
                                style={{
                                    height: '36px',
                                    padding: '0 14px',
                                    borderRadius: '10px',
                                    border: '1px solid var(--border)',
                                    background: 'var(--surface-2)',
                                    color: 'var(--foreground)',
                                    cursor: 'pointer',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                }}
                            >
                                Exportar
                            </button>
                        </div>

                        {/* Table */}
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
                            <div>Operação</div>
                            <div>Talhão</div>
                            <div>Operador</div>
                            <div>Status</div>
                            <div>Data</div>
                        </div>

                        {operations.map((operation) => (
                            <div
                                key={operation.id}
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
                                    {operation.id}
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
                                            background: operation.color,
                                            boxShadow: `0 0 10px ${operation.color}`,
                                        }}
                                    />

                                    <div>
                                        <div
                                            style={{
                                                color: 'var(--foreground)',
                                                fontSize: '14px',
                                                fontWeight: 600,
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {operation.title}
                                        </div>

                                        <div
                                            style={{
                                                color: 'var(--muted)',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {operation.machine}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        color: 'var(--foreground)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {operation.talhao}
                                </div>

                                <div
                                    style={{
                                        color: 'var(--foreground)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {operation.operator}
                                </div>

                                <div>
                                    <OperationStatus
                                        label={operation.status}
                                    />
                                </div>

                                <div
                                    style={{
                                        color: 'var(--muted)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {operation.date}
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
                        {/* Fleet */}
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
                                    Frota Agrícola
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Máquinas Ativas
                                </h3>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                <MachineCard
                                    name='Pulverizador JD-4730'
                                    status='Operando'
                                    color='var(--accent)'
                                />

                                <MachineCard
                                    name='Drone DJI Agras'
                                    status='Manutenção'
                                    color='var(--danger)'
                                />

                                <MachineCard
                                    name='Case Patriot 350'
                                    status='Disponível'
                                    color='var(--info)'
                                />
                            </div>
                        </section>

                        {/* Team */}
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
                                    Equipe Técnica
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Operadores Online
                                </h3>
                            </div>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                }}
                            >
                                <OperatorCard
                                    initials='CM'
                                    name='Carlos Mendes'
                                    role='Pulverização'
                                />

                                <OperatorCard
                                    initials='JF'
                                    name='João Ferreira'
                                    role='Aplicação'
                                />

                                <OperatorCard
                                    initials='AP'
                                    name='Ana Paula'
                                    role='Análise Técnica'
                                />
                            </div>
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

function OperationStatus({
    label,
}: {
    label: string;
}) {

    const colors: Record<string, string> = {
        Concluída: 'var(--accent)',
        'Em andamento': 'var(--info)',
        Agendada: 'var(--warning)',
        Pausada: 'var(--danger)',
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

function MachineCard({
    name,
    status,
    color,
}: {
    name: string;
    status: string;
    color: string;
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
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px',
                }}
            >
                <div
                    style={{
                        color: 'var(--foreground)',
                        fontWeight: 600,
                        fontSize: '14px',
                    }}
                >
                    {name}
                </div>

                <div
                    style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: color,
                    }}
                />
            </div>

            <div
                style={{
                    color: 'var(--muted)',
                    fontSize: '12px',
                }}
            >
                {status}
            </div>
        </div>
    );
}

function OperatorCard({
    initials,
    name,
    role,
}: {
    initials: string;
    name: string;
    role: string;
}) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'var(--surface-2)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '12px',
            }}
        >
            <div
                style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'var(--info-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--info)',
                    fontWeight: 700,
                    fontSize: '12px',
                }}
            >
                {initials}
            </div>

            <div>
                <div
                    style={{
                        color: 'var(--foreground)',
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '2px',
                    }}
                >
                    {name}
                </div>

                <div
                    style={{
                        color: 'var(--muted)',
                        fontSize: '12px',
                    }}
                >
                    {role}
                </div>
            </div>
        </div>
    );
}