export default function team() {

    const members = [
        {
            id: 'USR-01',
            name: 'Dr. André Lima',
            role: 'Agrônomo Responsável',
            status: 'Online',
            phone: '(43) 99999-1204',
            field: 'Fitossanidade',
            initials: 'AL',
            color: 'var(--accent)',
        },
        {
            id: 'USR-02',
            name: 'Carlos Mendes',
            role: 'Operador de Campo',
            status: 'Em campo',
            phone: '(43) 99999-4421',
            field: 'Pulverização',
            initials: 'CM',
            color: 'var(--info)',
        },
        {
            id: 'USR-03',
            name: 'Ana Paula',
            role: 'Analista Técnica',
            status: 'Online',
            phone: '(43) 99999-9188',
            field: 'Análise de Solo',
            initials: 'AP',
            color: 'var(--warning)',
        },
        {
            id: 'USR-04',
            name: 'João Ferreira',
            role: 'Supervisor Operacional',
            status: 'Offline',
            phone: '(43) 99999-3321',
            field: 'Operações',
            initials: 'JF',
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
                            Gestão de Pessoas
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
                            Equipe Técnica
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
                        + Novo membro
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
                        title='Equipe Ativa'
                        value='17'
                        color='var(--accent)'
                    />

                    <MetricCard
                        title='Em Campo'
                        value='08'
                        color='var(--info)'
                    />

                    <MetricCard
                        title='Operações Hoje'
                        value='14'
                        color='var(--warning)'
                    />

                    <MetricCard
                        title='Eficiência'
                        value='96%'
                        color='var(--accent)'
                    />
                </section>

                {/* Main content */}
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1.6fr 360px',
                        gap: '20px',
                    }}
                >
                    {/* Team table */}
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
                                alignItems: 'center',
                                justifyContent: 'space-between',
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
                                    Recursos Humanos
                                </div>

                                <h2
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Colaboradores
                                </h2>
                            </div>

                            <input
                                placeholder='Buscar membro...'
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
                                gridTemplateColumns: '100px 1.8fr 1.2fr 1fr 1fr 120px',
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
                            <div>Colaborador</div>
                            <div>Especialidade</div>
                            <div>Contato</div>
                            <div>Status</div>
                            <div></div>
                        </div>

                        {/* Rows */}
                        {members.map((member) => (
                            <div
                                key={member.id}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '100px 1.8fr 1.2fr 1fr 1fr 120px',
                                    padding: '18px 20px',
                                    borderBottom: '1px solid var(--border)',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        color: 'var(--muted)',
                                        fontSize: '13px',
                                        fontFamily: 'var(--font-mono)',
                                    }}
                                >
                                    {member.id}
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '42px',
                                            height: '42px',
                                            borderRadius: '50%',
                                            background: member.color,
                                            color: '#0E0D0B',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 700,
                                            fontSize: '13px',
                                        }}
                                    >
                                        {member.initials}
                                    </div>

                                    <div>
                                        <div
                                            style={{
                                                color: 'var(--foreground)',
                                                fontWeight: 600,
                                                fontSize: '14px',
                                                marginBottom: '4px',
                                            }}
                                        >
                                            {member.name}
                                        </div>

                                        <div
                                            style={{
                                                color: 'var(--muted)',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {member.role}
                                        </div>
                                    </div>
                                </div>

                                <div
                                    style={{
                                        color: 'var(--foreground)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {member.field}
                                </div>

                                <div
                                    style={{
                                        color: 'var(--muted)',
                                        fontSize: '13px',
                                    }}
                                >
                                    {member.phone}
                                </div>

                                <div>
                                    <StatusBadge
                                        label={member.status}
                                    />
                                </div>

                                <button
                                    style={{
                                        height: '36px',
                                        borderRadius: '10px',
                                        border: '1px solid var(--border)',
                                        background: 'var(--surface-2)',
                                        color: 'var(--foreground)',
                                        cursor: 'pointer',
                                        fontSize: '12px',
                                        fontWeight: 600,
                                    }}
                                >
                                    Perfil
                                </button>
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
                        {/* Team performance */}
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
                                    Indicadores
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Performance
                                </h3>
                            </div>

                            <PerformanceItem
                                label='Operações concluídas'
                                value='94%'
                                color='var(--accent)'
                            />

                            <PerformanceItem
                                label='Cobertura de campo'
                                value='87%'
                                color='var(--info)'
                            />

                            <PerformanceItem
                                label='Tempo médio de resposta'
                                value='18 min'
                                color='var(--warning)'
                            />
                        </section>

                        {/* Activity */}
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
                                    Atividade Recente
                                </div>

                                <h3
                                    style={{
                                        margin: 0,
                                        fontSize: '18px',
                                        fontFamily: 'var(--font-display)',
                                    }}
                                >
                                    Últimas ações
                                </h3>
                            </div>

                            <ActivityItem
                                user='Carlos Mendes'
                                action='Finalizou pulverização'
                            />

                            <ActivityItem
                                user='Ana Paula'
                                action='Enviou análise de solo'
                            />

                            <ActivityItem
                                user='Dr. André Lima'
                                action='Gerou novo relatório'
                            />
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
        Online: 'var(--accent)',
        'Em campo': 'var(--info)',
        Offline: 'var(--danger)',
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

function PerformanceItem({
    label,
    value,
    color,
}: {
    label: string;
    value: string;
    color: string;
}) {
    return (
        <div
            style={{
                marginBottom: '16px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                }}
            >
                <span
                    style={{
                        color: 'var(--muted)',
                        fontSize: '12px',
                    }}
                >
                    {label}
                </span>

                <span
                    style={{
                        color,
                        fontSize: '12px',
                        fontWeight: 700,
                    }}
                >
                    {value}
                </span>
            </div>

            <div
                style={{
                    height: '8px',
                    borderRadius: '999px',
                    background: 'var(--surface-3)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        width: value,
                        height: '100%',
                        background: color,
                        borderRadius: '999px',
                    }}
                />
            </div>
        </div>
    );
}

function ActivityItem({
    user,
    action,
}: {
    user: string;
    action: string;
}) {
    return (
        <div
            style={{
                display: 'flex',
                gap: '12px',
                padding: '12px 0',
                borderBottom: '1px solid var(--border)',
            }}
        >
            <div
                style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    marginTop: '6px',
                    flexShrink: 0,
                }}
            />

            <div>
                <div
                    style={{
                        color: 'var(--foreground)',
                        fontSize: '13px',
                        fontWeight: 600,
                        marginBottom: '4px',
                    }}
                >
                    {user}
                </div>

                <div
                    style={{
                        color: 'var(--muted)',
                        fontSize: '12px',
                    }}
                >
                    {action}
                </div>
            </div>
        </div>
    );
}