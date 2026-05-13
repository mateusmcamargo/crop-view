'use client';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar,
} from 'recharts';

export default function DashboardPage() {

    const pestTrend = [
        { name: 'Seg', pragas: 12 },
        { name: 'Ter', pragas: 18 },
        { name: 'Qua', pragas: 10 },
        { name: 'Qui', pragas: 22 },
        { name: 'Sex', pragas: 16 },
        { name: 'Sáb', pragas: 8 },
        { name: 'Dom', pragas: 6 },
    ];

    const cropHealth = [
        { name: 'Saudável', value: 62 },
        { name: 'Atenção', value: 25 },
        { name: 'Crítico', value: 13 },
    ];

    const operations = [
        { name: 'Pulverização', value: 14 },
        { name: 'Monitoramento', value: 22 },
        { name: 'Análise', value: 9 },
        { name: 'Manutenção', value: 6 },
    ];

    const COLORS = ['#00FF9C', '#F5A623', '#EB5160', '#574AE2'];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'var(--background)',
                padding: '24px 32px 40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            {/* Header */}
            <header
                style={{
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
                            letterSpacing: '0.12em',
                            color: 'var(--muted)',
                            fontFamily: 'var(--font-mono)',
                            marginBottom: '6px',
                        }}
                    >
                        Visão Geral Agrícola
                    </div>

                    <h1
                        style={{
                            margin: 0,
                            fontSize: '32px',
                            fontFamily: 'var(--font-display)',
                            letterSpacing: '-0.04em',
                            color: 'var(--foreground)',
                        }}
                    >
                        Dashboard
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
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    Atualizar dados
                </button>
            </header>

            {/* KPIs */}
            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '16px',
                }}
            >
                <KpiCard title='Talhões ativos' value='04' color='var(--accent)' />
                <KpiCard title='Ocorrências' value='12' color='var(--danger)' />
                <KpiCard title='Operações' value='28' color='var(--info)' />
                <KpiCard title='Eficiência' value='94%' color='var(--warning)' />
            </section>

            {/* Charts */}
            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    gap: '20px',
                }}
            >
                {/* Line chart */}
                <div
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        padding: '18px',
                        height: '340px',
                    }}
                >
                    <div
                        style={{
                            marginBottom: '12px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }}
                        >
                            Monitoramento Semanal
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: '18px',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Evolução de Pragas
                        </h2>
                    </div>

                    <ResponsiveContainer width='100%' height='85%'>
                        <LineChart data={pestTrend}>
                            <CartesianGrid strokeDasharray='3 3' stroke='var(--border)' />
                            <XAxis dataKey='name' stroke='var(--muted)' />
                            <YAxis stroke='var(--muted)' />
                            <Tooltip />
                            <Line
                                type='monotone'
                                dataKey='pragas'
                                stroke='var(--accent)'
                                strokeWidth={3}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie chart */}
                <div
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        padding: '18px',
                        height: '340px',
                    }}
                >
                    <div
                        style={{
                            marginBottom: '12px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }}
                        >
                            Saúde da Cultura
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: '18px',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Status Geral
                        </h2>
                    </div>

                    <ResponsiveContainer width='100%' height='85%'>
                        <PieChart>
                            <Pie
                                data={cropHealth}
                                dataKey='value'
                                nameKey='name'
                                outerRadius={110}
                                label
                            >
                                {cropHealth.map((_, i) => (
                                    <Cell key={i} fill={COLORS[i]} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </section>

            {/* Bottom charts */}
            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '20px',
                }}
            >
                {/* Bar chart */}
                <div
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        padding: '18px',
                        height: '320px',
                    }}
                >
                    <div
                        style={{
                            marginBottom: '12px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }}
                        >
                            Operações
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: '18px',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Distribuição por Tipo
                        </h2>
                    </div>

                    <ResponsiveContainer width='100%' height='85%'>
                        <BarChart data={operations}>
                            <CartesianGrid strokeDasharray='3 3' stroke='var(--border)' />
                            <XAxis dataKey='name' stroke='var(--muted)' />
                            <YAxis stroke='var(--muted)' />
                            <Tooltip />
                            <Bar dataKey='value' fill='var(--info)' radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Activity feed */}
                <div
                    style={{
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: '18px',
                        padding: '18px',
                        height: '320px',
                        overflow: 'auto',
                    }}
                >
                    <div
                        style={{
                            marginBottom: '12px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '11px',
                                color: 'var(--muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.08em',
                            }}
                        >
                            Atividade em Tempo Real
                        </div>

                        <h2
                            style={{
                                margin: 0,
                                fontSize: '18px',
                                fontFamily: 'var(--font-display)',
                            }}
                        >
                            Últimos Eventos
                        </h2>
                    </div>

                    {[
                        { text: 'Foco de praga detectado no Talhão Norte', color: 'var(--danger)' },
                        { text: 'Pulverização concluída no Talhão Sul', color: 'var(--accent)' },
                        { text: 'Nova operação agendada', color: 'var(--warning)' },
                        { text: 'Análise de solo finalizada', color: 'var(--info)' },
                        { text: 'Drone em manutenção preventiva', color: 'var(--danger)' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            style={{
                                display: 'flex',
                                gap: '10px',
                                padding: '10px 0',
                                borderBottom: '1px solid var(--border)',
                            }}
                        >
                            <div
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    background: item.color,
                                    marginTop: '6px',
                                    flexShrink: 0,
                                }}
                            />
                            <div
                                style={{
                                    color: 'var(--foreground)',
                                    fontSize: '13px',
                                }}
                            >
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

function KpiCard({
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
                    color: 'var(--foreground)',
                    fontFamily: 'var(--font-display)',
                }}
            >
                {value}
            </div>
        </div>
    );
}